System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var AppHome = /** @class */ (function () {
                function AppHome(hostRef) {
                    registerInstance(this, hostRef);
                }
                AppHome.prototype.render = function () {
                    return [
                        h("ion-header", null, h("ion-toolbar", { color: "primary" }, h("ion-title", null, "Home"))),
                        h("ion-content", { class: "ion-padding" }, h("p", null, "Welcome to the PWA Toolkit. You can use this starter to build entire apps with web components using Stencil and ionic/core! Check out the README for everything that comes in this starter out of the box and check out our docs on ", h("a", { href: "https://stenciljs.com" }, "stenciljs.com"), " to get started."), h("ion-button", { href: "/profile/ionic", expand: "block" }, "Profile page"))
                    ];
                };
                Object.defineProperty(AppHome, "style", {
                    get: function () { return ""; },
                    enumerable: true,
                    configurable: true
                });
                return AppHome;
            }());
            exports('app_home', AppHome);
        }
    };
});
