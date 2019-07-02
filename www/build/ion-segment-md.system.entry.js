System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getIonMode, getElement, h, Host, createColorClasses;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                getIonMode = module.c;
                getElement = module.f;
                h = module.h;
                Host = module.H;
            }, function (module) {
                createColorClasses = module.c;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Segment = /** @class */ (function () {
                function Segment(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * If `true`, the user cannot interact with the segment.
                     */
                    this.disabled = false;
                    /**
                     * If `true`, the segment buttons will overflow and the user can swipe to see them.
                     */
                    this.scrollable = false;
                    this.ionChange = createEvent(this, "ionChange", 7);
                    this.ionStyle = createEvent(this, "ionStyle", 7);
                }
                Segment.prototype.valueChanged = function (value) {
                    this.updateButtons();
                    this.ionChange.emit({ value: value });
                };
                Segment.prototype.segmentClick = function (ev) {
                    var selectedButton = ev.target;
                    this.value = selectedButton.value;
                };
                Segment.prototype.componentWillLoad = function () {
                    this.emitStyle();
                };
                Segment.prototype.componentDidLoad = function () {
                    if (this.value == null) {
                        var checked = this.getButtons().find(function (b) { return b.checked; });
                        if (checked) {
                            this.value = checked.value;
                        }
                    }
                    this.updateButtons();
                };
                Segment.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'segment': true
                    });
                };
                Segment.prototype.updateButtons = function () {
                    var value = this.value;
                    for (var _i = 0, _a = this.getButtons(); _i < _a.length; _i++) {
                        var button = _a[_i];
                        button.checked = (button.value === value);
                    }
                };
                Segment.prototype.getButtons = function () {
                    return Array.from(this.el.querySelectorAll('ion-segment-button'));
                };
                Segment.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a['segment-disabled'] = this.disabled, _a['segment-scrollable'] = this.scrollable, _a))
                    };
                };
                Object.defineProperty(Segment.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Segment, "watchers", {
                    get: function () {
                        return {
                            "value": ["valueChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Segment.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(Segment, "style", {
                    get: function () { return ".sc-ion-segment-md-h {\n  --indicator-color-checked: initial;\n  --ripple-color: initial;\n  --color-activated: initial;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  font-family: var(--ion-font-family, inherit);\n  text-align: center;\n}\n\n.segment-disabled.sc-ion-segment-md-h, .sc-ion-segment-md-s > .segment-button-disabled {\n  pointer-events: none;\n}\n\n.segment-scrollable.sc-ion-segment-md-h {\n  -ms-flex-pack: start;\n  justify-content: start;\n  width: auto;\n  overflow-x: scroll;\n}\n\n.segment-scrollable.sc-ion-segment-md-h::-webkit-scrollbar {\n  display: none;\n}\n\n.sc-ion-segment-md-h {\n  --background: none;\n  --background-checked: none;\n  --background-hover: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.04);\n  --background-activated: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.16);\n  --color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);\n  --color-checked: var(--ion-color-primary, #3880ff);\n  --color-checked-disabled: var(--color-checked);\n  --indicator-color: transparent;\n}\n\n.segment-disabled.sc-ion-segment-md-h {\n  opacity: 0.3;\n}\n\n.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button {\n  --background-hover: rgba(var(--ion-color-base-rgb), 0.04);\n  --background-activated: rgba(var(--ion-color-base-rgb), 0.16);\n  --ripple-color: var(--ion-color-base);\n  background: transparent;\n  color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);\n}\n\n.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked {\n  --indicator-color-checked: var(--ion-color-base);\n  color: var(--ion-color-base);\n}\n\n.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked.activated {\n  color: var(--ion-color-base);\n}\n\n.sc-ion-segment-md-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar:not(.ion-color) .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button {\n  color: var(--ion-toolbar-color-unchecked, var(--color));\n}\n\n.sc-ion-segment-md-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-md-s > .segment-button-checked, ion-toolbar:not(.ion-color) .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > .segment-button-checked {\n  --indicator-color-checked: var(--ion-toolbar-color-checked, var(--color-checked));\n  color: var(--ion-toolbar-color-checked, var(--color-checked));\n}\n\n.sc-ion-segment-md-hion-toolbar.ion-color:not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar.ion-color .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button {\n  --background-hover: rgba(var(--ion-color-contrast-rgb), 0.04);\n  --background-activated: var(--ion-color-base);\n  --color: rgba(var(--ion-color-contrast-rgb), 0.6);\n  --color-checked: var(--ion-color-contrast);\n  --indicator-color-checked: var(--ion-color-contrast);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Segment;
            }());
            exports('ion_segment', Segment);
        }
    };
});
