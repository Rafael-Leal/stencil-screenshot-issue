System.register(['./chunk-a61457cf.system.js', './chunk-93181f6c.system.js', './index-609ae789.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getContext, getIonMode, h, Host, now, GESTURE_CONTROLLER;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                getContext = module.e;
                getIonMode = module.c;
                h = module.h;
                Host = module.H;
            }, function (module) {
                now = module.n;
            }, function (module) {
                GESTURE_CONTROLLER = module.GESTURE_CONTROLLER;
            }],
        execute: function () {
            var Backdrop = /** @class */ (function () {
                function Backdrop(hostRef) {
                    registerInstance(this, hostRef);
                    this.lastClick = -10000;
                    this.blocker = GESTURE_CONTROLLER.createBlocker({
                        disableScroll: true
                    });
                    /**
                     * If `true`, the backdrop will be visible.
                     */
                    this.visible = true;
                    /**
                     * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
                     */
                    this.tappable = true;
                    /**
                     * If `true`, the backdrop will stop propagation on tap.
                     */
                    this.stopPropagation = true;
                    this.ionBackdropTap = createEvent(this, "ionBackdropTap", 7);
                    this.doc = getContext(this, "document");
                }
                Backdrop.prototype.componentDidLoad = function () {
                    if (this.stopPropagation) {
                        this.blocker.block();
                    }
                };
                Backdrop.prototype.componentDidUnload = function () {
                    this.blocker.destroy();
                };
                Backdrop.prototype.onTouchStart = function (ev) {
                    this.lastClick = now(ev);
                    this.emitTap(ev);
                };
                Backdrop.prototype.onMouseDown = function (ev) {
                    if (this.lastClick < now(ev) - 2500) {
                        this.emitTap(ev);
                    }
                };
                Backdrop.prototype.emitTap = function (ev) {
                    if (this.stopPropagation) {
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    if (this.tappable) {
                        this.ionBackdropTap.emit();
                    }
                };
                Backdrop.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        tabindex: '-1',
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a['backdrop-hide'] = !this.visible,
                            _a['backdrop-no-tappable'] = !this.tappable,
                            _a)
                    };
                };
                Backdrop.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(Backdrop, "style", {
                    get: function () { return ":host {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: block;\n  position: absolute;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  contain: strict;\n  cursor: pointer;\n  opacity: 0.01;\n  -ms-touch-action: none;\n  touch-action: none;\n  z-index: 2;\n}\n\n:host(.backdrop-hide) {\n  background: transparent;\n}\n\n:host(.backdrop-no-tappable) {\n  cursor: auto;\n}\n\n:host {\n  background-color: var(--ion-backdrop-color, #000);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Backdrop;
            }());
            exports('ion_backdrop', Backdrop);
        }
    };
});
