import { r as registerInstance, e as getContext, B as Build } from './chunk-8bad6bbf.js';

/**
 * baseAnimation
 * Base class which is extended by the various types. Each
 * type will provide their own animations for open and close
 * and registers itself with Menu.
 */
function baseAnimation(AnimationC) {
    // https://material.io/guidelines/motion/movement.html#movement-movement-in-out-of-screen-bounds
    // https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves
    // "Apply the sharp curve to items temporarily leaving the screen that may return
    // from the same exit point. When they return, use the deceleration curve. On mobile,
    // this transition typically occurs over 300ms" -- MD Motion Guide
    return Promise.resolve(new AnimationC()
        .easing('cubic-bezier(0.0, 0.0, 0.2, 1)') // Deceleration curve (Entering the screen)
        .easingReverse('cubic-bezier(0.4, 0.0, 0.6, 1)') // Sharp curve (Temporarily leaving the screen)
        .duration(300));
}

const BOX_SHADOW_WIDTH = 8;
/**
 * Menu Overlay Type
 * The menu slides over the content. The content
 * itself, which is under the menu, does not move.
 */
function menuOverlayAnimation(AnimationC, _, menu) {
    let closedX;
    let openedX;
    const width = menu.width + BOX_SHADOW_WIDTH;
    if (menu.isEndSide) {
        // right side
        closedX = width + 'px';
        openedX = '0px';
    }
    else {
        // left side
        closedX = -width + 'px';
        openedX = '0px';
    }
    const menuAnimation = new AnimationC()
        .addElement(menu.menuInnerEl)
        .fromTo('translateX', closedX, openedX);
    const backdropAnimation = new AnimationC()
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.32);
    return baseAnimation(AnimationC).then(animation => {
        return animation.add(menuAnimation)
            .add(backdropAnimation);
    });
}

/**
 * Menu Push Type
 * The content slides over to reveal the menu underneath.
 * The menu itself also slides over to reveal its bad self.
 */
function menuPushAnimation(AnimationC, _, menu) {
    let contentOpenedX;
    let menuClosedX;
    const width = menu.width;
    if (menu.isEndSide) {
        contentOpenedX = -width + 'px';
        menuClosedX = width + 'px';
    }
    else {
        contentOpenedX = width + 'px';
        menuClosedX = -width + 'px';
    }
    const menuAnimation = new AnimationC()
        .addElement(menu.menuInnerEl)
        .fromTo('translateX', menuClosedX, '0px');
    const contentAnimation = new AnimationC()
        .addElement(menu.contentEl)
        .fromTo('translateX', '0px', contentOpenedX);
    const backdropAnimation = new AnimationC()
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.32);
    return baseAnimation(AnimationC).then(animation => {
        return animation.add(menuAnimation)
            .add(backdropAnimation)
            .add(contentAnimation);
    });
}

/**
 * Menu Reveal Type
 * The content slides over to reveal the menu underneath.
 * The menu itself, which is under the content, does not move.
 */
function menuRevealAnimation(AnimationC, _, menu) {
    const openedX = (menu.width * (menu.isEndSide ? -1 : 1)) + 'px';
    const contentOpen = new AnimationC()
        .addElement(menu.contentEl)
        .fromTo('translateX', '0px', openedX);
    return baseAnimation(AnimationC).then(animation => {
        return animation.add(contentOpen);
    });
}

