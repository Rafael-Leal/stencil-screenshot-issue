System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js', './chunk-93181f6c.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getIonMode, h, getElement, Host, createColorClasses, hostContext, findItemLabel, renderHiddenInput;
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
                renderHiddenInput = module.a;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Checkbox = /** @class */ (function () {
                function Checkbox(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.inputId = "ion-cb-" + checkboxIds++;
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = this.inputId;
                    /**
                     * If `true`, the checkbox is selected.
                     */
                    this.checked = false;
                    /**
                     * If `true`, the checkbox will visually appear as indeterminate.
                     */
                    this.indeterminate = false;
                    /**
                     * If `true`, the user cannot interact with the checkbox.
                     */
                    this.disabled = false;
                    /**
                     * The value of the toggle does not mean if it's checked or not, use the `checked`
                     * property for that.
                     *
                     * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
                     * it's only used when the toggle participates in a native `<form>`.
                     */
                    this.value = 'on';
                    this.onFocus = function () {
                        _this.ionFocus.emit();
                    };
                    this.onBlur = function () {
                        _this.ionBlur.emit();
                    };
                    this.ionChange = createEvent(this, "ionChange", 7);
                    this.ionFocus = createEvent(this, "ionFocus", 7);
                    this.ionBlur = createEvent(this, "ionBlur", 7);
                    this.ionStyle = createEvent(this, "ionStyle", 7);
                }
                Checkbox.prototype.componentWillLoad = function () {
                    this.emitStyle();
                };
                Checkbox.prototype.checkedChanged = function (isChecked) {
                    this.ionChange.emit({
                        checked: isChecked,
                        value: this.value
                    });
                    this.emitStyle();
                };
                Checkbox.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'checkbox-checked': this.checked,
                        'interactive-disabled': this.disabled,
                    });
                };
                Checkbox.prototype.onClick = function () {
                    this.setFocus();
                    this.checked = !this.checked;
                    this.indeterminate = false;
                };
                Checkbox.prototype.setFocus = function () {
                    if (this.buttonEl) {
                        this.buttonEl.focus();
                    }
                };
                Checkbox.prototype.hostData = function () {
                    var _a;
                    var _b = this, inputId = _b.inputId, disabled = _b.disabled, checked = _b.checked, color = _b.color, el = _b.el;
                    var labelId = inputId + '-lbl';
                    var mode = getIonMode(this);
                    var label = findItemLabel(el);
                    if (label) {
                        label.id = labelId;
                    }
                    return {
                        'role': 'checkbox',
                        'aria-disabled': disabled ? 'true' : null,
                        'aria-checked': "" + checked,
                        'aria-labelledby': labelId,
                        class: Object.assign({}, createColorClasses(color), (_a = {}, _a["" + mode] = true, _a['in-item'] = hostContext('ion-item', el), _a['checkbox-checked'] = checked, _a['checkbox-disabled'] = disabled, _a['checkbox-indeterminate'] = this.indeterminate, _a['interactive'] = true, _a))
                    };
                };
                Checkbox.prototype.__stencil_render = function () {
                    var _this = this;
                    var mode = getIonMode(this);
                    renderHiddenInput(true, this.el, this.name, (this.checked ? this.value : ''), this.disabled);
                    var path = this.indeterminate
                        ? h("path", { d: "M6 12L18 12" })
                        : h("path", { d: "M5.9,12.5l3.8,3.8l8.8-8.8" });
                    if (mode === 'md') {
                        path = this.indeterminate
                            ? h("path", { d: "M2 12H22" })
                            : h("path", { d: "M1.73,12.91 8.1,19.28 22.79,4.59" });
                    }
                    return [
                        h("svg", { class: "checkbox-icon", viewBox: "0 0 24 24" }, path),
                        h("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled, ref: function (el) { return _this.buttonEl = el; } })
                    ];
                };
                Object.defineProperty(Checkbox.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Checkbox, "watchers", {
                    get: function () {
                        return {
                            "checked": ["checkedChanged"],
                            "disabled": ["emitStyle"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Checkbox.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Checkbox, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --size: Size of the checkbox icon\n   *\n   * \@prop --background: Background of the checkbox icon\n   * \@prop --background-checked: Background of the checkbox icon when checked\n   *\n   * \@prop --border-color: Border color of the checkbox icon\n   * \@prop --border-radius: Border radius of the checkbox icon\n   * \@prop --border-width: Border width of the checkbox icon\n   * \@prop --border-style: Border style of the checkbox icon\n   * \@prop --border-color-checked: Border color of the checkbox icon when checked\n   *\n   * \@prop --transition: Transition of the checkbox icon\n   *\n   * \@prop --checkmark-color: Color of the checkbox checkmark when checked\n   */\n  --background-checked: var(--ion-color-primary, #3880ff);\n  --border-color-checked: var(--ion-color-primary, #3880ff);\n  --checkmark-color: var(--ion-color-primary-contrast, #fff);\n  --transition: none;\n  display: inline-block;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 2;\n}\n\n:host(.ion-color) {\n  --background-checked: var(--ion-color-base);\n  --border-color-checked: var(--ion-color-base);\n  --checkmark-color: var(--ion-color-contrast);\n}\n\nbutton {\n  left: 0;\n  top: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n}\n[dir=rtl] button, :host-context([dir=rtl]) button {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\nbutton::-moz-focus-inner {\n  border: 0;\n}\n\n.checkbox-icon {\n  border-radius: var(--border-radius);\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  background: var(--background);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.checkbox-icon path {\n  fill: none;\n  stroke: var(--checkmark-color);\n  stroke-width: 1;\n  opacity: 0;\n}\n\n:host(.checkbox-checked) .checkbox-icon,\n:host(.checkbox-indeterminate) .checkbox-icon {\n  border-color: var(--border-color-checked);\n  background: var(--background-checked);\n}\n\n:host(.checkbox-checked) .checkbox-icon path,\n:host(.checkbox-indeterminate) .checkbox-icon path {\n  opacity: 1;\n}\n\n:host(.checkbox-disabled) {\n  pointer-events: none;\n}\n\n:host {\n  --border-radius: 50%;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, #c8c7cc)));\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n  --size: 26px;\n  width: var(--size);\n  height: var(--size);\n}\n\n:host(.checkbox-disabled) {\n  opacity: 0.3;\n}\n\n:host(.in-item) {\n  margin-left: 0;\n  margin-right: 8px;\n  margin-top: 10px;\n  margin-bottom: 9px;\n  display: block;\n  position: static;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.in-item) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 0;\n    margin-inline-start: 0;\n    -webkit-margin-end: 8px;\n    margin-inline-end: 8px;\n  }\n}\n\n:host(.in-item[slot=start]) {\n  margin-left: 2px;\n  margin-right: 16px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.in-item[slot=start]) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 2px;\n    margin-inline-start: 2px;\n    -webkit-margin-end: 16px;\n    margin-inline-end: 16px;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Checkbox;
            }());
            exports('ion_checkbox', Checkbox);
            var checkboxIds = 0;
        }
    };
});
