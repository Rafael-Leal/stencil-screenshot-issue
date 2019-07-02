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
System.register(['./chunk-a61457cf.system.js', './chunk-ba8c0cb1.system.js', './chunk-f43705e2.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, createEvent, getContext, h, getElement, Host, present, dismiss, eventMethod, getClassMap;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.c;
                createEvent = module.d;
                getContext = module.e;
                h = module.h;
                getElement = module.f;
                Host = module.H;
            }, function (module) {
                present = module.p;
                dismiss = module.d;
                eventMethod = module.e;
            }, function (module) {
                getClassMap = module.g;
            }],
        execute: function () {
            /**
             * iOS Picker Enter Animation
             */
            function iosEnterAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.picker-wrapper'));
                backdropAnimation.fromTo('opacity', 0.01, 0.26);
                wrapperAnimation.fromTo('translateY', '100%', '0%');
                return Promise.resolve(baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(.36,.66,.04,1)')
                    .duration(400)
                    .add(backdropAnimation)
                    .add(wrapperAnimation));
            }
            /**
             * iOS Picker Leave Animation
             */
            function iosLeaveAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.picker-wrapper'));
                backdropAnimation.fromTo('opacity', 0.26, 0.01);
                wrapperAnimation.fromTo('translateY', '0%', '100%');
                return Promise.resolve(baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(.36,.66,.04,1)')
                    .duration(400)
                    .add(backdropAnimation)
                    .add(wrapperAnimation));
            }
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Picker = /** @class */ (function () {
                function Picker(hostRef) {
                    registerInstance(this, hostRef);
                    this.mode = getIonMode(this);
                    this.presented = false;
                    /**
                     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
                     */
                    this.keyboardClose = true;
                    /**
                     * Array of buttons to be displayed at the top of the picker.
                     */
                    this.buttons = [];
                    /**
                     * Array of columns to be displayed in the picker.
                     */
                    this.columns = [];
                    /**
                     * Number of milliseconds to wait before dismissing the picker.
                     */
                    this.duration = 0;
                    /**
                     * If `true`, a backdrop will be displayed behind the picker.
                     */
                    this.showBackdrop = true;
                    /**
                     * If `true`, the picker will be dismissed when the backdrop is clicked.
                     */
                    this.backdropDismiss = true;
                    /**
                     * If `true`, the picker will animate.
                     */
                    this.animated = true;
                    this.didPresent = createEvent(this, "ionPickerDidPresent", 7);
                    this.willPresent = createEvent(this, "ionPickerWillPresent", 7);
                    this.willDismiss = createEvent(this, "ionPickerWillDismiss", 7);
                    this.didDismiss = createEvent(this, "ionPickerDidDismiss", 7);
                    this.config = getContext(this, "config");
                }
                Picker.prototype.onBackdropTap = function () {
                    var cancelBtn = this.buttons.find(function (b) { return b.role === 'cancel'; });
                    if (cancelBtn) {
                        this.buttonClick(cancelBtn);
                    }
                    else {
                        this.dismiss();
                    }
                };
                /**
                 * Present the picker overlay after it has been created.
                 */
                Picker.prototype.present = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, present(this, 'pickerEnter', iosEnterAnimation, iosEnterAnimation, undefined)];
                                case 1:
                                    _a.sent();
                                    if (this.duration > 0) {
                                        this.durationTimeout = setTimeout(function () { return _this.dismiss(); }, this.duration);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Dismiss the picker overlay after it has been presented.
                 *
                 * @param data Any data to emit in the dismiss events.
                 * @param role The role of the element that is dismissing the picker.
                 * This can be useful in a button handler for determining which button was
                 * clicked to dismiss the picker.
                 * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
                 */
                Picker.prototype.dismiss = function (data, role) {
                    if (this.durationTimeout) {
                        clearTimeout(this.durationTimeout);
                    }
                    return dismiss(this, data, role, 'pickerLeave', iosLeaveAnimation, iosLeaveAnimation);
                };
                /**
                 * Returns a promise that resolves when the picker did dismiss.
                 */
                Picker.prototype.onDidDismiss = function () {
                    return eventMethod(this.el, 'ionPickerDidDismiss');
                };
                /**
                 * Returns a promise that resolves when the picker will dismiss.
                 */
                Picker.prototype.onWillDismiss = function () {
                    return eventMethod(this.el, 'ionPickerWillDismiss');
                };
                /**
                 * Get the column that matches the specified name.
                 *
                 * @param name The name of the column.
                 */
                Picker.prototype.getColumn = function (name) {
                    return Promise.resolve(this.columns.find(function (column) { return column.name === name; }));
                };
                Picker.prototype.buttonClick = function (button) {
                    // if (this.disabled) {
                    //   return;
                    // }
                    // keep the time of the most recent button click
                    var shouldDismiss = true;
                    if (button.handler) {
                        // a handler has been provided, execute it
                        // pass the handler the values from the inputs
                        if (button.handler(this.getSelected()) === false) {
                            // if the return value of the handler is false then do not dismiss
                            shouldDismiss = false;
                        }
                    }
                    if (shouldDismiss) {
                        return this.dismiss();
                    }
                    return Promise.resolve(false);
                };
                Picker.prototype.getSelected = function () {
                    var selected = {};
                    this.columns.forEach(function (col, index) {
                        var selectedColumn = col.selectedIndex !== undefined
                            ? col.options[col.selectedIndex]
                            : undefined;
                        selected[col.name] = {
                            text: selectedColumn ? selectedColumn.text : undefined,
                            value: selectedColumn ? selectedColumn.value : undefined,
                            columnIndex: index
                        };
                    });
                    return selected;
                };
                Picker.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        'aria-modal': 'true',
                        class: Object.assign((_a = {}, _a["" + mode] = true, 
                        // Used internally for styling
                        _a["picker-" + mode] = true, _a), getClassMap(this.cssClass)),
                        style: {
                            zIndex: 20000 + this.overlayIndex
                        }
                    };
                };
                Picker.prototype.__stencil_render = function () {
                    var _this = this;
                    return [
                        h("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }),
                        h("div", { class: "picker-wrapper", role: "dialog" }, h("div", { class: "picker-toolbar" }, this.buttons.map(function (b) { return (h("div", { class: buttonWrapperClass(b) }, h("button", { type: "button", onClick: function () { return _this.buttonClick(b); }, class: buttonClass(b) }, b.text))); })), h("div", { class: "picker-columns" }, h("div", { class: "picker-above-highlight" }), this.presented && this.columns.map(function (c) { return h("ion-picker-column", { col: c }); }), h("div", { class: "picker-below-highlight" })))
                    ];
                };
                Object.defineProperty(Picker.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Picker.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Picker, "style", {
                    get: function () { return ".sc-ion-picker-ios-h {\n  \n  --border-radius: 0;\n  --border-style: solid;\n  --min-width: auto;\n  --width: 100%;\n  --max-width: 500px;\n  --min-height: auto;\n  --max-height: auto;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  left: 0;\n  top: 0;\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  font-family: var(--ion-font-family, inherit);\n  contain: strict;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 1000;\n}\n[dir=rtl].sc-ion-picker-ios-h, [dir=rtl] .sc-ion-picker-ios-h {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n.overlay-hidden.sc-ion-picker-ios-h {\n  display: none;\n}\n\n.picker-wrapper.sc-ion-picker-ios {\n  border-radius: var(--border-radius);\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  -webkit-transform: translate3d(0,  100%,  0);\n  transform: translate3d(0,  100%,  0);\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: var(--width);\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  background: var(--background);\n  contain: strict;\n  overflow: hidden;\n  z-index: 10;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .picker-wrapper.sc-ion-picker-ios {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: auto;\n    margin-inline-start: auto;\n    -webkit-margin-end: auto;\n    margin-inline-end: auto;\n  }\n}\n\n.picker-toolbar.sc-ion-picker-ios {\n  width: 100%;\n  background: transparent;\n  contain: strict;\n  z-index: 1;\n}\n\n.picker-button.sc-ion-picker-ios {\n  border: 0;\n  font-family: inherit;\n}\n\n.picker-button.sc-ion-picker-ios:active, .picker-button.sc-ion-picker-ios:focus {\n  outline: none;\n}\n\n.picker-columns.sc-ion-picker-ios {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-pack: center;\n  justify-content: center;\n  margin-bottom: var(--ion-safe-area-bottom, 0);\n  contain: strict;\n  direction: ltr;\n  overflow: hidden;\n}\n\n.picker-above-highlight.sc-ion-picker-ios, .picker-below-highlight.sc-ion-picker-ios {\n  display: none;\n  pointer-events: none;\n}\n\n.sc-ion-picker-ios-h {\n  --background: var(--ion-background-color, #fff);\n  --border-width: 1px 0 0;\n  --border-color: var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, #c8c7cc)));\n  --height: 260px;\n  color: var(--ion-item-color, var(--ion-text-color, #000));\n}\n\n.picker-toolbar.sc-ion-picker-ios {\n  display: -ms-flexbox;\n  display: flex;\n  height: 44px;\n  border-bottom: 0.55px solid var(--border-color);\n}\n\n.picker-toolbar-button.sc-ion-picker-ios {\n  -ms-flex: 1;\n  flex: 1;\n  text-align: end;\n}\n\n.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios {\n  font-weight: 600;\n}\n\n.picker-toolbar-button.sc-ion-picker-ios:first-child {\n  font-weight: normal;\n  text-align: start;\n}\n\n.picker-button.sc-ion-picker-ios, .picker-button.activated.sc-ion-picker-ios {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: 0;\n  padding-bottom: 0;\n  height: 44px;\n  background: transparent;\n  color: var(--ion-color-primary, #3880ff);\n  font-size: 16px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .picker-button.sc-ion-picker-ios, .picker-button.activated.sc-ion-picker-ios {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 1em;\n    padding-inline-start: 1em;\n    -webkit-padding-end: 1em;\n    padding-inline-end: 1em;\n  }\n}\n\n.picker-columns.sc-ion-picker-ios {\n  height: 215px;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n}\n\n.picker-above-highlight.sc-ion-picker-ios {\n  left: 0;\n  top: 0;\n  -webkit-transform: translate3d(0,  0,  90px);\n  transform: translate3d(0,  0,  90px);\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 81px;\n  border-bottom: 1px solid var(--border-color);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));\n  background: linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);\n  z-index: 10;\n}\n[dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios, [dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios, [dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n.picker-below-highlight.sc-ion-picker-ios {\n  left: 0;\n  top: 115px;\n  -webkit-transform: translate3d(0,  0,  90px);\n  transform: translate3d(0,  0,  90px);\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 119px;\n  border-top: 1px solid var(--border-color);\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));\n  background: linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);\n  z-index: 11;\n}\n[dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios, [dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios, [dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios {\n  left: unset;\n  right: unset;\n  right: 0;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Picker;
            }());
            exports('ion_picker', Picker);
            function buttonWrapperClass(button) {
                var _a;
                return _a = {},
                    _a["picker-toolbar-" + button.role] = button.role !== undefined,
                    _a['picker-toolbar-button'] = true,
                    _a;
            }
            function buttonClass(button) {
                return Object.assign({ 'picker-button': true, 'ion-activatable': true }, getClassMap(button.cssClass));
            }
        }
    };
});
