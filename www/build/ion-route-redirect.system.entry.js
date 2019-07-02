System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
            }],
        execute: function () {
            var RouteRedirect = /** @class */ (function () {
                function RouteRedirect(hostRef) {
                    registerInstance(this, hostRef);
                    this.ionRouteRedirectChanged = createEvent(this, "ionRouteRedirectChanged", 7);
                }
                RouteRedirect.prototype.propDidChange = function () {
                    this.ionRouteRedirectChanged.emit();
                };
                RouteRedirect.prototype.componentDidLoad = function () {
                    this.ionRouteRedirectChanged.emit();
                };
                RouteRedirect.prototype.componentDidUnload = function () {
                    this.ionRouteRedirectChanged.emit();
                };
                Object.defineProperty(RouteRedirect, "watchers", {
                    get: function () {
                        return {
                            "from": ["propDidChange"],
                            "to": ["propDidChange"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return RouteRedirect;
            }());
            exports('ion_route_redirect', RouteRedirect);
        }
    };
});
