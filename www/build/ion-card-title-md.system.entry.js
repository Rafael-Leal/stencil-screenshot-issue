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
            var CardTitle = /** @class */ (function () {
                function CardTitle(hostRef) {
                    registerInstance(this, hostRef);
                }
                CardTitle.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a)),
                        'role': 'heading',
                        'aria-level': '2'
                    };
                };
                CardTitle.prototype.__stencil_render = function () {
                    return h("slot", null);
                };
                CardTitle.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(CardTitle, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --color: Color of the card title\n   */\n  display: block;\n  position: relative;\n  color: var(--color);\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-base);\n}\n\n:host {\n  --color: var(--ion-color-step-850, #262626);\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1.2;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return CardTitle;
            }());
            exports('ion_card_title', CardTitle);
        }
    };
});
