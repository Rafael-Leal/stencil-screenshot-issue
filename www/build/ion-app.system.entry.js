System.register(['./chunk-a61457cf.system.js', './chunk-93181f6c.system.js'], function (exports, module) {
    'use strict';
    var registerInstance, getContext, getIonMode, getElement, h, Host, isPlatform, rIC;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getContext = module.e;
                getIonMode = module.c;
                getElement = module.f;
                h = module.h;
                Host = module.H;
                isPlatform = module.i;
            }, function (module) {
                rIC = module.r;
            }],
        execute: function () {
            var App = /** @class */ (function () {
                function App(hostRef) {
                    registerInstance(this, hostRef);
                    this.win = getContext(this, "window");
                    this.config = getContext(this, "config");
                }
                App.prototype.componentDidLoad = function () {
                    var _this = this;
                    rIC(function () {
                        var _a = _this, win = _a.win, config = _a.config;
                        if (!config.getBoolean('_testing')) {
                            importTapClick(win, config);
                        }
                        importInputShims(win, config);
                        importStatusTap(win, config);
                        importHardwareBackButton(win, config);
                        importFocusVisible(win);
                    });
                };
                App.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a['ion-page'] = true,
                            _a['force-statusbar-padding'] = this.config.getBoolean('_forceStatusbarPadding'),
                            _a)
                    };
                };
                Object.defineProperty(App.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                App.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(App, "style", {
                    get: function () { return "html.plt-mobile ion-app {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nion-app.force-statusbar-padding {\n  --ion-safe-area-top: 20px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return App;
            }());
            exports('ion_app', App);
            function importHardwareBackButton(win, config) {
                var hardwareBackConfig = config.getBoolean('hardwareBackButton', isPlatform(win, 'hybrid'));
                if (hardwareBackConfig) {
                    module.import('./hardware-back-button-ccb48b82.system.js').then(function (module) { return module.startHardwareBackButton(win); });
                }
            }
            function importStatusTap(win, config) {
                var statusTap = config.getBoolean('statusTap', isPlatform(win, 'hybrid'));
                if (statusTap) {
                    module.import('./status-tap-7f51d1ca.system.js').then(function (module) { return module.startStatusTap(win); });
                }
            }
            function importFocusVisible(win) {
                module.import('./focus-visible-39147dcd.system.js').then(function (module) { return module.startFocusVisible(win.document); });
            }
            function importTapClick(win, config) {
                module.import('./tap-click-ddb3c6e3.system.js').then(function (module) { return module.startTapClick(win.document, config); });
            }
            function importInputShims(win, config) {
                var inputShims = config.getBoolean('inputShims', needInputShims(win));
                if (inputShims) {
                    module.import('./input-shims-1d482e5a.system.js').then(function (module) { return module.startInputShims(win.document, config); });
                }
            }
            function needInputShims(win) {
                return isPlatform(win, 'ios') && isPlatform(win, 'mobile');
            }
        }
    };
});
