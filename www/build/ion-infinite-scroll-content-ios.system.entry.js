System.register(['./chunk-a61457cf.system.js', './chunk-02683056.system.js'], function (exports) {
    'use strict';
    var registerInstance, getContext, getIonMode, h, Host, sanitizeDOMString;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getContext = module.e;
                getIonMode = module.c;
                h = module.h;
                Host = module.H;
            }, function (module) {
                sanitizeDOMString = module.s;
            }],
        execute: function () {
            var InfiniteScrollContent = /** @class */ (function () {
                function InfiniteScrollContent(hostRef) {
                    registerInstance(this, hostRef);
                    this.config = getContext(this, "config");
                }
                InfiniteScrollContent.prototype.componentDidLoad = function () {
                    if (this.loadingSpinner === undefined) {
                        var mode = getIonMode(this);
                        this.loadingSpinner = this.config.get('infiniteLoadingSpinner', this.config.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
                    }
                };
                InfiniteScrollContent.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            // Used internally for styling
                            _a["infinite-scroll-content-" + mode] = true,
                            _a)
                    };
                };
                InfiniteScrollContent.prototype.__stencil_render = function () {
                    return (h("div", { class: "infinite-loading" }, this.loadingSpinner && (h("div", { class: "infinite-loading-spinner" }, h("ion-spinner", { name: this.loadingSpinner }))), this.loadingText && (h("div", { class: "infinite-loading-text", innerHTML: sanitizeDOMString(this.loadingText) }))));
                };
                InfiniteScrollContent.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(InfiniteScrollContent, "style", {
                    get: function () { return "ion-infinite-scroll-content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  min-height: 84px;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.infinite-loading {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 32px;\n  display: none;\n  width: 100%;\n}\n\n.infinite-loading-text {\n  margin-left: 32px;\n  margin-right: 32px;\n  margin-top: 4px;\n  margin-bottom: 0;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .infinite-loading-text {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 32px;\n    margin-inline-start: 32px;\n    -webkit-margin-end: 32px;\n    margin-inline-end: 32px;\n  }\n}\n\n.infinite-scroll-loading ion-infinite-scroll-content > .infinite-loading {\n  display: block;\n}\n\n.infinite-scroll-content-ios .infinite-loading-text {\n  color: var(--ion-color-step-600, #666666);\n}\n\n.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,\n.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,\n.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle {\n  stroke: var(--ion-color-step-600, #666666);\n}\n\n.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,\n.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,\n.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle {\n  fill: var(--ion-color-step-600, #666666);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return InfiniteScrollContent;
            }());
            exports('ion_infinite_scroll_content', InfiniteScrollContent);
        }
    };
});
