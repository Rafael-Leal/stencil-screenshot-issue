System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var AppRoot = /** @class */ (function () {
                function AppRoot(hostRef) {
                    registerInstance(this, hostRef);
                }
                AppRoot.prototype.render = function () {
                    return (h("ion-app", null, h("ion-router", { useHash: false }, h("ion-route", { url: "/", component: "app-home" }), h("ion-route", { url: "/profile/:name", component: "app-profile" })), h("ion-nav", null)));
                };
                Object.defineProperty(AppRoot, "style", {
                    get: function () { return ""; },
                    enumerable: true,
                    configurable: true
                });
                return AppRoot;
            }());
            exports('app_root', AppRoot);
        }
    };
});
