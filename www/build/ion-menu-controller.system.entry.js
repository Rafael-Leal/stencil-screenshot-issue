var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register(['./chunk-a61457cf.system.js'], function (exports, module) {
    'use strict';
    var registerInstance, getContext, Build;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getContext = module.e;
                Build = module.B;
            }],
        execute: function () {
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
            var BOX_SHADOW_WIDTH = 8;
            /**
             * Menu Overlay Type
             * The menu slides over the content. The content
             * itself, which is under the menu, does not move.
             */
            function menuOverlayAnimation(AnimationC, _, menu) {
                var closedX;
                var openedX;
                var width = menu.width + BOX_SHADOW_WIDTH;
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
                var menuAnimation = new AnimationC()
                    .addElement(menu.menuInnerEl)
                    .fromTo('translateX', closedX, openedX);
                var backdropAnimation = new AnimationC()
                    .addElement(menu.backdropEl)
                    .fromTo('opacity', 0.01, 0.32);
                return baseAnimation(AnimationC).then(function (animation) {
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
                var contentOpenedX;
                var menuClosedX;
                var width = menu.width;
                if (menu.isEndSide) {
                    contentOpenedX = -width + 'px';
                    menuClosedX = width + 'px';
                }
                else {
                    contentOpenedX = width + 'px';
                    menuClosedX = -width + 'px';
                }
                var menuAnimation = new AnimationC()
                    .addElement(menu.menuInnerEl)
                    .fromTo('translateX', menuClosedX, '0px');
                var contentAnimation = new AnimationC()
                    .addElement(menu.contentEl)
                    .fromTo('translateX', '0px', contentOpenedX);
                var backdropAnimation = new AnimationC()
                    .addElement(menu.backdropEl)
                    .fromTo('opacity', 0.01, 0.32);
                return baseAnimation(AnimationC).then(function (animation) {
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
                var openedX = (menu.width * (menu.isEndSide ? -1 : 1)) + 'px';
                var contentOpen = new AnimationC()
                    .addElement(menu.contentEl)
                    .fromTo('translateX', '0px', openedX);
                return baseAnimation(AnimationC).then(function (animation) {
                    return animation.add(contentOpen);
                });
            }
            var MenuController = /** @class */ (function () {
                function MenuController(hostRef) {
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
                MenuController.prototype.open = function (menu) {
                    return __awaiter(this, void 0, void 0, function () {
                        var menuEl;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.get(menu)];
                                case 1:
                                    menuEl = _a.sent();
                                    if (menuEl) {
                                        return [2 /*return*/, menuEl.open()];
                                    }
                                    return [2 /*return*/, false];
                            }
                        });
                    });
                };
                /**
                 * Close the menu. If a menu is specified, it will close that menu.
                 * If no menu is specified, then it will close any menu that is open.
                 * If it does not find any open menus, it will return `false`.
                 *
                 * @param menu The menuId or side of the menu to close.
                 */
                MenuController.prototype.close = function (menu) {
                    return __awaiter(this, void 0, void 0, function () {
                        var menuEl;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (menu !== undefined ? this.get(menu) : this.getOpen())];
                                case 1:
                                    menuEl = _a.sent();
                                    if (menuEl !== undefined) {
                                        return [2 /*return*/, menuEl.close()];
                                    }
                                    return [2 /*return*/, false];
                            }
                        });
                    });
                };
                /**
                 * Toggle the menu open or closed. If the menu is already open, it will try to
                 * close the menu, otherwise it will try to open it. Returns `false` if
                 * a menu is not found.
                 *
                 * @param menu The menuId or side of the menu to toggle.
                 */
                MenuController.prototype.toggle = function (menu) {
                    return __awaiter(this, void 0, void 0, function () {
                        var menuEl;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.get(menu)];
                                case 1:
                                    menuEl = _a.sent();
                                    if (menuEl) {
                                        return [2 /*return*/, menuEl.toggle()];
                                    }
                                    return [2 /*return*/, false];
                            }
                        });
                    });
                };
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
                MenuController.prototype.enable = function (enable, menu) {
                    return __awaiter(this, void 0, void 0, function () {
                        var menuEl;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.get(menu)];
                                case 1:
                                    menuEl = _a.sent();
                                    if (menuEl) {
                                        menuEl.disabled = !enable;
                                    }
                                    return [2 /*return*/, menuEl];
                            }
                        });
                    });
                };
                /**
                 * Enable or disable the ability to swipe open the menu.
                 *
                 * @param enable If `true`, the menu swipe gesture should be enabled.
                 * @param menu The menuId or side of the menu to enable or disable the swipe gesture on.
                 */
                MenuController.prototype.swipeGesture = function (enable, menu) {
                    return __awaiter(this, void 0, void 0, function () {
                        var menuEl;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.get(menu)];
                                case 1:
                                    menuEl = _a.sent();
                                    if (menuEl) {
                                        menuEl.swipeGesture = enable;
                                    }
                                    return [2 /*return*/, menuEl];
                            }
                        });
                    });
                };
                /**
                 * Get whether or not the menu is open. Returns `true` if the specified
                 * menu is open. If a menu is not specified, it will return `true` if
                 * any menu is currently open.
                 *
                 * @param menu The menuId or side of the menu that is being checked.
                 */
                MenuController.prototype.isOpen = function (menu) {
                    return __awaiter(this, void 0, void 0, function () {
                        var menuEl, menuEl;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(menu != null)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.get(menu)];
                                case 1:
                                    menuEl = _a.sent();
                                    return [2 /*return*/, (menuEl !== undefined && menuEl.isOpen())];
                                case 2: return [4 /*yield*/, this.getOpen()];
                                case 3:
                                    menuEl = _a.sent();
                                    return [2 /*return*/, menuEl !== undefined];
                            }
                        });
                    });
                };
                /**
                 * Get whether or not the menu is enabled. Returns `true` if the
                 * specified menu is enabled. Returns `false` if a menu is disabled
                 * or not found.
                 *
                 * @param menu The menuId or side of the menu that is being checked.
                 */
                MenuController.prototype.isEnabled = function (menu) {
                    return __awaiter(this, void 0, void 0, function () {
                        var menuEl;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.get(menu)];
                                case 1:
                                    menuEl = _a.sent();
                                    if (menuEl) {
                                        return [2 /*return*/, !menuEl.disabled];
                                    }
                                    return [2 /*return*/, false];
                            }
                        });
                    });
                };
                /**
                 * Get a menu instance. If a menu is not provided then it will return the first
                 * menu found. If the specified menu is `start` or `end`, then it will return the
                 * enabled menu on that side. Otherwise, it will try to find the menu using the menu's
                 * `id` property. If a menu is not found then it will return `null`.
                 *
                 * @param menu The menuId or side of the menu.
                 */
                MenuController.prototype.get = function (menu) {
                    return __awaiter(this, void 0, void 0, function () {
                        var menuRef, menuEl;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (Build.isDev) {
                                        if (menu === 'left') {
                                            console.error('menu.side=left is deprecated, use "start" instead');
                                            return [2 /*return*/, undefined];
                                        }
                                        if (menu === 'right') {
                                            console.error('menu.side=right is deprecated, use "end" instead');
                                            return [2 /*return*/, undefined];
                                        }
                                    }
                                    return [4 /*yield*/, this.waitUntilReady()];
                                case 1:
                                    _a.sent();
                                    if (menu === 'start' || menu === 'end') {
                                        menuRef = this.find(function (m) { return m.side === menu && !m.disabled; });
                                        if (menuRef) {
                                            return [2 /*return*/, menuRef];
                                        }
                                        // didn't find a menu side that is enabled
                                        // so try to get the first menu side found
                                        return [2 /*return*/, this.find(function (m) { return m.side === menu; })];
                                    }
                                    else if (menu != null) {
                                        // the menuId was not left or right
                                        // so try to get the menu by its "id"
                                        return [2 /*return*/, this.find(function (m) { return m.menuId === menu; })];
                                    }
                                    menuEl = this.find(function (m) { return !m.disabled; });
                                    if (menuEl) {
                                        return [2 /*return*/, menuEl];
                                    }
                                    // get the first menu in the array, if one exists
                                    return [2 /*return*/, this.menus.length > 0 ? this.menus[0].el : undefined];
                            }
                        });
                    });
                };
                /**
                 * Get the instance of the opened menu. Returns `null` if a menu is not found.
                 */
                MenuController.prototype.getOpen = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.waitUntilReady()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, this.getOpenSync()];
                            }
                        });
                    });
                };
                /**
                 * Get all menu instances.
                 */
                MenuController.prototype.getMenus = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.waitUntilReady()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, this.getMenusSync()];
                            }
                        });
                    });
                };
                /**
                 * Get whether or not a menu is animating. Returns `true` if any
                 * menu is currently animating.
                 */
                MenuController.prototype.isAnimating = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.waitUntilReady()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, this.isAnimatingSync()];
                            }
                        });
                    });
                };
                /**
                 * Registers a new animation that can be used with any `ion-menu` by
                 * passing the name of the animation in its `type` property.
                 *
                 * @param name The name of the animation to register.
                 * @param animation The animation function to register.
                 */
                MenuController.prototype.registerAnimation = function (name, animation) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.menuAnimations.set(name, animation);
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * @internal
                 */
                MenuController.prototype._getInstance = function () {
                    return Promise.resolve(this);
                };
                MenuController.prototype._register = function (menu) {
                    var menus = this.menus;
                    if (menus.indexOf(menu) < 0) {
                        if (!menu.disabled) {
                            this._setActiveMenu(menu);
                        }
                        menus.push(menu);
                    }
                };
                MenuController.prototype._unregister = function (menu) {
                    var index = this.menus.indexOf(menu);
                    if (index > -1) {
                        this.menus.splice(index, 1);
                    }
                };
                MenuController.prototype._setActiveMenu = function (menu) {
                    // if this menu should be enabled
                    // then find all the other menus on this same side
                    // and automatically disable other same side menus
                    var side = menu.side;
                    this.menus
                        .filter(function (m) { return m.side === side && m !== menu; })
                        .forEach(function (m) { return m.disabled = true; });
                };
                MenuController.prototype._setOpen = function (menu, shouldOpen, animated) {
                    return __awaiter(this, void 0, void 0, function () {
                        var openedMenu;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (this.isAnimatingSync()) {
                                        return [2 /*return*/, false];
                                    }
                                    if (!shouldOpen) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.getOpen()];
                                case 1:
                                    openedMenu = _a.sent();
                                    if (!(openedMenu && menu.el !== openedMenu)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, openedMenu.setOpen(false, false)];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/, menu._setOpen(shouldOpen, animated)];
                            }
                        });
                    });
                };
                MenuController.prototype._createAnimation = function (type, menuCmp) {
                    return __awaiter(this, void 0, void 0, function () {
                        var animationBuilder, animation;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    animationBuilder = this.menuAnimations.get(type);
                                    if (!animationBuilder) {
                                        throw new Error('animation not registered');
                                    }
                                    return [4 /*yield*/, module.import('./index-08437444.system.js')
                                            .then(function (mod) { return mod.create(animationBuilder, null, menuCmp); })];
                                case 1:
                                    animation = _a.sent();
                                    if (!this.config.getBoolean('animated', true)) {
                                        animation.duration(0);
                                    }
                                    return [2 /*return*/, animation];
                            }
                        });
                    });
                };
                MenuController.prototype.getOpenSync = function () {
                    return this.find(function (m) { return m._isOpen; });
                };
                MenuController.prototype.getMenusSync = function () {
                    return this.menus.map(function (menu) { return menu.el; });
                };
                MenuController.prototype.isAnimatingSync = function () {
                    return this.menus.some(function (menu) { return menu.isAnimating; });
                };
                MenuController.prototype.find = function (predicate) {
                    var instance = this.menus.find(predicate);
                    if (instance !== undefined) {
                        return instance.el;
                    }
                    return undefined;
                };
                MenuController.prototype.waitUntilReady = function () {
                    return Promise.all(Array.from(document.querySelectorAll('ion-menu'))
                        .map(function (menu) { return menu.componentOnReady(); }));
                };
                Object.defineProperty(MenuController, "style", {
                    get: function () { return ".menu-content {\n  -webkit-transform: translate3d(0,  0,  0);\n  transform: translate3d(0,  0,  0);\n}\n\n.menu-content-open {\n  cursor: pointer;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n\n.ios .menu-content-reveal {\n  -webkit-box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n[dir=rtl].ios .menu-content-reveal {\n  -webkit-box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n.md .menu-content-reveal {\n  -webkit-box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\n}\n\n.md .menu-content-push {\n  -webkit-box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\n  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return MenuController;
            }());
            exports('ion_menu_controller', MenuController);
        }
    };
});
