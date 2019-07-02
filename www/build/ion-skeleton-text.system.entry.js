System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js'], function (exports) {
    'use strict';
    var registerInstance, getContext, h, getIonMode, getElement, Host, hostContext;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getContext = module.e;
                h = module.h;
                getIonMode = module.c;
                getElement = module.f;
                Host = module.H;
            }, function (module) {
                hostContext = module.h;
            }],
        execute: function () {
            var SkeletonText = /** @class */ (function () {
                function SkeletonText(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * If `true`, the skeleton text will animate.
                     */
                    this.animated = false;
                    this.config = getContext(this, "config");
                }
                SkeletonText.prototype.calculateWidth = function () {
                    // If width was passed in to the property use that first
                    if (this.width !== undefined) {
                        return {
                            style: {
                                width: this.width
                            }
                        };
                    }
                    return;
                };
                SkeletonText.prototype.__stencil_render = function () {
                    return (h("span", null, "\u00A0"));
                };
                SkeletonText.prototype.hostData = function () {
                    var _a;
                    var animated = this.animated && this.config.getBoolean('animated', true);
                    var inMedia = hostContext('ion-avatar', this.el) || hostContext('ion-thumbnail', this.el);
                    var mode = getIonMode(this);
                    return Object.assign({ class: (_a = {},
                            _a["" + mode] = true,
                            _a['skeleton-text-animated'] = animated,
                            _a['in-media'] = inMedia,
                            _a) }, this.calculateWidth());
                };
                Object.defineProperty(SkeletonText.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                SkeletonText.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(SkeletonText, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --background: Background of the skeleton text\n   * \@prop --background-rgb: Background of the skeleton text in rgb format\n   *\n   * \@prop --border-radius: Border radius of the skeleton text\n   */\n  --background: rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065);\n  border-radius: var(--border-radius, inherit);\n  display: block;\n  width: 100%;\n  height: inherit;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  background: var(--background);\n  line-height: 10px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  pointer-events: none;\n}\n\nspan {\n  display: inline-block;\n}\n\n:host(.in-media) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 100%;\n}\n\n:host(.skeleton-text-animated) {\n  position: relative;\n  background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065)), color-stop(18%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.135)), color-stop(33%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065)));\n  background: linear-gradient(to right, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 8%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.135) 18%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 33%);\n  background-size: 800px 104px;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: shimmer;\n  animation-name: shimmer;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n}\n\n/* stylelint-disable property-blacklist */\n\@-webkit-keyframes shimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\@keyframes shimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n/* stylelint-enable property-blacklist */"; },
                    enumerable: true,
                    configurable: true
                });
                return SkeletonText;
            }());
            exports('ion_skeleton_text', SkeletonText);
        }
    };
});
