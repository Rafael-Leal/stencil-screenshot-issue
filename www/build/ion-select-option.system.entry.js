System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getIonMode, getElement, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                getIonMode = module.c;
                getElement = module.f;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            var SelectOption = /** @class */ (function () {
                function SelectOption(hostRef) {
                    registerInstance(this, hostRef);
                    this.inputId = "ion-selopt-" + selectOptionIds++;
                    /**
                     * If `true`, the user cannot interact with the select option.
                     */
                    this.disabled = false;
                    /**
                     * If `true`, the element is selected.
                     */
                    this.selected = false;
                    this.ionSelectOptionDidLoad = createEvent(this, "ionSelectOptionDidLoad", 7);
                    this.ionSelectOptionDidUnload = createEvent(this, "ionSelectOptionDidUnload", 7);
                }
                SelectOption.prototype.componentWillLoad = function () {
                    if (this.value === undefined) {
                        this.value = this.el.textContent || '';
                    }
                };
                SelectOption.prototype.componentDidLoad = function () {
                    this.ionSelectOptionDidLoad.emit();
                };
                SelectOption.prototype.componentDidUnload = function () {
                    this.ionSelectOptionDidUnload.emit();
                };
                SelectOption.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        'role': 'option',
                        'id': this.inputId,
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a)
                    };
                };
                Object.defineProperty(SelectOption.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                SelectOption.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(SelectOption, "style", {
                    get: function () { return ":host {\n  display: none;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return SelectOption;
            }());
            exports('ion_select_option', SelectOption);
            var selectOptionIds = 0;
        }
    };
});
