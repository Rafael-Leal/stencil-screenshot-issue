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
             * iOS Popover Enter Animation
             */
            function iosEnterAnimation(AnimationC, baseEl, ev) {
                var originY = 'top';
                var originX = 'left';
                var contentEl = baseEl.querySelector('.popover-content');
                var contentDimentions = contentEl.getBoundingClientRect();
                var contentWidth = contentDimentions.width;
                var contentHeight = contentDimentions.height;
                var bodyWidth = baseEl.ownerDocument.defaultView.innerWidth;
                var bodyHeight = baseEl.ownerDocument.defaultView.innerHeight;
                // If ev was passed, use that for target element
                var targetDim = ev && ev.target && ev.target.getBoundingClientRect();
                var targetTop = targetDim != null && 'top' in targetDim ? targetDim.top : bodyHeight / 2 - contentHeight / 2;
                var targetLeft = targetDim != null && 'left' in targetDim ? targetDim.left : bodyWidth / 2;
                var targetWidth = (targetDim && targetDim.width) || 0;
                var targetHeight = (targetDim && targetDim.height) || 0;
                var arrowEl = baseEl.querySelector('.popover-arrow');
                var arrowDim = arrowEl.getBoundingClientRect();
                var arrowWidth = arrowDim.width;
                var arrowHeight = arrowDim.height;
                if (targetDim == null) {
                    arrowEl.style.display = 'none';
                }
                var arrowCSS = {
                    top: targetTop + targetHeight,
                    left: targetLeft + targetWidth / 2 - arrowWidth / 2
                };
                var popoverCSS = {
                    top: targetTop + targetHeight + (arrowHeight - 1),
                    left: targetLeft + targetWidth / 2 - contentWidth / 2
                };
                // If the popover left is less than the padding it is off screen
                // to the left so adjust it, else if the width of the popover
                // exceeds the body width it is off screen to the right so adjust
                //
                var checkSafeAreaLeft = false;
                var checkSafeAreaRight = false;
                // If the popover left is less than the padding it is off screen
                // to the left so adjust it, else if the width of the popover
                // exceeds the body width it is off screen to the right so adjust
                // 25 is a random/arbitrary number. It seems to work fine for ios11
                // and iPhoneX. Is it perfect? No. Does it work? Yes.
                if (popoverCSS.left < POPOVER_IOS_BODY_PADDING + 25) {
                    checkSafeAreaLeft = true;
                    popoverCSS.left = POPOVER_IOS_BODY_PADDING;
                }
                else if (contentWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left + 25 > bodyWidth) {
                    // Ok, so we're on the right side of the screen,
                    // but now we need to make sure we're still a bit further right
                    // cus....notchurally... Again, 25 is random. It works tho
                    checkSafeAreaRight = true;
                    popoverCSS.left = bodyWidth - contentWidth - POPOVER_IOS_BODY_PADDING;
                    originX = 'right';
                }
                // make it pop up if there's room above
                if (targetTop + targetHeight + contentHeight > bodyHeight && targetTop - contentHeight > 0) {
                    arrowCSS.top = targetTop - (arrowHeight + 1);
                    popoverCSS.top = targetTop - contentHeight - (arrowHeight - 1);
                    baseEl.className = baseEl.className + ' popover-bottom';
                    originY = 'bottom';
                    // If there isn't room for it to pop up above the target cut it off
                }
                else if (targetTop + targetHeight + contentHeight > bodyHeight) {
                    contentEl.style.bottom = POPOVER_IOS_BODY_PADDING + '%';
                }
                arrowEl.style.top = arrowCSS.top + 'px';
                arrowEl.style.left = arrowCSS.left + 'px';
                contentEl.style.top = popoverCSS.top + 'px';
                contentEl.style.left = popoverCSS.left + 'px';
                if (checkSafeAreaLeft) {
                    contentEl.style.left = "calc(" + popoverCSS.left + "px + var(--ion-safe-area-left, 0px))";
                }
                if (checkSafeAreaRight) {
                    contentEl.style.left = "calc(" + popoverCSS.left + "px - var(--ion-safe-area-right, 0px))";
                }
                contentEl.style.transformOrigin = originY + ' ' + originX;
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                backdropAnimation.fromTo('opacity', 0.01, 0.08);
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
                wrapperAnimation.fromTo('opacity', 0.01, 1);
                return Promise.resolve(baseAnimation
                    .addElement(baseEl)
                    .easing('ease')
                    .duration(100)
                    .add(backdropAnimation)
                    .add(wrapperAnimation));
            }
            var POPOVER_IOS_BODY_PADDING = 5;
            /**
             * iOS Popover Leave Animation
             */
            function iosLeaveAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
                wrapperAnimation.fromTo('opacity', 0.99, 0);
                backdropAnimation.fromTo('opacity', 0.08, 0);
                return Promise.resolve(baseAnimation
                    .addElement(baseEl)
                    .easing('ease')
                    .duration(500)
                    .add(backdropAnimation)
                    .add(wrapperAnimation));
            }
            /**
             * Md Popover Enter Animation
             */
            function mdEnterAnimation(AnimationC, baseEl, ev) {
                var doc = baseEl.ownerDocument;
                var isRTL = doc.dir === 'rtl';
                var originY = 'top';
                var originX = isRTL ? 'right' : 'left';
                var contentEl = baseEl.querySelector('.popover-content');
                var contentDimentions = contentEl.getBoundingClientRect();
                var contentWidth = contentDimentions.width;
                var contentHeight = contentDimentions.height;
                var bodyWidth = doc.defaultView.innerWidth;
                var bodyHeight = doc.defaultView.innerHeight;
                // If ev was passed, use that for target element
                var targetDim = ev && ev.target && ev.target.getBoundingClientRect();
                // As per MD spec, by default position the popover below the target (trigger) element
                var targetTop = targetDim != null && 'bottom' in targetDim
                    ? targetDim.bottom
                    : bodyHeight / 2 - contentHeight / 2;
                var targetLeft = targetDim != null && 'left' in targetDim
                    ? isRTL
                        ? targetDim.left - contentWidth + targetDim.width
                        : targetDim.left
                    : bodyWidth / 2 - contentWidth / 2;
                var targetHeight = (targetDim && targetDim.height) || 0;
                var popoverCSS = {
                    top: targetTop,
                    left: targetLeft
                };
                // If the popover left is less than the padding it is off screen
                // to the left so adjust it, else if the width of the popover
                // exceeds the body width it is off screen to the right so adjust
                if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {
                    popoverCSS.left = POPOVER_MD_BODY_PADDING;
                    // Same origin in this case for both LTR & RTL
                    // Note: in LTR, originX is already 'left'
                    originX = 'left';
                }
                else if (contentWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left >
                    bodyWidth) {
                    popoverCSS.left = bodyWidth - contentWidth - POPOVER_MD_BODY_PADDING;
                    // Same origin in this case for both LTR & RTL
                    // Note: in RTL, originX is already 'right'
                    originX = 'right';
                }
                // If the popover when popped down stretches past bottom of screen,
                // make it pop up if there's room above
                if (targetTop + targetHeight + contentHeight > bodyHeight &&
                    targetTop - contentHeight > 0) {
                    popoverCSS.top = targetTop - contentHeight - targetHeight;
                    baseEl.className = baseEl.className + ' popover-bottom';
                    originY = 'bottom';
                    // If there isn't room for it to pop up above the target cut it off
                }
                else if (targetTop + targetHeight + contentHeight > bodyHeight) {
                    contentEl.style.bottom = POPOVER_MD_BODY_PADDING + 'px';
                }
                contentEl.style.top = popoverCSS.top + 'px';
                contentEl.style.left = popoverCSS.left + 'px';
                contentEl.style.transformOrigin = originY + ' ' + originX;
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                backdropAnimation.fromTo('opacity', 0.01, 0.32);
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
                wrapperAnimation.fromTo('opacity', 0.01, 1);
                var contentAnimation = new AnimationC();
                contentAnimation.addElement(baseEl.querySelector('.popover-content'));
                contentAnimation.fromTo('scale', 0.001, 1);
                var viewportAnimation = new AnimationC();
                viewportAnimation.addElement(baseEl.querySelector('.popover-viewport'));
                viewportAnimation.fromTo('opacity', 0.01, 1);
                return Promise.resolve(baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(0.36,0.66,0.04,1)')
                    .duration(300)
                    .add(backdropAnimation)
                    .add(wrapperAnimation)
                    .add(contentAnimation)
                    .add(viewportAnimation));
            }
            var POPOVER_MD_BODY_PADDING = 12;
            /**
             * Md Popover Leave Animation
             */
            function mdLeaveAnimation(AnimationC, baseEl) {
                var baseAnimation = new AnimationC();
                var backdropAnimation = new AnimationC();
                backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
                var wrapperAnimation = new AnimationC();
                wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
                wrapperAnimation.fromTo('opacity', 0.99, 0);
                backdropAnimation.fromTo('opacity', 0.32, 0);
                return Promise.resolve(baseAnimation
                    .addElement(baseEl)
                    .easing('ease')
                    .duration(500)
                    .add(backdropAnimation)
                    .add(wrapperAnimation));
            }
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Popover = /** @class */ (function () {
                function Popover(hostRef) {
                    registerInstance(this, hostRef);
                    this.presented = false;
                    this.mode = getIonMode(this);
                    /**
                     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
                     */
                    this.keyboardClose = true;
                    /**
                     * If `true`, the popover will be dismissed when the backdrop is clicked.
                     */
                    this.backdropDismiss = true;
                    /**
                     * If `true`, a backdrop will be displayed behind the popover.
                     */
                    this.showBackdrop = true;
                    /**
                     * If `true`, the popover will be translucent.
                     */
                    this.translucent = false;
                    /**
                     * If `true`, the popover will animate.
                     */
                    this.animated = true;
                    this.didPresent = createEvent(this, "ionPopoverDidPresent", 7);
                    this.willPresent = createEvent(this, "ionPopoverWillPresent", 7);
                    this.willDismiss = createEvent(this, "ionPopoverWillDismiss", 7);
                    this.didDismiss = createEvent(this, "ionPopoverDidDismiss", 7);
                    this.config = getContext(this, "config");
                }
                Popover.prototype.onDismiss = function (ev) {
                    ev.stopPropagation();
                    ev.preventDefault();
                    this.dismiss();
                };
                Popover.prototype.onBackdropTap = function () {
                    this.dismiss(undefined, BACKDROP);
                };
                Popover.prototype.lifecycle = function (modalEvent) {
                    var el = this.usersElement;
                    var name = LIFECYCLE_MAP[modalEvent.type];
                    if (el && name) {
                        var event = new CustomEvent(name, {
                            bubbles: false,
                            cancelable: false,
                            detail: modalEvent.detail
                        });
                        el.dispatchEvent(event);
                    }
                };
                /**
                 * Present the popover overlay after it has been created.
                 */
                Popover.prototype.present = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var container, data, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (this.presented) {
                                        return [2 /*return*/];
                                    }
                                    container = this.el.querySelector('.popover-content');
                                    if (!container) {
                                        throw new Error('container is undefined');
                                    }
                                    data = Object.assign({}, this.componentProps, { popover: this.el });
                                    _a = this;
                                    return [4 /*yield*/, attachComponent(this.delegate, container, this.component, ['popover-viewport', this.el['s-sc']], data)];
                                case 1:
                                    _a.usersElement = _b.sent();
                                    return [4 /*yield*/, deepReady(this.usersElement)];
                                case 2:
                                    _b.sent();
                                    return [2 /*return*/, present(this, 'popoverEnter', iosEnterAnimation, mdEnterAnimation, this.event)];
                            }
                        });
                    });
                };
                /**
                 * Dismiss the popover overlay after it has been presented.
                 *
                 * @param data Any data to emit in the dismiss events.
                 * @param role The role of the element that is dismissing the popover. For example, 'cancel' or 'backdrop'.
                 */
                Popover.prototype.dismiss = function (data, role) {
                    return __awaiter(this, void 0, void 0, function () {
                        var shouldDismiss;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, dismiss(this, data, role, 'popoverLeave', iosLeaveAnimation, mdLeaveAnimation, this.event)];
                                case 1:
                                    shouldDismiss = _a.sent();
                                    if (!shouldDismiss) return [3 /*break*/, 3];
                                    return [4 /*yield*/, detachComponent(this.delegate, this.usersElement)];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/, shouldDismiss];
                            }
                        });
                    });
                };
                /**
                 * Returns a promise that resolves when the popover did dismiss.
                 */
                Popover.prototype.onDidDismiss = function () {
                    return eventMethod(this.el, 'ionPopoverDidDismiss');
                };
                /**
                 * Returns a promise that resolves when the popover will dismiss.
                 */
                Popover.prototype.onWillDismiss = function () {
                    return eventMethod(this.el, 'ionPopoverWillDismiss');
                };
                Popover.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        'aria-modal': 'true',
                        'no-router': true,
                        style: {
                            zIndex: 20000 + this.overlayIndex,
                        },
                        class: Object.assign({}, getClassMap(this.cssClass), (_a = {}, _a["" + mode] = true, _a['popover-translucent'] = this.translucent, _a))
                    };
                };
                Popover.prototype.__stencil_render = function () {
                    return [
                        h("ion-backdrop", { tappable: this.backdropDismiss, visible: this.showBackdrop }),
                        h("div", { class: "popover-wrapper" }, h("div", { class: "popover-arrow" }), h("div", { class: "popover-content" }))
                    ];
                };
                Object.defineProperty(Popover.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Popover.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Popover, "style", {
                    get: function () { return ".sc-ion-popover-md-h {\n  \n  --background: var(--ion-background-color, #fff);\n  --min-width: 0;\n  --min-height: 0;\n  --max-width: auto;\n  --height: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  color: var(--ion-text-color, #000);\n  z-index: 1000;\n}\n\n.overlay-hidden.sc-ion-popover-md-h {\n  display: none;\n}\n\n.popover-wrapper.sc-ion-popover-md {\n  opacity: 0;\n  z-index: 10;\n}\n\n.popover-content.sc-ion-popover-md {\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: var(--width);\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  background: var(--background);\n  -webkit-box-shadow: var(--box-shadow);\n  box-shadow: var(--box-shadow);\n  overflow: auto;\n  z-index: 10;\n}\n\n.popover-viewport.sc-ion-popover-md {\n  --ion-safe-area-top: 0px;\n  --ion-safe-area-right: 0px;\n  --ion-safe-area-bottom: 0px;\n  --ion-safe-area-left: 0px;\n}\n\n.sc-ion-popover-md-h {\n  --width: 250px;\n  --max-height: 90%;\n  --box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.popover-content.sc-ion-popover-md {\n  border-radius: 4px;\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n}\n[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md {\n  -webkit-transform-origin: right top;\n  transform-origin: right top;\n}\n\n.popover-viewport.sc-ion-popover-md {\n  -webkit-transition-delay: 100ms;\n  transition-delay: 100ms;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Popover;
            }());
            exports('ion_popover', Popover);
            var LIFECYCLE_MAP = {
                'ionPopoverDidPresent': 'ionViewDidEnter',
                'ionPopoverWillPresent': 'ionViewWillEnter',
                'ionPopoverWillDismiss': 'ionViewWillLeave',
                'ionPopoverDidDismiss': 'ionViewDidLeave',
            };
        }
    };
});
