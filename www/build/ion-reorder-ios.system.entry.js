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
            var Reorder = /** @class */ (function () {
                function Reorder(hostRef) {
                    registerInstance(this, hostRef);
                }
                Reorder.prototype.onClick = function (ev) {
                    ev.preventDefault();
                    ev.stopImmediatePropagation();
                };
                Reorder.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a)
                    };
                };
                Reorder.prototype.__stencil_render = function () {
                    return (h("slot", null, h("ion-icon", { name: "reorder", lazy: false, class: "reorder-icon" })));
                };
                Reorder.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Reorder, "style", {
                    get: function () { return ":host([slot]) {\n  display: none;\n  line-height: 0;\n  z-index: 100;\n}\n\n.reorder-icon {\n  display: block;\n  font-size: 22px;\n}\n\n.reorder-icon {\n  font-size: 34px;\n  opacity: 0.4;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Reorder;
            }());
            exports('ion_reorder', Reorder);
        }
    };
});
