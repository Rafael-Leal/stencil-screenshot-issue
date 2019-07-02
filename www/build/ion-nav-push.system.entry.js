System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getElement = module.f;
            }],
        execute: function () {
            var NavPush = /** @class */ (function () {
                function NavPush(hostRef) {
                    registerInstance(this, hostRef);
                }
                NavPush.prototype.push = function () {
                    var nav = this.el.closest('ion-nav');
                    var toPush = this.component;
                    if (nav && toPush !== undefined) {
                        nav.push(toPush, this.componentProps, { skipIfBusy: true });
                    }
                };
                Object.defineProperty(NavPush.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                return NavPush;
            }());
            exports('ion_nav_push', NavPush);
        }
    };
});
