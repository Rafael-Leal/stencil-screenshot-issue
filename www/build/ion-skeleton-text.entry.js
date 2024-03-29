import { r as registerInstance, e as getContext, h, c as getIonMode, f as getElement, H as Host } from './chunk-8bad6bbf.js';
import { h as hostContext } from './chunk-abd3a723.js';

class SkeletonText {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the skeleton text will animate.
         */
        this.animated = false;
        this.config = getContext(this, "config");
    }
    calculateWidth() {
        // If width was passed in to the property use that first
        if (this.width !== undefined) {
            return {
                style: {
                    width: this.width
                }
            };
        }
        return;
    }
    __stencil_render() {
        return (h("span", null, "\u00A0"));
    }
    hostData() {
        const animated = this.animated && this.config.getBoolean('animated', true);
        const inMedia = hostContext('ion-avatar', this.el) || hostContext('ion-thumbnail', this.el);
        const mode = getIonMode(this);
        return Object.assign({ class: {
                [`${mode}`]: true,
                'skeleton-text-animated': animated,
                'in-media': inMedia
            } }, this.calculateWidth());
    }
    get el() { return getElement(this); }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the skeleton text\n   * \@prop --background-rgb: Background of the skeleton text in rgb format\n   *\n   * \@prop --border-radius: Border radius of the skeleton text\n   */\n  --background: rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065);\n  border-radius: var(--border-radius, inherit);\n  display: block;\n  width: 100%;\n  height: inherit;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  background: var(--background);\n  line-height: 10px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  pointer-events: none;\n}\n\nspan {\n  display: inline-block;\n}\n\n:host(.in-media) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 100%;\n}\n\n:host(.skeleton-text-animated) {\n  position: relative;\n  background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065)), color-stop(18%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.135)), color-stop(33%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065)));\n  background: linear-gradient(to right, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 8%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.135) 18%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 33%);\n  background-size: 800px 104px;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: shimmer;\n  animation-name: shimmer;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n}\n\n/* stylelint-disable property-blacklist */\n\@-webkit-keyframes shimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\@keyframes shimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n/* stylelint-enable property-blacklist */"; }
}

export { SkeletonText as ion_skeleton_text };
