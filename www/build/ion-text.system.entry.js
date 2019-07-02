System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, h, Host, createColorClasses;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.c;
                h = module.h;
                Host = module.H;
            }, function (module) {
                createColorClasses = module.c;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Text = /** @class */ (function () {
                function Text(hostRef) {
                    registerInstance(this, hostRef);
                }
                Text.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a))
                    };
                };
                Text.prototype.__stencil_render = function () {
                    return h("slot", null);
                };
                Text.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Text, "style", {
                    get: function () { return ":host(.ion-color) {\n  color: var(--ion-color-base);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Text;
            }());
            exports('ion_text', Text);
        }
    };
});
