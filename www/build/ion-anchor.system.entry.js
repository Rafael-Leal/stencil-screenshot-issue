System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js'], function (exports) {
    'use strict';
    var registerInstance, getContext, getIonMode, h, Host, openURL, createColorClasses;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getContext = module.e;
                getIonMode = module.c;
                h = module.h;
                Host = module.H;
            }, function (module) {
                openURL = module.o;
                createColorClasses = module.c;
            }],
        execute: function () {
            var Anchor = /** @class */ (function () {
                function Anchor(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * When using a router, it specifies the transition direction when navigating to
                     * another page using `href`.
                     */
                    this.routerDirection = 'forward';
                    this.win = getContext(this, "window");
                }
                Anchor.prototype.onClick = function (ev) {
                    openURL(this.win, this.href, ev, this.routerDirection);
                };
                Anchor.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a['ion-activatable'] = true, _a))
                    };
                };
                Anchor.prototype.__stencil_render = function () {
                    var attrs = {
                        download: this.download,
                        href: this.href,
                        rel: this.rel,
                        target: this.target
                    };
                    return (h("a", Object.assign({}, attrs), h("slot", null)));
                };
                Anchor.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Anchor, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --background: Background of the badge\n   * \@prop --color: Text color of the badge\n   */\n  --background: transparent;\n  --color: var(--ion-color-primary, #3880ff);\n  background: var(--background);\n  color: var(--color);\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-base);\n}\n\na {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Anchor;
            }());
            exports('ion_anchor', Anchor);
        }
    };
});
