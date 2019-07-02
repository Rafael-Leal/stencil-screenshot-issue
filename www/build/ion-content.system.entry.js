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
System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getContext, getIonMode, isPlatform, h, getElement, Host, createColorClasses, hostContext;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                getContext = module.e;
                getIonMode = module.c;
                isPlatform = module.i;
                h = module.h;
                getElement = module.f;
                Host = module.H;
            }, function (module) {
                createColorClasses = module.c;
                hostContext = module.h;
            }],
        execute: function () {
            /**
             * @slot - Content is placed in the scrollable area if provided without a slot.
             * @slot fixed - Should be used for fixed content that should not scroll.
             */
            var Content = /** @class */ (function () {
                function Content(hostRef) {
                    registerInstance(this, hostRef);
                    this.isScrolling = false;
                    this.lastScroll = 0;
                    this.queued = false;
                    this.cTop = -1;
                    this.cBottom = -1;
                    // Detail is used in a hot loop in the scroll event, by allocating it here
                    // V8 will be able to inline any read/write to it since it's a monomorphic class.
                    // https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html
                    this.detail = {
                        scrollTop: 0,
                        scrollLeft: 0,
                        type: 'scroll',
                        event: undefined,
                        startX: 0,
                        startY: 0,
                        startTimeStamp: 0,
                        currentX: 0,
                        currentY: 0,
                        velocityX: 0,
                        velocityY: 0,
                        deltaX: 0,
                        deltaY: 0,
                        timeStamp: 0,
                        data: undefined,
                        isScrolling: true,
                    };
                    /**
                     * If `true`, the content will scroll behind the headers
                     * and footers. This effect can easily be seen by setting the toolbar
                     * to transparent.
                     */
                    this.fullscreen = false;
                    /**
                     * If you want to enable the content scrolling in the X axis, set this property to `true`.
                     */
                    this.scrollX = false;
                    /**
                     * If you want to disable the content scrolling in the Y axis, set this property to `false`.
                     */
                    this.scrollY = true;
                    /**
                     * Because of performance reasons, ionScroll events are disabled by default, in order to enable them
                     * and start listening from (ionScroll), set this property to `true`.
                     */
                    this.scrollEvents = false;
                    this.ionScrollStart = createEvent(this, "ionScrollStart", 7);
                    this.ionScroll = createEvent(this, "ionScroll", 7);
                    this.ionScrollEnd = createEvent(this, "ionScrollEnd", 7);
                    this.config = getContext(this, "config");
                    this.queue = getContext(this, "queue");
                    this.win = getContext(this, "window");
                }
                Content.prototype.componentWillLoad = function () {
                    if (this.forceOverscroll === undefined) {
                        var mode = getIonMode(this);
                        this.forceOverscroll = mode === 'ios' && isPlatform(this.win, 'mobile');
                    }
                };
                Content.prototype.componentDidLoad = function () {
                    this.resize();
                };
                Content.prototype.componentDidUnload = function () {
                    this.onScrollEnd();
                };
                Content.prototype.onClick = function (ev) {
                    if (this.isScrolling) {
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                };
                Content.prototype.resize = function () {
                    if (this.fullscreen) {
                        this.queue.read(this.readDimensions.bind(this));
                    }
                    else if (this.cTop !== 0 || this.cBottom !== 0) {
                        this.cTop = this.cBottom = 0;
                        this.el.forceUpdate();
                    }
                };
                Content.prototype.readDimensions = function () {
                    var page = getPageElement(this.el);
                    var top = Math.max(this.el.offsetTop, 0);
                    var bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
                    var dirty = top !== this.cTop || bottom !== this.cBottom;
                    if (dirty) {
                        this.cTop = top;
                        this.cBottom = bottom;
                        this.el.forceUpdate();
                    }
                };
                Content.prototype.onScroll = function (ev) {
                    var _this = this;
                    var timeStamp = Date.now();
                    var shouldStart = !this.isScrolling;
                    this.lastScroll = timeStamp;
                    if (shouldStart) {
                        this.onScrollStart();
                    }
                    if (!this.queued && this.scrollEvents) {
                        this.queued = true;
                        this.queue.read(function (ts) {
                            _this.queued = false;
                            _this.detail.event = ev;
                            updateScrollDetail(_this.detail, _this.scrollEl, ts, shouldStart);
                            _this.ionScroll.emit(_this.detail);
                        });
                    }
                };
                /**
                 * Get the element where the actual scrolling takes place.
                 * This element can be used to subscribe to `scroll` events or manually modify
                 * `scrollTop`. However, it's recommended to use the API provided by `ion-content`:
                 *
                 * i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events
                 * and `scrollToPoint()` to scroll the content into a certain point.
                 */
                Content.prototype.getScrollElement = function () {
                    return Promise.resolve(this.scrollEl);
                };
                /**
                 * Scroll to the top of the component.
                 *
                 * @param duration The amount of time to take scrolling to the top. Defaults to `0`.
                 */
                Content.prototype.scrollToTop = function (duration) {
                    if (duration === void 0) { duration = 0; }
                    return this.scrollToPoint(undefined, 0, duration);
                };
                /**
                 * Scroll to the bottom of the component.
                 *
                 * @param duration The amount of time to take scrolling to the bottom. Defaults to `0`.
                 */
                Content.prototype.scrollToBottom = function (duration) {
                    if (duration === void 0) { duration = 0; }
                    var y = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
                    return this.scrollToPoint(undefined, y, duration);
                };
                /**
                 * Scroll by a specified X/Y distance in the component.
                 *
                 * @param x The amount to scroll by on the horizontal axis.
                 * @param y The amount to scroll by on the vertical axis.
                 * @param duration The amount of time to take scrolling by that amount.
                 */
                Content.prototype.scrollByPoint = function (x, y, duration) {
                    return this.scrollToPoint(x + this.scrollEl.scrollLeft, y + this.scrollEl.scrollTop, duration);
                };
                /**
                 * Scroll to a specified X/Y location in the component.
                 *
                 * @param x The point to scroll to on the horizontal axis.
                 * @param y The point to scroll to on the vertical axis.
                 * @param duration The amount of time to take scrolling to that point. Defaults to `0`.
                 */
                Content.prototype.scrollToPoint = function (x, y, duration) {
                    if (duration === void 0) { duration = 0; }
                    return __awaiter(this, void 0, void 0, function () {
                        var el, resolve, startTime, promise, fromY, fromX, deltaY, deltaX, step;
                        return __generator(this, function (_a) {
                            el = this.scrollEl;
                            if (duration < 32) {
                                if (y != null) {
                                    el.scrollTop = y;
                                }
                                if (x != null) {
                                    el.scrollLeft = x;
                                }
                                return [2 /*return*/];
                            }
                            startTime = 0;
                            promise = new Promise(function (r) { return resolve = r; });
                            fromY = el.scrollTop;
                            fromX = el.scrollLeft;
                            deltaY = y != null ? y - fromY : 0;
                            deltaX = x != null ? x - fromX : 0;
                            step = function (timeStamp) {
                                var linearTime = Math.min(1, ((timeStamp - startTime) / duration)) - 1;
                                var easedT = Math.pow(linearTime, 3) + 1;
                                if (deltaY !== 0) {
                                    el.scrollTop = Math.floor((easedT * deltaY) + fromY);
                                }
                                if (deltaX !== 0) {
                                    el.scrollLeft = Math.floor((easedT * deltaX) + fromX);
                                }
                                if (easedT < 1) {
                                    // do not use DomController here
                                    // must use nativeRaf in order to fire in the next frame
                                    // TODO: remove as any
                                    requestAnimationFrame(step);
                                }
                                else {
                                    resolve();
                                }
                            };
                            // chill out for a frame first
                            requestAnimationFrame(function (ts) {
                                startTime = ts;
                                step(ts);
                            });
                            return [2 /*return*/, promise];
                        });
                    });
                };
                Content.prototype.onScrollStart = function () {
                    var _this = this;
                    this.isScrolling = true;
                    this.ionScrollStart.emit({
                        isScrolling: true
                    });
                    if (this.watchDog) {
                        clearInterval(this.watchDog);
                    }
                    // watchdog
                    this.watchDog = setInterval(function () {
                        if (_this.lastScroll < Date.now() - 120) {
                            _this.onScrollEnd();
                        }
                    }, 100);
                };
                Content.prototype.onScrollEnd = function () {
                    clearInterval(this.watchDog);
                    this.watchDog = null;
                    if (this.isScrolling) {
                        this.isScrolling = false;
                        this.ionScrollEnd.emit({
                            isScrolling: false
                        });
                    }
                };
                Content.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a['content-sizing'] = hostContext('ion-popover', this.el), _a['overscroll'] = !!this.forceOverscroll, _a)),
                        style: {
                            '--offset-top': this.cTop + "px",
                            '--offset-bottom': this.cBottom + "px",
                        }
                    };
                };
                Content.prototype.__stencil_render = function () {
                    var _this = this;
                    var _a = this, scrollX = _a.scrollX, scrollY = _a.scrollY, forceOverscroll = _a.forceOverscroll;
                    this.resize();
                    return [
                        h("div", { class: {
                                'inner-scroll': true,
                                'scroll-x': scrollX,
                                'scroll-y': scrollY,
                                'overscroll': (scrollX || scrollY) && !!forceOverscroll
                            }, ref: function (el) { return _this.scrollEl = el; }, onScroll: function (ev) { return _this.onScroll(ev); } }, h("slot", null)),
                        h("slot", { name: "fixed" })
                    ];
                };
                Object.defineProperty(Content.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Content.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Content, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --background: Background of the Content\n   * \@prop --color: Color of the Content\n   * \@prop --padding-top: Padding top of the Content\n   * \@prop --padding-bottom: Padding bottom of the Content\n   * \@prop --padding-start: Padding start of the Content\n   * \@prop --padding-end: Padding end of the Content\n   * \@prop --keyboard-offset: Keyboard offset of the Content\n   * \@prop --offset-top: Offset top of the Content\n   * \@prop --offset-bottom: Offset bottom of the Content\n   */\n  --background: var(--ion-background-color, #fff);\n  --color: var(--ion-text-color, #000);\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --keyboard-offset: 0px;\n  --offset-top: 0px;\n  --offset-bottom: 0px;\n  --overflow: auto;\n  display: block;\n  position: relative;\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n  /* stylelint-disable */\n  margin: 0 !important;\n  padding: 0 !important;\n  /* stylelint-enable */\n  font-family: var(--ion-font-family, inherit);\n  contain: size style;\n}\n\n:host(.ion-color) .inner-scroll {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n:host(.outer-content) {\n  --background: var(--ion-color-step-50, #f2f2f2);\n}\n\n.inner-scroll {\n  left: 0px;\n  right: 0px;\n  top: calc(var(--offset-top) * -1);\n  bottom: calc(var(--offset-bottom) * -1);\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: calc(var(--padding-top) + var(--offset-top));\n  padding-bottom: calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));\n  position: absolute;\n  background: var(--background);\n  color: var(--color);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .inner-scroll {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n.scroll-y,\n.scroll-x {\n  -webkit-overflow-scrolling: touch;\n  will-change: scroll-position;\n  -ms-scroll-chaining: none;\n  overscroll-behavior: contain;\n}\n\n.scroll-y {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  overflow-y: var(--overflow);\n}\n\n.scroll-x {\n  -ms-touch-action: pan-x;\n  touch-action: pan-x;\n  overflow-x: var(--overflow);\n}\n\n.scroll-x.scroll-y {\n  -ms-touch-action: auto;\n  touch-action: auto;\n}\n\n.overscroll::before,\n.overscroll::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  content: \"\";\n}\n\n.overscroll::before {\n  bottom: -1px;\n}\n\n.overscroll::after {\n  top: -1px;\n}\n\n:host(.content-sizing) {\n  contain: none;\n}\n\n:host(.content-sizing) .inner-scroll {\n  position: relative;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Content;
            }());
            exports('ion_content', Content);
            function getParentElement(el) {
                if (el.parentElement) {
                    // normal element with a parent element
                    return el.parentElement;
                }
                if (el.parentNode && el.parentNode.host) {
                    // shadow dom's document fragment
                    return el.parentNode.host;
                }
                return null;
            }
            function getPageElement(el) {
                var tabs = el.closest('ion-tabs');
                if (tabs) {
                    return tabs;
                }
                var page = el.closest('ion-app,ion-page,.ion-page,page-inner');
                if (page) {
                    return page;
                }
                return getParentElement(el);
            }
            // ******** DOM READ ****************
            function updateScrollDetail(detail, el, timestamp, shouldStart) {
                var prevX = detail.currentX;
                var prevY = detail.currentY;
                var prevT = detail.timeStamp;
                var currentX = el.scrollLeft;
                var currentY = el.scrollTop;
                if (shouldStart) {
                    // remember the start positions
                    detail.startTimeStamp = timestamp;
                    detail.startX = currentX;
                    detail.startY = currentY;
                    detail.velocityX = detail.velocityY = 0;
                }
                detail.timeStamp = timestamp;
                detail.currentX = detail.scrollLeft = currentX;
                detail.currentY = detail.scrollTop = currentY;
                detail.deltaX = currentX - detail.startX;
                detail.deltaY = currentY - detail.startY;
                var timeDelta = timestamp - prevT;
                if (timeDelta > 0 && timeDelta < 100) {
                    var velocityX = (currentX - prevX) / timeDelta;
                    var velocityY = (currentY - prevY) / timeDelta;
                    detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
                    detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
                }
            }
        }
    };
});
