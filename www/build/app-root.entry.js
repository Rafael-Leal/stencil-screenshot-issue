import { r as registerInstance, h } from './chunk-8bad6bbf.js';

class AppRoot {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("ion-app", null, h("ion-router", { useHash: false }, h("ion-route", { url: "/", component: "app-home" }), h("ion-route", { url: "/profile/:name", component: "app-profile" })), h("ion-nav", null)));
    }
    static get style() { return ""; }
}

export { AppRoot as app_root };
