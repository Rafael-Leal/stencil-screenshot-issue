import { r as registerInstance, d as createEvent } from './chunk-8bad6bbf.js';

class RouteRedirect {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ionRouteRedirectChanged = createEvent(this, "ionRouteRedirectChanged", 7);
    }
    propDidChange() {
        this.ionRouteRedirectChanged.emit();
    }
    componentDidLoad() {
        this.ionRouteRedirectChanged.emit();
    }
    componentDidUnload() {
        this.ionRouteRedirectChanged.emit();
    }
    static get watchers() { return {
        "from": ["propDidChange"],
        "to": ["propDidChange"]
    }; }
}

export { RouteRedirect as ion_route_redirect };
