import { r as registerInstance, c as getIonMode, h, H as Host } from './chunk-8bad6bbf.js';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
class Header {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the header will be translucent.
         * Note: In order to scroll content behind the header, the `fullscreen`
         * attribute needs to be set on the content.
         */
        this.translucent = false;
    }
    hostData() {
        const mode = getIonMode(this);
        return {
            class: {
                [`${mode}`]: true,
                // Used internally for styling
                [`header-${mode}`]: true,
                [`header-translucent`]: this.translucent,
                [`header-translucent-${mode}`]: this.translucent,
            }
        };
    }
    render() { return h(Host, this.hostData()); }
    static get style() { return "ion-header {\n  display: block;\n  position: relative;\n  -ms-flex-order: -1;\n  order: -1;\n  width: 100%;\n  z-index: 10;\n}\n\nion-header ion-toolbar:first-child {\n  padding-top: var(--ion-safe-area-top, 0);\n}\n\n.header-md::after {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n[dir=rtl] .header-md::after, :host-context([dir=rtl]) .header-md::after {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n[dir=rtl] .header-md::after, :host-context([dir=rtl]) .header-md::after {\n  background-position: right 0 top -2px;\n}\n\n.header-md[no-border]::after {\n  display: none;\n}"; }
}

export { Header as ion_header };
