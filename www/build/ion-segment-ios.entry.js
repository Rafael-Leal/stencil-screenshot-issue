import { r as registerInstance, d as createEvent, c as getIonMode, f as getElement, h, H as Host } from './chunk-8bad6bbf.js';
import { c as createColorClasses } from './chunk-abd3a723.js';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
class Segment {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the user cannot interact with the segment.
         */
        this.disabled = false;
        /**
         * If `true`, the segment buttons will overflow and the user can swipe to see them.
         */
        this.scrollable = false;
        this.ionChange = createEvent(this, "ionChange", 7);
        this.ionStyle = createEvent(this, "ionStyle", 7);
    }
    valueChanged(value) {
        this.updateButtons();
        this.ionChange.emit({ value });
    }
    segmentClick(ev) {
        const selectedButton = ev.target;
        this.value = selectedButton.value;
    }
    componentWillLoad() {
        this.emitStyle();
    }
    componentDidLoad() {
        if (this.value == null) {
            const checked = this.getButtons().find(b => b.checked);
            if (checked) {
                this.value = checked.value;
            }
        }
        this.updateButtons();
    }
    emitStyle() {
        this.ionStyle.emit({
            'segment': true
        });
    }
    updateButtons() {
        const value = this.value;
        for (const button of this.getButtons()) {
            button.checked = (button.value === value);
        }
    }
    getButtons() {
        return Array.from(this.el.querySelectorAll('ion-segment-button'));
    }
    hostData() {
        const mode = getIonMode(this);
        return {
            class: Object.assign({}, createColorClasses(this.color), { [`${mode}`]: true, 'segment-disabled': this.disabled, 'segment-scrollable': this.scrollable })
        };
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
    render() { return h(Host, this.hostData()); }
    static get style() { return ".sc-ion-segment-ios-h {\n  --indicator-color-checked: initial;\n  --ripple-color: initial;\n  --color-activated: initial;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  font-family: var(--ion-font-family, inherit);\n  text-align: center;\n}\n\n.segment-disabled.sc-ion-segment-ios-h, .sc-ion-segment-ios-s > .segment-button-disabled {\n  pointer-events: none;\n}\n\n.segment-scrollable.sc-ion-segment-ios-h {\n  -ms-flex-pack: start;\n  justify-content: start;\n  width: auto;\n  overflow-x: scroll;\n}\n\n.segment-scrollable.sc-ion-segment-ios-h::-webkit-scrollbar {\n  display: none;\n}\n\n.sc-ion-segment-ios-h {\n  --background: transparent;\n  --background-hover: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);\n  --background-activated: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.16);\n  --background-checked: var(--ion-color-primary, #3880ff);\n  --color: var(--ion-color-primary, #3880ff);\n  --color-checked: var(--ion-color-primary-contrast, #fff);\n  --color-disabled: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.3);\n  --color-checked-disabled: rgba(var(--ion-color-primary-contrast-rgb, 255, 255, 255), 0.3);\n  --border-color: var(--ion-color-primary, #3880ff);\n  --indicator-color: transparent;\n}\n\n.segment-disabled.sc-ion-segment-ios-h {\n  opacity: 0.3;\n}\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button {\n  --border-color: var(--ion-color-base);\n  --background-hover: rgba(var(--ion-color-base-rgb), 0.04);\n  background: transparent;\n  color: var(--ion-color-base);\n}\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .activated {\n  background: rgba(var(--ion-color-base-rgb), 0.16);\n  color: var(--ion-color-base);\n}\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked.activated, .sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-disabled {\n  color: rgba(var(--ion-color-base-rgb), 0.3);\n}\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked.segment-button-disabled {\n  color: rgba(var(--ion-color-contrast-rgb), 0.3);\n}\n\n.sc-ion-segment-ios-hion-toolbar.sc-ion-segment-ios-s > ion-segment-button, ion-toolbar .sc-ion-segment-ios-h.sc-ion-segment-ios-s > ion-segment-button {\n  max-width: 100px;\n  font-size: 12px;\n  line-height: 22px;\n}\n\n.sc-ion-segment-ios-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-ios-s > ion-segment-button, ion-toolbar:not(.ion-color) .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button {\n  border-color: var(--ion-toolbar-color-checked, var(--border-color));\n  color: var(--ion-toolbar-color-unchecked, var(--color));\n}\n\n.sc-ion-segment-ios-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked, ion-toolbar:not(.ion-color) .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked {\n  background: var(--ion-toolbar-color-checked, var(--background-checked));\n  color: var(--ion-toolbar-background, var(--color-checked));\n}\n\n.sc-ion-segment-ios-hion-toolbar.ion-color:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button, ion-toolbar.ion-color .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button {\n  --color: var(--ion-color-contrast);\n  --color-disabled: rgba(var(--ion-color-contrast-rgb), 0.3);\n  --color-checked: var(--ion-color-base);\n  --color-checked-disabled: rgba(var(--ion-color-contrast-rgb), 0.3);\n  --background-hover: rgba(var(--ion-color-contrast-rgb), 0.1);\n  --background-activated: rgba(var(--ion-color-contrast-rgb), 0.16);\n  --background-checked: var(--ion-color-contrast);\n  --border-color: var(--ion-color-contrast);\n}"; }
}

export { Segment as ion_segment };
