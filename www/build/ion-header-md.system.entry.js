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
            var Header = /** @class */ (function () {
                function Header(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * If `true`, the header will be translucent.
                     * Note: In order to scroll content behind the header, the `fullscreen`
                     * attribute needs to be set on the content.
                     */
                    this.translucent = false;
                }
                Header.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            // Used internally for styling
                            _a["header-" + mode] = true,
                            _a["header-translucent"] = this.translucent,
                            _a["header-translucent-" + mode] = this.translucent,
                            _a)
                    };
                };
                Header.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(Header, "style", {
                    get: function () { return "ion-header {\n  display: block;\n  position: relative;\n  -ms-flex-order: -1;\n  order: -1;\n  width: 100%;\n  z-index: 10;\n}\n\nion-header ion-toolbar:first-child {\n  padding-top: var(--ion-safe-area-top, 0);\n}\n\n.header-md::after {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n[dir=rtl] .header-md::after, :host-context([dir=rtl]) .header-md::after {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n[dir=rtl] .header-md::after, :host-context([dir=rtl]) .header-md::after {\n  background-position: right 0 top -2px;\n}\n\n.header-md[no-border]::after {\n  display: none;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Header;
            }());
            exports('ion_header', Header);
        }
    };
});
