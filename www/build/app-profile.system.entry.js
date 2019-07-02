System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            function sayHello() {
                return Math.random() < 0.5 ? 'Hello' : 'Hola';
            }
            var AppProfile = /** @class */ (function () {
                function AppProfile(hostRef) {
                    registerInstance(this, hostRef);
                    this.state = false;
                }
                AppProfile.prototype.formattedName = function () {
                    if (this.name) {
                        return this.name.substr(0, 1).toUpperCase() + this.name.substr(1).toLowerCase();
                    }
                    return '';
                };
                AppProfile.prototype.render = function () {
                    var _this = this;
                    return [
                        h("ion-header", null, h("ion-toolbar", { color: "primary" }, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Profile: ", this.name))),
                        h("ion-content", { class: "ion-padding" }, h("p", null, sayHello(), "! My name is ", this.formattedName(), ". My name was passed in through a route param!"), h("ion-item", null, h("ion-label", null, "Setting (", this.state.toString(), ")"), h("ion-toggle", { checked: this.state, onIonChange: function (ev) { return (_this.state = ev.detail.checked); } })))
                    ];
                };
                Object.defineProperty(AppProfile, "style", {
                    get: function () { return ""; },
                    enumerable: true,
                    configurable: true
                });
                return AppProfile;
            }());
            exports('app_profile', AppProfile);
        }
    };
});
