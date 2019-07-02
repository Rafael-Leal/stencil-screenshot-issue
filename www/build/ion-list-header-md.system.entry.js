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
            var ListHeader = /** @class */ (function () {
                function ListHeader(hostRef) {
                    registerInstance(this, hostRef);
                }
                ListHeader.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a))
                    };
                };
                ListHeader.prototype.__stencil_render = function () {
                    return h("slot", null);
                };
                ListHeader.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(ListHeader, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --background: Background of the list header\n   * \@prop --color: Color of the list header text\n   */\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 40px;\n  background: var(--background);\n  color: var(--color);\n  overflow: hidden;\n}\n\n:host(.ion-color) {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n:host {\n  --background: transparent;\n  --color: var(--ion-text-color, #000);\n  padding-left: calc(var(--ion-safe-area-left, 0px) + 16px);\n  min-height: 45px;\n  font-size: 14px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 16px);\n    padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 16px);\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ListHeader;
            }());
            exports('ion_list_header', ListHeader);
        }
    };
});
