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
System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js', './chunk-93181f6c.system.js', './chunk-67f04d34.system.js'], function (exports, module) {
    'use strict';
    var registerInstance, createEvent, getContext, getIonMode, h, getElement, Host, createColorClasses, hostContext, findItemLabel, renderHiddenInput, hapticSelection;
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
                hostContext = module.h;
            }, function (module) {
                findItemLabel = module.f;
                renderHiddenInput = module.a;
            }, function (module) {
                hapticSelection = module.c;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Toggle = /** @class */ (function () {
                function Toggle(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.inputId = "ion-tg-" + toggleIds++;
                    this.lastDrag = 0;
                    this.activated = false;
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = this.inputId;
                    /**
                     * If `true`, the toggle is selected.
                     */
                    this.checked = false;
                    /**
                     * If `true`, the user cannot interact with the toggle.
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
                    this.queue = getContext(this, "queue");
                    this.doc = getContext(this, "document");
                }
                Toggle.prototype.checkedChanged = function (isChecked) {
                    this.ionChange.emit({
                        checked: isChecked,
                        value: this.value
                    });
                };
                Toggle.prototype.disabledChanged = function () {
                    this.emitStyle();
                    if (this.gesture) {
                        this.gesture.setDisabled(this.disabled);
                    }
                };
                Toggle.prototype.componentWillLoad = function () {
                    this.emitStyle();
                };
                Toggle.prototype.componentDidLoad = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = this;
                                    return [4 /*yield*/, module.import('./index-609ae789.system.js')];
                                case 1:
                                    _a.gesture = (_b.sent()).createGesture({
                                        el: this.el,
                                        gestureName: 'toggle',
                                        gesturePriority: 100,
                                        threshold: 5,
                                        passive: false,
                                        onStart: function () { return _this.onStart(); },
                                        onMove: function (ev) { return _this.onMove(ev); },
                                        onEnd: function (ev) { return _this.onEnd(ev); },
                                    });
                                    this.disabledChanged();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                Toggle.prototype.componentDidUnload = function () {
                    if (this.gesture) {
                        this.gesture.destroy();
                        this.gesture = undefined;
                    }
                };
                Toggle.prototype.onClick = function () {
                    if (this.lastDrag + 300 < Date.now()) {
                        this.checked = !this.checked;
                    }
                };
                Toggle.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'interactive-disabled': this.disabled,
                    });
                };
                Toggle.prototype.onStart = function () {
                    this.activated = true;
                    // touch-action does not work in iOS
                    this.setFocus();
                };
                Toggle.prototype.onMove = function (detail) {
                    if (shouldToggle(document, this.checked, detail.deltaX, -10)) {
                        this.checked = !this.checked;
                        hapticSelection();
                    }
                };
                Toggle.prototype.onEnd = function (ev) {
                    this.activated = false;
                    this.lastDrag = Date.now();
                    ev.event.preventDefault();
                    ev.event.stopImmediatePropagation();
                };
                Toggle.prototype.getValue = function () {
                    return this.value || '';
                };
                Toggle.prototype.setFocus = function () {
                    if (this.buttonEl) {
                        this.buttonEl.focus();
                    }
                };
                Toggle.prototype.hostData = function () {
                    var _a;
                    var _b = this, inputId = _b.inputId, disabled = _b.disabled, checked = _b.checked, activated = _b.activated, color = _b.color, el = _b.el;
                    var mode = getIonMode(this);
                    var labelId = inputId + '-lbl';
                    var label = findItemLabel(el);
                    if (label) {
                        label.id = labelId;
                    }
                    return {
                        'role': 'checkbox',
                        'aria-disabled': disabled ? 'true' : null,
                        'aria-checked': "" + checked,
                        'aria-labelledby': labelId,
                        class: Object.assign({}, createColorClasses(color), (_a = {}, _a["" + mode] = true, _a['in-item'] = hostContext('ion-item', el), _a['toggle-activated'] = activated, _a['toggle-checked'] = checked, _a['toggle-disabled'] = disabled, _a['interactive'] = true, _a))
                    };
                };
                Toggle.prototype.__stencil_render = function () {
                    var _this = this;
                    var value = this.getValue();
                    renderHiddenInput(true, this.el, this.name, (this.checked ? value : ''), this.disabled);
                    return [
                        h("div", { class: "toggle-icon" }, h("div", { class: "toggle-inner" })),
                        h("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled, ref: function (el) { return _this.buttonEl = el; } })
                    ];
                };
                Object.defineProperty(Toggle.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Toggle, "watchers", {
                    get: function () {
                        return {
                            "checked": ["checkedChanged"],
                            "disabled": ["disabledChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Toggle.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Toggle, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --background: Background of the toggle\n   * \@prop --background-checked: Background of the toggle when checked\n   * \@prop --handle-background: Background of the toggle handle\n   * \@prop --handle-background-checked: Background of the toggle handle when checked\n   */\n  /* stylelint-disable-next-line declaration-no-important */\n  -webkit-box-sizing: content-box !important;\n  box-sizing: content-box !important;\n  display: inline-block;\n  outline: none;\n  contain: content;\n  cursor: pointer;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 2;\n}\n\n:host(.ion-focused) input {\n  border: 2px solid #5e9ed6;\n}\n\n:host(.toggle-disabled) {\n  pointer-events: none;\n}\n\nbutton {\n  left: 0;\n  top: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n}\n[dir=rtl] button, :host-context([dir=rtl]) button {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\nbutton::-moz-focus-inner {\n  border: 0;\n}\n\n:host {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n  --background-checked: var(--ion-color-primary, #3880ff);\n  --handle-background: var(--ion-item-background, var(--ion-background-color, #fff));\n  --handle-background-checked: var(--ion-item-background, var(--ion-background-color, #fff));\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  position: relative;\n  width: 51px;\n  height: 32px;\n  contain: strict;\n}\n\n:host(.ion-color.toggle-checked) .toggle-icon {\n  background: var(--ion-color-base);\n}\n\n.toggle-icon {\n  border-radius: 16px;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-transition: background-color 300ms;\n  transition: background-color 300ms;\n  background-color: var(--ion-color-step-50, #f2f2f2);\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.toggle-icon::before {\n  left: 2px;\n  right: 2px;\n  top: 2px;\n  bottom: 2px;\n  border-radius: 16px;\n  position: absolute;\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1);\n  -webkit-transition: -webkit-transform 300ms;\n  transition: -webkit-transform 300ms;\n  transition: transform 300ms;\n  transition: transform 300ms, -webkit-transform 300ms;\n  background: var(--background);\n  content: \"\";\n}\n\n.toggle-inner {\n  left: 2px;\n  top: 2px;\n  border-radius: 14px;\n  position: absolute;\n  width: 28px;\n  height: 28px;\n  -webkit-transition: width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms, -webkit-transform 300ms;\n  transition: width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms, -webkit-transform 300ms;\n  transition: transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms;\n  transition: transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms, -webkit-transform 300ms;\n  background: var(--handle-background);\n  -webkit-box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);\n  will-change: transform;\n  contain: strict;\n}\n[dir=rtl] .toggle-inner, :host-context([dir=rtl]) .toggle-inner {\n  left: unset;\n  right: unset;\n  right: 2px;\n}\n\n:host(.toggle-checked) .toggle-icon {\n  background: var(--background-checked);\n}\n\n:host(.toggle-activated) .toggle-icon::before,\n:host(.toggle-checked) .toggle-icon::before {\n  -webkit-transform: scale3d(0, 0, 0);\n  transform: scale3d(0, 0, 0);\n}\n\n:host(.toggle-checked) .toggle-inner {\n  -webkit-transform: translate3d(19px,  0,  0);\n  transform: translate3d(19px,  0,  0);\n  background: var(--handle-background-checked);\n}\n:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner, :host-context([dir=rtl]).toggle-checked .toggle-inner {\n  -webkit-transform: translate3d(calc(-1 * 19px),  0,  0);\n  transform: translate3d(calc(-1 * 19px),  0,  0);\n}\n\n:host(.toggle-activated.toggle-checked) .toggle-inner::before {\n  -webkit-transform: scale3d(0, 0, 0);\n  transform: scale3d(0, 0, 0);\n}\n\n:host(.toggle-activated) .toggle-inner {\n  width: 34px;\n}\n\n:host(.toggle-activated.toggle-checked) .toggle-inner {\n  left: -4px;\n}\n:host-context([dir=rtl]):host(.toggle-activated.toggle-checked) .toggle-inner, :host-context([dir=rtl]).toggle-activated.toggle-checked .toggle-inner {\n  left: unset;\n  right: unset;\n  right: -4px;\n}\n\n:host(.toggle-disabled) {\n  opacity: 0.3;\n}\n\n:host(.in-item[slot]) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 16px;\n  padding-right: 8px;\n  padding-top: 6px;\n  padding-bottom: 5px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.in-item[slot]) {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 16px;\n    padding-inline-start: 16px;\n    -webkit-padding-end: 8px;\n    padding-inline-end: 8px;\n  }\n}\n\n:host(.in-item[slot=start]) {\n  padding-left: 0;\n  padding-right: 16px;\n  padding-top: 6px;\n  padding-bottom: 5px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.in-item[slot=start]) {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 0;\n    padding-inline-start: 0;\n    -webkit-padding-end: 16px;\n    padding-inline-end: 16px;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Toggle;
            }());
            exports('ion_toggle', Toggle);
            function shouldToggle(doc, checked, deltaX, margin) {
                var isRTL = doc.dir === 'rtl';
                if (checked) {
                    return (!isRTL && (margin > deltaX)) ||
                        (isRTL && (-margin < deltaX));
                }
                else {
                    return (!isRTL && (-margin < deltaX)) ||
                        (isRTL && (margin > deltaX));
                }
            }
            var toggleIds = 0;
        }
    };
});
