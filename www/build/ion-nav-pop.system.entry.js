System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getElement = module.f;
            }],
        execute: function () {
            var NavPop = /** @class */ (function () {
                function NavPop(hostRef) {
                    registerInstance(this, hostRef);
                }
                NavPop.prototype.pop = function () {
                    var nav = this.el.closest('ion-nav');
                    if (nav) {
                        nav.pop({ skipIfBusy: true });
                    }
                };
                Object.defineProperty(NavPop.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                return NavPop;
            }());
            exports('ion_nav_pop', NavPop);
        }
    };
});
