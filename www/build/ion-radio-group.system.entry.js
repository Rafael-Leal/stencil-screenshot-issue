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
            var RadioGroup = /** @class */ (function () {
                function RadioGroup(hostRef) {
                    registerInstance(this, hostRef);
                    this.inputId = "ion-rg-" + radioGroupIds++;
                    this.labelId = this.inputId + "-lbl";
                    this.radios = [];
                    /**
                     * If `true`, the radios can be deselected.
                     */
                    this.allowEmptySelection = false;
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = this.inputId;
                    this.ionChange = createEvent(this, "ionChange", 7);
                }
                RadioGroup.prototype.valueChanged = function (value) {
                    this.updateRadios();
                    this.ionChange.emit({ value: value });
                };
                RadioGroup.prototype.onRadioDidLoad = function (ev) {
                    var radio = ev.target;
                    radio.name = this.name;
                    // add radio to internal list
                    this.radios.push(radio);
                    // this radio-group does not have a value
                    // but this radio is checked, so let's set the
                    // radio-group's value from the checked radio
                    if (this.value == null && radio.checked) {
                        this.value = radio.value;
                    }
                    else {
                        this.updateRadios();
                    }
                };
                RadioGroup.prototype.onRadioDidUnload = function (ev) {
                    var index = this.radios.indexOf(ev.target);
                    if (index > -1) {
                        this.radios.splice(index, 1);
                    }
                };
                RadioGroup.prototype.onRadioSelect = function (ev) {
                    var selectedRadio = ev.target;
                    if (selectedRadio) {
                        this.value = selectedRadio.value;
                    }
                };
                RadioGroup.prototype.onRadioDeselect = function (ev) {
                    if (this.allowEmptySelection) {
                        var selectedRadio = ev.target;
                        if (selectedRadio) {
                            selectedRadio.checked = false;
                            this.value = undefined;
                        }
                    }
                };
                RadioGroup.prototype.componentDidLoad = function () {
                    // Get the list header if it exists and set the id
                    // this is used to set aria-labelledby
                    var header = this.el.querySelector('ion-list-header');
                    if (!header) {
                        header = this.el.querySelector('ion-item-divider');
                    }
                    if (header) {
                        var label = header.querySelector('ion-label');
                        if (label) {
                            this.labelId = label.id = this.name + '-lbl';
                        }
                    }
                    this.updateRadios();
                };
                RadioGroup.prototype.updateRadios = function () {
                    var value = this.value;
                    var hasChecked = false;
                    for (var _i = 0, _a = this.radios; _i < _a.length; _i++) {
                        var radio = _a[_i];
                        if (!hasChecked && radio.value === value) {
                            // correct value for this radio
                            // but this radio isn't checked yet
                            // and we haven't found a checked yet
                            hasChecked = true;
                            radio.checked = true;
                        }
                        else {
                            // this radio doesn't have the correct value
                            // or the radio group has been already checked
                            radio.checked = false;
                        }
                    }
                };
                RadioGroup.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        'role': 'radiogroup',
                        'aria-labelledby': this.labelId,
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a)
                    };
                };
                Object.defineProperty(RadioGroup.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RadioGroup, "watchers", {
                    get: function () {
                        return {
                            "value": ["valueChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                RadioGroup.prototype.render = function () { return h(Host, this.hostData()); };
                return RadioGroup;
            }());
            exports('ion_radio_group', RadioGroup);
            var radioGroupIds = 0;
        }
    };
});
