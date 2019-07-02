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
            var CardHeader = /** @class */ (function () {
                function CardHeader(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * If `true`, the card header will be translucent.
                     */
                    this.translucent = false;
                }
                CardHeader.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: Object.assign({}, createColorClasses(this.color), (_a = { 'card-header-translucent': this.translucent }, _a["" + mode] = true, _a))
                    };
                };
                CardHeader.prototype.__stencil_render = function () {
                    return h("slot", null);
                };
                CardHeader.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(CardHeader, "style", {
                    get: function () { return ":host {\n  display: block;\n  position: relative;\n  background: var(--background);\n  color: var(--color);\n}\n\n:host(.ion-color) {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n:host(.ion-color) ::slotted(ion-card-title),\n:host(.ion-color) ::slotted(ion-card-subtitle) {\n  color: currentColor;\n}\n\n:host {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 16px;\n    padding-inline-start: 16px;\n    -webkit-padding-end: 16px;\n    padding-inline-end: 16px;\n  }\n}\n\n::slotted(ion-card-title:not(:first-child)),\n::slotted(ion-card-subtitle:not(:first-child)) {\n  margin-top: 8px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return CardHeader;
            }());
            exports('ion_card_header', CardHeader);
        }
    };
});
