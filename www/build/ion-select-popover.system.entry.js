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
            /**
             * @internal
             */
            var SelectPopover = /** @class */ (function () {
                function SelectPopover(hostRef) {
                    registerInstance(this, hostRef);
                    /** Array of options for the popover */
                    this.options = [];
                }
                SelectPopover.prototype.onSelect = function (ev) {
                    var option = this.options.find(function (o) { return o.value === ev.target.value; });
                    if (option && option.handler) {
                        option.handler();
                    }
                };
                SelectPopover.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a)
                    };
                };
                SelectPopover.prototype.__stencil_render = function () {
                    return (h("ion-list", null, this.header !== undefined && h("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) &&
                        h("ion-item", null, h("ion-label", { "text-wrap": true }, this.subHeader !== undefined && h("h3", null, this.subHeader), this.message !== undefined && h("p", null, this.message))), h("ion-radio-group", null, this.options.map(function (option) { return h("ion-item", null, h("ion-label", null, option.text), h("ion-radio", { checked: option.checked, value: option.value, disabled: option.disabled })); }))));
                };
                SelectPopover.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(SelectPopover, "style", {
                    get: function () { return ".sc-ion-select-popover-h ion-list.sc-ion-select-popover {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: -1px;\n  margin-bottom: -1px;\n}\n\n.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover, .sc-ion-select-popover-h ion-label.sc-ion-select-popover {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return SelectPopover;
            }());
            exports('ion_select_popover', SelectPopover);
        }
    };
});
