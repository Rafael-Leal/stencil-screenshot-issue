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
            var Footer = /** @class */ (function () {
                function Footer(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * If `true`, the footer will be translucent.
                     * Note: In order to scroll content behind the footer, the `fullscreen`
                     * attribute needs to be set on the content.
                     */
                    this.translucent = false;
                }
                Footer.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            // Used internally for styling
                            _a["footer-" + mode] = true,
                            _a["footer-translucent"] = this.translucent,
                            _a["footer-translucent-" + mode] = this.translucent,
                            _a)
                    };
                };
                Footer.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(Footer, "style", {
                    get: function () { return "ion-footer {\n  display: block;\n  position: relative;\n  -ms-flex-order: 1;\n  order: 1;\n  width: 100%;\n  z-index: 10;\n}\n\nion-footer ion-toolbar:last-child {\n  padding-bottom: var(--ion-safe-area-bottom, 0);\n}\n\n.footer-ios ion-toolbar:first-child {\n  --border-width: 0.55px 0 0;\n}\n\n.footer-ios[no-border] ion-toolbar:first-child {\n  --border-width: 0;\n}\n\n.footer-translucent-ios {\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.footer-translucent-ios ion-toolbar {\n  --opacity: .8;\n  --backdrop-filter: saturate(180%) blur(20px);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Footer;
            }());
            exports('ion_footer', Footer);
        }
    };
});
