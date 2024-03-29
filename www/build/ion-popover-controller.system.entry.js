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
System.register(['./chunk-a61457cf.system.js', './chunk-ba8c0cb1.system.js'], function (exports) {
    'use strict';
    var registerInstance, getContext, createOverlay, dismissOverlay, getOverlay;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getContext = module.e;
            }, function (module) {
                createOverlay = module.c;
                dismissOverlay = module.a;
                getOverlay = module.g;
            }],
        execute: function () {
            var PopoverController = /** @class */ (function () {
                function PopoverController(hostRef) {
                    registerInstance(this, hostRef);
                    this.doc = getContext(this, "document");
                }
                /**
                 * Create a popover overlay with popover options.
                 *
                 * @param options The options to use to create the popover.
                 */
                PopoverController.prototype.create = function (options) {
                    return createOverlay('ion-popover', options);
                };
                /**
                 * Dismiss the open popover overlay.
                 *
                 * @param data Any data to emit in the dismiss events.
                 * @param role The role of the element that is dismissing the popover.
                 * This can be useful in a button handler for determining which button was
                 * clicked to dismiss the popover.
                 * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
                 * @param id The id of the popover to dismiss. If an id is not provided, it will dismiss the most recently opened popover.
                 */
                PopoverController.prototype.dismiss = function (data, role, id) {
                    return dismissOverlay(document, data, role, 'ion-popover', id);
                };
                /**
                 * Get the most recently opened popover overlay.
                 */
                PopoverController.prototype.getTop = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, getOverlay(document, 'ion-popover')];
                        });
                    });
                };
                return PopoverController;
            }());
            exports('ion_popover_controller', PopoverController);
        }
    };
});
