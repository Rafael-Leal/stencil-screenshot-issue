System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js'], function (exports) {
    'use strict';
    var registerInstance, getContext, getIonMode, h, Host, createColorClasses;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getContext = module.e;
                getIonMode = module.c;
                h = module.h;
                Host = module.H;
            }, function (module) {
                createColorClasses = module.c;
            }],
        execute: function () {
            var MenuButton = /** @class */ (function () {
                function MenuButton(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * If `true`, the user cannot interact with the menu button.
                     */
                    this.disabled = false;
                    /**
                     * Automatically hides the menu button when the corresponding menu is not active
                     */
                    this.autoHide = true;
                    /**
                     * The type of the button.
                     */
                    this.type = 'button';
                    this.config = getContext(this, "config");
                }
                MenuButton.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    var _b = this, color = _b.color, disabled = _b.disabled;
                    return {
                        'aria-disabled': disabled ? 'true' : null,
                        class: Object.assign({}, createColorClasses(color), (_a = {}, _a["" + mode] = true, _a['button'] = true, _a['menu-button-disabled'] = disabled, _a['ion-activatable'] = true, _a['ion-focusable'] = true, _a))
                    };
                };
                MenuButton.prototype.__stencil_render = function () {
                    var mode = getIonMode(this);
                    var menuIcon = this.config.get('menuIcon', 'menu');
                    var attrs = {
                        type: this.type
                    };
                    return (h("ion-menu-toggle", { menu: this.menu, autoHide: this.autoHide }, h("button", Object.assign({}, attrs, { disabled: this.disabled, class: "button-native" }), h("slot", null, h("ion-icon", { icon: menuIcon, mode: mode, lazy: false })), mode === 'md' && h("ion-ripple-effect", { type: "unbounded" }))));
                };
                MenuButton.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(MenuButton, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --border-radius: Border radius of the menu button\n   *\n   * \@prop --background: Background of the menu button\n   * \@prop --background-hover: Background of the menu button on hover\n   * \@prop --background-focused: Background of the menu button when focused\n   *\n   * \@prop --color: Color of the menu button\n   * \@prop --color-hover: Color of the menu button on hover\n   * \@prop --color-focused: Color of the menu button when focused\n   *\n   * \@prop --padding-top: Padding top of the button\n   * \@prop --padding-end: Padding end of the button\n   * \@prop --padding-bottom: Padding bottom of the button\n   * \@prop --padding-start: Padding start of the button\n   */\n  --background: transparent;\n  --color-focused: var(--color);\n  --border-radius: initial;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  color: var(--color);\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n}\n\n.button-native {\n  border-radius: var(--border-radius);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  outline: none;\n  background: var(--background);\n  line-height: 1;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .button-native {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\nion-icon {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  pointer-events: none;\n}\n\n:host(.menu-button-disabled) {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n\@media (any-hover: hover) {\n  :host(:hover) .button-native {\n    background: var(--background-hover);\n    color: var(--color-hover);\n  }\n}\n:host(.ion-focused) .button-native {\n  background: var(--background-focused);\n  color: var(--color-focused);\n}\n\n:host(.ion-color) .button-native {\n  color: var(--ion-color-base);\n}\n\n:host-context(ion-toolbar:not(.ion-color)) {\n  color: var(--ion-toolbar-color, var(--color));\n}\n\n:host {\n  --background-focused: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);\n  --border-radius: 4px;\n  --color: var(--ion-color-primary, #3880ff);\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 32px;\n}\n\n:host(.activated) {\n  opacity: 0.4;\n}\n\n\@media (any-hover: hover) {\n  :host(:hover) {\n    opacity: 0.6;\n  }\n}\nion-icon {\n  font-size: 31px;\n}\n\n:host(.ion-color.ion-focused) .button-native {\n  background: rgba(var(--ion-color-base-rgb), 0.1);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return MenuButton;
            }());
            exports('ion_menu_button', MenuButton);
        }
    };
});
