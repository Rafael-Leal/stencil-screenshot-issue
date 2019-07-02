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
System.register(['./chunk-a61457cf.system.js', './chunk-ba8c0cb1.system.js', './chunk-f43705e2.system.js', './chunk-02683056.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, createEvent, getContext, h, getElement, Host, present, dismiss, eventMethod, isCancel, createColorClasses, getClassMap, sanitizeDOMString;
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
                isCancel = module.i;
            }, function (module) {
                createColorClasses = module.c;
                getClassMap = module.g;
            }, function (module) {
                sanitizeDOMString = module.s;
            }],
        execute: function () {
            /**
             * iOS Toast Enter Animation
             */
            function iosEnterAnimation(AnimationC, baseEl, position) {
                var baseAnimation = new AnimationC();
                var wrapperAnimation = new AnimationC();
                var hostEl = baseEl.host || baseEl;
                var wrapperEl = baseEl.querySelector('.toast-wrapper');
                wrapperAnimation.addElement(wrapperEl);
                var bottom = "calc(-10px - var(--ion-safe-area-bottom, 0px))";
                var top = "calc(10px + var(--ion-safe-area-top, 0px))";
                switch (position) {
                    case 'top':
                        wrapperAnimation.fromTo('translateY', '-100%', top);
                        break;
                    case 'middle':
                        var topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
                        wrapperEl.style.top = topPosition + "px";
                        wrapperAnimation.fromTo('opacity', 0.01, 1);
                        break;
                    default:
                        wrapperAnimation.fromTo('translateY', '100%', bottom);
                        break;
                }
                return Promise.resolve(baseAnimation
                    .addElement(hostEl)
                    .easing('cubic-bezier(.155,1.105,.295,1.12)')
                    .duration(400)
                    .add(wrapperAnimation));
            }
            /**
             * iOS Toast Leave Animation
             */
            function iosLeaveAnimation(AnimationC, baseEl, position) {
                var baseAnimation = new AnimationC();
                var wrapperAnimation = new AnimationC();
                var hostEl = baseEl.host || baseEl;
                var wrapperEl = baseEl.querySelector('.toast-wrapper');
                wrapperAnimation.addElement(wrapperEl);
                var bottom = "calc(-10px - var(--ion-safe-area-bottom, 0px))";
                var top = "calc(10px + var(--ion-safe-area-top, 0px))";
                switch (position) {
                    case 'top':
                        wrapperAnimation.fromTo('translateY', top, '-100%');
                        break;
                    case 'middle':
                        wrapperAnimation.fromTo('opacity', 0.99, 0);
                        break;
                    default:
                        wrapperAnimation.fromTo('translateY', bottom, '100%');
                        break;
                }
                return Promise.resolve(baseAnimation
                    .addElement(hostEl)
                    .easing('cubic-bezier(.36,.66,.04,1)')
                    .duration(300)
                    .add(wrapperAnimation));
            }
            /**
             * MD Toast Enter Animation
             */
            function mdEnterAnimation(AnimationC, baseEl, position) {
                var baseAnimation = new AnimationC();
                var wrapperAnimation = new AnimationC();
                var hostEl = baseEl.host || baseEl;
                var wrapperEl = baseEl.querySelector('.toast-wrapper');
                wrapperAnimation.addElement(wrapperEl);
                var bottom = "calc(8px + var(--ion-safe-area-bottom, 0px))";
                var top = "calc(8px + var(--ion-safe-area-top, 0px))";
                switch (position) {
                    case 'top':
                        wrapperEl.style.top = top;
                        wrapperAnimation.fromTo('opacity', 0.01, 1);
                        break;
                    case 'middle':
                        var topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
                        wrapperEl.style.top = topPosition + "px";
                        wrapperAnimation.fromTo('opacity', 0.01, 1);
                        break;
                    default:
                        wrapperEl.style.bottom = bottom;
                        wrapperAnimation.fromTo('opacity', 0.01, 1);
                        break;
                }
                return Promise.resolve(baseAnimation
                    .addElement(hostEl)
                    .easing('cubic-bezier(.36,.66,.04,1)')
                    .duration(400)
                    .add(wrapperAnimation));
            }
            /**
             * md Toast Leave Animation
             */
            function mdLeaveAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var wrapperAnimation = new AnimationC();
                var hostEl = baseEl.host || baseEl;
                var wrapperEl = baseEl.querySelector('.toast-wrapper');
                wrapperAnimation.addElement(wrapperEl);
                wrapperAnimation.fromTo('opacity', 0.99, 0);
                return Promise.resolve(baseAnimation
                    .addElement(hostEl)
                    .easing('cubic-bezier(.36,.66,.04,1)')
                    .duration(300)
                    .add(wrapperAnimation));
            }
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Toast = /** @class */ (function () {
                function Toast(hostRef) {
                    registerInstance(this, hostRef);
                    this.presented = false;
                    this.mode = getIonMode(this);
                    /**
                     * How many milliseconds to wait before hiding the toast. By default, it will show
                     * until `dismiss()` is called.
                     */
                    this.duration = 0;
                    /**
                     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
                     */
                    this.keyboardClose = false;
                    /**
                     * The position of the toast on the screen.
                     */
                    this.position = 'bottom';
                    /**
                     * If `true`, the close button will be displayed.
                     */
                    this.showCloseButton = false;
                    /**
                     * If `true`, the toast will be translucent.
                     */
                    this.translucent = false;
                    /**
                     * If `true`, the toast will animate.
                     */
                    this.animated = true;
                    this.didPresent = createEvent(this, "ionToastDidPresent", 7);
                    this.willPresent = createEvent(this, "ionToastWillPresent", 7);
                    this.willDismiss = createEvent(this, "ionToastWillDismiss", 7);
                    this.didDismiss = createEvent(this, "ionToastDidDismiss", 7);
                    this.config = getContext(this, "config");
                }
                /**
                 * Present the toast overlay after it has been created.
                 */
                Toast.prototype.present = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, present(this, 'toastEnter', iosEnterAnimation, mdEnterAnimation, this.position)];
                                case 1:
                                    _a.sent();
                                    if (this.duration > 0) {
                                        this.durationTimeout = setTimeout(function () { return _this.dismiss(undefined, 'timeout'); }, this.duration);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Dismiss the toast overlay after it has been presented.
                 *
                 * @param data Any data to emit in the dismiss events.
                 * @param role The role of the element that is dismissing the toast.
                 * This can be useful in a button handler for determining which button was
                 * clicked to dismiss the toast.
                 * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
                 */
                Toast.prototype.dismiss = function (data, role) {
                    if (this.durationTimeout) {
                        clearTimeout(this.durationTimeout);
                    }
                    return dismiss(this, data, role, 'toastLeave', iosLeaveAnimation, mdLeaveAnimation, this.position);
                };
                /**
                 * Returns a promise that resolves when the toast did dismiss.
                 */
                Toast.prototype.onDidDismiss = function () {
                    return eventMethod(this.el, 'ionToastDidDismiss');
                };
                /**
                 * Returns a promise that resolves when the toast will dismiss.
                 */
                Toast.prototype.onWillDismiss = function () {
                    return eventMethod(this.el, 'ionToastWillDismiss');
                };
                Toast.prototype.getButtons = function () {
                    var _this = this;
                    var buttons = this.buttons
                        ? this.buttons.map(function (b) {
                            return (typeof b === 'string')
                                ? { text: b }
                                : b;
                        })
                        : [];
                    if (this.showCloseButton) {
                        buttons.push({
                            text: this.closeButtonText || 'Close',
                            handler: function () { return _this.dismiss(undefined, 'cancel'); }
                        });
                    }
                    return buttons;
                };
                Toast.prototype.buttonClick = function (button) {
                    return __awaiter(this, void 0, void 0, function () {
                        var role, shouldDismiss;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    role = button.role;
                                    if (isCancel(role)) {
                                        return [2 /*return*/, this.dismiss(undefined, role)];
                                    }
                                    return [4 /*yield*/, this.callButtonHandler(button)];
                                case 1:
                                    shouldDismiss = _a.sent();
                                    if (shouldDismiss) {
                                        return [2 /*return*/, this.dismiss(undefined, button.role)];
                                    }
                                    return [2 /*return*/, Promise.resolve()];
                            }
                        });
                    });
                };
                Toast.prototype.callButtonHandler = function (button) {
                    return __awaiter(this, void 0, void 0, function () {
                        var rtn, e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(button && button.handler)) return [3 /*break*/, 4];
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, button.handler()];
                                case 2:
                                    rtn = _a.sent();
                                    if (rtn === false) {
                                        // if the return value of the handler is false then do not dismiss
                                        return [2 /*return*/, false];
                                    }
                                    return [3 /*break*/, 4];
                                case 3:
                                    e_1 = _a.sent();
                                    console.error(e_1);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/, true];
                            }
                        });
                    });
                };
                Toast.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        style: {
                            zIndex: 60000 + this.overlayIndex,
                        },
                        class: Object.assign((_a = {}, _a["" + mode] = true, _a), createColorClasses(this.color), getClassMap(this.cssClass), { 'toast-translucent': this.translucent })
                    };
                };
                Toast.prototype.renderButtons = function (buttons, side) {
                    var _a;
                    var _this = this;
                    if (buttons.length === 0) {
                        return;
                    }
                    var mode = getIonMode(this);
                    var buttonGroupsClasses = (_a = {
                            'toast-button-group': true
                        },
                        _a["toast-button-group-" + side] = true,
                        _a);
                    return (h("div", { class: buttonGroupsClasses }, buttons.map(function (b) { return h("button", { type: "button", class: buttonClass(b), tabIndex: 0, onClick: function () { return _this.buttonClick(b); } }, h("div", { class: "toast-button-inner" }, b.icon &&
                        h("ion-icon", { name: b.icon, slot: b.text === undefined ? 'icon-only' : undefined, class: "toast-icon" }), b.text), mode === 'md' && h("ion-ripple-effect", { type: b.icon !== undefined && b.text === undefined ? 'unbounded' : 'bounded' })); })));
                };
                Toast.prototype.__stencil_render = function () {
                    var _a;
                    var allButtons = this.getButtons();
                    var startButtons = allButtons.filter(function (b) { return b.side === 'start'; });
                    var endButtons = allButtons.filter(function (b) { return b.side !== 'start'; });
                    var wrapperClass = (_a = {
                            'toast-wrapper': true
                        },
                        _a["toast-" + this.position] = true,
                        _a);
                    return (h("div", { class: wrapperClass }, h("div", { class: "toast-container" }, this.renderButtons(startButtons, 'start'), h("div", { class: "toast-content" }, this.header !== undefined &&
                        h("div", { class: "toast-header" }, this.header), this.message !== undefined &&
                        h("div", { class: "toast-message", innerHTML: sanitizeDOMString(this.message) })), this.renderButtons(endButtons, 'end'))));
                };
                Object.defineProperty(Toast.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Toast.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Toast, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --background: Background of the toast\n   * \@prop --color: Color of the toast text\n   *\n   * \@prop --border-color: Border color of the toast\n   * \@prop --border-radius: Border radius of the toast\n   * \@prop --border-width: Border width of the toast\n   * \@prop --border-style: Border style of the toast\n   *\n   * \@prop --box-shadow: Box shadow of the toast\n   *\n   * \@prop --min-width: Minimum width of the toast\n   * \@prop --width: Width of the toast\n   * \@prop --max-width: Maximum width of the toast\n   *\n   * \@prop --min-height: Minimum height of the toast\n   * \@prop --height: Height of the toast\n   * \@prop --max-height: Maximum height of the toast\n   *\n   * \@prop --button-color: Color of the button text\n   *\n   * \@prop --start: Position from the start\n   * \@prop --end: Position from the end\n   */\n  --border-width: 0;\n  --border-style: none;\n  --border-color: initial;\n  --box-shadow: none;\n  --min-width: auto;\n  --width: auto;\n  --min-height: auto;\n  --height: auto;\n  --max-height: auto;\n  left: 0;\n  top: 0;\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  contain: strict;\n  z-index: 1000;\n  pointer-events: none;\n}\n:host-context([dir=rtl]) {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n:host(.overlay-hidden) {\n  display: none;\n}\n\n:host(.ion-color) {\n  --button-color: inherit;\n  color: var(--ion-color-contrast);\n}\n\n:host(.ion-color) .toast-wrapper {\n  background: var(--ion-color-base);\n}\n\n.toast-wrapper {\n  border-radius: var(--border-radius);\n  left: var(--start);\n  right: var(--end);\n  width: var(--width);\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  background: var(--background);\n  -webkit-box-shadow: var(--box-shadow);\n  box-shadow: var(--box-shadow);\n}\n[dir=rtl] .toast-wrapper, :host-context([dir=rtl]) .toast-wrapper {\n  left: unset;\n  right: unset;\n  left: var(--end);\n  right: var(--start);\n}\n\n.toast-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  pointer-events: auto;\n  contain: content;\n}\n\n.toast-content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.toast-message {\n  -ms-flex: 1;\n  flex: 1;\n  white-space: pre-wrap;\n}\n\n.toast-button-group {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.toast-button {\n  border: 0;\n  outline: none;\n  color: var(--button-color);\n  z-index: 0;\n}\n\n.toast-icon {\n  font-size: 1.4em;\n}\n\n.toast-button-inner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n\@media (any-hover: hover) {\n  .toast-button:hover {\n    cursor: pointer;\n  }\n}\n:host {\n  --background: var(--ion-color-step-50, #f2f2f2);\n  --border-radius: 14px;\n  --button-color: var(--ion-color-primary, #3880ff);\n  --color: var(--ion-color-step-850, #262626);\n  --max-width: 700px;\n  --start: 10px;\n  --end: 10px;\n  font-size: 14px;\n}\n\n.toast-wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n  position: absolute;\n  z-index: 10;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .toast-wrapper {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: auto;\n    margin-inline-start: auto;\n    -webkit-margin-end: auto;\n    margin-inline-end: auto;\n  }\n}\n\n:host(.toast-translucent) .toast-wrapper {\n  background: rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.toast-wrapper.toast-top {\n  -webkit-transform: translate3d(0,  -100%,  0);\n  transform: translate3d(0,  -100%,  0);\n  top: 0;\n}\n\n.toast-wrapper.toast-middle {\n  opacity: 0.01;\n}\n\n.toast-wrapper.toast-bottom {\n  -webkit-transform: translate3d(0,  100%,  0);\n  transform: translate3d(0,  100%,  0);\n  bottom: 0;\n}\n\n.toast-content {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .toast-content {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 15px;\n    padding-inline-start: 15px;\n    -webkit-padding-end: 15px;\n    padding-inline-end: 15px;\n  }\n}\n\n.toast-header {\n  margin-bottom: 2px;\n  font-weight: 500;\n}\n\n.toast-button {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  height: 44px;\n  -webkit-transition: background-color, opacity 100ms linear;\n  transition: background-color, opacity 100ms linear;\n  border: 0;\n  background-color: transparent;\n  font-family: var(--ion-font-family);\n  font-size: 17px;\n  font-weight: 500;\n  overflow: hidden;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .toast-button {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 15px;\n    padding-inline-start: 15px;\n    -webkit-padding-end: 15px;\n    padding-inline-end: 15px;\n  }\n}\n\n.toast-button.activated {\n  opacity: 0.4;\n}\n\n\@media (any-hover: hover) {\n  .toast-button:hover {\n    opacity: 0.6;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Toast;
            }());
            exports('ion_toast', Toast);
            function buttonClass(button) {
                var _a;
                return Object.assign((_a = { 'toast-button': true, 'toast-button-icon-only': button.icon !== undefined && button.text === undefined }, _a["toast-button-" + button.role] = button.role !== undefined, _a['ion-focusable'] = true, _a['ion-activatable'] = true, _a), getClassMap(button.cssClass));
            }
        }
    };
});
