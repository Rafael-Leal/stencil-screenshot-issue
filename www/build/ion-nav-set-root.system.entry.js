System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getElement = module.f;
            }],
        execute: function () {
            var NavSetRoot = /** @class */ (function () {
                function NavSetRoot(hostRef) {
                    registerInstance(this, hostRef);
                }
                NavSetRoot.prototype.push = function () {
                    var nav = this.el.closest('ion-nav');
                    var toPush = this.component;
                    if (nav && toPush !== undefined) {
                        nav.setRoot(toPush, this.componentProps, { skipIfBusy: true });
                    }
                };
                Object.defineProperty(NavSetRoot.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                return NavSetRoot;
            }());
            exports('ion_nav_set_root', NavSetRoot);
        }
    };
});
