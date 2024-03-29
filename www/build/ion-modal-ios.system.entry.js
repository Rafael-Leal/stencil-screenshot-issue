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
System.register(['./chunk-a61457cf.system.js', './chunk-ba8c0cb1.system.js', './chunk-f43705e2.system.js', './chunk-a0431ad9.system.js', './chunk-3391bc6e.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, createEvent, getContext, h, getElement, Host, BACKDROP, present, dismiss, eventMethod, getClassMap, attachComponent, detachComponent, deepReady;
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
                present = module.p;
                dismiss = module.d;
                eventMethod = module.e;
            }, function (module) {
                getClassMap = module.g;
            }, function (module) {
                attachComponent = module.a;
                detachComponent = module.d;
            }, function (module) {
                deepReady = module.d;
            }],
        execute: function () {
            /**
             * iOS Modal Enter Animation
             */
            function iosEnterAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));
                wrapperAnimation.beforeStyles({ 'opacity': 1 })
                    .fromTo('translateY', '100%', '0%');
                backdropAnimation.fromTo('opacity', 0.01, 0.4);
                return Promise.resolve(baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(0.36,0.66,0.04,1)')
                    .duration(400)
                    .beforeAddClass('show-modal')
                    .add(backdropAnimation)
                    .add(wrapperAnimation));
            }
            /**
             * Animations for modals
             */
            // export function modalSlideIn(rootEl: HTMLElement) {
            // }
            // export class ModalSlideOut {
            //   constructor(el: HTMLElement) {
            //     let backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
            //     let wrapperEle = <HTMLElement>el.querySelector('.modal-wrapper');
            //     let wrapperEleRect = wrapperEle.getBoundingClientRect();
            //     let wrapper = new Animation(this.plt, wrapperEle);
            //     // height of the screen - top of the container tells us how much to scoot it down
            //     // so it's off-screen
            //     wrapper.fromTo('translateY', '0px', `${this.plt.height() - wrapperEleRect.top}px`);
            //     backdrop.fromTo('opacity', 0.4, 0.0);
            //     this
            //       .element(this.leavingView.pageRef())
            //       .easing('ease-out')
            //       .duration(250)
            //       .add(backdrop)
            //       .add(wrapper);
            //   }
            // }
            // export class ModalMDSlideIn {
            //   constructor(el: HTMLElement) {
            //     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
            //     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
            //     backdrop.fromTo('opacity', 0.01, 0.4);
            //     wrapper.fromTo('translateY', '40px', '0px');
            //     wrapper.fromTo('opacity', 0.01, 1);
            //     const DURATION = 280;
            //     const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
            //     this.element(this.enteringView.pageRef()).easing(EASING).duration(DURATION)
            //       .add(backdrop)
            //       .add(wrapper);
            //   }
            // }
            // export class ModalMDSlideOut {
            //   constructor(el: HTMLElement) {
            //     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
            //     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
            //     backdrop.fromTo('opacity', 0.4, 0.0);
            //     wrapper.fromTo('translateY', '0px', '40px');
            //     wrapper.fromTo('opacity', 0.99, 0);
            //     this
            //       .element(this.leavingView.pageRef())
            //       .duration(200)
            //       .easing('cubic-bezier(0.47,0,0.745,0.715)')
            //       .add(wrapper)
            //       .add(backdrop);
            //   }
            // }
            /**
             * iOS Modal Leave Animation
             */
            function iosLeaveAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                var wrapperEl = baseEl.querySelector('.modal-wrapper');
                wrapperAnimation.addElement(wrapperEl);
                var wrapperElRect = wrapperEl.getBoundingClientRect();
                wrapperAnimation.beforeStyles({ 'opacity': 1 })
                    .fromTo('translateY', '0%', baseEl.ownerDocument.defaultView.innerHeight - wrapperElRect.top + "px");
                backdropAnimation.fromTo('opacity', 0.4, 0.0);
                return Promise.resolve(baseAnimation
                    .addElement(baseEl)
                    .easing('ease-out')
                    .duration(250)
                    .add(backdropAnimation)
                    .add(wrapperAnimation));
            }
            /**
             * Md Modal Enter Animation
             */
            function mdEnterAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));
                wrapperAnimation
                    .fromTo('opacity', 0.01, 1)
                    .fromTo('translateY', '40px', '0px');
                backdropAnimation.fromTo('opacity', 0.01, 0.32);
                return Promise.resolve(baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(0.36,0.66,0.04,1)')
                    .duration(280)
                    .beforeAddClass('show-modal')
                    .add(backdropAnimation)
                    .add(wrapperAnimation));
            }
            /**
             * Md Modal Leave Animation
             */
            function mdLeaveAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                var wrapperEl = baseEl.querySelector('.modal-wrapper');
                wrapperAnimation.addElement(wrapperEl);
                wrapperAnimation
                    .fromTo('opacity', 0.99, 0)
                    .fromTo('translateY', '0px', '40px');
                backdropAnimation.fromTo('opacity', 0.32, 0.0);
                return Promise.resolve(baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(0.47,0,0.745,0.715)')
                    .duration(200)
                    .add(backdropAnimation)
                    .add(wrapperAnimation));
            }
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Modal = /** @class */ (function () {
                function Modal(hostRef) {
                    registerInstance(this, hostRef);
                    this.presented = false;
                    this.mode = getIonMode(this);
                    /**
                     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
                     */
                    this.keyboardClose = true;
                    /**
                     * If `true`, the modal will be dismissed when the backdrop is clicked.
                     */
                    this.backdropDismiss = true;
                    /**
                     * If `true`, a backdrop will be displayed behind the modal.
                     */
                    this.showBackdrop = true;
                    /**
                     * If `true`, the modal will animate.
                     */
                    this.animated = true;
                    this.didPresent = createEvent(this, "ionModalDidPresent", 7);
                    this.willPresent = createEvent(this, "ionModalWillPresent", 7);
                    this.willDismiss = createEvent(this, "ionModalWillDismiss", 7);
                    this.didDismiss = createEvent(this, "ionModalDidDismiss", 7);
                    this.config = getContext(this, "config");
                }
                Modal.prototype.onDismiss = function (ev) {
                    ev.stopPropagation();
                    ev.preventDefault();
                    this.dismiss();
                };
                Modal.prototype.onBackdropTap = function () {
                    this.dismiss(undefined, BACKDROP);
                };
                Modal.prototype.lifecycle = function (modalEvent) {
                    var el = this.usersElement;
                    var name = LIFECYCLE_MAP[modalEvent.type];
                    if (el && name) {
                        var ev = new CustomEvent(name, {
                            bubbles: false,
                            cancelable: false,
                            detail: modalEvent.detail
                        });
                        el.dispatchEvent(ev);
                    }
                };
                /**
                 * Present the modal overlay after it has been created.
                 */
                Modal.prototype.present = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var container, componentProps, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (this.presented) {
                                        return [2 /*return*/];
                                    }
                                    container = this.el.querySelector(".modal-wrapper");
                                    if (!container) {
                                        throw new Error('container is undefined');
                                    }
                                    componentProps = Object.assign({}, this.componentProps, { modal: this.el });
                                    _a = this;
                                    return [4 /*yield*/, attachComponent(this.delegate, container, this.component, ['ion-page'], componentProps)];
                                case 1:
                                    _a.usersElement = _b.sent();
                                    return [4 /*yield*/, deepReady(this.usersElement)];
                                case 2:
                                    _b.sent();
                                    return [2 /*return*/, present(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation)];
                            }
                        });
                    });
                };
                /**
                 * Dismiss the modal overlay after it has been presented.
                 *
                 * @param data Any data to emit in the dismiss events.
                 * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
                 */
                Modal.prototype.dismiss = function (data, role) {
                    return __awaiter(this, void 0, void 0, function () {
                        var dismissed;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, dismiss(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation)];
                                case 1:
                                    dismissed = _a.sent();
                                    if (!dismissed) return [3 /*break*/, 3];
                                    return [4 /*yield*/, detachComponent(this.delegate, this.usersElement)];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/, dismissed];
                            }
                        });
                    });
                };
                /**
                 * Returns a promise that resolves when the modal did dismiss.
                 */
                Modal.prototype.onDidDismiss = function () {
                    return eventMethod(this.el, 'ionModalDidDismiss');
                };
                /**
                 * Returns a promise that resolves when the modal will dismiss.
                 */
                Modal.prototype.onWillDismiss = function () {
                    return eventMethod(this.el, 'ionModalWillDismiss');
                };
                Modal.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        'no-router': true,
                        'aria-modal': 'true',
                        class: Object.assign((_a = {}, _a["" + mode] = true, _a), getClassMap(this.cssClass)),
                        style: {
                            zIndex: 20000 + this.overlayIndex,
                        }
                    };
                };
                Modal.prototype.__stencil_render = function () {
                    var _a;
                    var mode = getIonMode(this);
                    var dialogClasses = (_a = {},
                        _a["modal-wrapper"] = true,
                        _a["" + mode] = true,
                        _a);
                    return [
                        h("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }),
                        h("div", { role: "dialog", class: dialogClasses })
                    ];
                };
                Object.defineProperty(Modal.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Modal.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Modal, "style", {
                    get: function () { return ".sc-ion-modal-ios-h {\n  \n  --width: 100%;\n  --min-width: auto;\n  --max-width: auto;\n  --height: 100%;\n  --min-height: auto;\n  --max-height: auto;\n  --overflow: hidden;\n  --border-radius: 0;\n  --border-width: 0;\n  --border-style: none;\n  --border-color: transparent;\n  --background: var(--ion-background-color, #fff);\n  --box-shadow: none;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  contain: strict;\n}\n\n.overlay-hidden.sc-ion-modal-ios-h {\n  display: none;\n}\n\n.modal-wrapper.sc-ion-modal-ios {\n  border-radius: var(--border-radius);\n  width: var(--width);\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  background: var(--background);\n  -webkit-box-shadow: var(--box-shadow);\n  box-shadow: var(--box-shadow);\n  overflow: var(--overflow);\n  z-index: 10;\n}\n\n\@media only screen and (min-width: 768px) and (min-height: 600px) {\n  .sc-ion-modal-ios-h {\n    --width: 600px;\n    --height: 500px;\n    --ion-safe-area-top: 0px;\n    --ion-safe-area-bottom: 0px;\n    --ion-safe-area-right: 0px;\n    --ion-safe-area-left: 0px;\n  }\n}\n\@media only screen and (min-width: 768px) and (min-height: 768px) {\n  .sc-ion-modal-ios-h {\n    --width: 600px;\n    --height: 600px;\n  }\n}\n\@media only screen and (min-width: 768px) and (min-height: 600px) {\n  .sc-ion-modal-ios-h {\n    --border-radius: 10px;\n  }\n}\n.modal-wrapper.sc-ion-modal-ios {\n  -webkit-transform: translate3d(0,  100%,  0);\n  transform: translate3d(0,  100%,  0);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Modal;
            }());
            exports('ion_modal', Modal);
            var LIFECYCLE_MAP = {
                'ionModalDidPresent': 'ionViewDidEnter',
                'ionModalWillPresent': 'ionViewWillEnter',
                'ionModalWillDismiss': 'ionViewWillLeave',
                'ionModalDidDismiss': 'ionViewDidLeave',
            };
        }
    };
});
