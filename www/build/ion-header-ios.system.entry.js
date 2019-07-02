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
                    get: function () { return "ion-header {\n  display: block;\n  position: relative;\n  -ms-flex-order: -1;\n  order: -1;\n  width: 100%;\n  z-index: 10;\n}\n\nion-header ion-toolbar:first-child {\n  padding-top: var(--ion-safe-area-top, 0);\n}\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0 0 0.55px;\n}\n\n.header-ios[no-border] ion-toolbar:last-child {\n  --border-width: 0;\n}\n\n.header-translucent-ios {\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.header-translucent-ios ion-toolbar {\n  --opacity: .8;\n  --backdrop-filter: saturate(180%) blur(20px);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Header;
            }());
            exports('ion_header', Header);
        }
    };
});
