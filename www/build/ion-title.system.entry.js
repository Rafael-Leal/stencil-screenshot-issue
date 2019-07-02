System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, h, getElement, Host, createColorClasses;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.c;
                h = module.h;
                getElement = module.f;
                Host = module.H;
            }, function (module) {
                createColorClasses = module.c;
            }],
        execute: function () {
            var ToolbarTitle = /** @class */ (function () {
                function ToolbarTitle(hostRef) {
                    registerInstance(this, hostRef);
                }
                ToolbarTitle.prototype.getMode = function () {
                    var mode = getIonMode(this);
                    var toolbar = this.el.closest('ion-toolbar');
                    return (toolbar && toolbar.mode) || mode;
                };
                ToolbarTitle.prototype.hostData = function () {
                    var _a;
                    var mode = this.getMode();
                    return {
                        class: Object.assign((_a = {}, _a["" + mode] = true, _a["title-" + mode] = true, _a), createColorClasses(this.color))
                    };
                };
                ToolbarTitle.prototype.__stencil_render = function () {
                    return [
                        h("div", { class: "toolbar-title" }, h("slot", null))
                    ];
                };
                Object.defineProperty(ToolbarTitle.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                ToolbarTitle.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(ToolbarTitle, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --color: Text color of the title\n   */\n  --color: initial;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  color: var(--color);\n}\n\n:host(.title-ios) {\n  left: 0;\n  top: 0;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n:host-context([dir=rtl]):host(.title-ios), :host-context([dir=rtl]).title-ios {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.title-ios) {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 90px;\n    padding-inline-start: 90px;\n    -webkit-padding-end: 90px;\n    padding-inline-end: 90px;\n  }\n}\n\n:host(.title-md) {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 0;\n  padding-bottom: 0;\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.title-md) {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 20px;\n    padding-inline-start: 20px;\n    -webkit-padding-end: 20px;\n    padding-inline-end: 20px;\n  }\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-base);\n}\n\n.toolbar-title {\n  display: block;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  pointer-events: auto;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ToolbarTitle;
            }());
            exports('ion_title', ToolbarTitle);
        }
    };
});
