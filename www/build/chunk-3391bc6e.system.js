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
System.register(['./chunk-a61457cf.system.js'], function (exports, module) {
    'use strict';
    var writeTask;
    return {
        setters: [function (module) {
                writeTask = module.w;
            }],
        execute: function () {
            exports({
                d: deepReady,
                l: lifecycle,
                s: setPageHidden,
                t: transition
            });
            var LIFECYCLE_WILL_ENTER = 'ionViewWillEnter';
            var LIFECYCLE_DID_ENTER = 'ionViewDidEnter';
            var LIFECYCLE_WILL_LEAVE = exports('a', 'ionViewWillLeave');
            var LIFECYCLE_DID_LEAVE = exports('b', 'ionViewDidLeave');
            var LIFECYCLE_WILL_UNLOAD = exports('L', 'ionViewWillUnload');
            var iosTransitionAnimation = function () { return module.import('./ios.transition-e286b4a3.system.js'); };
            var mdTransitionAnimation = function () { return module.import('./md.transition-87a06fc0.system.js'); };
            function transition(opts) {
                return new Promise(function (resolve, reject) {
                    writeTask(function () {
                        beforeTransition(opts);
                        runTransition(opts).then(function (result) {
                            if (result.animation) {
                                result.animation.destroy();
                            }
                            afterTransition(opts);
                            resolve(result);
                        }, function (error) {
                            afterTransition(opts);
                            reject(error);
                        });
                    });
                });
            }
            function beforeTransition(opts) {
                var enteringEl = opts.enteringEl;
                var leavingEl = opts.leavingEl;
                setZIndex(enteringEl, leavingEl, opts.direction);
                if (opts.showGoBack) {
                    enteringEl.classList.add('can-go-back');
                }
                else {
                    enteringEl.classList.remove('can-go-back');
                }
                setPageHidden(enteringEl, false);
                if (leavingEl) {
                    setPageHidden(leavingEl, false);
                }
            }
            function runTransition(opts) {
                return __awaiter(this, void 0, void 0, function () {
                    var animationBuilder, ani;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getAnimationBuilder(opts)];
                            case 1:
                                animationBuilder = _a.sent();
                                ani = (animationBuilder)
                                    ? animation(animationBuilder, opts)
                                    : noAnimation(opts);
                                return [2 /*return*/, ani];
                        }
                    });
                });
            }
            function afterTransition(opts) {
                var enteringEl = opts.enteringEl;
                var leavingEl = opts.leavingEl;
                enteringEl.classList.remove('ion-page-invisible');
                if (leavingEl !== undefined) {
                    leavingEl.classList.remove('ion-page-invisible');
                }
            }
            function getAnimationBuilder(opts) {
                return __awaiter(this, void 0, void 0, function () {
                    var builder, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
                                    return [2 /*return*/, undefined];
                                }
                                if (opts.animationBuilder) {
                                    return [2 /*return*/, opts.animationBuilder];
                                }
                                if (!(opts.mode === 'ios')) return [3 /*break*/, 2];
                                return [4 /*yield*/, iosTransitionAnimation()];
                            case 1:
                                _a = (_b.sent()).iosTransitionAnimation;
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, mdTransitionAnimation()];
                            case 3:
                                _a = (_b.sent()).mdTransitionAnimation;
                                _b.label = 4;
                            case 4:
                                builder = _a;
                                return [2 /*return*/, builder];
                        }
                    });
                });
            }
            function animation(animationBuilder, opts) {
                return __awaiter(this, void 0, void 0, function () {
                    var trans;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, waitForReady(opts, true)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, module.import('./index-08437444.system.js').then(function (mod) { return mod.create(animationBuilder, opts.baseEl, opts); })];
                            case 2:
                                trans = _a.sent();
                                fireWillEvents(opts.enteringEl, opts.leavingEl);
                                return [4 /*yield*/, playTransition(trans, opts)];
                            case 3:
                                _a.sent();
                                if (opts.progressCallback) {
                                    opts.progressCallback(undefined);
                                }
                                if (trans.hasCompleted) {
                                    fireDidEvents(opts.enteringEl, opts.leavingEl);
                                }
                                return [2 /*return*/, {
                                        hasCompleted: trans.hasCompleted,
                                        animation: trans
                                    }];
                        }
                    });
                });
            }
            function noAnimation(opts) {
                return __awaiter(this, void 0, void 0, function () {
                    var enteringEl, leavingEl;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                enteringEl = opts.enteringEl;
                                leavingEl = opts.leavingEl;
                                return [4 /*yield*/, waitForReady(opts, false)];
                            case 1:
                                _a.sent();
                                fireWillEvents(enteringEl, leavingEl);
                                fireDidEvents(enteringEl, leavingEl);
                                return [2 /*return*/, {
                                        hasCompleted: true
                                    }];
                        }
                    });
                });
            }
            function waitForReady(opts, defaultDeep) {
                return __awaiter(this, void 0, void 0, function () {
                    var deep, promises;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
                                promises = deep ? [
                                    deepReady(opts.enteringEl),
                                    deepReady(opts.leavingEl),
                                ] : [
                                    shallowReady(opts.enteringEl),
                                    shallowReady(opts.leavingEl),
                                ];
                                return [4 /*yield*/, Promise.all(promises)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, notifyViewReady(opts.viewIsReady, opts.enteringEl)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            }
            function notifyViewReady(viewIsReady, enteringEl) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!viewIsReady) return [3 /*break*/, 2];
                                return [4 /*yield*/, viewIsReady(enteringEl)];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                });
            }
            function playTransition(trans, opts) {
                var progressCallback = opts.progressCallback;
                var promise = new Promise(function (resolve) { return trans.onFinish(resolve); });
                // cool, let's do this, start the transition
                if (progressCallback) {
                    // this is a swipe to go back, just get the transition progress ready
                    // kick off the swipe animation start
                    trans.progressStart();
                    progressCallback(trans);
                }
                else {
                    // only the top level transition should actually start "play"
                    // kick it off and let it play through
                    // ******** DOM WRITE ****************
                    trans.play();
                }
                // create a callback for when the animation is done
                return promise;
            }
            function fireWillEvents(enteringEl, leavingEl) {
                lifecycle(leavingEl, LIFECYCLE_WILL_LEAVE);
                lifecycle(enteringEl, LIFECYCLE_WILL_ENTER);
            }
            function fireDidEvents(enteringEl, leavingEl) {
                lifecycle(enteringEl, LIFECYCLE_DID_ENTER);
                lifecycle(leavingEl, LIFECYCLE_DID_LEAVE);
            }
            function lifecycle(el, eventName) {
                if (el) {
                    var ev = new CustomEvent(eventName, {
                        bubbles: false,
                        cancelable: false,
                    });
                    el.dispatchEvent(ev);
                }
            }
            function shallowReady(el) {
                if (el && el.componentOnReady) {
                    return el.componentOnReady();
                }
                return Promise.resolve();
            }
            function deepReady(el) {
                return __awaiter(this, void 0, void 0, function () {
                    var element, stencilEl;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                element = el;
                                if (!element) return [3 /*break*/, 4];
                                if (!(element.componentOnReady != null)) return [3 /*break*/, 2];
                                return [4 /*yield*/, element.componentOnReady()];
                            case 1:
                                stencilEl = _a.sent();
                                if (stencilEl != null) {
                                    return [2 /*return*/];
                                }
                                _a.label = 2;
                            case 2: return [4 /*yield*/, Promise.all(Array.from(element.children).map(deepReady))];
                            case 3:
                                _a.sent();
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            }
            function setPageHidden(el, hidden) {
                if (hidden) {
                    el.setAttribute('aria-hidden', 'true');
                    el.classList.add('ion-page-hidden');
                }
                else {
                    el.hidden = false;
                    el.removeAttribute('aria-hidden');
                    el.classList.remove('ion-page-hidden');
                }
            }
            function setZIndex(enteringEl, leavingEl, direction) {
                if (enteringEl !== undefined) {
                    enteringEl.style.zIndex = (direction === 'back')
                        ? '99'
                        : '101';
                }
                if (leavingEl !== undefined) {
                    leavingEl.style.zIndex = '100';
                }
            }
        }
    };
});
