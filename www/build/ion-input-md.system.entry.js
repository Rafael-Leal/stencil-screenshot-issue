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
System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js', './chunk-93181f6c.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getIonMode, h, getElement, Host, createColorClasses, debounceEvent, findItemLabel;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                getIonMode = module.c;
                h = module.h;
                getElement = module.f;
                Host = module.H;
            }, function (module) {
                createColorClasses = module.c;
            }, function (module) {
                debounceEvent = module.d;
                findItemLabel = module.f;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Input = /** @class */ (function () {
                function Input(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.inputId = "ion-input-" + inputIds++;
                    this.didBlurAfterEdit = false;
                    this.hasFocus = false;
                    /**
                     * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
                     */
                    this.autocapitalize = 'off';
                    /**
                     * Indicates whether the value of the control can be automatically completed by the browser.
                     */
                    this.autocomplete = 'off';
                    /**
                     * Whether auto correction should be enabled when the user is entering/editing the text value.
                     */
                    this.autocorrect = 'off';
                    /**
                     * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
                     */
                    this.autofocus = false;
                    /**
                     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
                     */
                    this.clearInput = false;
                    /**
                     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
                     */
                    this.debounce = 0;
                    /**
                     * If `true`, the user cannot interact with the input.
                     */
                    this.disabled = false;
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = this.inputId;
                    /**
                     * If `true`, the user cannot modify the value.
                     */
                    this.readonly = false;
                    /**
                     * If `true`, the user must fill in a value before submitting a form.
                     */
                    this.required = false;
                    /**
                     * If `true`, the element will have its spelling and grammar checked.
                     */
                    this.spellcheck = false;
                    /**
                     * The type of control to display. The default type is text.
                     */
                    this.type = 'text';
                    /**
                     * The value of the input.
                     */
                    this.value = '';
                    this.onInput = function (ev) {
                        var input = ev.target;
                        if (input) {
                            _this.value = input.value || '';
                        }
                        _this.ionInput.emit(ev);
                    };
                    this.onBlur = function () {
                        _this.hasFocus = false;
                        _this.focusChanged();
                        _this.emitStyle();
                        _this.ionBlur.emit();
                    };
                    this.onFocus = function () {
                        _this.hasFocus = true;
                        _this.focusChanged();
                        _this.emitStyle();
                        _this.ionFocus.emit();
                    };
                    this.onKeydown = function () {
                        if (_this.clearOnEdit) {
                            // Did the input value change after it was blurred and edited?
                            if (_this.didBlurAfterEdit && _this.hasValue()) {
                                // Clear the input
                                _this.clearTextInput();
                            }
                            // Reset the flag
                            _this.didBlurAfterEdit = false;
                        }
                    };
                    this.clearTextInput = function (ev) {
                        if (_this.clearInput && !_this.readonly && !_this.disabled && ev) {
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        _this.value = '';
                        /**
                         * This is needed for clearOnEdit
                         * Otherwise the value will not be cleared
                         * if user is inside the input
                         */
                        if (_this.nativeInput) {
                            _this.nativeInput.value = '';
                        }
                    };
                    this.ionInput = createEvent(this, "ionInput", 7);
                    this.ionChange = createEvent(this, "ionChange", 7);
                    this.ionBlur = createEvent(this, "ionBlur", 7);
                    this.ionFocus = createEvent(this, "ionFocus", 7);
                    this.ionInputDidLoad = createEvent(this, "ionInputDidLoad", 7);
                    this.ionInputDidUnload = createEvent(this, "ionInputDidUnload", 7);
                    this.ionStyle = createEvent(this, "ionStyle", 7);
                }
                Input.prototype.debounceChanged = function () {
                    this.ionChange = debounceEvent(this.ionChange, this.debounce);
                };
                Input.prototype.disabledChanged = function () {
                    this.emitStyle();
                };
                /**
                 * Update the native input element when the value changes
                 */
                Input.prototype.valueChanged = function () {
                    this.emitStyle();
                    this.ionChange.emit({ value: this.value });
                };
                Input.prototype.componentWillLoad = function () {
                    // By default, password inputs clear after focus when they have content
                    if (this.clearOnEdit === undefined && this.type === 'password') {
                        this.clearOnEdit = true;
                    }
                    this.emitStyle();
                };
                Input.prototype.componentDidLoad = function () {
                    this.debounceChanged();
                    this.ionInputDidLoad.emit();
                };
                Input.prototype.componentDidUnload = function () {
                    this.ionInputDidUnload.emit();
                };
                /**
                 * Sets focus on the specified `ion-input`. Use this method instead of the global
                 * `input.focus()`.
                 */
                Input.prototype.setFocus = function () {
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
                Input.prototype.getInputElement = function () {
                    return Promise.resolve(this.nativeInput);
                };
                Input.prototype.getValue = function () {
                    return this.value || '';
                };
                Input.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'interactive': true,
                        'input': true,
                        'has-placeholder': this.placeholder != null,
                        'has-value': this.hasValue(),
                        'has-focus': this.hasFocus,
                        'interactive-disabled': this.disabled,
                    });
                };
                Input.prototype.focusChanged = function () {
                    // If clearOnEdit is enabled and the input blurred but has a value, set a flag
                    if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
                        this.didBlurAfterEdit = true;
                    }
                };
                Input.prototype.hasValue = function () {
                    return this.getValue().length > 0;
                };
                Input.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        'aria-disabled': this.disabled ? 'true' : null,
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a['has-value'] = this.hasValue(), _a['has-focus'] = this.hasFocus, _a))
                    };
                };
                Input.prototype.__stencil_render = function () {
                    var _this = this;
                    var value = this.getValue();
                    var labelId = this.inputId + '-lbl';
                    var label = findItemLabel(this.el);
                    if (label) {
                        label.id = labelId;
                    }
                    return [
                        h("input", { class: "native-input", ref: function (input) { return _this.nativeInput = input; }, "aria-labelledby": labelId, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown }),
                        (this.clearInput && !this.readonly && !this.disabled) && h("button", { type: "button", class: "input-clear-icon", tabindex: "-1", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput })
                    ];
                };
                Object.defineProperty(Input.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Input, "watchers", {
                    get: function () {
                        return {
                            "debounce": ["debounceChanged"],
                            "disabled": ["disabledChanged"],
                            "value": ["valueChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Input.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Input, "style", {
                    get: function () { return ".sc-ion-input-md-h {\n  \n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: initial;\n  --placeholder-opacity: .5;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --background: transparent;\n  --color: initial;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  \n  padding: 0 !important;\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  z-index: 2;\n}\n\nion-item.sc-ion-input-md-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-md-h {\n  --padding-start: 0;\n}\n\n.ion-color.sc-ion-input-md-h {\n  color: var(--ion-color-base);\n}\n\n.native-input.sc-ion-input-md {\n  border-radius: var(--border-radius);\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: inline-block;\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  border: 0;\n  outline: none;\n  background: transparent;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .native-input.sc-ion-input-md {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n.native-input.sc-ion-input-md::-webkit-input-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.native-input.sc-ion-input-md::-moz-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.native-input.sc-ion-input-md:-ms-input-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.native-input.sc-ion-input-md::-ms-input-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.native-input.sc-ion-input-md::placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.native-input.sc-ion-input-md:-webkit-autofill {\n  background-color: transparent;\n}\n.native-input.sc-ion-input-md:invalid {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.native-input.sc-ion-input-md::-ms-clear {\n  display: none;\n}\n\n.native-input[disabled].sc-ion-input-md {\n  opacity: 0.4;\n}\n\n.cloned-input.sc-ion-input-md {\n  left: 0;\n  top: 0;\n  position: absolute;\n  pointer-events: none;\n}\n[dir=rtl].sc-ion-input-md .cloned-input.sc-ion-input-md, [dir=rtl].sc-ion-input-md-h .cloned-input.sc-ion-input-md, [dir=rtl] .sc-ion-input-md-h .cloned-input.sc-ion-input-md {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n.input-clear-icon.sc-ion-input-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  background-position: center;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  visibility: hidden;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.has-focus.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md {\n  visibility: visible;\n}\n\n.has-focus.sc-ion-input-md-h {\n  pointer-events: none;\n}\n\n.has-focus.sc-ion-input-md-h input.sc-ion-input-md, .has-focus.sc-ion-input-md-h a.sc-ion-input-md, .has-focus.sc-ion-input-md-h button.sc-ion-input-md {\n  pointer-events: auto;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 10px;\n  --padding-end: 0;\n  --padding-bottom: 10px;\n  --padding-start: 8px;\n  font-size: inherit;\n}\n\n.item-label-stacked.sc-ion-input-md-h, .item-label-stacked .sc-ion-input-md-h, .item-label-floating.sc-ion-input-md-h, .item-label-floating .sc-ion-input-md-h {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 0;\n}\n\n.input-clear-icon.sc-ion-input-md {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%20512%20512\'><polygon%20fill=\'var(--ion-color-step-600,%20%23666666)\'%20points=\'405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256\'/></svg>\");\n  width: 30px;\n  height: 30px;\n  background-size: 22px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Input;
            }());
            exports('ion_input', Input);
            var inputIds = 0;
        }
    };
});
