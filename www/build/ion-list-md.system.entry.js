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
    var registerInstance, getIonMode, getElement, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.c;
                getElement = module.f;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var List = /** @class */ (function () {
                function List(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * If `true`, the list will have margin around it and rounded corners.
                     */
                    this.inset = false;
                }
                /**
                 * If `ion-item-sliding` are used inside the list, this method closes
                 * any open sliding item.
                 *
                 * Returns `true` if an actual `ion-item-sliding` is closed.
                 */
                List.prototype.closeSlidingItems = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var item;
                        return __generator(this, function (_a) {
                            item = this.el.querySelector('ion-item-sliding');
                            if (item && item.closeOpened) {
                                return [2 /*return*/, item.closeOpened()];
                            }
                            return [2 /*return*/, false];
                        });
                    });
                };
                List.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            // Used internally for styling
                            _a["list-" + mode] = true,
                            _a['list-inset'] = this.inset,
                            _a["list-lines-" + this.lines] = this.lines !== undefined,
                            _a["list-" + mode + "-lines-" + this.lines] = this.lines !== undefined,
                            _a)
                    };
                };
                Object.defineProperty(List.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                List.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(List, "style", {
                    get: function () { return "ion-list {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  display: block;\n  contain: content;\n  list-style-type: none;\n}\n\nion-list.list-inset {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  overflow: hidden;\n}\n\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\n.list-md > .input:last-child::after {\n  left: 0;\n}\n[dir=rtl] .list-md > .input:last-child::after, :host-context([dir=rtl]) .list-md > .input:last-child::after {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n.list-md.list-inset {\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  border-radius: 2px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .list-md.list-inset {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 16px;\n    margin-inline-start: 16px;\n    -webkit-margin-end: 16px;\n    margin-inline-end: 16px;\n  }\n}\n\n.list-md.list-inset ion-item:first-child {\n  --border-radius: 2px 2px 0 0;\n  --border-width: 0;\n}\n\n.list-md.list-inset ion-item:last-child {\n  --border-radius: 0 0 2px, 2px;\n  --border-width: 0;\n}\n\n.list-md.list-inset .item-interactive {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.list-md.list-inset + ion-list.list-inset {\n  margin-top: 0;\n}\n.list-md-lines-none .item {\n  --border-width: 0;\n  --inner-border-width: 0;\n}\n\n.list-md-lines-full .item,\n.list-md .item-lines-full {\n  --border-width: 0 0 1px 0;\n}\n\n.list-md-lines-full .item {\n  --inner-border-width: 0;\n}\n\n.list-md-lines-inset .item,\n.list-md .item-lines-inset {\n  --inner-border-width: 0 0 1px 0;\n}\n\n.list-md .item-lines-inset {\n  --border-width: 0;\n}\n\n.list-md .item-lines-full {\n  --inner-border-width: 0;\n}\n\n.list-md .item-lines-none {\n  --border-width: 0;\n  --inner-border-width: 0;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return List;
            }());
            exports('ion_list', List);
        }
    };
});
