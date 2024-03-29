import { r as registerInstance, c as getIonMode, h, H as Host } from './chunk-8bad6bbf.js';

class Avatar {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    hostData() {
        const mode = getIonMode(this);
        return {
            class: {
                [`${mode}`]: true,
            }
        };
    }
    __stencil_render() {
        return h("slot", null);
    }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ":host {\n  /**\n   * \@prop --border-radius: Border radius of the avatar and inner image\n   */\n  border-radius: var(--border-radius);\n  display: block;\n}\n\n::slotted(ion-img),\n::slotted(img) {\n  border-radius: var(--border-radius);\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  overflow: hidden;\n}\n\n:host {\n  --border-radius: 50%;\n  width: 48px;\n  height: 48px;\n}"; }
}

export { Avatar as ion_avatar };
