System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getIonMode, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                getIonMode = module.c;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            var Slide = /** @class */ (function () {
                function Slide(hostRef) {
                    registerInstance(this, hostRef);
                    this.ionSlideChanged = createEvent(this, "ionSlideChanged", 7);
                }
                Slide.prototype.componentDidLoad = function () {
                    this.ionSlideChanged.emit();
                };
                Slide.prototype.componentDidUnload = function () {
                    this.ionSlideChanged.emit();
                };
                Slide.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a['swiper-slide'] = true,
                            _a['swiper-zoom-container'] = true,
                            _a)
                    };
                };
                Slide.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(Slide, "style", {
                    get: function () { return "ion-slide {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.slide-zoom {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n\n.swiper-slide {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 18px;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.swiper-slide img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Slide;
            }());
            exports('ion_slide', Slide);
        }
    };
});
