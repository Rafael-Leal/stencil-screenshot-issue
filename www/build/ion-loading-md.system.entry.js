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
    var registerInstance, getIonMode, createEvent, getContext, h, getElement, Host, BACKDROP, present, dismiss, eventMethod, getClassMap, sanitizeDOMString;
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
                sanitizeDOMString = module.s;
            }],
        execute: function () {
            /**
             * iOS Loading Enter Animation
             */
            function iosEnterAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper'));
                backdropAnimation.fromTo('opacity', 0.01, 0.3);
                wrapperAnimation.fromTo('opacity', 0.01, 1)
                    .fromTo('scale', 1.1, 1);
                return Promise.resolve(baseAnimation
                    .addElement(baseEl)
                    .easing('ease-in-out')
                    .duration(200)
                    .add(backdropAnimation)
                    .add(wrapperAnimation));
            }
            /**
             * iOS Loading Leave Animation
             */
            function iosLeaveAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper'));
                backdropAnimation.fromTo('opacity', 0.3, 0);
                wrapperAnimation.fromTo('opacity', 0.99, 0)
                    .fromTo('scale', 1, 0.9);
                return Promise.resolve(baseAnimation
                    .addElement(baseEl)
                    .easing('ease-in-out')
                    .duration(200)
                    .add(backdropAnimation)
                    .add(wrapperAnimation));
            }
            /**
             * Md Loading Enter Animation
             */
            function mdEnterAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper'));
                backdropAnimation.fromTo('opacity', 0.01, 0.32);
                wrapperAnimation.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
                return Promise.resolve(baseAnimation
                    .addElement(baseEl)
                    .easing('ease-in-out')
                    .duration(200)
                    .add(backdropAnimation)
                    .add(wrapperAnimation));
            }
            /**
             * Md Loading Leave Animation
             */
            function mdLeaveAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper'));
                backdropAnimation.fromTo('opacity', 0.32, 0);
                wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
                return Promise.resolve(baseAnimation
                    .addElement(baseEl)
                    .easing('ease-in-out')
                    .duration(200)
                    .add(backdropAnimation)
                    .add(wrapperAnimation));
            }
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Loading = /** @class */ (function () {
                function Loading(hostRef) {
                    registerInstance(this, hostRef);
                    this.presented = false;
                    this.mode = getIonMode(this);
                    /**
                     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
                     */
                    this.keyboardClose = true;
                    /**
                     * Number of milliseconds to wait before dismissing the loading indicator.
                     */
                    this.duration = 0;
                    /**
                     * If `true`, the loading indicator will be dismissed when the backdrop is clicked.
                     */
                    this.backdropDismiss = false;
                    /**
                     * If `true`, a backdrop will be displayed behind the loading indicator.
                     */
                    this.showBackdrop = true;
                    /**
                     * If `true`, the loading indicator will be translucent.
                     */
                    this.translucent = false;
                    /**
                     * If `true`, the loading indicator will animate.
                     */
                    this.animated = true;
                    this.didPresent = createEvent(this, "ionLoadingDidPresent", 7);
                    this.willPresent = createEvent(this, "ionLoadingWillPresent", 7);
                    this.willDismiss = createEvent(this, "ionLoadingWillDismiss", 7);
                    this.didDismiss = createEvent(this, "ionLoadingDidDismiss", 7);
                    this.config = getContext(this, "config");
                }
                Loading.prototype.componentWillLoad = function () {
                    if (this.spinner === undefined) {
                        var mode = getIonMode(this);
                        this.spinner = this.config.get('loadingSpinner', this.config.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
                    }
                };
                Loading.prototype.onBackdropTap = function () {
                    this.dismiss(undefined, BACKDROP);
                };
                /**
                 * Present the loading overlay after it has been created.
                 */
                Loading.prototype.present = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, present(this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation, undefined)];
                                case 1:
                                    _a.sent();
                                    if (this.duration > 0) {
                                        this.durationTimeout = setTimeout(function () { return _this.dismiss(); }, this.duration + 10);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Dismiss the loading overlay after it has been presented.
                 *
                 * @param data Any data to emit in the dismiss events.
                 * @param role The role of the element that is dismissing the loading.
                 * This can be useful in a button handler for determining which button was
                 * clicked to dismiss the loading.
                 * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
                 */
                Loading.prototype.dismiss = function (data, role) {
                    if (this.durationTimeout) {
                        clearTimeout(this.durationTimeout);
                    }
                    return dismiss(this, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
                };
                /**
                 * Returns a promise that resolves when the loading did dismiss.
                 */
                Loading.prototype.onDidDismiss = function () {
                    return eventMethod(this.el, 'ionLoadingDidDismiss');
                };
                /**
                 * Returns a promise that resolves when the loading will dismiss.
                 */
                Loading.prototype.onWillDismiss = function () {
                    return eventMethod(this.el, 'ionLoadingWillDismiss');
                };
                Loading.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        style: {
                            zIndex: 40000 + this.overlayIndex
                        },
                        class: Object.assign({}, getClassMap(this.cssClass), (_a = {}, _a["" + mode] = true, _a['loading-translucent'] = this.translucent, _a))
                    };
                };
                Loading.prototype.__stencil_render = function () {
                    return [
                        h("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }),
                        h("div", { class: "loading-wrapper", role: "dialog" }, this.spinner && (h("div", { class: "loading-spinner" }, h("ion-spinner", { name: this.spinner }))), this.message && h("div", { class: "loading-content", innerHTML: sanitizeDOMString(this.message) }))
                    ];
                };
                Object.defineProperty(Loading.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Loading.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Loading, "style", {
                    get: function () { return ".sc-ion-loading-md-h {\n  \n  --min-width: auto;\n  --width: auto;\n  --min-height: auto;\n  --height: auto;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-family: var(--ion-font-family, inherit);\n  contain: strict;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 1000;\n}\n\n.overlay-hidden.sc-ion-loading-md-h {\n  display: none;\n}\n\n.loading-wrapper.sc-ion-loading-md {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-pack: inherit;\n  justify-content: inherit;\n  width: var(--width);\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  background: var(--background);\n  opacity: 0;\n  z-index: 10;\n}\n\n.spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md, .spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md {\n  color: var(--spinner-color);\n}\n\n.sc-ion-loading-md-h {\n  --background: var(--ion-color-step-50, #f2f2f2);\n  --max-width: 280px;\n  --max-height: 90%;\n  --spinner-color: var(--ion-color-primary, #3880ff);\n  color: var(--ion-color-step-850, #262626);\n  font-size: 14px;\n}\n\n.loading-wrapper.sc-ion-loading-md {\n  border-radius: 2px;\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-top: 24px;\n  padding-bottom: 24px;\n  -webkit-box-shadow: 0 16px 20px rgba(0, 0, 0, 0.4);\n  box-shadow: 0 16px 20px rgba(0, 0, 0, 0.4);\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .loading-wrapper.sc-ion-loading-md {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 24px;\n    padding-inline-start: 24px;\n    -webkit-padding-end: 24px;\n    padding-inline-end: 24px;\n  }\n}\n\n.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md {\n  margin-left: 16px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md {\n    margin-left: unset;\n    -webkit-margin-start: 16px;\n    margin-inline-start: 16px;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Loading;
            }());
            exports('ion_loading', Loading);
        }
    };
});
