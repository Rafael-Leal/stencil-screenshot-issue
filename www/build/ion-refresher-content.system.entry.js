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
            var RefresherContent = /** @class */ (function () {
                function RefresherContent(hostRef) {
                    registerInstance(this, hostRef);
                    this.config = getContext(this, "config");
                }
                RefresherContent.prototype.componentWillLoad = function () {
                    if (this.pullingIcon === undefined) {
                        this.pullingIcon = this.config.get('refreshingIcon', 'arrow-down');
                    }
                    if (this.refreshingSpinner === undefined) {
                        var mode = getIonMode(this);
                        this.refreshingSpinner = this.config.get('refreshingSpinner', this.config.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
                    }
                };
                RefresherContent.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a)
                    };
                };
                RefresherContent.prototype.__stencil_render = function () {
                    return [
                        h("div", { class: "refresher-pulling" }, this.pullingIcon &&
                            h("div", { class: "refresher-pulling-icon" }, h("ion-icon", { icon: this.pullingIcon, lazy: false })), this.pullingText &&
                            h("div", { class: "refresher-pulling-text", innerHTML: sanitizeDOMString(this.pullingText) })),
                        h("div", { class: "refresher-refreshing" }, this.refreshingSpinner &&
                            h("div", { class: "refresher-refreshing-icon" }, h("ion-spinner", { name: this.refreshingSpinner })), this.refreshingText &&
                            h("div", { class: "refresher-refreshing-text", innerHTML: sanitizeDOMString(this.refreshingText) }))
                    ];
                };
                RefresherContent.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                return RefresherContent;
            }());
            exports('ion_refresher_content', RefresherContent);
        }
    };
});
