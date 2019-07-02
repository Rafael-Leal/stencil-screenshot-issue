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
    var registerInstance, getIonMode, createEvent, getContext, h, getElement, Host, BACKDROP, isCancel, present, dismiss, eventMethod, getClassMap;
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
                BACKDROP = module.B;
                isCancel = module.i;
                present = module.p;
                dismiss = module.d;
                eventMethod = module.e;
            }, function (module) {
                getClassMap = module.g;
            }],
        execute: function () {
            /**
             * iOS Action Sheet Enter Animation
             */
            function iosEnterAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
                backdropAnimation.fromTo('opacity', 0.01, 0.4);
                wrapperAnimation.fromTo('translateY', '100%', '0%');
                var ani = baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(.36,.66,.04,1)')
                    .duration(400)
                    .add(backdropAnimation)
                    .add(wrapperAnimation);
                return Promise.resolve(ani);
            }
            /**
             * iOS Action Sheet Leave Animation
             */
            function iosLeaveAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
                backdropAnimation.fromTo('opacity', 0.4, 0);
                wrapperAnimation.fromTo('translateY', '0%', '100%');
                var ani = baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(.36,.66,.04,1)')
                    .duration(450)
                    .add(backdropAnimation)
                    .add(wrapperAnimation);
                return Promise.resolve(ani);
            }
            /**
             * MD Action Sheet Enter Animation
             */
            function mdEnterAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
                backdropAnimation.fromTo('opacity', 0.01, 0.32);
                wrapperAnimation.fromTo('translateY', '100%', '0%');
                var ani = baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(.36,.66,.04,1)')
                    .duration(400)
                    .add(backdropAnimation)
                    .add(wrapperAnimation);
                return Promise.resolve(ani);
            }
            /**
             * MD Action Sheet Leave Animation
             */
            function mdLeaveAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
                backdropAnimation.fromTo('opacity', 0.32, 0);
                wrapperAnimation.fromTo('translateY', '0%', '100%');
                var ani = baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(.36,.66,.04,1)')
                    .duration(450)
                    .add(backdropAnimation)
                    .add(wrapperAnimation);
                return Promise.resolve(ani);
            }
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var ActionSheet = /** @class */ (function () {
                function ActionSheet(hostRef) {
                    registerInstance(this, hostRef);
                    this.presented = false;
                    this.mode = getIonMode(this);
                    /**
                     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
                     */
                    this.keyboardClose = true;
                    /**
                     * An array of buttons for the action sheet.
                     */
                    this.buttons = [];
                    /**
                     * If `true`, the action sheet will be dismissed when the backdrop is clicked.
                     */
                    this.backdropDismiss = true;
                    /**
                     * If `true`, the action sheet will be translucent. Only applies when the mode is `"ios"` and the device supports backdrop-filter.
                     */
                    this.translucent = false;
                    /**
                     * If `true`, the action sheet will animate.
                     */
                    this.animated = true;
                    this.didPresent = createEvent(this, "ionActionSheetDidPresent", 7);
                    this.willPresent = createEvent(this, "ionActionSheetWillPresent", 7);
                    this.willDismiss = createEvent(this, "ionActionSheetWillDismiss", 7);
                    this.didDismiss = createEvent(this, "ionActionSheetDidDismiss", 7);
                    this.config = getContext(this, "config");
                }
                ActionSheet.prototype.onBackdropTap = function () {
                    this.dismiss(undefined, BACKDROP);
                };
                ActionSheet.prototype.dispatchCancelHandler = function (ev) {
                    var role = ev.detail.role;
                    if (isCancel(role)) {
                        var cancelButton = this.getButtons().find(function (b) { return b.role === 'cancel'; });
                        this.callButtonHandler(cancelButton);
                    }
                };
                /**
                 * Present the action sheet overlay after it has been created.
                 */
                ActionSheet.prototype.present = function () {
                    return present(this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);
                };
                /**
                 * Dismiss the action sheet overlay after it has been presented.
                 *
                 * @param data Any data to emit in the dismiss events.
                 * @param role The role of the element that is dismissing the action sheet.
                 * This can be useful in a button handler for determining which button was
                 * clicked to dismiss the action sheet.
                 * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
                 */
                ActionSheet.prototype.dismiss = function (data, role) {
                    return dismiss(this, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);
                };
                /**
                 * Returns a promise that resolves when the action sheet did dismiss.
                 */
                ActionSheet.prototype.onDidDismiss = function () {
                    return eventMethod(this.el, 'ionActionSheetDidDismiss');
                };
                /**
                 * Returns a promise that resolves when the action sheet will dismiss.
                 *
                 */
                ActionSheet.prototype.onWillDismiss = function () {
                    return eventMethod(this.el, 'ionActionSheetWillDismiss');
                };
                ActionSheet.prototype.buttonClick = function (button) {
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
                ActionSheet.prototype.callButtonHandler = function (button) {
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
                ActionSheet.prototype.getButtons = function () {
                    return this.buttons.map(function (b) {
                        return (typeof b === 'string')
                            ? { text: b }
                            : b;
                    });
                };
                ActionSheet.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        'role': 'dialog',
                        'aria-modal': 'true',
                        style: {
                            zIndex: 20000 + this.overlayIndex,
                        },
                        class: Object.assign((_a = {}, _a["" + mode] = true, _a), getClassMap(this.cssClass), { 'action-sheet-translucent': this.translucent })
                    };
                };
                ActionSheet.prototype.__stencil_render = function () {
                    var _this = this;
                    var mode = getIonMode(this);
                    var allButtons = this.getButtons();
                    var cancelButton = allButtons.find(function (b) { return b.role === 'cancel'; });
                    var buttons = allButtons.filter(function (b) { return b.role !== 'cancel'; });
                    return [
                        h("ion-backdrop", { tappable: this.backdropDismiss }),
                        h("div", { class: "action-sheet-wrapper", role: "dialog" }, h("div", { class: "action-sheet-container" }, h("div", { class: "action-sheet-group" }, this.header !== undefined &&
                            h("div", { class: "action-sheet-title" }, this.header, this.subHeader && h("div", { class: "action-sheet-sub-title" }, this.subHeader)), buttons.map(function (b) { return h("button", { type: "button", "ion-activatable": true, class: buttonClass(b), onClick: function () { return _this.buttonClick(b); } }, h("span", { class: "action-sheet-button-inner" }, b.icon && h("ion-icon", { icon: b.icon, lazy: false, class: "action-sheet-icon" }), b.text), mode === 'md' && h("ion-ripple-effect", null)); })), cancelButton &&
                            h("div", { class: "action-sheet-group action-sheet-group-cancel" }, h("button", { type: "button", class: buttonClass(cancelButton), onClick: function () { return _this.buttonClick(cancelButton); } }, h("span", { class: "action-sheet-button-inner" }, cancelButton.icon &&
                                h("ion-icon", { icon: cancelButton.icon, lazy: false, class: "action-sheet-icon" }), cancelButton.text)))))
                    ];
                };
                Object.defineProperty(ActionSheet.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                ActionSheet.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(ActionSheet, "style", {
                    get: function () { return ".sc-ion-action-sheet-md-h {\n  \n  --color: initial;\n  --min-width: auto;\n  --width: 100%;\n  --max-width: 500px;\n  --min-height: auto;\n  --height: 100%;\n  --max-height: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: block;\n  position: fixed;\n  font-family: var(--ion-font-family, inherit);\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 1000;\n}\n\n.overlay-hidden.sc-ion-action-sheet-md-h {\n  display: none;\n}\n\n.action-sheet-wrapper.sc-ion-action-sheet-md {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  -webkit-transform: translate3d(0,  100%,  0);\n  transform: translate3d(0,  100%,  0);\n  display: block;\n  position: absolute;\n  width: var(--width);\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  z-index: 10;\n  pointer-events: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .action-sheet-wrapper.sc-ion-action-sheet-md {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: auto;\n    margin-inline-start: auto;\n    -webkit-margin-end: auto;\n    margin-inline-end: auto;\n  }\n}\n\n.action-sheet-button.sc-ion-action-sheet-md {\n  width: 100%;\n  border: 0;\n  outline: none;\n  font-family: inherit;\n}\n\n.action-sheet-button.activated.sc-ion-action-sheet-md {\n  background: var(--background-activated);\n}\n\n.action-sheet-button-inner.sc-ion-action-sheet-md {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.action-sheet-container.sc-ion-action-sheet-md {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n  flex-flow: column;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  height: 100%;\n  max-height: 100%;\n}\n\n.action-sheet-group.sc-ion-action-sheet-md {\n  -ms-flex-negative: 2;\n  flex-shrink: 2;\n  overscroll-behavior-y: contain;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  pointer-events: all;\n  background: var(--background);\n}\n\n.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar {\n  display: none;\n}\n\n.action-sheet-group-cancel.sc-ion-action-sheet-md {\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n\n.action-sheet-selected.sc-ion-action-sheet-md {\n  background: var(--background-selected);\n}\n\n.sc-ion-action-sheet-md-h {\n  --background: var(--ion-overlay-background-color, #fff);\n  --background-selected: var(--background, );\n  --background-activated: var(--background);\n}\n\n.action-sheet-title.sc-ion-action-sheet-md {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 20px;\n  padding-bottom: 17px;\n  height: 60px;\n  color: var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));\n  font-size: 16px;\n  text-align: start;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .action-sheet-title.sc-ion-action-sheet-md {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 16px;\n    padding-inline-start: 16px;\n    -webkit-padding-end: 16px;\n    padding-inline-end: 16px;\n  }\n}\n\n.action-sheet-sub-title.sc-ion-action-sheet-md {\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 16px;\n  padding-bottom: 0;\n  font-size: 14px;\n}\n\n.action-sheet-group.sc-ion-action-sheet-md:first-child {\n  padding-top: 0;\n}\n.action-sheet-group.sc-ion-action-sheet-md:last-child {\n  padding-bottom: 0;\n}\n.action-sheet-button.sc-ion-action-sheet-md {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: relative;\n  height: 52px;\n  background: transparent;\n  color: var(--color, var(--ion-color-step-850, #262626));\n  font-size: 16px;\n  text-align: start;\n  contain: strict;\n  overflow: hidden;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .action-sheet-button.sc-ion-action-sheet-md {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 16px;\n    padding-inline-start: 16px;\n    -webkit-padding-end: 16px;\n    padding-inline-end: 16px;\n  }\n}\n\n.action-sheet-icon.sc-ion-action-sheet-md {\n  padding-bottom: 4px;\n  margin-left: 0;\n  margin-right: 32px;\n  margin-top: 0;\n  margin-bottom: 0;\n  color: var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));\n  font-size: 24px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .action-sheet-icon.sc-ion-action-sheet-md {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 0;\n    margin-inline-start: 0;\n    -webkit-margin-end: 32px;\n    margin-inline-end: 32px;\n  }\n}\n\n.action-sheet-button-inner.sc-ion-action-sheet-md {\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n\n.action-sheet-selected.sc-ion-action-sheet-md {\n  font-weight: bold;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ActionSheet;
            }());
            exports('ion_action_sheet', ActionSheet);
            function buttonClass(button) {
                var _a;
                return Object.assign((_a = { 'action-sheet-button': true, 'ion-activatable': true }, _a["action-sheet-" + button.role] = button.role !== undefined, _a), getClassMap(button.cssClass));
            }
        }
    };
});
