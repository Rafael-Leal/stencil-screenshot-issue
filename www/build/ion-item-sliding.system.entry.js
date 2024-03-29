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
System.register(['./chunk-a61457cf.system.js', './chunk-93181f6c.system.js'], function (exports, module) {
    'use strict';
    var registerInstance, createEvent, getContext, getIonMode, getElement, h, Host, isEndSide;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                getContext = module.e;
                getIonMode = module.c;
                getElement = module.f;
                h = module.h;
                Host = module.H;
            }, function (module) {
                isEndSide = module.i;
            }],
        execute: function () {
            var SWIPE_MARGIN = 30;
            var ELASTIC_FACTOR = 0.55;
            var openSlidingItem;
            var ItemSliding = /** @class */ (function () {
                function ItemSliding(hostRef) {
                    registerInstance(this, hostRef);
                    this.item = null;
                    this.openAmount = 0;
                    this.initialOpenAmount = 0;
                    this.optsWidthRightSide = 0;
                    this.optsWidthLeftSide = 0;
                    this.sides = 0 /* None */;
                    this.optsDirty = true;
                    this.state = 2 /* Disabled */;
                    /**
                     * If `true`, the user cannot interact with the sliding item.
                     */
                    this.disabled = false;
                    this.ionDrag = createEvent(this, "ionDrag", 7);
                    this.queue = getContext(this, "queue");
                }
                ItemSliding.prototype.disabledChanged = function () {
                    if (this.gesture) {
                        this.gesture.setDisabled(this.disabled);
                    }
                };
                ItemSliding.prototype.componentDidLoad = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    this.item = this.el.querySelector('ion-item');
                                    return [4 /*yield*/, this.updateOptions()];
                                case 1:
                                    _b.sent();
                                    _a = this;
                                    return [4 /*yield*/, module.import('./index-609ae789.system.js')];
                                case 2:
                                    _a.gesture = (_b.sent()).createGesture({
                                        el: this.el,
                                        gestureName: 'item-swipe',
                                        gesturePriority: 100,
                                        threshold: 5,
                                        canStart: function () { return _this.canStart(); },
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
                ItemSliding.prototype.componentDidUnload = function () {
                    if (this.gesture) {
                        this.gesture.destroy();
                        this.gesture = undefined;
                    }
                    this.item = null;
                    this.leftOptions = this.rightOptions = undefined;
                    if (openSlidingItem === this.el) {
                        openSlidingItem = undefined;
                    }
                };
                /**
                 * Get the amount the item is open in pixels.
                 */
                ItemSliding.prototype.getOpenAmount = function () {
                    return Promise.resolve(this.openAmount);
                };
                /**
                 * Get the ratio of the open amount of the item compared to the width of the options.
                 * If the number returned is positive, then the options on the right side are open.
                 * If the number returned is negative, then the options on the left side are open.
                 * If the absolute value of the number is greater than 1, the item is open more than
                 * the width of the options.
                 */
                ItemSliding.prototype.getSlidingRatio = function () {
                    return Promise.resolve(this.getSlidingRatioSync());
                };
                /**
                 * Open the sliding item.
                 *
                 * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
                 */
                ItemSliding.prototype.open = function (side) {
                    return __awaiter(this, void 0, void 0, function () {
                        var optionsToOpen, isStartOpen, isEndOpen;
                        var _this = this;
                        return __generator(this, function (_a) {
                            if (this.item === null) {
                                return [2 /*return*/];
                            }
                            optionsToOpen = this.getOptions(side);
                            if (!optionsToOpen) {
                                return [2 /*return*/];
                            }
                            /**
                             * If side is not set, we need to infer the side
                             * so we know which direction to move the options
                             */
                            if (side === undefined) {
                                side = (optionsToOpen === this.leftOptions) ? 'start' : 'end';
                            }
                            // In RTL we want to switch the sides
                            side = isEndSide(window, side) ? 'end' : 'start';
                            isStartOpen = this.openAmount < 0;
                            isEndOpen = this.openAmount > 0;
                            /**
                             * If a side is open and a user tries to
                             * re-open the same side, we should not do anything
                             */
                            if (isStartOpen && optionsToOpen === this.leftOptions) {
                                return [2 /*return*/];
                            }
                            if (isEndOpen && optionsToOpen === this.rightOptions) {
                                return [2 /*return*/];
                            }
                            this.closeOpened();
                            this.state = 4 /* Enabled */;
                            requestAnimationFrame(function () {
                                _this.calculateOptsWidth();
                                var width = (side === 'end') ? _this.optsWidthRightSide : -_this.optsWidthLeftSide;
                                openSlidingItem = _this.el;
                                _this.setOpenAmount(width, false);
                                _this.state = (side === 'end') ? 8 /* End */ : 16 /* Start */;
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Close the sliding item. Items can also be closed from the [List](../../list/List).
                 */
                ItemSliding.prototype.close = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.setOpenAmount(0, true);
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Close all of the sliding items in the list. Items can also be closed from the [List](../../list/List).
                 */
                ItemSliding.prototype.closeOpened = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (openSlidingItem !== undefined) {
                                openSlidingItem.close();
                                openSlidingItem = undefined;
                                return [2 /*return*/, true];
                            }
                            return [2 /*return*/, false];
                        });
                    });
                };
                /**
                 * Given an optional side, return the ion-item-options element.
                 *
                 * @param side This side of the options to get. If a side is not provided it will
                 * return the first one available.
                 */
                ItemSliding.prototype.getOptions = function (side) {
                    if (side === undefined) {
                        return this.leftOptions || this.rightOptions;
                    }
                    else if (side === 'start') {
                        return this.leftOptions;
                    }
                    else {
                        return this.rightOptions;
                    }
                };
                ItemSliding.prototype.updateOptions = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var options, sides, i, option, side;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    options = this.el.querySelectorAll('ion-item-options');
                                    sides = 0;
                                    // Reset left and right options in case they were removed
                                    this.leftOptions = this.rightOptions = undefined;
                                    i = 0;
                                    _a.label = 1;
                                case 1:
                                    if (!(i < options.length)) return [3 /*break*/, 4];
                                    return [4 /*yield*/, options.item(i).componentOnReady()];
                                case 2:
                                    option = _a.sent();
                                    side = isEndSide(window, option.side) ? 'end' : 'start';
                                    if (side === 'start') {
                                        this.leftOptions = option;
                                        sides |= 1 /* Start */;
                                    }
                                    else {
                                        this.rightOptions = option;
                                        sides |= 2 /* End */;
                                    }
                                    _a.label = 3;
                                case 3:
                                    i++;
                                    return [3 /*break*/, 1];
                                case 4:
                                    this.optsDirty = true;
                                    this.sides = sides;
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ItemSliding.prototype.canStart = function () {
                    var selected = openSlidingItem;
                    if (selected && selected !== this.el) {
                        this.closeOpened();
                        return false;
                    }
                    return !!(this.rightOptions || this.leftOptions);
                };
                ItemSliding.prototype.onStart = function () {
                    openSlidingItem = this.el;
                    if (this.tmr !== undefined) {
                        clearTimeout(this.tmr);
                        this.tmr = undefined;
                    }
                    if (this.openAmount === 0) {
                        this.optsDirty = true;
                        this.state = 4 /* Enabled */;
                    }
                    this.initialOpenAmount = this.openAmount;
                    if (this.item) {
                        this.item.style.transition = 'none';
                    }
                };
                ItemSliding.prototype.onMove = function (gesture) {
                    if (this.optsDirty) {
                        this.calculateOptsWidth();
                    }
                    var openAmount = this.initialOpenAmount - gesture.deltaX;
                    switch (this.sides) {
                        case 2 /* End */:
                            openAmount = Math.max(0, openAmount);
                            break;
                        case 1 /* Start */:
                            openAmount = Math.min(0, openAmount);
                            break;
                        case 3 /* Both */: break;
                        case 0 /* None */: return;
                        default:
                            console.warn('invalid ItemSideFlags value', this.sides);
                            break;
                    }
                    var optsWidth;
                    if (openAmount > this.optsWidthRightSide) {
                        optsWidth = this.optsWidthRightSide;
                        openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
                    }
                    else if (openAmount < -this.optsWidthLeftSide) {
                        optsWidth = -this.optsWidthLeftSide;
                        openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
                    }
                    this.setOpenAmount(openAmount, false);
                };
                ItemSliding.prototype.onEnd = function (gesture) {
                    var velocity = gesture.velocityX;
                    var restingPoint = (this.openAmount > 0)
                        ? this.optsWidthRightSide
                        : -this.optsWidthLeftSide;
                    // Check if the drag didn't clear the buttons mid-point
                    // and we aren't moving fast enough to swipe open
                    var isResetDirection = (this.openAmount > 0) === !(velocity < 0);
                    var isMovingFast = Math.abs(velocity) > 0.3;
                    var isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
                    if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
                        restingPoint = 0;
                    }
                    var state = this.state;
                    this.setOpenAmount(restingPoint, true);
                    if ((state & 32 /* SwipeEnd */) !== 0 && this.rightOptions) {
                        this.rightOptions.fireSwipeEvent();
                    }
                    else if ((state & 64 /* SwipeStart */) !== 0 && this.leftOptions) {
                        this.leftOptions.fireSwipeEvent();
                    }
                };
                ItemSliding.prototype.calculateOptsWidth = function () {
                    this.optsWidthRightSide = 0;
                    if (this.rightOptions) {
                        this.rightOptions.style.display = 'flex';
                        this.optsWidthRightSide = this.rightOptions.offsetWidth;
                        this.rightOptions.style.display = '';
                    }
                    this.optsWidthLeftSide = 0;
                    if (this.leftOptions) {
                        this.leftOptions.style.display = 'flex';
                        this.optsWidthLeftSide = this.leftOptions.offsetWidth;
                        this.leftOptions.style.display = '';
                    }
                    this.optsDirty = false;
                };
                ItemSliding.prototype.setOpenAmount = function (openAmount, isFinal) {
                    var _this = this;
                    if (this.tmr !== undefined) {
                        clearTimeout(this.tmr);
                        this.tmr = undefined;
                    }
                    if (!this.item) {
                        return;
                    }
                    var style = this.item.style;
                    this.openAmount = openAmount;
                    if (isFinal) {
                        style.transition = '';
                    }
                    if (openAmount > 0) {
                        this.state = (openAmount >= (this.optsWidthRightSide + SWIPE_MARGIN))
                            ? 8 /* End */ | 32 /* SwipeEnd */
                            : 8 /* End */;
                    }
                    else if (openAmount < 0) {
                        this.state = (openAmount <= (-this.optsWidthLeftSide - SWIPE_MARGIN))
                            ? 16 /* Start */ | 64 /* SwipeStart */
                            : 16 /* Start */;
                    }
                    else {
                        this.tmr = setTimeout(function () {
                            _this.state = 2 /* Disabled */;
                            _this.tmr = undefined;
                        }, 600);
                        openSlidingItem = undefined;
                        style.transform = '';
                        return;
                    }
                    style.transform = "translate3d(" + -openAmount + "px,0,0)";
                    this.ionDrag.emit({
                        amount: openAmount,
                        ratio: this.getSlidingRatioSync()
                    });
                };
                ItemSliding.prototype.getSlidingRatioSync = function () {
                    if (this.openAmount > 0) {
                        return this.openAmount / this.optsWidthRightSide;
                    }
                    else if (this.openAmount < 0) {
                        return this.openAmount / this.optsWidthLeftSide;
                    }
                    else {
                        return 0;
                    }
                };
                ItemSliding.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a['item-sliding-active-slide'] = (this.state !== 2 /* Disabled */),
                            _a['item-sliding-active-options-end'] = (this.state & 8 /* End */) !== 0,
                            _a['item-sliding-active-options-start'] = (this.state & 16 /* Start */) !== 0,
                            _a['item-sliding-active-swipe-end'] = (this.state & 32 /* SwipeEnd */) !== 0,
                            _a['item-sliding-active-swipe-start'] = (this.state & 64 /* SwipeStart */) !== 0,
                            _a)
                    };
                };
                Object.defineProperty(ItemSliding.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ItemSliding, "watchers", {
                    get: function () {
                        return {
                            "disabled": ["disabledChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                ItemSliding.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(ItemSliding, "style", {
                    get: function () { return "ion-item-sliding {\n  display: block;\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nion-item-sliding .item {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.item-sliding-active-slide .item {\n  position: relative;\n  -webkit-transition: -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  opacity: 1;\n  z-index: 2;\n  pointer-events: none;\n  will-change: transform;\n}\n\n.item-sliding-active-swipe-end .item-options-end .item-option-expandable {\n  /* stylelint-disable-next-line property-blacklist */\n  padding-left: 100%;\n  -ms-flex-order: 1;\n  order: 1;\n  -webkit-transition-duration: 0.6s;\n  transition-duration: 0.6s;\n  -webkit-transition-property: padding-left;\n  transition-property: padding-left;\n}\n[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable, :host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable {\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.item-sliding-active-swipe-start .item-options-start .item-option-expandable {\n  /* stylelint-disable-next-line property-blacklist */\n  padding-right: 100%;\n  -ms-flex-order: -1;\n  order: -1;\n  -webkit-transition-duration: 0.6s;\n  transition-duration: 0.6s;\n  -webkit-transition-property: padding-right;\n  transition-property: padding-right;\n}\n[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable, :host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable {\n  -ms-flex-order: 1;\n  order: 1;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ItemSliding;
            }());
            exports('ion_item_sliding', ItemSliding);
            function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
                // The logic required to know when the sliding item should close (openAmount=0)
                // depends on three booleans (isResetDirection, isMovingFast, isOnResetZone)
                // and it ended up being too complicated to be written manually without errors
                // so the truth table is attached below: (0=false, 1=true)
                // isResetDirection | isMovingFast | isOnResetZone || shouldClose
                //         0        |       0      |       0       ||    0
                //         0        |       0      |       1       ||    1
                //         0        |       1      |       0       ||    0
                //         0        |       1      |       1       ||    0
                //         1        |       0      |       0       ||    0
                //         1        |       0      |       1       ||    1
                //         1        |       1      |       0       ||    1
                //         1        |       1      |       1       ||    1
                // The resulting expression was generated by resolving the K-map (Karnaugh map):
                return (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
            }
        }
    };
});
