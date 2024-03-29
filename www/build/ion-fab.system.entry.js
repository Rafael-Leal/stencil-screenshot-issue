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
    var registerInstance, getIonMode, h, getElement, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.c;
                h = module.h;
                getElement = module.f;
                Host = module.H;
            }],
        execute: function () {
            var Fab = /** @class */ (function () {
                function Fab(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * If `true`, the fab will display on the edge of the header if
                     * `vertical` is `"top"`, and on the edge of the footer if
                     * it is `"bottom"`. Should be used with a `fixed` slot.
                     */
                    this.edge = false;
                    /**
                     * If `true`, both the `ion-fab-button` and all `ion-fab-list` inside `ion-fab` will become active.
                     * That means `ion-fab-button` will become a `close` icon and `ion-fab-list` will become visible.
                     */
                    this.activated = false;
                }
                Fab.prototype.activatedChanged = function () {
                    var activated = this.activated;
                    var fab = this.getFab();
                    if (fab) {
                        fab.activated = activated;
                    }
                    Array.from(this.el.querySelectorAll('ion-fab-list')).forEach(function (list) {
                        list.activated = activated;
                    });
                };
                Fab.prototype.componentDidLoad = function () {
                    if (this.activated) {
                        this.activatedChanged();
                    }
                };
                Fab.prototype.getFab = function () {
                    return this.el.querySelector('ion-fab-button');
                };
                Fab.prototype.onClick = function () {
                    var hasList = !!this.el.querySelector('ion-fab-list');
                    var getButton = this.getFab();
                    var isButtonDisabled = getButton && getButton.disabled;
                    if (hasList && !isButtonDisabled) {
                        this.activated = !this.activated;
                    }
                };
                /**
                 * Close an active FAB list container.
                 */
                Fab.prototype.close = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.activated = false;
                            return [2 /*return*/];
                        });
                    });
                };
                Fab.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a["fab-horizontal-" + this.horizontal] = this.horizontal !== undefined,
                            _a["fab-vertical-" + this.vertical] = this.vertical !== undefined,
                            _a['fab-edge'] = this.edge,
                            _a)
                    };
                };
                Fab.prototype.__stencil_render = function () {
                    return h("slot", null);
                };
                Object.defineProperty(Fab.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Fab, "watchers", {
                    get: function () {
                        return {
                            "activated": ["activatedChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Fab.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Fab, "style", {
                    get: function () { return ":host {\n  position: absolute;\n  z-index: 999;\n}\n\n:host(.fab-horizontal-center) {\n  left: 50%;\n  margin-left: -28px;\n}\n:host-context([dir=rtl]):host(.fab-horizontal-center), :host-context([dir=rtl]).fab-horizontal-center {\n  left: unset;\n  right: unset;\n  right: 50%;\n}\n\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.fab-horizontal-center) {\n    margin-left: unset;\n    -webkit-margin-start: -28px;\n    margin-inline-start: -28px;\n  }\n}\n\n:host(.fab-horizontal-start) {\n  left: calc(10px + var(--ion-safe-area-left, 0px));\n}\n:host-context([dir=rtl]):host(.fab-horizontal-start), :host-context([dir=rtl]).fab-horizontal-start {\n  left: unset;\n  right: unset;\n  right: calc(10px + var(--ion-safe-area-left, 0px));\n}\n\n:host(.fab-horizontal-end) {\n  right: calc(10px + var(--ion-safe-area-right, 0px));\n}\n:host-context([dir=rtl]):host(.fab-horizontal-end), :host-context([dir=rtl]).fab-horizontal-end {\n  left: unset;\n  right: unset;\n  left: calc(10px + var(--ion-safe-area-right, 0px));\n}\n\n:host(.fab-vertical-top) {\n  top: 10px;\n}\n\n:host(.fab-vertical-top.fab-edge) {\n  top: -28px;\n}\n\n:host(.fab-vertical-bottom) {\n  bottom: 10px;\n}\n\n:host(.fab-vertical-bottom.fab-edge) {\n  bottom: -28px;\n}\n\n:host(.fab-vertical-center) {\n  margin-top: -28px;\n  top: 50%;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Fab;
            }());
            exports('ion_fab', Fab);
        }
    };
});
