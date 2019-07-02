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
            var Textarea = /** @class */ (function () {
                function Textarea(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.inputId = "ion-input-" + textareaIds++;
                    this.didBlurAfterEdit = false;
                    this.hasFocus = false;
                    /**
                     * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
                     */
                    this.autocapitalize = 'none';
                    /**
                     * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
                     */
                    this.autofocus = false;
                    /**
                     * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
                     */
                    this.clearOnEdit = false;
                    /**
                     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
                     */
                    this.debounce = 0;
                    /**
                     * If `true`, the user cannot interact with the textarea.
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
                     * If `true`, the element height will increase based on the value.
                     */
                    this.autoGrow = false;
                    /**
                     * The value of the textarea.
                     */
                    this.value = '';
                    this.onInput = function (ev) {
                        if (_this.nativeInput) {
                            _this.value = _this.nativeInput.value;
                        }
                        _this.emitStyle();
                        _this.ionInput.emit(ev);
                    };
                    this.onFocus = function () {
                        _this.hasFocus = true;
                        _this.focusChange();
                        _this.ionFocus.emit();
                    };
                    this.onBlur = function () {
                        _this.hasFocus = false;
                        _this.focusChange();
                        _this.ionBlur.emit();
                    };
                    this.onKeyDown = function () {
                        _this.checkClearOnEdit();
                    };
                    this.ionChange = createEvent(this, "ionChange", 7);
                    this.ionInput = createEvent(this, "ionInput", 7);
                    this.ionStyle = createEvent(this, "ionStyle", 7);
                    this.ionBlur = createEvent(this, "ionBlur", 7);
                    this.ionFocus = createEvent(this, "ionFocus", 7);
                    this.ionInputDidLoad = createEvent(this, "ionInputDidLoad", 7);
                    this.ionInputDidUnload = createEvent(this, "ionInputDidUnload", 7);
                }
                Textarea.prototype.debounceChanged = function () {
                    this.ionChange = debounceEvent(this.ionChange, this.debounce);
                };
                Textarea.prototype.disabledChanged = function () {
                    this.emitStyle();
                };
                /**
                 * Update the native input element when the value changes
                 */
                Textarea.prototype.valueChanged = function () {
                    var nativeInput = this.nativeInput;
                    var value = this.getValue();
                    if (nativeInput && nativeInput.value !== value) {
                        nativeInput.value = value;
                    }
                    this.runAutoGrow();
                    this.emitStyle();
                    this.ionChange.emit({ value: value });
                };
                Textarea.prototype.componentWillLoad = function () {
                    this.emitStyle();
                };
                Textarea.prototype.componentDidLoad = function () {
                    this.debounceChanged();
                    this.runAutoGrow();
                    this.ionInputDidLoad.emit();
                };
                Textarea.prototype.runAutoGrow = function () {
                    if (this.nativeInput && this.autoGrow) {
                        this.nativeInput.style.height = 'inherit';
                        this.nativeInput.style.height = this.nativeInput.scrollHeight + 'px';
                    }
                };
                Textarea.prototype.componentDidUnload = function () {
                    this.ionInputDidUnload.emit();
                };
                /**
                 * Sets focus on the specified `ion-textarea`. Use this method instead of the global
                 * `input.focus()`.
                 */
                Textarea.prototype.setFocus = function () {
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
                 * Returns the native `<textarea>` element used under the hood.
                 */
                Textarea.prototype.getInputElement = function () {
                    return Promise.resolve(this.nativeInput);
                };
                Textarea.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'interactive': true,
                        'textarea': true,
                        'input': true,
                        'interactive-disabled': this.disabled,
                        'has-placeholder': this.placeholder != null,
                        'has-value': this.hasValue(),
                        'has-focus': this.hasFocus
                    });
                };
                /**
                 * Check if we need to clear the text input if clearOnEdit is enabled
                 */
                Textarea.prototype.checkClearOnEdit = function () {
                    if (!this.clearOnEdit) {
                        return;
                    }
                    // Did the input value change after it was blurred and edited?
                    if (this.didBlurAfterEdit && this.hasValue()) {
                        // Clear the input
                        this.value = '';
                    }
                    // Reset the flag
                    this.didBlurAfterEdit = false;
                };
                Textarea.prototype.focusChange = function () {
                    // If clearOnEdit is enabled and the input blurred but has a value, set a flag
                    if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
                        this.didBlurAfterEdit = true;
                    }
                    this.emitStyle();
                };
                Textarea.prototype.hasValue = function () {
                    return this.getValue() !== '';
                };
                Textarea.prototype.getValue = function () {
                    return this.value || '';
                };
                Textarea.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        'aria-disabled': this.disabled ? 'true' : null,
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a))
                    };
                };
                Textarea.prototype.__stencil_render = function () {
                    var _this = this;
                    var value = this.getValue();
                    var labelId = this.inputId + '-lbl';
                    var label = findItemLabel(this.el);
                    if (label) {
                        label.id = labelId;
                    }
                    return (h("textarea", { class: "native-textarea", ref: function (el) { return _this.nativeInput = el; }, autoCapitalize: this.autocapitalize, autoFocus: this.autofocus, disabled: this.disabled, maxLength: this.maxlength, minLength: this.minlength, name: this.name, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, cols: this.cols, rows: this.rows, wrap: this.wrap, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown }, value));
                };
                Object.defineProperty(Textarea.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Textarea, "watchers", {
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
                Textarea.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Textarea, "style", {
                    get: function () { return ".sc-ion-textarea-ios-h {\n  \n  --background: initial;\n  --color: initial;\n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: initial;\n  --placeholder-opacity: .5;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --border-radius: 0;\n  display: block;\n  position: relative;\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  white-space: pre-wrap;\n  z-index: 2;\n}\n\n.ion-color.sc-ion-textarea-ios-h {\n  background: initial;\n}\n\n.ion-color.sc-ion-textarea-ios-h {\n  color: var(--ion-color-base);\n}\n\nion-item.sc-ion-textarea-ios-h, ion-item .sc-ion-textarea-ios-h {\n  -ms-flex-item-align: baseline;\n  align-self: baseline;\n}\n\nion-item.sc-ion-textarea-ios-h:not(.item-label), ion-item:not(.item-label) .sc-ion-textarea-ios-h {\n  --padding-start: 0;\n}\n\n.native-textarea.sc-ion-textarea-ios {\n  border-radius: var(--border-radius);\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  border: 0;\n  outline: none;\n  background: transparent;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  resize: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .native-textarea.sc-ion-textarea-ios {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.native-textarea.sc-ion-textarea-ios::-moz-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.native-textarea.sc-ion-textarea-ios::placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n\n.native-textarea[disabled].sc-ion-textarea-ios {\n  opacity: 0.4;\n}\n\n.cloned-input.sc-ion-textarea-ios {\n  left: 0;\n  top: 0;\n  position: absolute;\n  pointer-events: none;\n}\n[dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios, [dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n.sc-ion-textarea-ios-h {\n  --padding-top: 10px;\n  --padding-end: 8px;\n  --padding-bottom: 10px;\n  --padding-start: 0;\n  font-size: inherit;\n}\n\n.item-label-stacked.sc-ion-textarea-ios-h, .item-label-stacked .sc-ion-textarea-ios-h, .item-label-floating.sc-ion-textarea-ios-h, .item-label-floating .sc-ion-textarea-ios-h {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 0px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Textarea;
            }());
            exports('ion_textarea', Textarea);
            var textareaIds = 0;
        }
    };
});
