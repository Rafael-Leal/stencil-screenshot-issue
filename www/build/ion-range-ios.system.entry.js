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
System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js', './chunk-93181f6c.system.js'], function (exports, module) {
    'use strict';
    var registerInstance, createEvent, getContext, getIonMode, h, getElement, Host, createColorClasses, hostContext, clamp, debounceEvent;
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
                clamp = module.c;
                debounceEvent = module.d;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             *
             * @slot start - Content is placed to the left of the range slider in LTR, and to the right in RTL.
             * @slot end - Content is placed to the right of the range slider in LTR, and to the left in RTL.
             */
            var Range = /** @class */ (function () {
                function Range(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.noUpdate = false;
                    this.hasFocus = false;
                    this.ratioA = 0;
                    this.ratioB = 0;
                    /**
                     * How long, in milliseconds, to wait to trigger the
                     * `ionChange` event after each change in the range value.
                     */
                    this.debounce = 0;
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = '';
                    /**
                     * Show two knobs.
                     */
                    this.dualKnobs = false;
                    /**
                     * Minimum integer value of the range.
                     */
                    this.min = 0;
                    /**
                     * Maximum integer value of the range.
                     */
                    this.max = 100;
                    /**
                     * If `true`, a pin with integer value is shown when the knob
                     * is pressed.
                     */
                    this.pin = false;
                    /**
                     * If `true`, the knob snaps to tick marks evenly spaced based
                     * on the step property value.
                     */
                    this.snaps = false;
                    /**
                     * Specifies the value granularity.
                     */
                    this.step = 1;
                    /**
                     * If `true`, tick marks are displayed based on the step value.
                     * Only applies when `snaps` is `true`.
                     */
                    this.ticks = true;
                    /**
                     * If `true`, the user cannot interact with the range.
                     */
                    this.disabled = false;
                    /**
                     * the value of the range.
                     */
                    this.value = 0;
                    this.clampBounds = function (value) {
                        return clamp(_this.min, value, _this.max);
                    };
                    this.ensureValueInBounds = function (value) {
                        if (_this.dualKnobs) {
                            return {
                                lower: _this.clampBounds(value.lower),
                                upper: _this.clampBounds(value.upper)
                            };
                        }
                        else {
                            return _this.clampBounds(value);
                        }
                    };
                    this.handleKeyboard = function (knob, isIncrease) {
                        var step = _this.step;
                        step = step > 0 ? step : 1;
                        step = step / (_this.max - _this.min);
                        if (!isIncrease) {
                            step *= -1;
                        }
                        if (knob === 'A') {
                            _this.ratioA = clamp(0, _this.ratioA + step, 1);
                        }
                        else {
                            _this.ratioB = clamp(0, _this.ratioB + step, 1);
                        }
                        _this.updateValue();
                    };
                    this.ionChange = createEvent(this, "ionChange", 7);
                    this.ionStyle = createEvent(this, "ionStyle", 7);
                    this.ionFocus = createEvent(this, "ionFocus", 7);
                    this.ionBlur = createEvent(this, "ionBlur", 7);
                    this.queue = getContext(this, "queue");
                    this.doc = getContext(this, "document");
                }
                Range.prototype.debounceChanged = function () {
                    this.ionChange = debounceEvent(this.ionChange, this.debounce);
                };
                Range.prototype.minChanged = function () {
                    if (!this.noUpdate) {
                        this.updateRatio();
                    }
                };
                Range.prototype.maxChanged = function () {
                    if (!this.noUpdate) {
                        this.updateRatio();
                    }
                };
                Range.prototype.disabledChanged = function () {
                    if (this.gesture) {
                        this.gesture.setDisabled(this.disabled);
                    }
                    this.emitStyle();
                };
                Range.prototype.valueChanged = function (value) {
                    if (!this.noUpdate) {
                        this.updateRatio();
                    }
                    value = this.ensureValueInBounds(value);
                    this.ionChange.emit({ value: value });
                };
                Range.prototype.onBlur = function () {
                    if (this.hasFocus) {
                        this.hasFocus = false;
                        this.ionBlur.emit();
                        this.emitStyle();
                    }
                };
                Range.prototype.onFocus = function () {
                    if (!this.hasFocus) {
                        this.hasFocus = true;
                        this.ionFocus.emit();
                        this.emitStyle();
                    }
                };
                Range.prototype.componentWillLoad = function () {
                    this.updateRatio();
                    this.debounceChanged();
                    this.emitStyle();
                };
                Range.prototype.componentDidLoad = function () {
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
                                        el: this.rangeSlider,
                                        gestureName: 'range',
                                        gesturePriority: 100,
                                        threshold: 0,
                                        onStart: function (ev) { return _this.onStart(ev); },
                                        onMove: function (ev) { return _this.onMove(ev); },
                                        onEnd: function (ev) { return _this.onEnd(ev); },
                                    });
                                    this.gesture.setDisabled(this.disabled);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                Range.prototype.componentDidUnload = function () {
                    if (this.gesture) {
                        this.gesture.destroy();
                        this.gesture = undefined;
                    }
                };
                Range.prototype.getValue = function () {
                    var value = this.value || 0;
                    if (this.dualKnobs) {
                        if (typeof value === 'object') {
                            return value;
                        }
                        return {
                            lower: 0,
                            upper: value
                        };
                    }
                    else {
                        if (typeof value === 'object') {
                            return value.upper;
                        }
                        return value;
                    }
                };
                Range.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'interactive': true,
                        'interactive-disabled': this.disabled
                    });
                };
                Range.prototype.onStart = function (detail) {
                    var rect = this.rect = this.rangeSlider.getBoundingClientRect();
                    var currentX = detail.currentX;
                    // figure out which knob they started closer to
                    var ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
                    if (document.dir === 'rtl') {
                        ratio = 1 - ratio;
                    }
                    this.pressedKnob =
                        !this.dualKnobs ||
                            Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio)
                            ? 'A'
                            : 'B';
                    this.setFocus(this.pressedKnob);
                    // update the active knob's position
                    this.update(currentX);
                };
                Range.prototype.onMove = function (detail) {
                    this.update(detail.currentX);
                };
                Range.prototype.onEnd = function (detail) {
                    this.update(detail.currentX);
                    this.pressedKnob = undefined;
                };
                Range.prototype.update = function (currentX) {
                    // figure out where the pointer is currently at
                    // update the knob being interacted with
                    var rect = this.rect;
                    var ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
                    if (document.dir === 'rtl') {
                        ratio = 1 - ratio;
                    }
                    if (this.snaps) {
                        // snaps the ratio to the current value
                        ratio = valueToRatio(ratioToValue(ratio, this.min, this.max, this.step), this.min, this.max);
                    }
                    // update which knob is pressed
                    if (this.pressedKnob === 'A') {
                        this.ratioA = ratio;
                    }
                    else {
                        this.ratioB = ratio;
                    }
                    // Update input value
                    this.updateValue();
                };
                Object.defineProperty(Range.prototype, "valA", {
                    get: function () {
                        return ratioToValue(this.ratioA, this.min, this.max, this.step);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Range.prototype, "valB", {
                    get: function () {
                        return ratioToValue(this.ratioB, this.min, this.max, this.step);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Range.prototype, "ratioLower", {
                    get: function () {
                        if (this.dualKnobs) {
                            return Math.min(this.ratioA, this.ratioB);
                        }
                        return 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Range.prototype, "ratioUpper", {
                    get: function () {
                        if (this.dualKnobs) {
                            return Math.max(this.ratioA, this.ratioB);
                        }
                        return this.ratioA;
                    },
                    enumerable: true,
                    configurable: true
                });
                Range.prototype.updateRatio = function () {
                    var value = this.getValue();
                    var _a = this, min = _a.min, max = _a.max;
                    if (this.dualKnobs) {
                        this.ratioA = valueToRatio(value.lower, min, max);
                        this.ratioB = valueToRatio(value.upper, min, max);
                    }
                    else {
                        this.ratioA = valueToRatio(value, min, max);
                    }
                };
                Range.prototype.updateValue = function () {
                    this.noUpdate = true;
                    var _a = this, valA = _a.valA, valB = _a.valB;
                    this.value = !this.dualKnobs
                        ? valA
                        : {
                            lower: Math.min(valA, valB),
                            upper: Math.max(valA, valB)
                        };
                    this.noUpdate = false;
                };
                Range.prototype.setFocus = function (knob) {
                    if (this.el.shadowRoot) {
                        var knobEl = this.el.shadowRoot.querySelector(knob === 'A' ? '.range-knob-a' : '.range-knob-b');
                        if (knobEl) {
                            knobEl.focus();
                        }
                    }
                };
                Range.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a['in-item'] = hostContext('ion-item', this.el), _a['range-disabled'] = this.disabled, _a['range-pressed'] = this.pressedKnob !== undefined, _a['range-has-pin'] = this.pin, _a))
                    };
                };
                Range.prototype.__stencil_render = function () {
                    var _this = this;
                    var _a = this, min = _a.min, max = _a.max, step = _a.step, ratioLower = _a.ratioLower, ratioUpper = _a.ratioUpper;
                    var barStart = ratioLower * 100 + "%";
                    var barEnd = 100 - ratioUpper * 100 + "%";
                    var doc = document;
                    var isRTL = doc.dir === 'rtl';
                    var start = isRTL ? 'right' : 'left';
                    var end = isRTL ? 'left' : 'right';
                    var ticks = [];
                    if (this.snaps && this.ticks) {
                        for (var value = min; value <= max; value += step) {
                            var ratio = valueToRatio(value, min, max);
                            var tick = {
                                ratio: ratio,
                                active: ratio >= ratioLower && ratio <= ratioUpper,
                            };
                            tick[start] = ratio * 100 + "%";
                            ticks.push(tick);
                        }
                    }
                    var tickStyle = function (tick) {
                        var style = {};
                        style[start] = tick[start];
                        return style;
                    };
                    var barStyle = function () {
                        var style = {};
                        style[start] = barStart;
                        style[end] = barEnd;
                        return style;
                    };
                    return [
                        h("slot", { name: "start" }),
                        h("div", { class: "range-slider", ref: function (el) { return _this.rangeSlider = el; } }, ticks.map(function (tick) { return (h("div", { style: tickStyle(tick), role: "presentation", class: {
                                'range-tick': true,
                                'range-tick-active': tick.active
                            } })); }), h("div", { class: "range-bar", role: "presentation" }), h("div", { class: "range-bar range-bar-active", role: "presentation", style: barStyle() }), renderKnob(isRTL, {
                            knob: 'A',
                            pressed: this.pressedKnob === 'A',
                            value: this.valA,
                            ratio: this.ratioA,
                            pin: this.pin,
                            disabled: this.disabled,
                            handleKeyboard: this.handleKeyboard,
                            min: min,
                            max: max
                        }), this.dualKnobs && renderKnob(isRTL, {
                            knob: 'B',
                            pressed: this.pressedKnob === 'B',
                            value: this.valB,
                            ratio: this.ratioB,
                            pin: this.pin,
                            disabled: this.disabled,
                            handleKeyboard: this.handleKeyboard,
                            min: min,
                            max: max
                        })),
                        h("slot", { name: "end" })
                    ];
                };
                Object.defineProperty(Range.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Range, "watchers", {
                    get: function () {
                        return {
                            "debounce": ["debounceChanged"],
                            "min": ["minChanged"],
                            "max": ["maxChanged"],
                            "disabled": ["disabledChanged"],
                            "value": ["valueChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Range.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Range, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --bar-background: Background of the range bar\n   * \@prop --bar-background-active: Background of the active range bar\n   * \@prop --bar-height: Height of the range bar\n   * \@prop --bar-border-radius: Border radius of the range bar\n   * \@prop --height: Height of the range\n   * \@prop --knob-background: Background of the range knob\n   * \@prop --knob-border-radius: Border radius of the range knob\n   * \@prop --knob-box-shadow: Box shadow of the range knob\n   * \@prop --knob-size: Size of the range knob\n   */\n  --knob-handle-size: calc(var(--knob-size) * 2);\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex: 3;\n  flex: 3;\n  -ms-flex-align: center;\n  align-items: center;\n  font-family: var(--ion-font-family, inherit);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 2;\n}\n\n:host(.range-disabled) {\n  pointer-events: none;\n}\n\n::slotted(ion-label) {\n  -ms-flex: initial;\n  flex: initial;\n}\n\n::slotted(ion-icon[slot]) {\n  font-size: 24px;\n}\n\n.range-slider {\n  position: relative;\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%;\n  height: var(--height);\n  contain: size layout style;\n  cursor: -webkit-grab;\n  cursor: grab;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n\n:host(.range-pressed) .range-slider {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.range-pin {\n  position: absolute;\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n  text-align: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.range-knob-handle {\n  left: 0;\n  top: calc((var(--height) - var(--knob-handle-size)) / 2);\n  margin-left: calc(0px - var(--knob-handle-size) / 2);\n  position: absolute;\n  width: var(--knob-handle-size);\n  height: var(--knob-handle-size);\n  text-align: center;\n}\n[dir=rtl] .range-knob-handle, :host-context([dir=rtl]) .range-knob-handle {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .range-knob-handle {\n    margin-left: unset;\n    -webkit-margin-start: calc(0px - var(--knob-handle-size) / 2);\n    margin-inline-start: calc(0px - var(--knob-handle-size) / 2);\n  }\n}\n[dir=rtl] .range-knob-handle, :host-context([dir=rtl]) .range-knob-handle {\n  /* stylelint-disable-next-line property-blacklist */\n  left: unset;\n}\n\n.range-knob-handle:active, .range-knob-handle:focus {\n  outline: none;\n}\n\n.range-bar {\n  border-radius: var(--bar-border-radius);\n  left: 0;\n  top: calc((var(--height) - var(--bar-height)) / 2);\n  position: absolute;\n  width: 100%;\n  height: var(--bar-height);\n  background: var(--bar-background);\n  pointer-events: none;\n}\n[dir=rtl] .range-bar, :host-context([dir=rtl]) .range-bar {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n[dir=rtl] .range-bar, :host-context([dir=rtl]) .range-bar {\n  /* stylelint-disable-next-line property-blacklist */\n  left: unset;\n}\n\n.range-knob {\n  border-radius: var(--knob-border-radius);\n  left: calc(50% - var(--knob-size) / 2);\n  top: calc(50% - var(--knob-size) / 2);\n  position: absolute;\n  width: var(--knob-size);\n  height: var(--knob-size);\n  background: var(--knob-background);\n  -webkit-box-shadow: var(--knob-box-shadow);\n  box-shadow: var(--knob-box-shadow);\n  z-index: 2;\n  pointer-events: none;\n}\n[dir=rtl] .range-knob, :host-context([dir=rtl]) .range-knob {\n  left: unset;\n  right: unset;\n  right: calc(50% - var(--knob-size) / 2);\n}\n\n[dir=rtl] .range-knob, :host-context([dir=rtl]) .range-knob {\n  /* stylelint-disable-next-line property-blacklist */\n  left: unset;\n}\n\n:host(.range-pressed) .range-bar-active {\n  will-change: left, right;\n}\n\n:host(.in-item) {\n  width: 100%;\n}\n\n:host(.in-item) ::slotted(ion-label) {\n  -ms-flex-item-align: center;\n  align-self: center;\n}\n\n:host {\n  --knob-border-radius: 50%;\n  --knob-background: var(--ion-background-color, #fff);\n  --knob-box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);\n  --knob-size: 28px;\n  --bar-height: 1px;\n  --bar-background: var(--ion-color-step-250, #bfbfbf);\n  --bar-background-active: var(--ion-color-primary, #3880ff);\n  --bar-border-radius: 0;\n  --height: 42px;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 16px;\n    padding-inline-start: 16px;\n    -webkit-padding-end: 16px;\n    padding-inline-end: 16px;\n  }\n}\n\n:host(.ion-color) .range-bar-active,\n:host(.ion-color) .range-tick-active {\n  background: var(--ion-color-base);\n}\n\n::slotted([slot=start]) {\n  margin-left: 0;\n  margin-right: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ::slotted([slot=start]) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 0;\n    margin-inline-start: 0;\n    -webkit-margin-end: 16px;\n    margin-inline-end: 16px;\n  }\n}\n\n::slotted([slot=end]) {\n  margin-left: 16px;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ::slotted([slot=end]) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 16px;\n    margin-inline-start: 16px;\n    -webkit-margin-end: 0;\n    margin-inline-end: 0;\n  }\n}\n\n:host(.range-has-pin) {\n  padding-top: 20px;\n}\n.range-bar-active {\n  bottom: 0;\n  width: auto;\n  background: var(--bar-background-active);\n}\n\n.range-tick {\n  margin-left: -0.5px;\n  border-radius: 0;\n  position: absolute;\n  top: 17.5px;\n  width: 1px;\n  height: 8px;\n  background: var(--ion-color-step-250, #bfbfbf);\n  pointer-events: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .range-tick {\n    margin-left: unset;\n    -webkit-margin-start: -0.5px;\n    margin-inline-start: -0.5px;\n  }\n}\n\n.range-tick-active {\n  background: var(--bar-background-active);\n}\n\n.range-pin {\n  -webkit-transform: translate3d(0,  28px,  0) scale(0.01);\n  transform: translate3d(0,  28px,  0) scale(0.01);\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  display: inline-block;\n  position: relative;\n  top: -20px;\n  min-width: 28px;\n  -webkit-transition: -webkit-transform 120ms ease;\n  transition: -webkit-transform 120ms ease;\n  transition: transform 120ms ease;\n  transition: transform 120ms ease, -webkit-transform 120ms ease;\n  background: transparent;\n  color: var(--ion-text-color, #000);\n  font-size: 12px;\n  text-align: center;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .range-pin {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 8px;\n    padding-inline-start: 8px;\n    -webkit-padding-end: 8px;\n    padding-inline-end: 8px;\n  }\n}\n\n.range-knob-pressed .range-pin {\n  -webkit-transform: translate3d(0,  0,  0) scale(1);\n  transform: translate3d(0,  0,  0) scale(1);\n}\n\n:host(.range-disabled) {\n  opacity: 0.5;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Range;
            }());
            exports('ion_range', Range);
            function renderKnob(isRTL, _a) {
                var knob = _a.knob, value = _a.value, ratio = _a.ratio, min = _a.min, max = _a.max, disabled = _a.disabled, pressed = _a.pressed, pin = _a.pin, handleKeyboard = _a.handleKeyboard;
                var start = isRTL ? 'right' : 'left';
                var knobStyle = function () {
                    var style = {};
                    style[start] = ratio * 100 + "%";
                    return style;
                };
                return (h("div", { onKeyDown: function (ev) {
                        var key = ev.key;
                        if (key === 'ArrowLeft' || key === 'ArrowDown') {
                            handleKeyboard(knob, false);
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        else if (key === 'ArrowRight' || key === 'ArrowUp') {
                            handleKeyboard(knob, true);
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                    }, class: {
                        'range-knob-handle': true,
                        'range-knob-a': knob === 'A',
                        'range-knob-b': knob === 'B',
                        'range-knob-pressed': pressed,
                        'range-knob-min': value === min,
                        'range-knob-max': value === max
                    }, style: knobStyle(), role: "slider", tabindex: disabled ? -1 : 0, "aria-valuemin": min, "aria-valuemax": max, "aria-disabled": disabled ? 'true' : null, "aria-valuenow": value }, pin && h("div", { class: "range-pin", role: "presentation" }, Math.round(value)), h("div", { class: "range-knob", role: "presentation" })));
            }
            function ratioToValue(ratio, min, max, step) {
                var value = (max - min) * ratio;
                if (step > 0) {
                    value = Math.round(value / step) * step + min;
                }
                return clamp(min, value, max);
            }
            function valueToRatio(value, min, max) {
                return clamp(0, (value - min) / (max - min), 1);
            }
        }
    };
});
