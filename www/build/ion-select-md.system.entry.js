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
System.register(['./chunk-a61457cf.system.js', './chunk-ba8c0cb1.system.js', './chunk-f43705e2.system.js', './chunk-93181f6c.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getIonMode, h, getElement, Host, popoverController, actionSheetController, alertController, hostContext, findItemLabel, renderHiddenInput;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                getIonMode = module.c;
                h = module.h;
                getElement = module.f;
                Host = module.H;
            }, function (module) {
                popoverController = module.f;
                actionSheetController = module.h;
                alertController = module.j;
            }, function (module) {
                hostContext = module.h;
            }, function (module) {
                findItemLabel = module.f;
                renderHiddenInput = module.a;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Select = /** @class */ (function () {
                function Select(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.childOpts = [];
                    this.inputId = "ion-sel-" + selectIds++;
                    this.didInit = false;
                    this.isExpanded = false;
                    /**
                     * If `true`, the user cannot interact with the select.
                     */
                    this.disabled = false;
                    /**
                     * The text to display on the cancel button.
                     */
                    this.cancelText = 'Cancel';
                    /**
                     * The text to display on the ok button.
                     */
                    this.okText = 'OK';
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = this.inputId;
                    /**
                     * If `true`, the select can accept multiple values.
                     */
                    this.multiple = false;
                    /**
                     * The interface the select should use: `action-sheet`, `popover` or `alert`.
                     */
                    this.interface = 'alert';
                    /**
                     * Any additional options that the `alert`, `action-sheet` or `popover` interface
                     * can take. See the [AlertController API docs](../../alert/AlertController/#create), the
                     * [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
                     * [PopoverController API docs](../../popover/PopoverController/#create) for the
                     * create options for each interface.
                     */
                    this.interfaceOptions = {};
                    this.onFocus = function () {
                        _this.ionFocus.emit();
                    };
                    this.onBlur = function () {
                        _this.ionBlur.emit();
                    };
                    this.ionChange = createEvent(this, "ionChange", 7);
                    this.ionCancel = createEvent(this, "ionCancel", 7);
                    this.ionFocus = createEvent(this, "ionFocus", 7);
                    this.ionBlur = createEvent(this, "ionBlur", 7);
                    this.ionStyle = createEvent(this, "ionStyle", 7);
                }
                Select.prototype.disabledChanged = function () {
                    this.emitStyle();
                };
                Select.prototype.valueChanged = function () {
                    if (this.didInit) {
                        this.updateOptions();
                        this.ionChange.emit({
                            value: this.value,
                        });
                        this.emitStyle();
                    }
                };
                Select.prototype.selectOptionChanged = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadOptions()];
                                case 1:
                                    _a.sent();
                                    if (this.didInit) {
                                        this.updateOptions();
                                        this.updateOverlayOptions();
                                        this.emitStyle();
                                        /**
                                         * In the event that options
                                         * are not loaded at component load
                                         * this ensures that any value that is
                                         * set is properly rendered once
                                         * options have been loaded
                                         */
                                        if (this.value !== undefined) {
                                            this.el.forceUpdate();
                                        }
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                Select.prototype.onClick = function (ev) {
                    this.setFocus();
                    this.open(ev);
                };
                Select.prototype.componentDidLoad = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var checked, checked;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadOptions()];
                                case 1:
                                    _a.sent();
                                    if (this.value === undefined) {
                                        if (this.multiple) {
                                            checked = this.childOpts.filter(function (o) { return o.selected; });
                                            this.value = checked.map(function (o) { return o.value; });
                                        }
                                        else {
                                            checked = this.childOpts.find(function (o) { return o.selected; });
                                            if (checked) {
                                                this.value = checked.value;
                                            }
                                        }
                                    }
                                    this.updateOptions();
                                    this.emitStyle();
                                    this.el.forceUpdate();
                                    this.didInit = true;
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Open the select overlay. The overlay is either an alert, action sheet, or popover,
                 * depending on the `interface` property on the `ion-select`.
                 *
                 * @param event The user interface event that called the open.
                 */
                Select.prototype.open = function (event) {
                    return __awaiter(this, void 0, void 0, function () {
                        var overlay, _a;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (this.disabled || this.isExpanded) {
                                        return [2 /*return*/, undefined];
                                    }
                                    _a = this;
                                    return [4 /*yield*/, this.createOverlay(event)];
                                case 1:
                                    overlay = _a.overlay = _b.sent();
                                    this.isExpanded = true;
                                    overlay.onDidDismiss().then(function () {
                                        _this.overlay = undefined;
                                        _this.isExpanded = false;
                                        _this.setFocus();
                                    });
                                    return [4 /*yield*/, overlay.present()];
                                case 2:
                                    _b.sent();
                                    return [2 /*return*/, overlay];
                            }
                        });
                    });
                };
                Select.prototype.createOverlay = function (ev) {
                    var selectInterface = this.interface;
                    if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
                        console.warn("Select interface cannot be \"" + selectInterface + "\" with a multi-value select. Using the \"alert\" interface instead.");
                        selectInterface = 'alert';
                    }
                    if (selectInterface === 'popover' && !ev) {
                        console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
                        selectInterface = 'alert';
                    }
                    if (selectInterface === 'popover') {
                        return this.openPopover(ev);
                    }
                    if (selectInterface === 'action-sheet') {
                        return this.openActionSheet();
                    }
                    return this.openAlert();
                };
                Select.prototype.updateOverlayOptions = function () {
                    if (!this.overlay) {
                        return;
                    }
                    var overlay = this.overlay;
                    switch (this.interface) {
                        case 'action-sheet':
                            overlay.buttons = this.createActionSheetButtons(this.childOpts);
                            break;
                        case 'popover':
                            var popover = overlay.querySelector('ion-select-popover');
                            if (popover) {
                                popover.options = this.createPopoverOptions(this.childOpts);
                            }
                            break;
                        default:
                            var inputType = (this.multiple ? 'checkbox' : 'radio');
                            overlay.inputs = this.createAlertInputs(this.childOpts, inputType);
                            break;
                    }
                };
                Select.prototype.createActionSheetButtons = function (data) {
                    var _this = this;
                    var actionSheetButtons = data.map(function (option) {
                        return {
                            role: (option.selected ? 'selected' : ''),
                            text: option.textContent,
                            handler: function () {
                                _this.value = option.value;
                            }
                        };
                    });
                    // Add "cancel" button
                    actionSheetButtons.push({
                        text: this.cancelText,
                        role: 'cancel',
                        handler: function () {
                            _this.ionCancel.emit();
                        }
                    });
                    return actionSheetButtons;
                };
                Select.prototype.createAlertInputs = function (data, inputType) {
                    return data.map(function (o) {
                        return {
                            type: inputType,
                            label: o.textContent,
                            value: o.value,
                            checked: o.selected,
                            disabled: o.disabled
                        };
                    });
                };
                Select.prototype.createPopoverOptions = function (data) {
                    var _this = this;
                    return data.map(function (o) {
                        return {
                            text: o.textContent,
                            value: o.value,
                            checked: o.selected,
                            disabled: o.disabled,
                            handler: function () {
                                _this.value = o.value;
                                _this.close();
                            }
                        };
                    });
                };
                Select.prototype.openPopover = function (ev) {
                    return __awaiter(this, void 0, void 0, function () {
                        var interfaceOptions, mode, popoverOpts;
                        return __generator(this, function (_a) {
                            interfaceOptions = this.interfaceOptions;
                            mode = getIonMode(this);
                            popoverOpts = Object.assign({ mode: mode }, interfaceOptions, { component: 'ion-select-popover', cssClass: ['select-popover', interfaceOptions.cssClass], event: ev, componentProps: {
                                    header: interfaceOptions.header,
                                    subHeader: interfaceOptions.subHeader,
                                    message: interfaceOptions.message,
                                    value: this.value,
                                    options: this.createPopoverOptions(this.childOpts)
                                } });
                            return [2 /*return*/, popoverController.create(popoverOpts)];
                        });
                    });
                };
                Select.prototype.openActionSheet = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var mode, interfaceOptions, actionSheetOpts;
                        return __generator(this, function (_a) {
                            mode = getIonMode(this);
                            interfaceOptions = this.interfaceOptions;
                            actionSheetOpts = Object.assign({ mode: mode }, interfaceOptions, { buttons: this.createActionSheetButtons(this.childOpts), cssClass: ['select-action-sheet', interfaceOptions.cssClass] });
                            return [2 /*return*/, actionSheetController.create(actionSheetOpts)];
                        });
                    });
                };
                Select.prototype.openAlert = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var label, labelText, interfaceOptions, inputType, mode, alertOpts;
                        var _this = this;
                        return __generator(this, function (_a) {
                            label = this.getLabel();
                            labelText = (label) ? label.textContent : null;
                            interfaceOptions = this.interfaceOptions;
                            inputType = (this.multiple ? 'checkbox' : 'radio');
                            mode = getIonMode(this);
                            alertOpts = Object.assign({ mode: mode }, interfaceOptions, { header: interfaceOptions.header ? interfaceOptions.header : labelText, inputs: this.createAlertInputs(this.childOpts, inputType), buttons: [
                                    {
                                        text: this.cancelText,
                                        role: 'cancel',
                                        handler: function () {
                                            _this.ionCancel.emit();
                                        }
                                    },
                                    {
                                        text: this.okText,
                                        handler: function (selectedValues) {
                                            _this.value = selectedValues;
                                        }
                                    }
                                ], cssClass: ['select-alert', interfaceOptions.cssClass,
                                    (this.multiple ? 'multiple-select-alert' : 'single-select-alert')] });
                            return [2 /*return*/, alertController.create(alertOpts)];
                        });
                    });
                };
                /**
                 * Close the select interface.
                 */
                Select.prototype.close = function () {
                    // TODO check !this.overlay || !this.isFocus()
                    if (!this.overlay) {
                        return Promise.resolve(false);
                    }
                    return this.overlay.dismiss();
                };
                Select.prototype.loadOptions = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = this;
                                    return [4 /*yield*/, Promise.all(Array.from(this.el.querySelectorAll('ion-select-option')).map(function (o) { return o.componentOnReady(); }))];
                                case 1:
                                    _a.childOpts = _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                Select.prototype.updateOptions = function () {
                    // iterate all options, updating the selected prop
                    var canSelect = true;
                    for (var _i = 0, _a = this.childOpts; _i < _a.length; _i++) {
                        var selectOption = _a[_i];
                        var selected = canSelect && isOptionSelected(this.value, selectOption.value, this.compareWith);
                        selectOption.selected = selected;
                        // if current option is selected and select is single-option, we can't select
                        // any option more
                        if (selected && !this.multiple) {
                            canSelect = false;
                        }
                    }
                };
                Select.prototype.getLabel = function () {
                    return findItemLabel(this.el);
                };
                Select.prototype.hasValue = function () {
                    return this.getText() !== '';
                };
                Select.prototype.getText = function () {
                    var selectedText = this.selectedText;
                    if (selectedText != null && selectedText !== '') {
                        return selectedText;
                    }
                    return generateText(this.childOpts, this.value, this.compareWith);
                };
                Select.prototype.setFocus = function () {
                    if (this.buttonEl) {
                        this.buttonEl.focus();
                    }
                };
                Select.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'interactive': true,
                        'select': true,
                        'has-placeholder': this.placeholder != null,
                        'has-value': this.hasValue(),
                        'interactive-disabled': this.disabled,
                        'select-disabled': this.disabled
                    });
                };
                Select.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    var labelId = this.inputId + '-lbl';
                    var label = findItemLabel(this.el);
                    if (label) {
                        label.id = labelId;
                    }
                    return {
                        'role': 'combobox',
                        'aria-disabled': this.disabled ? 'true' : null,
                        'aria-expanded': "" + this.isExpanded,
                        'aria-haspopup': 'dialog',
                        'aria-labelledby': labelId,
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a['in-item'] = hostContext('ion-item', this.el),
                            _a['select-disabled'] = this.disabled,
                            _a)
                    };
                };
                Select.prototype.__stencil_render = function () {
                    var _this = this;
                    renderHiddenInput(true, this.el, this.name, parseValue(this.value), this.disabled);
                    var labelId = this.inputId + '-lbl';
                    var label = findItemLabel(this.el);
                    if (label) {
                        label.id = labelId;
                    }
                    var addPlaceholderClass = false;
                    var selectText = this.getText();
                    if (selectText === '' && this.placeholder != null) {
                        selectText = this.placeholder;
                        addPlaceholderClass = true;
                    }
                    var selectTextClasses = {
                        'select-text': true,
                        'select-placeholder': addPlaceholderClass
                    };
                    return [
                        h("div", { class: selectTextClasses }, selectText),
                        h("div", { class: "select-icon", role: "presentation" }, h("div", { class: "select-icon-inner" })),
                        h("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled, ref: (function (el) { return _this.buttonEl = el; }) })
                    ];
                };
                Object.defineProperty(Select.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Select, "watchers", {
                    get: function () {
                        return {
                            "disabled": ["disabledChanged"],
                            "value": ["valueChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Select.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Select, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --padding-top: Top padding of the select\n   * \@prop --padding-end: End padding of the select\n   * \@prop --padding-bottom: Bottom padding of the select\n   * \@prop --padding-start: Start padding of the select\n   */\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  font-family: var(--ion-font-family, inherit);\n  overflow: hidden;\n  z-index: 2;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n:host(.in-item) {\n  position: static;\n  max-width: 45%;\n}\n\n:host(.select-disabled) {\n  opacity: 0.4;\n  pointer-events: none;\n}\n\n:host(.ion-focused) button {\n  border: 2px solid #5e9ed6;\n}\n\n.select-placeholder {\n  color: currentColor;\n  opacity: 0.33;\n}\n\nbutton {\n  left: 0;\n  top: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n}\n[dir=rtl] button, :host-context([dir=rtl]) button {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\nbutton::-moz-focus-inner {\n  border: 0;\n}\n\n.select-icon {\n  position: relative;\n}\n\n.select-text {\n  -ms-flex: 1;\n  flex: 1;\n  min-width: 16px;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.select-icon-inner {\n  left: 5px;\n  top: 50%;\n  margin-top: -3px;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 5px solid;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  color: currentColor;\n  opacity: 0.33;\n  pointer-events: none;\n}\n[dir=rtl] .select-icon-inner, :host-context([dir=rtl]) .select-icon-inner {\n  left: unset;\n  right: unset;\n  right: 5px;\n}\n\n:host {\n  --padding-top: 10px;\n  --padding-end: 0;\n  --padding-bottom: 11px;\n  --padding-start: 16px;\n}\n\n.select-icon {\n  width: 19px;\n  height: 19px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Select;
            }());
            exports('ion_select', Select);
            function parseValue(value) {
                if (value == null) {
                    return undefined;
                }
                if (Array.isArray(value)) {
                    return value.join(',');
                }
                return value.toString();
            }
            function isOptionSelected(currentValue, compareValue, compareWith) {
                if (currentValue === undefined) {
                    return false;
                }
                if (Array.isArray(currentValue)) {
                    return currentValue.some(function (val) { return compareOptions(val, compareValue, compareWith); });
                }
                else {
                    return compareOptions(currentValue, compareValue, compareWith);
                }
            }
            function compareOptions(currentValue, compareValue, compareWith) {
                if (typeof compareWith === 'function') {
                    return compareWith(currentValue, compareValue);
                }
                else if (typeof compareWith === 'string') {
                    return currentValue[compareWith] === compareValue[compareWith];
                }
                else {
                    return currentValue === compareValue;
                }
            }
            function generateText(opts, value, compareWith) {
                if (value === undefined) {
                    return '';
                }
                if (Array.isArray(value)) {
                    return value
                        .map(function (v) { return textForValue(opts, v, compareWith); })
                        .filter(function (opt) { return opt !== null; })
                        .join(', ');
                }
                else {
                    return textForValue(opts, value, compareWith) || '';
                }
            }
            function textForValue(opts, value, compareWith) {
                var selectOpt = opts.find(function (opt) {
                    return compareOptions(opt.value, value, compareWith);
                });
                return selectOpt
                    ? selectOpt.textContent
                    : null;
            }
            var selectIds = 0;
        }
    };
});
