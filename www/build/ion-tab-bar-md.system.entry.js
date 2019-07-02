System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getContext, getIonMode, h, getElement, Host, createColorClasses;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                getContext = module.e;
                getIonMode = module.c;
                h = module.h;
                getElement = module.f;
                Host = module.H;
            }, function (module) {
                createColorClasses = module.c;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var TabBar = /** @class */ (function () {
                function TabBar(hostRef) {
                    registerInstance(this, hostRef);
                    this.keyboardVisible = false;
                    /**
                     * If `true`, the tab bar will be translucent.
                     */
                    this.translucent = false;
                    this.ionTabBarChanged = createEvent(this, "ionTabBarChanged", 7);
                    this.queue = getContext(this, "queue");
                    this.doc = getContext(this, "document");
                }
                TabBar.prototype.selectedTabChanged = function () {
                    this.ionTabBarChanged.emit({
                        tab: this.selectedTab
                    });
                };
                TabBar.prototype.onKeyboardWillHide = function () {
                    var _this = this;
                    setTimeout(function () { return _this.keyboardVisible = false; }, 50);
                };
                TabBar.prototype.onKeyboardWillShow = function () {
                    if (this.el.getAttribute('slot') !== 'top') {
                        this.keyboardVisible = true;
                    }
                };
                TabBar.prototype.componentWillLoad = function () {
                    this.selectedTabChanged();
                };
                TabBar.prototype.hostData = function () {
                    var _a;
                    var _b = this, color = _b.color, translucent = _b.translucent, keyboardVisible = _b.keyboardVisible;
                    var mode = getIonMode(this);
                    return {
                        'role': 'tablist',
                        'aria-hidden': keyboardVisible ? 'true' : null,
                        class: Object.assign({}, createColorClasses(color), (_a = {}, _a["" + mode] = true, _a['tab-bar-translucent'] = translucent, _a['tab-bar-hidden'] = keyboardVisible, _a))
                    };
                };
                TabBar.prototype.__stencil_render = function () {
                    return (h("slot", null));
                };
                Object.defineProperty(TabBar.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabBar, "watchers", {
                    get: function () {
                        return {
                            "selectedTab": ["selectedTabChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                TabBar.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(TabBar, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --background: Background of the tab bar\n   * \@prop --border: Border of the tab bar\n   * \@prop --color: Color of the tab bar\n   */\n  padding-left: var(--ion-safe-area-left);\n  padding-right: var(--ion-safe-area-right);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: auto;\n  padding-bottom: var(--ion-safe-area-bottom, 0);\n  border-top: var(--border);\n  background: var(--background);\n  color: var(--color);\n  text-align: center;\n  contain: strict;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 10;\n  /* stylelint-disable-next-line declaration-no-important */\n  -webkit-box-sizing: content-box !important;\n  box-sizing: content-box !important;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-safe-area-left);\n    padding-inline-start: var(--ion-safe-area-left);\n    -webkit-padding-end: var(--ion-safe-area-right);\n    padding-inline-end: var(--ion-safe-area-right);\n  }\n}\n\n:host(.ion-color) ::slotted(ion-tab-button) {\n  --background-focused: var(--ion-color-shade);\n  --color-selected: var(--ion-color-contrast);\n}\n\n:host(.ion-color) ::slotted(.tab-selected) {\n  color: var(--ion-color-contrast);\n}\n\n:host(.ion-color),\n:host(.ion-color) ::slotted(ion-tab-button) {\n  color: rgba(var(--ion-color-contrast-rgb), 0.7);\n}\n\n:host(.ion-color),\n:host(.ion-color) ::slotted(ion-tab-button) {\n  background: var(--ion-color-base);\n}\n\n:host(.ion-color) ::slotted(ion-tab-button.ion-focused),\n:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused) {\n  background: var(--background-focused);\n}\n\n:host(.tab-bar-translucent) ::slotted(ion-tab-button) {\n  background: transparent;\n}\n\n:host([slot=top]) {\n  padding-bottom: 0;\n  border-top: 0;\n  border-bottom: var(--border);\n}\n\n:host(.tab-bar-hidden) {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n\n:host {\n  --background: var(--ion-tab-bar-background, var(--ion-background-color, #fff));\n  --background-focused: var(--ion-tab-bar-background-focused, #e0e0e0);\n  --border: 1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));\n  --color: var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));\n  --color-selected: var(--ion-tab-bar-color-activated, var(--ion-color-primary, #3880ff));\n  height: 56px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return TabBar;
            }());
            exports('ion_tab_bar', TabBar);
        }
    };
});
