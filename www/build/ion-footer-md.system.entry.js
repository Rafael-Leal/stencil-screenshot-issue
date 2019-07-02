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
                    get: function () { return "ion-footer {\n  display: block;\n  position: relative;\n  -ms-flex-order: 1;\n  order: 1;\n  width: 100%;\n  z-index: 10;\n}\n\nion-footer ion-toolbar:last-child {\n  padding-bottom: var(--ion-safe-area-bottom, 0);\n}\n\n.footer-md::before {\n  left: 0;\n  top: -2px;\n  bottom: auto;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==\");\n  background-repeat: repeat-x;\n  content: \"\";\n}\n[dir=rtl] .footer-md::before, :host-context([dir=rtl]) .footer-md::before {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n[dir=rtl] .footer-md::before, :host-context([dir=rtl]) .footer-md::before {\n  background-position: right 0 top 0;\n}\n\n.footer-md[no-border]::before {\n  display: none;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Footer;
            }());
            exports('ion_footer', Footer);
        }
    };
});
