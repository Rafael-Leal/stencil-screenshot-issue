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
            var Note = /** @class */ (function () {
                function Note(hostRef) {
                    registerInstance(this, hostRef);
                }
                Note.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a))
                    };
                };
                Note.prototype.__stencil_render = function () {
                    return h("slot", null);
                };
                Note.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Note, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --color: Color of the note\n   */\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-base);\n}\n\n:host {\n  --color: var(--ion-color-step-350, #a6a6a6);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Note;
            }());
            exports('ion_note', Note);
        }
    };
});
