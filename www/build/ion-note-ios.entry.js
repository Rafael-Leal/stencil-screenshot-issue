import { r as registerInstance, c as getIonMode, h, H as Host } from './chunk-8bad6bbf.js';
import { c as createColorClasses } from './chunk-abd3a723.js';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
class Note {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    hostData() {
        const mode = getIonMode(this);
        return {
            class: Object.assign({}, createColorClasses(this.color), { [`${mode}`]: true })
        };
    }
    __stencil_render() {
        return h("slot", null);
    }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ":host {\n  /**\n   * \@prop --color: Color of the note\n   */\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-base);\n}\n\n:host {\n  --color: var(--ion-color-step-350, #a6a6a6);\n}"; }
}

export { Note as ion_note };
