System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.c;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            var Row = /** @class */ (function () {
                function Row(hostRef) {
                    registerInstance(this, hostRef);
                }
                Row.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a)
                    };
                };
                Row.prototype.__stencil_render = function () {
                    return h("slot", null);
                };
                Row.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Row, "style", {
                    get: function () { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Row;
            }());
            exports('ion_row', Row);
        }
    };
});
