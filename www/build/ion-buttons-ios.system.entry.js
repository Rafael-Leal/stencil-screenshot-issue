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
            var Buttons = /** @class */ (function () {
                function Buttons(hostRef) {
                    registerInstance(this, hostRef);
                }
                Buttons.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a)
                    };
                };
                Buttons.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(Buttons, "style", {
                    get: function () { return ".sc-ion-buttons-ios-h {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  z-index: 99;\n}\n\n.sc-ion-buttons-ios-s  ion-button  {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.sc-ion-buttons-ios-s  ion-button  {\n  --padding-start: 5px;\n  --padding-end: 5px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 32px;\n  font-size: 17px;\n  font-weight: 400;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .sc-ion-buttons-ios-s  ion-button  {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 2px;\n    margin-inline-start: 2px;\n    -webkit-margin-end: 2px;\n    margin-inline-end: 2px;\n  }\n}\n\n.sc-ion-buttons-ios-s  ion-button:not(.button-round)  {\n  --border-radius: 4px;\n}\n\n.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button  {\n  --color: initial;\n  --border-color: initial;\n  --background-focused: rgba(var(--ion-color-contrast-rgb), 0.1);\n}\n\n.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-solid , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid  {\n  --background: var(--ion-color-contrast);\n  --background-activated: rgba(var(--ion-color-contrast-rgb), 0.8);\n  --background-focused: rgba(var(--ion-color-contrast-rgb), 0.6);\n  --color: var(--ion-color-base);\n  --color-focused: var(--ion-color-base);\n}\n\n.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-clear , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear  {\n  --background-focused: rgba(var(--ion-color-contrast-rgb), 0.1);\n  --color-activated: var(--ion-color-contrast);\n  --color-focused: var(--ion-color-contrast);\n}\n\n.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-outline , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline  {\n  --background-activated: var(--ion-color-contrast);\n  --background-focused: rgba(var(--ion-color-contrast-rgb), 0.1);\n  --color-activated: var(--ion-color-base);\n  --color-focused: var(--ion-color-contrast);\n}\n\n.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-clear , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear  {\n  --color: var(--ion-toolbar-color, var(--ion-color-primary, #3880ff));\n  --color-activated: var(--ion-toolbar-color-activated, var(--ion-color-primary, #3880ff));\n  --color-focused: var(--ion-toolbar-color, var(--ion-color-primary, #3880ff));\n}\n\n.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-outline , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline  {\n  --color: var(--ion-toolbar-color, var(--ion-color-primary, #3880ff));\n  --color-activated: var(--ion-toolbar-background, var(--ion-color-primary-contrast, #fff));\n  --color-focused: var(--ion-toolbar-color, var(--ion-color-primary, #3880ff));\n  --border-color: var(--ion-toolbar-color, var(--ion-color-primary, #3880ff));\n  --background-activated: var(--ion-toolbar-color, var(--ion-color-primary, #3880ff));\n}\n\n.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-solid , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid  {\n  --color: var(--ion-toolbar-background, var(--ion-color-step-50, #fff));\n  --color-activated: var(--ion-toolbar-background, var(--ion-color-step-50, #fff));\n  --color-focused: var(--ion-toolbar-background, var(--ion-color-step-50, #fff));\n  --background: var(--ion-toolbar-color, var(--ion-color-primary, #3880ff));\n  --background-activated: var(--ion-toolbar-color-activated, var(--ion-color-primary-shade, #3171e0));\n  --background-focused: var(--ion-toolbar-color-activated, var(--ion-color-primary-shade, #3171e0));\n}\n\n.sc-ion-buttons-ios-s  ion-icon[slot=start]  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: 0.3em;\n  font-size: 24px;\n  line-height: 0.67;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .sc-ion-buttons-ios-s  ion-icon[slot=start]  {\n    margin-right: unset;\n    -webkit-margin-end: 0.3em;\n    margin-inline-end: 0.3em;\n  }\n}\n\n.sc-ion-buttons-ios-s  ion-icon[slot=end]  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 0.4em;\n  font-size: 24px;\n  line-height: 0.67;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .sc-ion-buttons-ios-s  ion-icon[slot=end]  {\n    margin-left: unset;\n    -webkit-margin-start: 0.4em;\n    margin-inline-start: 0.4em;\n  }\n}\n\n.sc-ion-buttons-ios-s  ion-icon[slot=icon-only]  {\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 31px;\n  line-height: 0.67;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Buttons;
            }());
            exports('ion_buttons', Buttons);
        }
    };
});
