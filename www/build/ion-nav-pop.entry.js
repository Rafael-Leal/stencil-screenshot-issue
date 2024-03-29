import { r as registerInstance, f as getElement } from './chunk-8bad6bbf.js';

class NavPop {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    pop() {
        const nav = this.el.closest('ion-nav');
        if (nav) {
            nav.pop({ skipIfBusy: true });
        }
    }
    get el() { return getElement(this); }
}

export { NavPop as ion_nav_pop };
