System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.c;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            var Avatar = /** @class */ (function () {
                function Avatar(hostRef) {
                    registerInstance(this, hostRef);
                }
                Avatar.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a)
                    };
                };
                Avatar.prototype.__stencil_render = function () {
                    return h("slot", null);
                };
                Avatar.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Avatar, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --border-radius: Border radius of the avatar and inner image\n   */\n  border-radius: var(--border-radius);\n  display: block;\n}\n\n::slotted(ion-img),\n::slotted(img) {\n  border-radius: var(--border-radius);\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  overflow: hidden;\n}\n\n:host {\n  --border-radius: 50%;\n  width: 64px;\n  height: 64px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Avatar;
            }());
            exports('ion_avatar', Avatar);
        }
    };
});
