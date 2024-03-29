import { r as registerInstance, c as getIonMode, h, H as Host } from './chunk-8bad6bbf.js';
import { c as createColorClasses } from './chunk-abd3a723.js';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
class Chip {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Display an outline style button.
         */
        this.outline = false;
    }
    hostData() {
        const mode = getIonMode(this);
        return {
            class: Object.assign({}, createColorClasses(this.color), { [`${mode}`]: true, 'chip-outline': this.outline, 'ion-activatable': true })
        };
    }
    __stencil_render() {
        const mode = getIonMode(this);
        return [
            h("slot", null),
            mode === 'md' ? h("ion-ripple-effect", null) : null
        ];
    }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the chip\n   * \@prop --color: Color of the chip\n   */\n  --background: rgba(0, 0, 0, .12);\n  --color: rgba(0, 0, 0, .87);\n  border-radius: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 4px;\n  margin-right: 4px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 32px;\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n  overflow: hidden;\n  vertical-align: middle;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 4px;\n    margin-inline-start: 4px;\n    -webkit-margin-end: 4px;\n    margin-inline-end: 4px;\n  }\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 12px;\n    padding-inline-start: 12px;\n    -webkit-padding-end: 12px;\n    padding-inline-end: 12px;\n  }\n}\n\n:host(.ion-color) {\n  background: rgba(var(--ion-color-base-rgb), 0.08);\n  color: var(--ion-color-shade);\n}\n\n:host(.ion-color:focus) {\n  background: rgba(var(--ion-color-base-rgb), 0.12);\n}\n\n:host(.ion-color.activated) {\n  background: rgba(var(--ion-color-base-rgb), 0.16);\n}\n\n:host(.chip-outline) {\n  border-width: 1px;\n  border-style: solid;\n}\n\n:host(.chip-outline) {\n  border-color: rgba(0, 0, 0, 0.32);\n  background: transparent;\n}\n\n:host(.chip-outline.ion-color) {\n  border-color: rgba(var(--ion-color-base-rgb), 0.32);\n}\n\n:host(.chip-outline:not(.ion-color):focus) {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n:host(.chip-outline.activated:not(.ion-color)) {\n  background: rgba(0, 0, 0, 0.08);\n}\n\n::slotted(ion-icon) {\n  font-size: 20px;\n}\n\n:host(:not(.ion-color)) ::slotted(ion-icon) {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n::slotted(ion-icon:first-child) {\n  margin-left: -4px;\n  margin-right: 8px;\n  margin-top: -4px;\n  margin-bottom: -4px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ::slotted(ion-icon:first-child) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: -4px;\n    margin-inline-start: -4px;\n    -webkit-margin-end: 8px;\n    margin-inline-end: 8px;\n  }\n}\n\n::slotted(ion-icon:last-child) {\n  margin-left: 8px;\n  margin-right: -4px;\n  margin-top: -4px;\n  margin-bottom: -4px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ::slotted(ion-icon:last-child) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 8px;\n    margin-inline-start: 8px;\n    -webkit-margin-end: -4px;\n    margin-inline-end: -4px;\n  }\n}\n\n::slotted(ion-avatar) {\n  width: 24px;\n  height: 24px;\n}\n\n::slotted(ion-avatar:first-child) {\n  margin-left: -8px;\n  margin-right: 8px;\n  margin-top: -4px;\n  margin-bottom: -4px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ::slotted(ion-avatar:first-child) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: -8px;\n    margin-inline-start: -8px;\n    -webkit-margin-end: 8px;\n    margin-inline-end: 8px;\n  }\n}\n\n::slotted(ion-avatar:last-child) {\n  margin-left: 8px;\n  margin-right: -8px;\n  margin-top: -4px;\n  margin-bottom: -4px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ::slotted(ion-avatar:last-child) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 8px;\n    margin-inline-start: 8px;\n    -webkit-margin-end: -8px;\n    margin-inline-end: -8px;\n  }\n}\n\n:host(:focus) {\n  outline: none;\n}\n\n:host(:focus) {\n  --background: rgba(0, 0, 0, .16);\n}\n\n:host(.activated) {\n  --background: rgba(0, 0, 0, .20);\n}\n\n\@media (any-hover: hover) {\n  :host(:hover) {\n    --background: rgba(0, 0, 0, .16);\n  }\n\n  :host(.ion-color:hover) {\n    background: rgba(var(--ion-color-base-rgb), 0.12);\n  }\n\n  :host(.chip-outline:not(.ion-color):hover) {\n    background: rgba(0, 0, 0, 0.04);\n  }\n}"; }
}

export { Chip as ion_chip };
