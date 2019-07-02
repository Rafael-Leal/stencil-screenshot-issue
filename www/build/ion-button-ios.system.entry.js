System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js', './chunk-93181f6c.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getContext, getIonMode, h, getElement, Host, openURL, createColorClasses, hasShadowDom;
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
                openURL = module.o;
                createColorClasses = module.c;
            }, function (module) {
                hasShadowDom = module.h;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             *
             * @slot - Content is placed between the named slots if provided without a slot.
             * @slot icon-only - Should be used on an icon in a button that has no text.
             * @slot start - Content is placed to the left of the button text in LTR, and to the right in RTL.
             * @slot end - Content is placed to the right of the button text in LTR, and to the left in RTL.
             */
            var Button = /** @class */ (function () {
                function Button(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.inToolbar = false;
                    this.inItem = false;
                    /**
                     * The type of button.
                     */
                    this.buttonType = 'button';
                    /**
                     * If `true`, the user cannot interact with the button.
                     */
                    this.disabled = false;
                    /**
                     * When using a router, it specifies the transition direction when navigating to
                     * another page using `href`.
                     */
                    this.routerDirection = 'forward';
                    /**
                     * If `true`, activates a button with a heavier font weight.
                     */
                    this.strong = false;
                    /**
                     * The type of the button.
                     */
                    this.type = 'button';
                    this.onFocus = function () {
                        _this.ionFocus.emit();
                    };
                    this.onBlur = function () {
                        _this.ionBlur.emit();
                    };
                    this.ionFocus = createEvent(this, "ionFocus", 7);
                    this.ionBlur = createEvent(this, "ionBlur", 7);
                    this.win = getContext(this, "window");
                }
                Button.prototype.componentWillLoad = function () {
                    this.inToolbar = !!this.el.closest('ion-buttons');
                    this.inItem = !!this.el.closest('ion-item') || !!this.el.closest('ion-item-divider');
                };
                Button.prototype.onClick = function (ev) {
                    if (this.type === 'button') {
                        openURL(this.win, this.href, ev, this.routerDirection);
                    }
                    else if (hasShadowDom(this.el)) {
                        // this button wants to specifically submit a form
                        // climb up the dom to see if we're in a <form>
                        // and if so, then use JS to submit it
                        var form = this.el.closest('form');
                        if (form) {
                            ev.preventDefault();
                            var fakeButton = this.win.document.createElement('button');
                            fakeButton.type = this.type;
                            fakeButton.style.display = 'none';
                            form.appendChild(fakeButton);
                            fakeButton.click();
                            fakeButton.remove();
                        }
                    }
                };
                Object.defineProperty(Button.prototype, "hasIconOnly", {
                    get: function () {
                        return !!this.el.querySelector('ion-icon[slot="icon-only"]');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Button.prototype, "rippleType", {
                    get: function () {
                        var hasClearFill = this.fill === undefined || this.fill === 'clear';
                        // If the button is in a toolbar, has a clear fill (which is the default)
                        // and only has an icon we use the unbounded "circular" ripple effect
                        if (hasClearFill && this.hasIconOnly && this.inToolbar) {
                            return 'unbounded';
                        }
                        return 'bounded';
                    },
                    enumerable: true,
                    configurable: true
                });
                Button.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    var _b = this, buttonType = _b.buttonType, disabled = _b.disabled, color = _b.color, expand = _b.expand, hasIconOnly = _b.hasIconOnly, shape = _b.shape, strong = _b.strong;
                    var fill = this.fill;
                    if (fill === undefined) {
                        fill = this.inToolbar ? 'clear' : 'solid';
                    }
                    var size = this.size === undefined && this.inItem ? 'small' : this.size;
                    return {
                        'aria-disabled': disabled ? 'true' : null,
                        class: Object.assign({}, createColorClasses(color), (_a = {}, _a["" + mode] = true, _a[buttonType] = true, _a[buttonType + "-" + expand] = expand !== undefined, _a[buttonType + "-" + size] = size !== undefined, _a[buttonType + "-" + shape] = shape !== undefined, _a[buttonType + "-" + fill] = true, _a[buttonType + "-strong"] = strong, _a['button-has-icon-only'] = hasIconOnly, _a['button-disabled'] = disabled, _a['ion-activatable'] = true, _a['ion-focusable'] = true, _a))
                    };
                };
                Button.prototype.__stencil_render = function () {
                    var mode = getIonMode(this);
                    var TagType = this.href === undefined ? 'button' : 'a';
                    var attrs = (TagType === 'button')
                        ? { type: this.type }
                        : {
                            download: this.download,
                            href: this.href,
                            rel: this.rel,
                            target: this.target
                        };
                    return (h(TagType, Object.assign({}, attrs, { class: "button-native", disabled: this.disabled, onFocus: this.onFocus, onBlur: this.onBlur }), h("span", { class: "button-inner" }, h("slot", { name: "icon-only" }), h("slot", { name: "start" }), h("slot", null), h("slot", { name: "end" })), mode === 'md' && h("ion-ripple-effect", { type: this.rippleType })));
                };
                Object.defineProperty(Button.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Button.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Button, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --background: Background of the button\n   * \@prop --background-activated: Background of the button when activated\n   * \@prop --background-focused: Background of the button when focused\n   * \@prop --background-hover: Background of the button on hover\n   *\n   * \@prop --color: Text color of the button\n   * \@prop --color-activated: Text color of the button when activated\n   * \@prop --color-focused: Text color of the button when focused\n   * \@prop --color-hover: Text color of the button when hover\n   *\n   * \@prop --transition: Transition of the button\n   *\n   * \@prop --border-radius: Border radius of the button\n   * \@prop --border-width: Border width of the button\n   * \@prop --border-style: Border style of the button\n   * \@prop --border-color: Border color of the button\n   *\n   * \@prop --ripple-color: Color of the button ripple effect\n   *\n   * \@prop --box-shadow: Box shadow of the button\n   * \@prop --opacity: Opacity of the button\n   *\n   * \@prop --padding-top: Padding top of the button\n   * \@prop --padding-end: Padding end of the button\n   * \@prop --padding-bottom: Padding bottom of the button\n   * \@prop --padding-start: Padding start of the button\n   */\n  --overflow: hidden;\n  --ripple-color: currentColor;\n  --border-width: initial;\n  --border-color: initial;\n  --border-style: initial;\n  --color-hover: initial;\n  --box-shadow: none;\n  display: inline-block;\n  width: auto;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: top;\n  vertical-align: -webkit-baseline-middle;\n  pointer-events: auto;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n}\n\n:host(.button-disabled) {\n  --opacity: .5;\n  pointer-events: none;\n}\n\n:host(.button-disabled) .button-native {\n  cursor: default;\n  pointer-events: none;\n}\n\n:host(.button-solid) {\n  --background: var(--ion-color-primary, #3880ff);\n  --background-focused: var(--ion-color-primary-shade, #3171e0);\n  --background-hover: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.92);\n  --color: var(--ion-color-primary-contrast, #fff);\n  --color-activated: var(--ion-color-primary-contrast, #fff);\n  --color-focused: var(--ion-color-primary-contrast, #fff);\n}\n\n:host(.button-solid.ion-color) .button-native {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n:host(.button-solid.ion-color.ion-focused) .button-native {\n  background: var(--ion-color-shade);\n}\n\n:host(.button-outline) {\n  --border-color: var(--ion-color-primary, #3880ff);\n  --background: transparent;\n  --color: var(--ion-color-primary, #3880ff);\n  --color-focused: var(--ion-color-primary, #3880ff);\n}\n\n:host(.button-outline.ion-color) .button-native {\n  border-color: var(--ion-color-base);\n  background: transparent;\n  color: var(--ion-color-base);\n}\n\n:host(.button-outline.ion-focused.ion-color) .button-native {\n  background: rgba(var(--ion-color-base-rgb), 0.1);\n  color: var(--ion-color-base);\n}\n\n:host(.button-clear) {\n  --border-width: 0;\n  --background: transparent;\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n:host(.button-clear.ion-color) .button-native {\n  background: transparent;\n  color: var(--ion-color-base);\n}\n\n:host(.button-clear.ion-focused.ion-color) .button-native {\n  background: rgba(var(--ion-color-base-rgb), 0.1);\n  color: var(--ion-color-base);\n}\n\n:host(.button-clear.activated.ion-color) .button-native {\n  background: transparent;\n}\n\n:host(.button-block) {\n  display: block;\n}\n\n:host(.button-block) .button-native {\n  margin-left: 0;\n  margin-right: 0;\n  display: block;\n  width: 100%;\n  clear: both;\n  contain: content;\n}\n\n:host(.button-block) .button-native::after {\n  clear: both;\n}\n\n:host(.button-full) {\n  display: block;\n}\n\n:host(.button-full) .button-native {\n  margin-left: 0;\n  margin-right: 0;\n  display: block;\n  width: 100%;\n  contain: content;\n}\n\n:host(.button-full:not(.button-round)) .button-native {\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0;\n}\n\n.button-native {\n  border-radius: var(--border-radius);\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  outline: none;\n  background: var(--background);\n  line-height: 1;\n  -webkit-box-shadow: var(--box-shadow);\n  box-shadow: var(--box-shadow);\n  contain: layout style;\n  cursor: pointer;\n  opacity: var(--opacity);\n  overflow: var(--overflow);\n  z-index: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .button-native {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n.button-native::-moz-focus-inner {\n  border: 0;\n}\n\n.button-inner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n::slotted(ion-icon) {\n  font-size: 1.4em;\n  pointer-events: none;\n}\n\n::slotted(ion-icon[slot=start]) {\n  margin-left: -0.3em;\n  margin-right: 0.3em;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ::slotted(ion-icon[slot=start]) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: -0.3em;\n    margin-inline-start: -0.3em;\n    -webkit-margin-end: 0.3em;\n    margin-inline-end: 0.3em;\n  }\n}\n\n::slotted(ion-icon[slot=end]) {\n  margin-left: 0.3em;\n  margin-right: -0.2em;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ::slotted(ion-icon[slot=end]) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 0.3em;\n    margin-inline-start: 0.3em;\n    -webkit-margin-end: -0.2em;\n    margin-inline-end: -0.2em;\n  }\n}\n\n::slotted(ion-icon[slot=icon-only]) {\n  font-size: 1.8em;\n}\n\nion-ripple-effect {\n  color: var(--ripple-color);\n}\n\n:host(.ion-focused) .button-native {\n  background: var(--background-focused);\n  color: var(--color-focused);\n}\n\n:host(.activated) .button-native {\n  background: var(--background-activated);\n  color: var(--color-activated);\n}\n\n\@media (any-hover: hover) {\n  :host(:hover) .button-native {\n    background: var(--background-hover);\n    color: var(--color-hover);\n  }\n}\n:host {\n  --border-radius: 10px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --transition: background-color, opacity 100ms linear;\n  margin-left: 2px;\n  margin-right: 2px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  height: 2.8em;\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: -0.03em;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 2px;\n    margin-inline-start: 2px;\n    -webkit-margin-end: 2px;\n    margin-inline-end: 2px;\n  }\n}\n\n:host(.button-solid) {\n  --background-activated: var(--ion-color-primary-shade, #3171e0);\n}\n\n:host(.button-solid.activated) {\n  --opacity: 1;\n}\n\n:host(.button-solid.activated.ion-color) .button-native {\n  background: var(--ion-color-shade);\n}\n\n:host(.button-outline) {\n  --border-radius: 10px;\n  --border-width: 1px;\n  --border-style: solid;\n  --background-activated: var(--ion-color-primary, #3880ff);\n  --background-focused: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);\n  --color-activated: var(--ion-color-primary-contrast, #fff);\n}\n\n:host(.button-outline.activated.ion-color) .button-native {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n:host(.button-clear.activated) {\n  --opacity: 0.4;\n}\n\n:host(.button-clear) {\n  --background-activated: transparent;\n  --background-focused: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);\n  --color-activated: var(--ion-color-primary, #3880ff);\n  --color-focused: var(--ion-color-primary, #3880ff);\n}\n\n:host(.button-large) {\n  --border-radius: 12px;\n  --padding-top: 0;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --padding-bottom: 0;\n  height: 2.8em;\n  font-size: 20px;\n}\n\n:host(.button-small) {\n  --border-radius: 6px;\n  --padding-top: 0;\n  --padding-start: 0.9em;\n  --padding-end: 0.9em;\n  --padding-bottom: 0;\n  height: 2.1em;\n  font-size: 13px;\n}\n\n:host(.button-round) {\n  --border-radius: 64px;\n  --padding-top: 0;\n  --padding-start: 26px;\n  --padding-end: 26px;\n  --padding-bottom: 0;\n}\n\n:host(.button-strong) {\n  font-weight: 600;\n}\n\n\@media (any-hover: hover) {\n  :host(.button-solid:hover) {\n    --opacity: 0.8;\n  }\n\n  :host(.button-clear:hover),\n:host(.button-outline:hover) {\n    --opacity: 0.6;\n  }\n\n  :host(.ion-focused:hover) {\n    --background-hover: var(--background-focused);\n    --color-hover: var(--color-focused);\n  }\n\n  :host(.activated:hover) {\n    --background-hover: var(--background-activated);\n    --color-hover: var(--color-activated);\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Button;
            }());
            exports('ion_button', Button);
        }
    };
});
