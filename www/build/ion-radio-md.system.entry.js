System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js', './chunk-93181f6c.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getIonMode, h, getElement, Host, createColorClasses, hostContext, findItemLabel;
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
                hostContext = module.h;
            }, function (module) {
                findItemLabel = module.f;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Radio = /** @class */ (function () {
                function Radio(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.inputId = "ion-rb-" + radioButtonIds++;
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = this.inputId;
                    /**
                     * If `true`, the user cannot interact with the radio.
                     */
                    this.disabled = false;
                    /**
                     * If `true`, the radio is selected.
                     */
                    this.checked = false;
                    this.onFocus = function () {
                        _this.ionFocus.emit();
                    };
                    this.onBlur = function () {
                        _this.ionBlur.emit();
                    };
                    this.ionRadioDidLoad = createEvent(this, "ionRadioDidLoad", 7);
                    this.ionRadioDidUnload = createEvent(this, "ionRadioDidUnload", 7);
                    this.ionStyle = createEvent(this, "ionStyle", 7);
                    this.ionSelect = createEvent(this, "ionSelect", 7);
                    this.ionDeselect = createEvent(this, "ionDeselect", 7);
                    this.ionFocus = createEvent(this, "ionFocus", 7);
                    this.ionBlur = createEvent(this, "ionBlur", 7);
                }
                Radio.prototype.colorChanged = function () {
                    this.emitStyle();
                };
                Radio.prototype.checkedChanged = function (isChecked) {
                    if (isChecked) {
                        this.ionSelect.emit({
                            checked: true,
                            value: this.value
                        });
                    }
                    this.emitStyle();
                };
                Radio.prototype.disabledChanged = function () {
                    this.emitStyle();
                };
                Radio.prototype.componentWillLoad = function () {
                    if (this.value === undefined) {
                        this.value = this.inputId;
                    }
                    this.emitStyle();
                };
                Radio.prototype.componentDidLoad = function () {
                    this.ionRadioDidLoad.emit();
                };
                Radio.prototype.componentDidUnload = function () {
                    this.ionRadioDidUnload.emit();
                };
                Radio.prototype.onClick = function () {
                    if (this.checked) {
                        this.ionDeselect.emit();
                    }
                    else {
                        this.checked = true;
                    }
                };
                Radio.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'radio-checked': this.checked,
                        'interactive-disabled': this.disabled,
                    });
                };
                Radio.prototype.hostData = function () {
                    var _a;
                    var _b = this, inputId = _b.inputId, disabled = _b.disabled, checked = _b.checked, color = _b.color, el = _b.el;
                    var mode = getIonMode(this);
                    var labelId = inputId + '-lbl';
                    var label = findItemLabel(el);
                    if (label) {
                        label.id = labelId;
                    }
                    return {
                        'role': 'radio',
                        'aria-disabled': disabled ? 'true' : null,
                        'aria-checked': "" + checked,
                        'aria-labelledby': labelId,
                        class: Object.assign({}, createColorClasses(color), (_a = {}, _a["" + mode] = true, _a['in-item'] = hostContext('ion-item', el), _a['interactive'] = true, _a['radio-checked'] = checked, _a['radio-disabled'] = disabled, _a))
                    };
                };
                Radio.prototype.__stencil_render = function () {
                    return [
                        h("div", { class: "radio-icon" }, h("div", { class: "radio-inner" })),
                        h("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled }),
                    ];
                };
                Object.defineProperty(Radio.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Radio, "watchers", {
                    get: function () {
                        return {
                            "color": ["colorChanged"],
                            "checked": ["checkedChanged"],
                            "disabled": ["disabledChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Radio.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Radio, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --color: Color of the radio\n   * \@prop --color-checked: Color of the checked radio\n   */\n  display: inline-block;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 2;\n}\n\n:host(.radio-disabled) {\n  pointer-events: none;\n}\n\n.radio-icon {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  contain: layout size style;\n}\n\nbutton {\n  left: 0;\n  top: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n}\n[dir=rtl] button, :host-context([dir=rtl]) button {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\nbutton::-moz-focus-inner {\n  border: 0;\n}\n\n.radio-icon,\n.radio-inner {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  --color: var(--ion-color-step-400, #999999);\n  --color-checked: var(--ion-color-primary, #3880ff);\n  --border-width: 2px;\n  --border-style: solid;\n  width: 20px;\n  height: 20px;\n}\n\n:host(.ion-color) .radio-inner {\n  background: var(--ion-color-base);\n}\n\n:host(.ion-color.radio-checked) .radio-icon {\n  border-color: var(--ion-color-base);\n}\n\n.radio-icon {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-radius: 50%;\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--color);\n}\n\n.radio-inner {\n  border-radius: 50%;\n  width: calc(50% + var(--border-width));\n  height: calc(50% + var(--border-width));\n  -webkit-transform: scale3d(0, 0, 0);\n  transform: scale3d(0, 0, 0);\n  -webkit-transition: -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  background: var(--color-checked);\n}\n\n:host(.radio-checked) .radio-icon {\n  border-color: var(--color-checked);\n}\n\n:host(.radio-checked) .radio-inner {\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1);\n}\n\n:host(.radio-disabled) {\n  opacity: 0.3;\n}\n\n:host(.ion-focused) .radio-icon::after {\n  border-radius: 50%;\n  left: -12px;\n  top: -12px;\n  display: block;\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  background: var(--ion-color-primary-tint, #4c8dff);\n  content: \"\";\n  opacity: 0.2;\n}\n:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after, :host-context([dir=rtl]).ion-focused .radio-icon::after {\n  left: unset;\n  right: unset;\n  right: -12px;\n}\n\n:host(.in-item) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 9px;\n  margin-bottom: 9px;\n  display: block;\n  position: static;\n}\n\n:host(.in-item[slot=start]) {\n  margin-left: 4px;\n  margin-right: 36px;\n  margin-top: 11px;\n  margin-bottom: 10px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.in-item[slot=start]) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 4px;\n    margin-inline-start: 4px;\n    -webkit-margin-end: 36px;\n    margin-inline-end: 36px;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Radio;
            }());
            exports('ion_radio', Radio);
            var radioButtonIds = 0;
        }
    };
});
