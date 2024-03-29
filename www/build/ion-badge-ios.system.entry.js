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
            var Badge = /** @class */ (function () {
                function Badge(hostRef) {
                    registerInstance(this, hostRef);
                }
                Badge.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a))
                    };
                };
                Badge.prototype.__stencil_render = function () {
                    return h("slot", null);
                };
                Badge.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Badge, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --background: Background of the badge\n   * \@prop --color: Text color of the badge\n   *\n   * \@prop --padding-top: Padding top of the badge\n   * \@prop --padding-end: Padding end of the badge\n   * \@prop --padding-bottom: Padding bottom of the badge\n   * \@prop --padding-start: Padding start of the badge\n   */\n  --background: var(--ion-color-primary, #3880ff);\n  --color: var(--ion-color-primary-contrast, #fff);\n  --padding-top: 3px;\n  --padding-end: 8px;\n  --padding-bottom: 3px;\n  --padding-start: 8px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  display: inline-block;\n  min-width: 10px;\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  contain: content;\n  vertical-align: baseline;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n:host(.ion-color) {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n:host(:empty) {\n  display: none;\n}\n\n:host {\n  border-radius: 10px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Badge;
            }());
            exports('ion_badge', Badge);
        }
    };
});
