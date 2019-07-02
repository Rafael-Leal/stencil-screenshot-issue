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
System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, getContext, getIonMode, getElement, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getContext = module.e;
                getIonMode = module.c;
                getElement = module.f;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            var RippleEffect = /** @class */ (function () {
                function RippleEffect(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * Sets the type of ripple-effect:
                     *
                     * - `bounded`: the ripple effect expands from the user's click position
                     * - `unbounded`: the ripple effect expands from the center of the button and overflows the container.
                     *
                     * NOTE: Surfaces for bounded ripples should have the overflow property set to hidden,
                     * while surfaces for unbounded ripples should have it set to visible.
                     */
                    this.type = 'bounded';
                    this.queue = getContext(this, "queue");
                    this.win = getContext(this, "window");
                }
                /**
                 * Adds the ripple effect to the parent element.
                 *
                 * @param x The horizontal coordinate of where the ripple should start.
                 * @param y The vertical coordinate of where the ripple should start.
                 */
                RippleEffect.prototype.addRipple = function (x, y) {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            return [2 /*return*/, new Promise(function (resolve) {
                                    _this.queue.read(function () {
                                        var rect = _this.el.getBoundingClientRect();
                                        var width = rect.width;
                                        var height = rect.height;
                                        var hypotenuse = Math.sqrt(width * width + height * height);
                                        var maxDim = Math.max(height, width);
                                        var maxRadius = _this.unbounded ? maxDim : hypotenuse + PADDING;
                                        var initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
                                        var finalScale = maxRadius / initialSize;
                                        var posX = x - rect.left;
                                        var posY = y - rect.top;
                                        if (_this.unbounded) {
                                            posX = width * 0.5;
                                            posY = height * 0.5;
                                        }
                                        var styleX = posX - initialSize * 0.5;
                                        var styleY = posY - initialSize * 0.5;
                                        var moveX = width * 0.5 - posX;
                                        var moveY = height * 0.5 - posY;
                                        _this.queue.write(function () {
                                            var div = _this.win.document.createElement('div');
                                            div.classList.add('ripple-effect');
                                            var style = div.style;
                                            style.top = styleY + 'px';
                                            style.left = styleX + 'px';
                                            style.width = style.height = initialSize + 'px';
                                            style.setProperty('--final-scale', "" + finalScale);
                                            style.setProperty('--translate-end', moveX + "px, " + moveY + "px");
                                            var container = _this.el.shadowRoot || _this.el;
                                            container.appendChild(div);
                                            setTimeout(function () {
                                                resolve(function () {
                                                    removeRipple(div);
                                                });
                                            }, 225 + 100);
                                        });
                                    });
                                })];
                        });
                    });
                };
                Object.defineProperty(RippleEffect.prototype, "unbounded", {
                    get: function () {
                        return this.type === 'unbounded';
                    },
                    enumerable: true,
                    configurable: true
                });
                RippleEffect.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        role: 'presentation',
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a['unbounded'] = this.unbounded,
                            _a)
                    };
                };
                Object.defineProperty(RippleEffect.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                RippleEffect.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(RippleEffect, "style", {
                    get: function () { return ":host {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  contain: strict;\n  pointer-events: none;\n}\n\n:host(.unbounded) {\n  contain: layout size style;\n}\n\n.ripple-effect {\n  border-radius: 50%;\n  position: absolute;\n  background-color: currentColor;\n  color: inherit;\n  contain: strict;\n  opacity: 0;\n  -webkit-animation: 225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;\n  animation: 225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;\n  will-change: transform, opacity;\n  pointer-events: none;\n}\n\n.fade-out {\n  -webkit-transform: translate(var(--translate-end)) scale(var(--final-scale, 1));\n  transform: translate(var(--translate-end)) scale(var(--final-scale, 1));\n  -webkit-animation: 150ms fadeOutAnimation forwards;\n  animation: 150ms fadeOutAnimation forwards;\n}\n\n\@-webkit-keyframes rippleAnimation {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  to {\n    -webkit-transform: translate(var(--translate-end)) scale(var(--final-scale, 1));\n    transform: translate(var(--translate-end)) scale(var(--final-scale, 1));\n  }\n}\n\n\@keyframes rippleAnimation {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  to {\n    -webkit-transform: translate(var(--translate-end)) scale(var(--final-scale, 1));\n    transform: translate(var(--translate-end)) scale(var(--final-scale, 1));\n  }\n}\n\@-webkit-keyframes fadeInAnimation {\n  from {\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: 0.16;\n  }\n}\n\@keyframes fadeInAnimation {\n  from {\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: 0.16;\n  }\n}\n\@-webkit-keyframes fadeOutAnimation {\n  from {\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    opacity: 0.16;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\@keyframes fadeOutAnimation {\n  from {\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    opacity: 0.16;\n  }\n  to {\n    opacity: 0;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return RippleEffect;
            }());
            exports('ion_ripple_effect', RippleEffect);
            function removeRipple(ripple) {
                ripple.classList.add('fade-out');
                setTimeout(function () {
                    ripple.remove();
                }, 200);
            }
            var PADDING = 10;
            var INITIAL_ORIGIN_SCALE = 0.5;
        }
    };
});
