System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getIonMode, h, getElement, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                getIonMode = module.c;
                h = module.h;
                getElement = module.f;
                Host = module.H;
            }],
        execute: function () {
            var Img = /** @class */ (function () {
                function Img(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.onLoad = function () {
                        _this.ionImgDidLoad.emit();
                    };
                    this.onError = function () {
                        _this.ionError.emit();
                    };
                    this.ionImgWillLoad = createEvent(this, "ionImgWillLoad", 7);
                    this.ionImgDidLoad = createEvent(this, "ionImgDidLoad", 7);
                    this.ionError = createEvent(this, "ionError", 7);
                }
                Img.prototype.srcChanged = function () {
                    this.addIO();
                };
                Img.prototype.componentDidLoad = function () {
                    this.addIO();
                };
                Img.prototype.addIO = function () {
                    var _this = this;
                    if (this.src === undefined) {
                        return;
                    }
                    if ('IntersectionObserver' in window) {
                        this.removeIO();
                        this.io = new IntersectionObserver(function (data) {
                            // because there will only ever be one instance
                            // of the element we are observing
                            // we can just use data[0]
                            if (data[0].isIntersecting) {
                                _this.load();
                                _this.removeIO();
                            }
                        });
                        this.io.observe(this.el);
                    }
                    else {
                        // fall back to setTimeout for Safari and IE
                        setTimeout(function () { return _this.load(); }, 200);
                    }
                };
                Img.prototype.load = function () {
                    this.loadError = this.onError;
                    this.loadSrc = this.src;
                    this.ionImgWillLoad.emit();
                };
                Img.prototype.removeIO = function () {
                    if (this.io) {
                        this.io.disconnect();
                        this.io = undefined;
                    }
                };
                Img.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a)
                    };
                };
                Img.prototype.__stencil_render = function () {
                    return (h("img", { src: this.loadSrc, alt: this.alt, decoding: "async", onLoad: this.onLoad, onError: this.loadError }));
                };
                Object.defineProperty(Img.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Img, "watchers", {
                    get: function () {
                        return {
                            "src": ["srcChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Img.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Img, "style", {
                    get: function () { return ":host {\n  display: block;\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n\nimg {\n  display: block;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: inherit;\n  object-fit: inherit;\n  -o-object-position: inherit;\n  object-position: inherit;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Img;
            }());
            exports('ion_img', Img);
        }
    };
});
