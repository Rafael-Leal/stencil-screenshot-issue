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
            var Thumbnail = /** @class */ (function () {
                function Thumbnail(hostRef) {
                    registerInstance(this, hostRef);
                }
                Thumbnail.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a)
                    };
                };
                Thumbnail.prototype.__stencil_render = function () {
                    return h("slot", null);
                };
                Thumbnail.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Thumbnail, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --border-radius: Border radius of the thumbnail\n   * \@prop --size: Size of the thumbnail\n   */\n  --size: 48px;\n  --border-radius: 0;\n  border-radius: var(--border-radius);\n  display: block;\n  width: var(--size);\n  height: var(--size);\n}\n\n::slotted(ion-img),\n::slotted(img) {\n  border-radius: var(--border-radius);\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  overflow: hidden;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Thumbnail;
            }());
            exports('ion_thumbnail', Thumbnail);
        }
    };
});
