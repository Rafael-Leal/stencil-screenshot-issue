import { r as registerInstance, e as getContext, c as getIonMode, h, H as Host } from './chunk-8bad6bbf.js';
import { c as createColorClasses } from './chunk-abd3a723.js';

const spinners = {
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;

class Spinner {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the spinner's animation will be paused.
         */
        this.paused = false;
        this.config = getContext(this, "config");
    }
    getName() {
        const name = this.name || this.config.get('spinner');
        const mode = getIonMode(this);
        if (name) {
            return name;
        }
        return (mode === 'ios') ? 'lines' : 'crescent';
    }
    hostData() {
        const mode = getIonMode(this);
        return {
            class: Object.assign({}, createColorClasses(this.color), { [`${mode}`]: true, [`spinner-${this.getName()}`]: true, 'spinner-paused': !!this.paused || this.config.getBoolean('_testing') })
        };
    }
    __stencil_render() {
        const name = this.getName();
        const spinner = SPINNERS[name] || SPINNERS['lines'];
        const duration = (typeof this.duration === 'number' && this.duration > 10 ? this.duration : spinner.dur);
        const svgs = [];
        if (spinner.circles !== undefined) {
            for (let i = 0; i < spinner.circles; i++) {
                svgs.push(buildCircle(spinner, duration, i, spinner.circles));
            }
        }
        else if (spinner.lines !== undefined) {
            for (let i = 0; i < spinner.lines; i++) {
                svgs.push(buildLine(spinner, duration, i, spinner.lines));
            }
        }
        return svgs;
    }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ":host {\n  /**\n   * \@prop --color: Color of the spinner\n   */\n  display: inline-block;\n  position: relative;\n  width: 28px;\n  height: 28px;\n  color: var(--color);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-base);\n}\n\nsvg {\n  left: 0;\n  top: 0;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n[dir=rtl] svg, :host-context([dir=rtl]) svg {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n[dir=rtl] svg, :host-context([dir=rtl]) svg {\n  -webkit-transform-origin: calc(100% - center);\n  transform-origin: calc(100% - center);\n}\n\n:host(.spinner-lines) line,\n:host(.spinner-lines-small) line {\n  stroke-width: 4px;\n  stroke-linecap: round;\n  stroke: currentColor;\n}\n\n:host(.spinner-lines) svg,\n:host(.spinner-lines-small) svg {\n  -webkit-animation: spinner-fade-out 1s linear infinite;\n  animation: spinner-fade-out 1s linear infinite;\n}\n\n:host(.spinner-bubbles) svg {\n  -webkit-animation: spinner-scale-out 1s linear infinite;\n  animation: spinner-scale-out 1s linear infinite;\n  fill: currentColor;\n}\n\n:host(.spinner-circles) svg {\n  -webkit-animation: spinner-fade-out 1s linear infinite;\n  animation: spinner-fade-out 1s linear infinite;\n  fill: currentColor;\n}\n\n:host(.spinner-crescent) circle {\n  fill: transparent;\n  stroke-width: 4px;\n  stroke-dasharray: 128px;\n  stroke-dashoffset: 82px;\n  stroke: currentColor;\n}\n\n:host(.spinner-crescent) svg {\n  -webkit-animation: spinner-rotate 1s linear infinite;\n  animation: spinner-rotate 1s linear infinite;\n}\n\n:host(.spinner-dots) circle {\n  stroke-width: 0;\n  fill: currentColor;\n}\n\n:host(.spinner-dots) svg {\n  -webkit-animation: spinner-dots 1s linear infinite;\n  animation: spinner-dots 1s linear infinite;\n}\n\n:host(.spinner-paused) svg {\n  -webkit-animation-play-state: paused;\n  animation-play-state: paused;\n}\n\n\@-webkit-keyframes spinner-fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n\@keyframes spinner-fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\@-webkit-keyframes spinner-scale-out {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n\@keyframes spinner-scale-out {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n\@-webkit-keyframes spinner-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\@keyframes spinner-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\@-webkit-keyframes spinner-dots {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 0.9;\n  }\n  50% {\n    -webkit-transform: scale(0.4, 0.4);\n    transform: scale(0.4, 0.4);\n    opacity: 0.3;\n  }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 0.9;\n  }\n}\n\@keyframes spinner-dots {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 0.9;\n  }\n  50% {\n    -webkit-transform: scale(0.4, 0.4);\n    transform: scale(0.4, 0.4);\n    opacity: 0.3;\n  }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 0.9;\n  }\n}"; }
}
function buildCircle(spinner, duration, index, total) {
    const data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = `${duration}ms`;
    return (h("svg", { viewBox: "0 0 64 64", style: data.style }, h("circle", { transform: "translate(32,32)", r: data.r })));
}
function buildLine(spinner, duration, index, total) {
    const data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = `${duration}ms`;
    return (h("svg", { viewBox: "0 0 64 64", style: data.style }, h("line", { transform: "translate(32,32)", y1: data.y1, y2: data.y2 })));
}

export { Spinner as ion_spinner };
