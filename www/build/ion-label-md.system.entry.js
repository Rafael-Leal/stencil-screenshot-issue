System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getIonMode, getElement, h, Host, createColorClasses;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                getIonMode = module.c;
                getElement = module.f;
                h = module.h;
                Host = module.H;
            }, function (module) {
                createColorClasses = module.c;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Label = /** @class */ (function () {
                function Label(hostRef) {
                    registerInstance(this, hostRef);
                    this.noAnimate = false;
                    this.ionStyle = createEvent(this, "ionStyle", 7);
                }
                Label.prototype.componentWillLoad = function () {
                    this.noAnimate = (this.position === 'floating');
                    this.emitStyle();
                };
                Label.prototype.componentDidLoad = function () {
                    var _this = this;
                    if (this.noAnimate) {
                        setTimeout(function () {
                            _this.noAnimate = false;
                        }, 1000);
                    }
                };
                Label.prototype.positionChanged = function () {
                    this.emitStyle();
                };
                Label.prototype.emitStyle = function () {
                    var _a;
                    var position = this.position;
                    this.ionStyle.emit((_a = {
                            'label': true
                        },
                        _a["label-" + position] = position !== undefined,
                        _a));
                };
                Label.prototype.hostData = function () {
                    var _a;
                    var position = this.position;
                    var mode = getIonMode(this);
                    return {
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a["label-" + position] = position !== undefined, _a["label-no-animate"] = (this.noAnimate), _a))
                    };
                };
                Object.defineProperty(Label.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Label, "watchers", {
                    get: function () {
                        return {
                            "position": ["positionChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Label.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(Label, "style", {
                    get: function () { return ".item.sc-ion-label-md-h, .item .sc-ion-label-md-h {\n  \n  --color: initial;\n  display: block;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.ion-color.sc-ion-label-md-h {\n  color: var(--ion-color-base);\n}\n\n.ion-text-wrap.sc-ion-label-md-h, [text-wrap].sc-ion-label-md-h {\n  white-space: normal;\n}\n\n.item-interactive-disabled.sc-ion-label-md-h, .item-interactive-disabled .sc-ion-label-md-h {\n  cursor: default;\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.item-input.sc-ion-label-md-h, .item-input .sc-ion-label-md-h {\n  -ms-flex: initial;\n  flex: initial;\n  max-width: 200px;\n  pointer-events: none;\n}\n\n.item-textarea.sc-ion-label-md-h, .item-textarea .sc-ion-label-md-h {\n  -ms-flex-item-align: baseline;\n  align-self: baseline;\n}\n\n.label-fixed.sc-ion-label-md-h {\n  -ms-flex: 0 0 100px;\n  flex: 0 0 100px;\n  width: 100px;\n  min-width: 100px;\n  max-width: 200px;\n}\n\n.label-stacked.sc-ion-label-md-h, .label-floating.sc-ion-label-md-h {\n  margin-bottom: 0;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  width: auto;\n  max-width: 100%;\n}\n.label-no-animate.label-floating.sc-ion-label-md-h {\n  -webkit-transition: none;\n  transition: none;\n}\n\n.ion-text-wrap.sc-ion-label-md-h, [text-wrap].sc-ion-label-md-h {\n  line-height: 1.5;\n}\n\n.label-stacked.sc-ion-label-md-h {\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  -webkit-transform: translate3d(0,  50%,  0) scale(0.75);\n  transform: translate3d(0,  50%,  0) scale(0.75);\n  -webkit-transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n[dir=rtl].sc-ion-label-md-h -no-combinator.label-stacked.sc-ion-label-md-h, [dir=rtl] .sc-ion-label-md-h -no-combinator.label-stacked.sc-ion-label-md-h, [dir=rtl].label-stacked.sc-ion-label-md-h, [dir=rtl] .label-stacked.sc-ion-label-md-h {\n  -webkit-transform-origin: right top;\n  transform-origin: right top;\n}\n\n.label-floating.sc-ion-label-md-h {\n  -webkit-transform: translate3d(0,  96%,  0);\n  transform: translate3d(0,  96%,  0);\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  -webkit-transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n[dir=rtl].sc-ion-label-md-h -no-combinator.label-floating.sc-ion-label-md-h, [dir=rtl] .sc-ion-label-md-h -no-combinator.label-floating.sc-ion-label-md-h, [dir=rtl].label-floating.sc-ion-label-md-h, [dir=rtl] .label-floating.sc-ion-label-md-h {\n  -webkit-transform-origin: right top;\n  transform-origin: right top;\n}\n\n.label-stacked.sc-ion-label-md-h, .label-floating.sc-ion-label-md-h {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.item-select.label-floating.sc-ion-label-md-h, .item-select .label-floating.sc-ion-label-md-h {\n  -webkit-transform: translate3d(0,  130%,  0);\n  transform: translate3d(0,  130%,  0);\n}\n\n.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus .label-floating.sc-ion-label-md-h, .item-has-placeholder.label-floating.sc-ion-label-md-h, .item-has-placeholder .label-floating.sc-ion-label-md-h, .item-has-value.label-floating.sc-ion-label-md-h, .item-has-value .label-floating.sc-ion-label-md-h {\n  -webkit-transform: translate3d(0,  50%,  0) scale(0.75);\n  transform: translate3d(0,  50%,  0) scale(0.75);\n}\n\n.item-has-focus.label-stacked.sc-ion-label-md-h, .item-has-focus .label-stacked.sc-ion-label-md-h, .item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus .label-floating.sc-ion-label-md-h {\n  color: var(--ion-color-primary, #3880ff);\n}\n\n.sc-ion-label-md-s  h1  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 24px;\n  font-weight: normal;\n}\n\n.sc-ion-label-md-s  h2  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  font-size: 16px;\n  font-weight: normal;\n}\n\n.sc-ion-label-md-s  h3 , .sc-ion-label-md-s  h4 , .sc-ion-label-md-s  h5 , .sc-ion-label-md-s  h6  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: normal;\n}\n\n.sc-ion-label-md-s  p  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 14px;\n  line-height: 20px;\n  text-overflow: inherit;\n  overflow: inherit;\n}\n\n.sc-ion-label-md-s > p {\n  color: var(--ion-color-step-600, #666666);\n}\n\n.sc-ion-label-md-h.ion-color.sc-ion-label-md-s > p, .ion-color .sc-ion-label-md-h.sc-ion-label-md-s > p {\n  color: inherit;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Label;
            }());
            exports('ion_label', Label);
        }
    };
});
