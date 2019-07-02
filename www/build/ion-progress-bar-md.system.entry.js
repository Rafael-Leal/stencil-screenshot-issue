System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js', './chunk-93181f6c.system.js'], function (exports) {
    'use strict';
    var registerInstance, getContext, getIonMode, h, Host, createColorClasses, clamp;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getContext = module.e;
                getIonMode = module.c;
                h = module.h;
                Host = module.H;
            }, function (module) {
                createColorClasses = module.c;
            }, function (module) {
                clamp = module.c;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var ProgressBar = /** @class */ (function () {
                function ProgressBar(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * The state of the progress bar, based on if the time the process takes is known or not.
                     * Default options are: `"determinate"` (no animation), `"indeterminate"` (animate from left to right).
                     */
                    this.type = 'determinate';
                    /**
                     * If true, reverse the progress bar direction.
                     */
                    this.reversed = false;
                    /**
                     * The value determines how much of the active bar should display when the
                     * `type` is `"determinate"`.
                     * The value should be between [0, 1].
                     */
                    this.value = 0;
                    /**
                     * If the buffer and value are smaller than 1, the buffer circles will show.
                     * The buffer should be between [0, 1].
                     */
                    this.buffer = 1;
                    this.config = getContext(this, "config");
                }
                ProgressBar.prototype.hostData = function () {
                    var _a;
                    var _b = this, color = _b.color, type = _b.type, reversed = _b.reversed, value = _b.value;
                    var paused = this.config.getBoolean('_testing');
                    var mode = getIonMode(this);
                    return {
                        'role': 'progressbar',
                        'aria-valuenow': type === 'determinate' ? value : null,
                        'aria-valuemin': 0,
                        'aria-valuemax': 1,
                        class: Object.assign({}, createColorClasses(color), (_a = {}, _a["" + mode] = true, _a["progress-bar-" + type] = true, _a['progress-paused'] = paused, _a['progress-bar-reversed'] = document.dir === 'rtl' ? !reversed : reversed, _a))
                    };
                };
                ProgressBar.prototype.__stencil_render = function () {
                    if (this.type === 'indeterminate') {
                        return [
                            h("div", { class: "indeterminate-bar-primary" }, h("span", { class: "progress-indeterminate" })),
                            h("div", { class: "indeterminate-bar-secondary" }, h("span", { class: "progress-indeterminate" }))
                        ];
                    }
                    var value = clamp(0, this.value, 1);
                    var buffer = clamp(0, this.buffer, 1);
                    return [
                        h("div", { class: "progress", style: { transform: "scaleX(" + value + ")" } }),
                        buffer !== 1 && h("div", { class: "buffer-circles" }),
                        h("div", { class: "progress-buffer-bar", style: { transform: "scaleX(" + buffer + ")" } }),
                    ];
                };
                ProgressBar.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(ProgressBar, "style", {
                    get: function () { return ":host {\n  /**\n  * \@prop --background:  Same as --buffer-background when using a determinate progress bar, otherwise it styles the background of the ion-progress-bar itself.\n  * \@prop --progress-background: Color of the progress bar\n  * \@prop --buffer-background: Color of the buffer bar\n  */\n  --background: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.2);\n  --progress-background: var(--ion-color-primary, #3880ff);\n  --buffer-background: var(--background);\n  display: block;\n  position: relative;\n  width: 100%;\n  contain: strict;\n  direction: ltr;\n  overflow: hidden;\n}\n\n:host(.ion-color) {\n  --progress-background: var(--ion-color-base);\n  --buffer-background: rgba(var(--ion-color-base-rgb), 0.2);\n}\n\n:host(.progress-bar-indeterminate) {\n  background: var(--buffer-background);\n}\n\n.progress,\n.progress-indeterminate,\n.indeterminate-bar-primary,\n.indeterminate-bar-secondary,\n.progress-buffer-bar,\n.progress-buffer-bar:before,\n.buffer-circles {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.progress,\n.progress-buffer-bar {\n  /* stylelint-disable-next-line property-blacklist */\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  -webkit-transition: -webkit-transform 150ms linear;\n  transition: -webkit-transform 150ms linear;\n  transition: transform 150ms linear;\n  transition: transform 150ms linear, -webkit-transform 150ms linear;\n}\n\n.progress,\n.progress-indeterminate {\n  background: var(--progress-background);\n  z-index: 2;\n}\n\n.progress-buffer-bar {\n  background: #fff;\n  z-index: 1;\n}\n.progress-buffer-bar:before {\n  background: var(--buffer-background);\n  content: \"\";\n}\n\n.indeterminate-bar-primary {\n  /* stylelint-disable property-blacklist */\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: -145.166611%;\n  /* stylelint-enable property-blacklist */\n  -webkit-animation: primary-indeterminate-translate 2s infinite linear;\n  animation: primary-indeterminate-translate 2s infinite linear;\n}\n.indeterminate-bar-primary .progress-indeterminate {\n  -webkit-animation: primary-indeterminate-scale 2s infinite linear;\n  animation: primary-indeterminate-scale 2s infinite linear;\n  -webkit-animation-play-state: inherit;\n  animation-play-state: inherit;\n}\n\n.indeterminate-bar-secondary {\n  /* stylelint-disable property-blacklist */\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: -54.888891%;\n  /* stylelint-enable property-blacklist */\n  -webkit-animation: secondary-indeterminate-translate 2s infinite linear;\n  animation: secondary-indeterminate-translate 2s infinite linear;\n}\n.indeterminate-bar-secondary .progress-indeterminate {\n  -webkit-animation: secondary-indeterminate-scale 2s infinite linear;\n  animation: secondary-indeterminate-scale 2s infinite linear;\n  -webkit-animation-play-state: inherit;\n  animation-play-state: inherit;\n}\n\n.buffer-circles {\n  background: radial-gradient(ellipse at center, var(--buffer-background) 0%, var(--buffer-background) 30%, transparent 30%) repeat-x 5px center;\n  background-size: 10px 10px;\n  z-index: 0;\n  -webkit-animation: buffering 450ms infinite linear;\n  animation: buffering 450ms infinite linear;\n}\n\n:host(.progress-bar-reversed) .progress,\n:host(.progress-bar-reversed) .progress-buffer-bar {\n  /* stylelint-disable-next-line property-blacklist */\n  -webkit-transform-origin: right top;\n  transform-origin: right top;\n}\n:host(.progress-bar-reversed) .buffer-circles,\n:host(.progress-bar-reversed) .indeterminate-bar-primary,\n:host(.progress-bar-reversed) .indeterminate-bar-secondary,\n:host(.progress-bar-reversed) .progress-indeterminate {\n  animation-direction: reverse;\n}\n\n:host(.progress-paused) .indeterminate-bar-secondary,\n:host(.progress-paused) .indeterminate-bar-primary,\n:host(.progress-paused) .buffer-circles {\n  -webkit-animation-play-state: paused;\n  animation-play-state: paused;\n}\n\n\@-webkit-keyframes primary-indeterminate-translate {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  20% {\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  59.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    -webkit-transform: translateX(83.67142%);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    -webkit-transform: translateX(200.611057%);\n    transform: translateX(200.611057%);\n  }\n}\n\n\@keyframes primary-indeterminate-translate {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  20% {\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  59.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    -webkit-transform: translateX(83.67142%);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    -webkit-transform: translateX(200.611057%);\n    transform: translateX(200.611057%);\n  }\n}\n\@-webkit-keyframes primary-indeterminate-scale {\n  0% {\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    -webkit-animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    -webkit-transform: scaleX(0.661479);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n}\n\@keyframes primary-indeterminate-scale {\n  0% {\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    -webkit-animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    -webkit-transform: scaleX(0.661479);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n}\n\@-webkit-keyframes secondary-indeterminate-translate {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  25% {\n    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    -webkit-transform: translateX(37.651913%);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    -webkit-transform: translateX(84.386165%);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    -webkit-transform: translateX(160.277782%);\n    transform: translateX(160.277782%);\n  }\n}\n\@keyframes secondary-indeterminate-translate {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  25% {\n    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    -webkit-transform: translateX(37.651913%);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    -webkit-transform: translateX(84.386165%);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    -webkit-transform: translateX(160.277782%);\n    transform: translateX(160.277782%);\n  }\n}\n\@-webkit-keyframes secondary-indeterminate-scale {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    -webkit-transform: scaleX(0.457104);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    -webkit-transform: scaleX(0.72796);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n}\n\@keyframes secondary-indeterminate-scale {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    -webkit-transform: scaleX(0.457104);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    -webkit-transform: scaleX(0.72796);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n}\n\@-webkit-keyframes buffering {\n  to {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n}\n\@keyframes buffering {\n  to {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n}\n:host {\n  height: 4px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ProgressBar;
            }());
            exports('ion_progress_bar', ProgressBar);
        }
    };
});