class MenuController {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.menus = [];
        this.menuAnimations = new Map();
        this.registerAnimation('reveal', menuRevealAnimation);
        this.registerAnimation('push', menuPushAnimation);
        this.registerAnimation('overlay', menuOverlayAnimation);
        this.doc = getContext(this, "document");
        this.config = getContext(this, "config");
    }
    /**
     * Open the menu. If a menu is not provided then it will open the first
     * menu found. If the specified menu is `start` or `end`, then it will open
     * the enabled menu on that side. Otherwise, it will try to find the menu
     * using the menu's `id` property. If a menu is not found then it will
     * return `false`.
     *
     * @param menu The menuId or side of the menu to open.
     */
    async open(menu) {
        const menuEl = await this.get(menu);
        if (menuEl) {
            return menuEl.open();
        }
        return false;
    }
    /**
     * Close the menu. If a menu is specified, it will close that menu.
     * If no menu is specified, then it will close any menu that is open.
     * If it does not find any open menus, it will return `false`.
     *
     * @param menu The menuId or side of the menu to close.
     */
    async close(menu) {
        const menuEl = await (menu !== undefined ? this.get(menu) : this.getOpen());
        if (menuEl !== undefined) {
            return menuEl.close();
        }
        return false;
    }
    /**
     * Toggle the menu open or closed. If the menu is already open, it will try to
     * close the menu, otherwise it will try to open it. Returns `false` if
     * a menu is not found.
     *
     * @param menu The menuId or side of the menu to toggle.
     */
    async toggle(menu) {
        const menuEl = await this.get(menu);
        if (menuEl) {
            return menuEl.toggle();
        }
        return false;
    }
    /**
     * Enable or disable a menu. Disabling a menu will not allow gestures
     * for that menu or any calls to open it. This is useful when there are
     * multiple menus on the same side and only one of them should be allowed
     * to open. Enabling a menu will automatically disable all other menus
     * on that side.
     *
     * @param enable If `true`, the menu should be enabled.
     * @param menu The menuId or side of the menu to enable or disable.
     */
    async enable(enable, menu) {
        const menuEl = await this.get(menu);
        if (menuEl) {
            menuEl.disabled = !enable;
        }
        return menuEl;
    }
    /**
     * Enable or disable the ability to swipe open the menu.
     *
     * @param enable If `true`, the menu swipe gesture should be enabled.
     * @param menu The menuId or side of the menu to enable or disable the swipe gesture on.
     */
    async swipeGesture(enable, menu) {
        const menuEl = await this.get(menu);
        if (menuEl) {
            menuEl.swipeGesture = enable;
        }
        return menuEl;
    }
    /**
     * Get whether or not the menu is open. Returns `true` if the specified
     * menu is open. If a menu is not specified, it will return `true` if
     * any menu is currently open.
     *
     * @param menu The menuId or side of the menu that is being checked.
     */
    async isOpen(menu) {
        if (menu != null) {
            const menuEl = await this.get(menu);
            return (menuEl !== undefined && menuEl.isOpen());
        }
        else {
            const menuEl = await this.getOpen();
            return menuEl !== undefined;
        }
    }
    /**
     * Get whether or not the menu is enabled. Returns `true` if the
     * specified menu is enabled. Returns `false` if a menu is disabled
     * or not found.
     *
     * @param menu The menuId or side of the menu that is being checked.
     */
    async isEnabled(menu) {
        const menuEl = await this.get(menu);
        if (menuEl) {
            return !menuEl.disabled;
        }
        return false;
    }
    /**
     * Get a menu instance. If a menu is not provided then it will return the first
     * menu found. If the specified menu is `start` or `end`, then it will return the
     * enabled menu on that side. Otherwise, it will try to find the menu using the menu's
     * `id` property. If a menu is not found then it will return `null`.
     *
     * @param menu The menuId or side of the menu.
     */
    async get(menu) {
        if (Build.isDev) {
            if (menu === 'left') {
                console.error('menu.side=left is deprecated, use "start" instead');
                return undefined;
            }
            if (menu === 'right') {
                console.error('menu.side=right is deprecated, use "end" instead');
                return undefined;
            }
        }
        await this.waitUntilReady();
        if (menu === 'start' || menu === 'end') {
            // there could be more than one menu on the same side
            // so first try to get the enabled one
            const menuRef = this.find(m => m.side === menu && !m.disabled);
            if (menuRef) {
                return menuRef;
            }
            // didn't find a menu side that is enabled
            // so try to get the first menu side found
            return this.find(m => m.side === menu);
        }
        else if (menu != null) {
            // the menuId was not left or right
            // so try to get the menu by its "id"
            return this.find(m => m.menuId === menu);
        }
        // return the first enabled menu
        const menuEl = this.find(m => !m.disabled);
        if (menuEl) {
            return menuEl;
        }
        // get the first menu in the array, if one exists
        return this.menus.length > 0 ? this.menus[0].el : undefined;
    }
    /**
     * Get the instance of the opened menu. Returns `null` if a menu is not found.
     */
    async getOpen() {
        await this.waitUntilReady();
        return this.getOpenSync();
    }
    /**
     * Get all menu instances.
     */
    async getMenus() {
        await this.waitUntilReady();
        return this.getMenusSync();
    }
    /**
     * Get whether or not a menu is animating. Returns `true` if any
     * menu is currently animating.
     */
    async isAnimating() {
        await this.waitUntilReady();
        return this.isAnimatingSync();
    }
    /**
     * Registers a new animation that can be used with any `ion-menu` by
     * passing the name of the animation in its `type` property.
     *
     * @param name The name of the animation to register.
     * @param animation The animation function to register.
     */
    async registerAnimation(name, animation) {
        this.menuAnimations.set(name, animation);
    }
    /**
     * @internal
     */
    _getInstance() {
        return Promise.resolve(this);
    }
    _register(menu) {
        const menus = this.menus;
        if (menus.indexOf(menu) < 0) {
            if (!menu.disabled) {
                this._setActiveMenu(menu);
            }
            menus.push(menu);
        }
    }
    _unregister(menu) {
        const index = this.menus.indexOf(menu);
        if (index > -1) {
            this.menus.splice(index, 1);
        }
    }
    _setActiveMenu(menu) {
        // if this menu should be enabled
        // then find all the other menus on this same side
        // and automatically disable other same side menus
        const side = menu.side;
        this.menus
            .filter(m => m.side === side && m !== menu)
            .forEach(m => m.disabled = true);
    }
    async _setOpen(menu, shouldOpen, animated) {
        if (this.isAnimatingSync()) {
            return false;
        }
        if (shouldOpen) {
            const openedMenu = await this.getOpen();
            if (openedMenu && menu.el !== openedMenu) {
                await openedMenu.setOpen(false, false);
            }
        }
        return menu._setOpen(shouldOpen, animated);
    }
    async _createAnimation(type, menuCmp) {
        const animationBuilder = this.menuAnimations.get(type);
        if (!animationBuilder) {
            throw new Error('animation not registered');
        }
        const animation = await __sc_import_app('./index-d072b193.js')
            .then(mod => mod.create(animationBuilder, null, menuCmp));
        if (!this.config.getBoolean('animated', true)) {
            animation.duration(0);
        }
        return animation;
    }
    getOpenSync() {
        return this.find(m => m._isOpen);
    }
    getMenusSync() {
        return this.menus.map(menu => menu.el);
    }
    isAnimatingSync() {
        return this.menus.some(menu => menu.isAnimating);
    }
    find(predicate) {
        const instance = this.menus.find(predicate);
        if (instance !== undefined) {
            return instance.el;
        }
        return undefined;
    }
    waitUntilReady() {
        return Promise.all(Array.from(document.querySelectorAll('ion-menu'))
            .map(menu => menu.componentOnReady()));
    }
    static get style() { return ".menu-content {\n  -webkit-transform: translate3d(0,  0,  0);\n  transform: translate3d(0,  0,  0);\n}\n\n.menu-content-open {\n  cursor: pointer;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n\n.ios .menu-content-reveal {\n  -webkit-box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n[dir=rtl].ios .menu-content-reveal {\n  -webkit-box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n.md .menu-content-reveal {\n  -webkit-box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\n}\n\n.md .menu-content-push {\n  -webkit-box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\n}"; }
}

export { MenuController as ion_menu_controller };
