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
System.register([], function (exports, module) {
    'use strict';
    return {
        execute: function () {
            exports({
                a: dismissOverlay,
                c: createOverlay,
                d: dismiss,
                e: eventMethod,
                g: getOverlay,
                i: isCancel,
                p: present
            });
            var lastId = 0;
            var createController = function (tagName) {
                return {
                    create: function (options) {
                        return createOverlay(tagName, options);
                    },
                    dismiss: function (data, role, id) {
                        return dismissOverlay(document, data, role, tagName, id);
                    },
                    getTop: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, getOverlay(document, tagName)];
                            });
                        });
                    }
                };
            };
            var alertController = exports('j', /*@__PURE__*/ createController('ion-alert'));
            var actionSheetController = exports('h', /*@__PURE__*/ createController('ion-action-sheet'));
            var loadingController = /*@__PURE__*/ createController('ion-loading');
            var modalController = /*@__PURE__*/ createController('ion-modal');
            var pickerController = exports('b', /*@__PURE__*/ createController('ion-picker'));
            var popoverController = exports('f', /*@__PURE__*/ createController('ion-popover'));
            var toastController = /*@__PURE__*/ createController('ion-toast');
            function createOverlay(tagName, opts) {
                return customElements.whenDefined(tagName).then(function () {
                    var doc = document;
                    var element = doc.createElement(tagName);
                    connectListeners(doc);
                    // convert the passed in overlay options into props
                    // that get passed down into the new overlay
                    Object.assign(element, opts);
                    element.classList.add('overlay-hidden');
                    var overlayIndex = lastId++;
                    element.overlayIndex = overlayIndex;
                    if (!element.hasAttribute('id')) {
                        element.id = "ion-overlay-" + overlayIndex;
                    }
                    // append the overlay element to the document body
                    getAppRoot(doc).appendChild(element);
                    return element.componentOnReady();
                });
            }
            function connectListeners(doc) {
                if (lastId === 0) {
                    lastId = 1;
                    // trap focus inside overlays
                    doc.addEventListener('focusin', function (ev) {
                        var lastOverlay = getOverlay(doc);
                        if (lastOverlay && lastOverlay.backdropDismiss && !isDescendant(lastOverlay, ev.target)) {
                            var firstInput = lastOverlay.querySelector('input,button');
                            if (firstInput) {
                                firstInput.focus();
                            }
                        }
                    });
                    // handle back-button click
                    doc.addEventListener('ionBackButton', function (ev) {
                        var lastOverlay = getOverlay(doc);
                        if (lastOverlay && lastOverlay.backdropDismiss) {
                            ev.detail.register(100, function () {
                                return lastOverlay.dismiss(undefined, BACKDROP);
                            });
                        }
                    });
                    // handle ESC to close overlay
                    doc.addEventListener('keyup', function (ev) {
                        if (ev.key === 'Escape') {
                            var lastOverlay = getOverlay(doc);
                            if (lastOverlay && lastOverlay.backdropDismiss) {
                                lastOverlay.dismiss(undefined, BACKDROP);
                            }
                        }
                    });
                }
            }
            function dismissOverlay(doc, data, role, overlayTag, id) {
                var overlay = getOverlay(doc, overlayTag, id);
                if (!overlay) {
                    return Promise.reject('overlay does not exist');
                }
                return overlay.dismiss(data, role);
            }
            function getOverlays(doc, overlayTag) {
                var overlays = Array.from(getAppRoot(doc).children).filter(function (c) { return c.overlayIndex > 0; });
                if (overlayTag === undefined) {
                    return overlays;
                }
                overlayTag = overlayTag.toUpperCase();
                return overlays.filter(function (c) { return c.tagName === overlayTag; });
            }
            function getOverlay(doc, overlayTag, id) {
                var overlays = getOverlays(doc, overlayTag);
                return (id === undefined)
                    ? overlays[overlays.length - 1]
                    : overlays.find(function (o) { return o.id === id; });
            }
            function present(overlay, name, iosEnterAnimation, mdEnterAnimation, opts) {
                return __awaiter(this, void 0, void 0, function () {
                    var animationBuilder, completed;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (overlay.presented) {
                                    return [2 /*return*/];
                                }
                                overlay.presented = true;
                                overlay.willPresent.emit();
                                animationBuilder = (overlay.enterAnimation)
                                    ? overlay.enterAnimation
                                    : overlay.config.get(name, overlay.mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
                                return [4 /*yield*/, overlayAnimation(overlay, animationBuilder, overlay.el, opts)];
                            case 1:
                                completed = _a.sent();
                                if (completed) {
                                    overlay.didPresent.emit();
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            }
            function dismiss(overlay, data, role, name, iosLeaveAnimation, mdLeaveAnimation, opts) {
                return __awaiter(this, void 0, void 0, function () {
                    var animationBuilder, err_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!overlay.presented) {
                                    return [2 /*return*/, false];
                                }
                                overlay.presented = false;
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                overlay.willDismiss.emit({ data: data, role: role });
                                animationBuilder = (overlay.leaveAnimation)
                                    ? overlay.leaveAnimation
                                    : overlay.config.get(name, overlay.mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
                                return [4 /*yield*/, overlayAnimation(overlay, animationBuilder, overlay.el, opts)];
                            case 2:
                                _a.sent();
                                overlay.didDismiss.emit({ data: data, role: role });
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _a.sent();
                                console.error(err_1);
                                return [3 /*break*/, 4];
                            case 4:
                                overlay.el.remove();
                                return [2 /*return*/, true];
                        }
                    });
                });
            }
            function getAppRoot(doc) {
                return doc.querySelector('ion-app') || doc.body;
            }
            function overlayAnimation(overlay, animationBuilder, baseEl, opts) {
                return __awaiter(this, void 0, void 0, function () {
                    var aniRoot, animation, hasCompleted;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (overlay.animation) {
                                    overlay.animation.destroy();
                                    overlay.animation = undefined;
                                    return [2 /*return*/, false];
                                }
                                // Make overlay visible in case it's hidden
                                baseEl.classList.remove('overlay-hidden');
                                aniRoot = baseEl.shadowRoot || overlay.el;
                                return [4 /*yield*/, module.import('./index-08437444.system.js').then(function (mod) { return mod.create(animationBuilder, aniRoot, opts); })];
                            case 1:
                                animation = _a.sent();
                                overlay.animation = animation;
                                if (!overlay.animated || !overlay.config.getBoolean('animated', true)) {
                                    animation.duration(0);
                                }
                                if (overlay.keyboardClose) {
                                    animation.beforeAddWrite(function () {
                                        var activeElement = baseEl.ownerDocument.activeElement;
                                        if (activeElement && activeElement.matches('input, ion-input, ion-textarea')) {
                                            activeElement.blur();
                                        }
                                    });
                                }
                                return [4 /*yield*/, animation.playAsync()];
                            case 2:
                                _a.sent();
                                hasCompleted = animation.hasCompleted;
                                animation.destroy();
                                overlay.animation = undefined;
                                return [2 /*return*/, hasCompleted];
                        }
                    });
                });
            }
            function autoFocus(containerEl) {
                var focusableEls = containerEl.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
                if (focusableEls.length > 0) {
                    var el = focusableEls[0];
                    el.focus();
                    return el;
                }
                return undefined;
            }
            function eventMethod(element, eventName) {
                var resolve;
                var promise = new Promise(function (r) { return resolve = r; });
                onceEvent(element, eventName, function (event) {
                    resolve(event.detail);
                });
                return promise;
            }
            function onceEvent(element, eventName, callback) {
                var handler = function (ev) {
                    element.removeEventListener(eventName, handler);
                    callback(ev);
                };
                element.addEventListener(eventName, handler);
            }
            function isCancel(role) {
                return role === 'cancel' || role === BACKDROP;
            }
            function isDescendant(parent, child) {
                while (child) {
                    if (child === parent) {
                        return true;
                    }
                    child = child.parentElement;
                }
                return false;
            }
            var BACKDROP = exports('B', 'backdrop');
        }
    };
});
