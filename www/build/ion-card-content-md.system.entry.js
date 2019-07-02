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
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var CardContent = /** @class */ (function () {
                function CardContent(hostRef) {
                    registerInstance(this, hostRef);
                }
                CardContent.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            // Used internally for styling
                            _a["card-content-" + mode] = true,
                            _a)
                    };
                };
                CardContent.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(CardContent, "style", {
                    get: function () { return "ion-card-content {\n  display: block;\n  position: relative;\n}\n\n.card-content-md {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .card-content-md {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 16px;\n    padding-inline-start: 16px;\n    -webkit-padding-end: 16px;\n    padding-inline-end: 16px;\n  }\n}\n.card-content-md h1 {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 24px;\n  font-weight: normal;\n}\n.card-content-md h2 {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  font-size: 16px;\n  font-weight: normal;\n}\n.card-content-md h3,\n.card-content-md h4,\n.card-content-md h5,\n.card-content-md h6 {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  font-size: 14px;\n  font-weight: normal;\n}\n.card-content-md p {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.5;\n}\n\nion-card-header + .card-content-md {\n  padding-top: 0;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return CardContent;
            }());
            exports('ion_card_content', CardContent);
        }
    };
});
