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
System.register(['./chunk-a61457cf.system.js', './chunk-93181f6c.system.js'], function (exports) {
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
            var ItemOptions = /** @class */ (function () {
                function ItemOptions(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `ion-item-options`, a side must be provided for each.
                     *
                     */
                    this.side = 'end';
                    this.ionSwipe = createEvent(this, "ionSwipe", 7);
                    this.win = getContext(this, "window");
                }
                /** @internal */
                ItemOptions.prototype.fireSwipeEvent = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.ionSwipe.emit({
                                side: this.side
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                ItemOptions.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    var isEnd = isEndSide(this.win, this.side);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            // Used internally for styling
                            _a["item-options-" + mode] = true,
                            _a['item-options-start'] = !isEnd,
                            _a['item-options-end'] = isEnd,
                            _a)
                    };
                };
                Object.defineProperty(ItemOptions.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                ItemOptions.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(ItemOptions, "style", {
                    get: function () { return "ion-item-options {\n  /* stylelint-disable property-blacklist */\n  top: 0;\n  right: 0;\n  /* stylelint-enable property-blacklist */\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  display: none;\n  position: absolute;\n  height: 100%;\n  font-size: 14px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 1;\n}\n[dir=rtl] ion-item-options, :host-context([dir=rtl]) ion-item-options {\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n[dir=rtl] ion-item-options:not(.item-options-end), :host-context([dir=rtl]) ion-item-options:not(.item-options-end) {\n  /* stylelint-disable property-blacklist */\n  right: auto;\n  left: 0;\n  /* stylelint-enable property-blacklist */\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n}\n\n.item-options-start {\n  /* stylelint-disable property-blacklist */\n  right: auto;\n  left: 0;\n  /* stylelint-enable property-blacklist */\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n[dir=rtl] .item-options-start, :host-context([dir=rtl]) .item-options-start {\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n}\n\n.item-options-start ion-item-option:first-child {\n  padding-right: var(--ion-safe-area-left);\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .item-options-start ion-item-option:first-child {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-safe-area-left);\n    padding-inline-end: var(--ion-safe-area-left);\n  }\n}\n\n.item-options-end ion-item-option:last-child {\n  padding-right: var(--ion-safe-area-right);\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .item-options-end ion-item-option:last-child {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-safe-area-right);\n    padding-inline-end: var(--ion-safe-area-right);\n  }\n}\n\n[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end), :host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end) {\n  width: 100%;\n  visibility: visible;\n}\n\n.item-sliding-active-slide ion-item-options {\n  display: -ms-flexbox;\n  display: flex;\n  visibility: hidden;\n}\n.item-sliding-active-slide.item-sliding-active-options-start .item-options-start, .item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start) {\n  width: 100%;\n  visibility: visible;\n}\n\n.item-options-ios {\n  border-bottom-width: 0;\n  border-bottom-style: solid;\n  border-bottom-color: var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, #c8c7cc)));\n}\n.item-options-ios.item-options-end {\n  border-bottom-width: 0.55px;\n}\n\n.list-ios-lines-none .item-options-ios {\n  border-bottom-width: 0;\n}\n\n.list-ios-lines-full .item-options-ios,\n.list-ios-lines-inset .item-options-ios.item-options-end {\n  border-bottom-width: 0.55px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ItemOptions;
            }());
            exports('ion_item_options', ItemOptions);
        }
    };
});
