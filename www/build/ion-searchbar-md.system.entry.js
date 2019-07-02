var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js', './chunk-02683056.system.js', './chunk-93181f6c.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getContext, getIonMode, h, getElement, Host, createColorClasses, sanitizeDOMString, debounceEvent;
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
            }, function (module) {
                sanitizeDOMString = module.s;
            }, function (module) {
                debounceEvent = module.d;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Searchbar = /** @class */ (function () {
                function Searchbar(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.isCancelVisible = false;
                    this.shouldAlignLeft = true;
                    this.focused = false;
                    this.noAnimate = true;
                    /**
                     * If `true`, enable searchbar animation.
                     */
                    this.animated = false;
                    /**
                     * Set the input's autocomplete property.
                     */
                    this.autocomplete = 'off';
                    /**
                     * Set the input's autocorrect property.
                     */
                    this.autocorrect = 'off';
                    /**
                     * Set the cancel button icon. Only applies to `md` mode.
                     */
                    this.cancelButtonIcon = 'md-arrow-back';
                    /**
                     * Set the the cancel button text. Only applies to `ios` mode.
                     */
                    this.cancelButtonText = 'Cancel';
                    /**
                     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
                     */
                    this.debounce = 250;
                    /**
                     * If `true`, the user cannot interact with the input.
                     */
                    this.disabled = false;
                    /**
                     * Set the input's placeholder.
                     * `placeholder` can accept either plaintext or HTML as a string.
                     * To display characters normally reserved for HTML, they
                     * must be escaped. For example `<Ionic>` would become
                     * `&lt;Ionic&gt;`
                     *
                     * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
                     */
                    this.placeholder = 'Search';
                    /**
                     * The icon to use as the search icon.
                     */
                    this.searchIcon = 'search';
                    /**
                     * Sets the behavior for the cancel button. Defaults to `"never"`.
                     * Setting to `"focus"` shows the cancel button on focus.
                     * Setting to `"never"` hides the cancel button.
                     * Setting to `"always"` shows the cancel button regardless
                     * of focus state.
                     */
                    this.showCancelButton = 'never';
                    /**
                     * If `true`, enable spellcheck on the input.
                     */
                    this.spellcheck = false;
                    /**
                     * Set the type of the input.
                     */
                    this.type = 'search';
                    /**
                     * the value of the searchbar.
                     */
                    this.value = '';
                    /**
                     * Clears the input field and triggers the control change.
                     */
                    this.onClearInput = function (ev) {
                        _this.ionClear.emit();
                        if (ev) {
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527
                        // wait for 4 frames
                        setTimeout(function () {
                            var value = _this.getValue();
                            if (value !== '') {
                                _this.value = '';
                                _this.ionInput.emit();
                            }
                        }, 16 * 4);
                    };
                    /**
                     * Clears the input field and tells the input to blur since
                     * the clearInput function doesn't want the input to blur
                     * then calls the custom cancel function if the user passed one in.
                     */
                    this.onCancelSearchbar = function (ev) {
                        if (ev) {
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        _this.ionCancel.emit();
                        _this.onClearInput();
                        if (_this.nativeInput) {
                            _this.nativeInput.blur();
                        }
                    };
                    /**
                     * Update the Searchbar input value when the input changes
                     */
                    this.onInput = function (ev) {
                        var input = ev.target;
                        if (input) {
                            _this.value = input.value;
                        }
                        _this.ionInput.emit(ev);
                    };
                    /**
                     * Sets the Searchbar to not focused and checks if it should align left
                     * based on whether there is a value in the searchbar or not.
                     */
                    this.onBlur = function () {
                        _this.focused = false;
                        _this.ionBlur.emit();
                        _this.positionElements();
                    };
                    /**
                     * Sets the Searchbar to focused and active on input focus.
                     */
                    this.onFocus = function () {
                        _this.focused = true;
                        _this.ionFocus.emit();
                        _this.positionElements();
                    };
                    this.ionInput = createEvent(this, "ionInput", 7);
                    this.ionChange = createEvent(this, "ionChange", 7);
                    this.ionCancel = createEvent(this, "ionCancel", 7);
                    this.ionClear = createEvent(this, "ionClear", 7);
                    this.ionBlur = createEvent(this, "ionBlur", 7);
                    this.ionFocus = createEvent(this, "ionFocus", 7);
                    this.config = getContext(this, "config");
                    this.doc = getContext(this, "document");
                }
                Searchbar.prototype.debounceChanged = function () {
                    this.ionChange = debounceEvent(this.ionChange, this.debounce);
                };
                Searchbar.prototype.valueChanged = function () {
                    var inputEl = this.nativeInput;
                    var value = this.getValue();
                    if (inputEl && inputEl.value !== value) {
                        inputEl.value = value;
                    }
                    this.ionChange.emit({ value: value });
                };
                Searchbar.prototype.showCancelButtonChanged = function () {
                    var _this = this;
                    requestAnimationFrame(function () {
                        _this.positionElements();
                        _this.el.forceUpdate();
                    });
                };
                Searchbar.prototype.componentDidLoad = function () {
                    var _this = this;
                    this.positionElements();
                    this.debounceChanged();
                    setTimeout(function () {
                        _this.noAnimate = false;
                    }, 300);
                };
                /**
                 * Sets focus on the specified `ion-searchbar`. Use this method instead of the global
                 * `input.focus()`.
                 */
                Searchbar.prototype.setFocus = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (this.nativeInput) {
                                this.nativeInput.focus();
                            }
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Returns the native `<input>` element used under the hood.
                 */
                Searchbar.prototype.getInputElement = function () {
                    return Promise.resolve(this.nativeInput);
                };
                /**
                 * Positions the input search icon, placeholder, and the cancel button
                 * based on the input value and if it is focused. (ios only)
                 */
                Searchbar.prototype.positionElements = function () {
                    var value = this.getValue();
                    var prevAlignLeft = this.shouldAlignLeft;
                    var mode = getIonMode(this);
                    var shouldAlignLeft = (!this.animated || value.trim() !== '' || !!this.focused);
                    this.shouldAlignLeft = shouldAlignLeft;
                    if (mode !== 'ios') {
                        return;
                    }
                    if (prevAlignLeft !== shouldAlignLeft) {
                        this.positionPlaceholder();
                    }
                    if (this.animated) {
                        this.positionCancelButton();
                    }
                };
                /**
                 * Positions the input placeholder
                 */
                Searchbar.prototype.positionPlaceholder = function () {
                    var inputEl = this.nativeInput;
                    if (!inputEl) {
                        return;
                    }
                    var isRTL = document.dir === 'rtl';
                    var iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');
                    if (this.shouldAlignLeft) {
                        inputEl.removeAttribute('style');
                        iconEl.removeAttribute('style');
                    }
                    else {
                        // Create a dummy span to get the placeholder width
                        var doc = document;
                        var tempSpan = doc.createElement('span');
                        tempSpan.innerHTML = sanitizeDOMString(this.placeholder) || '';
                        doc.body.appendChild(tempSpan);
                        // Get the width of the span then remove it
                        var textWidth = tempSpan.offsetWidth;
                        tempSpan.remove();
                        // Calculate the input padding
                        var inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';
                        // Calculate the icon margin
                        var iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';
                        // Set the input padding start and icon margin start
                        if (isRTL) {
                            inputEl.style.paddingRight = inputLeft;
                            iconEl.style.marginRight = iconLeft;
                        }
                        else {
                            inputEl.style.paddingLeft = inputLeft;
                            iconEl.style.marginLeft = iconLeft;
                        }
                    }
                };
                /**
                 * Show the iOS Cancel button on focus, hide it offscreen otherwise
                 */
                Searchbar.prototype.positionCancelButton = function () {
                    var isRTL = document.dir === 'rtl';
                    var cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');
                    var shouldShowCancel = this.shouldShowCancelButton();
                    if (cancelButton && shouldShowCancel !== this.isCancelVisible) {
                        var cancelStyle = cancelButton.style;
                        this.isCancelVisible = shouldShowCancel;
                        if (shouldShowCancel) {
                            if (isRTL) {
                                cancelStyle.marginLeft = '0';
                            }
                            else {
                                cancelStyle.marginRight = '0';
                            }
                        }
                        else {
                            var offset = cancelButton.offsetWidth;
                            if (offset > 0) {
                                if (isRTL) {
                                    cancelStyle.marginLeft = -offset + 'px';
                                }
                                else {
                                    cancelStyle.marginRight = -offset + 'px';
                                }
                            }
                        }
                    }
                };
                Searchbar.prototype.getValue = function () {
                    return this.value || '';
                };
                Searchbar.prototype.hasValue = function () {
                    return this.getValue() !== '';
                };
                /**
                 * Determines whether or not the cancel button should be visible onscreen.
                 * Cancel button should be shown if one of two conditions applies:
                 * 1. `showCancelButton` is set to `always`.
                 * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.
                 */
                Searchbar.prototype.shouldShowCancelButton = function () {
                    if (isCancelButtonSetToNever(this.showCancelButton) ||
                        (isCancelButtonSetToFocus(this.showCancelButton) && !this.focused)) {
                        return false;
                    }
                    return true;
                };
                Searchbar.prototype.hostData = function () {
                    var _a;
                    var animated = this.animated && this.config.getBoolean('animated', true);
                    var mode = getIonMode(this);
                    return {
                        'aria-disabled': this.disabled ? 'true' : null,
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a['searchbar-animated'] = animated, _a['searchbar-disabled'] = this.disabled, _a['searchbar-no-animate'] = animated && this.noAnimate, _a['searchbar-has-value'] = this.hasValue(), _a['searchbar-left-aligned'] = this.shouldAlignLeft, _a['searchbar-has-focus'] = this.focused, _a['searchbar-should-show-cancel'] = this.shouldShowCancelButton(), _a))
                    };
                };
                Searchbar.prototype.__stencil_render = function () {
                    var _this = this;
                    var mode = getIonMode(this);
                    var clearIcon = this.clearIcon || (mode === 'ios' ? 'ios-close-circle' : 'md-close');
                    var searchIcon = this.searchIcon;
                    var cancelButton = !isCancelButtonSetToNever(this.showCancelButton) && (h("button", { type: "button", tabIndex: mode === 'ios' && !this.shouldShowCancelButton() ? -1 : undefined, onMouseDown: this.onCancelSearchbar, onTouchStart: this.onCancelSearchbar, class: "searchbar-cancel-button" }, h("div", null, mode === 'md'
                        ? h("ion-icon", { mode: mode, icon: this.cancelButtonIcon, lazy: false })
                        : this.cancelButtonText)));
                    return [
                        h("div", { class: "searchbar-input-container" }, h("input", { disabled: this.disabled, ref: function (el) { return _this.nativeInput = el; }, class: "searchbar-input", onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, placeholder: this.placeholder, type: this.type, value: this.getValue(), autoComplete: this.autocomplete, autoCorrect: this.autocorrect, spellCheck: this.spellcheck }), mode === 'md' && cancelButton, h("ion-icon", { mode: mode, icon: searchIcon, lazy: false, class: "searchbar-search-icon" }), h("button", { type: "button", "no-blur": true, class: "searchbar-clear-button", onMouseDown: this.onClearInput, onTouchStart: this.onClearInput }, h("ion-icon", { mode: mode, icon: clearIcon, lazy: false, class: "searchbar-clear-icon" }))),
                        mode === 'ios' && cancelButton
                    ];
                };
                Object.defineProperty(Searchbar.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Searchbar, "watchers", {
                    get: function () {
                        return {
                            "debounce": ["debounceChanged"],
                            "value": ["valueChanged"],
                            "showCancelButton": ["showCancelButtonChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Searchbar.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Searchbar, "style", {
                    get: function () { return ".sc-ion-searchbar-md-h {\n  \n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: initial;\n  --placeholder-opacity: .5;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.ion-color.sc-ion-searchbar-md-h {\n  color: var(--ion-color-contrast);\n}\n\n.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md {\n  background: var(--ion-color-base);\n}\n\n.ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md {\n  color: inherit;\n}\n\n.searchbar-search-icon.sc-ion-searchbar-md {\n  color: var(--icon-color);\n  pointer-events: none;\n}\n\n.searchbar-input-container.sc-ion-searchbar-md {\n  display: block;\n  position: relative;\n  -ms-flex-negative: 1;\n  flex-shrink: 1;\n  width: 100%;\n}\n\n.searchbar-input.sc-ion-searchbar-md {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border: 0;\n  outline: none;\n  background: var(--background);\n  font-family: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.searchbar-input.sc-ion-searchbar-md::-moz-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.searchbar-input.sc-ion-searchbar-md::placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button, .searchbar-input.sc-ion-searchbar-md::-ms-clear {\n  display: none;\n}\n\n.searchbar-cancel-button.sc-ion-searchbar-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  display: none;\n  height: 100%;\n  border: 0;\n  outline: none;\n  color: var(--cancel-button-color);\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.searchbar-cancel-button.sc-ion-searchbar-md > div.sc-ion-searchbar-md {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.searchbar-clear-button.sc-ion-searchbar-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  display: none;\n  min-height: 0;\n  outline: none;\n  color: var(--clear-button-color);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md {\n  display: block;\n}\n\n.searchbar-disabled.sc-ion-searchbar-md-h {\n  cursor: default;\n  opacity: 0.4;\n  pointer-events: none;\n}\n\n.sc-ion-searchbar-md-h {\n  --clear-button-color: initial;\n  --cancel-button-color: var(--ion-color-step-900, #1a1a1a);\n  --color: var(--ion-color-step-850, #262626);\n  --icon-color: var(--ion-color-step-600, #666666);\n  --background: var(--ion-background-color, #fff);\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  background: inherit;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .sc-ion-searchbar-md-h {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 8px;\n    padding-inline-start: 8px;\n    -webkit-padding-end: 8px;\n    padding-inline-end: 8px;\n  }\n}\n\n.searchbar-search-icon.sc-ion-searchbar-md {\n  left: 16px;\n  top: 11px;\n  width: 21px;\n  height: 21px;\n}\n[dir=rtl].sc-ion-searchbar-md .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md {\n  left: unset;\n  right: unset;\n  right: 16px;\n}\n\n.searchbar-cancel-button.sc-ion-searchbar-md {\n  left: 5px;\n  top: 0;\n  background-color: transparent;\n  font-size: 1.6em;\n}\n[dir=rtl].sc-ion-searchbar-md .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md {\n  left: unset;\n  right: unset;\n  right: 5px;\n}\n\n.searchbar-search-icon.sc-ion-searchbar-md, .searchbar-cancel-button.sc-ion-searchbar-md {\n  position: absolute;\n}\n\n.searchbar-search-icon.activated.sc-ion-searchbar-md, .searchbar-cancel-button.activated.sc-ion-searchbar-md {\n  background-color: transparent;\n}\n\n.searchbar-input.sc-ion-searchbar-md {\n  padding-left: 55px;\n  padding-right: 55px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-radius: 2px;\n  background-position: left 8px center;\n  height: auto;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 30px;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .searchbar-input.sc-ion-searchbar-md {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 55px;\n    padding-inline-start: 55px;\n    -webkit-padding-end: 55px;\n    padding-inline-end: 55px;\n  }\n}\n[dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md {\n  background-position: right 8px center;\n}\n\n.searchbar-clear-button.sc-ion-searchbar-md {\n  right: 13px;\n  top: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: absolute;\n  height: 100%;\n  border: 0;\n  background-color: transparent;\n}\n[dir=rtl].sc-ion-searchbar-md .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md {\n  left: unset;\n  right: unset;\n  left: 13px;\n}\n\n.searchbar-clear-button.activated.sc-ion-searchbar-md {\n  background-color: transparent;\n}\n\n.searchbar-clear-icon.sc-ion-searchbar-md {\n  width: 22px;\n  height: 100%;\n}\n\n.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md {\n  display: block;\n}\n\n.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md {\n  display: block;\n}\n\n.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md {\n  display: none;\n}\n\nion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h {\n  padding-left: 7px;\n  padding-right: 7px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 7px;\n    padding-inline-start: 7px;\n    -webkit-padding-end: 7px;\n    padding-inline-end: 7px;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Searchbar;
            }());
            exports('ion_searchbar', Searchbar);
            /**
             * Check if the cancel button should never be shown.
             *
             * TODO: Remove this when the `true` and `false`
             * options are removed.
             */
            var isCancelButtonSetToNever = function (showCancelButton) {
                return (showCancelButton === 'never' ||
                    showCancelButton === 'false' ||
                    showCancelButton === false);
            };
            /**
             * Check if the cancel button should be shown on focus.
             *
             * TODO: Remove this when the `true` and `false`
             * options are removed.
             */
            var isCancelButtonSetToFocus = function (showCancelButton) {
                return (showCancelButton === 'focus' ||
                    showCancelButton === 'true' ||
                    showCancelButton === true ||
                    showCancelButton === '');
            };
        }
    };
});
