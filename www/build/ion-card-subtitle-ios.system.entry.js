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
            var CardSubtitle = /** @class */ (function () {
                function CardSubtitle(hostRef) {
                    registerInstance(this, hostRef);
                }
                CardSubtitle.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a)),
                        'role': 'heading',
                        'aria-level': '3'
                    };
                };
                CardSubtitle.prototype.__stencil_render = function () {
                    return h("slot", null);
                };
                CardSubtitle.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(CardSubtitle, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --color: Color of the card subtitle\n   */\n  display: block;\n  position: relative;\n  color: var(--color);\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-base);\n}\n\n:host {\n  --color: var(--ion-color-step-600, #666666);\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 4px;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return CardSubtitle;
            }());
            exports('ion_card_subtitle', CardSubtitle);
        }
    };
});
