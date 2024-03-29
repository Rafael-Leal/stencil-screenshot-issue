import { r as registerInstance, d as createEvent, c as getIonMode, h, f as getElement, H as Host } from './chunk-8bad6bbf.js';
import { c as createColorClasses } from './chunk-abd3a723.js';
import { d as debounceEvent, f as findItemLabel } from './chunk-3702a6ef.js';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
class Input {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inputId = `ion-input-${inputIds++}`;
        this.didBlurAfterEdit = false;
        this.hasFocus = false;
        /**
         * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
         */
        this.autocapitalize = 'off';
        /**
         * Indicates whether the value of the control can be automatically completed by the browser.
         */
        this.autocomplete = 'off';
        /**
         * Whether auto correction should be enabled when the user is entering/editing the text value.
         */
        this.autocorrect = 'off';
        /**
         * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        this.autofocus = false;
        /**
         * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        this.clearInput = false;
        /**
         * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
         */
        this.debounce = 0;
        /**
         * If `true`, the user cannot interact with the input.
         */
        this.disabled = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the user cannot modify the value.
         */
        this.readonly = false;
        /**
         * If `true`, the user must fill in a value before submitting a form.
         */
        this.required = false;
        /**
         * If `true`, the element will have its spelling and grammar checked.
         */
        this.spellcheck = false;
        /**
         * The type of control to display. The default type is text.
         */
        this.type = 'text';
        /**
         * The value of the input.
         */
        this.value = '';
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.ionInput.emit(ev);
        };
        this.onBlur = () => {
            this.hasFocus = false;
            this.focusChanged();
            this.emitStyle();
            this.ionBlur.emit();
        };
        this.onFocus = () => {
            this.hasFocus = true;
            this.focusChanged();
            this.emitStyle();
            this.ionFocus.emit();
        };
        this.onKeydown = () => {
            if (this.clearOnEdit) {
                // Did the input value change after it was blurred and edited?
                if (this.didBlurAfterEdit && this.hasValue()) {
                    // Clear the input
                    this.clearTextInput();
                }
                // Reset the flag
                this.didBlurAfterEdit = false;
            }
        };
        this.clearTextInput = (ev) => {
            if (this.clearInput && !this.readonly && !this.disabled && ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            this.value = '';
            /**
             * This is needed for clearOnEdit
             * Otherwise the value will not be cleared
             * if user is inside the input
             */
            if (this.nativeInput) {
                this.nativeInput.value = '';
            }
        };
        this.ionInput = createEvent(this, "ionInput", 7);
        this.ionChange = createEvent(this, "ionChange", 7);
        this.ionBlur = createEvent(this, "ionBlur", 7);
        this.ionFocus = createEvent(this, "ionFocus", 7);
        this.ionInputDidLoad = createEvent(this, "ionInputDidLoad", 7);
        this.ionInputDidUnload = createEvent(this, "ionInputDidUnload", 7);
        this.ionStyle = createEvent(this, "ionStyle", 7);
    }
    debounceChanged() {
        this.ionChange = debounceEvent(this.ionChange, this.debounce);
    }
    disabledChanged() {
        this.emitStyle();
    }
    /**
     * Update the native input element when the value changes
     */
    valueChanged() {
        this.emitStyle();
        this.ionChange.emit({ value: this.value });
    }
    componentWillLoad() {
        // By default, password inputs clear after focus when they have content
        if (this.clearOnEdit === undefined && this.type === 'password') {
            this.clearOnEdit = true;
        }
        this.emitStyle();
    }
    componentDidLoad() {
        this.debounceChanged();
        this.ionInputDidLoad.emit();
    }
    componentDidUnload() {
        this.ionInputDidUnload.emit();
    }
    /**
     * Sets focus on the specified `ion-input`. Use this method instead of the global
     * `input.focus()`.
     */
    async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }
    /**
     * Returns the native `<input>` element used under the hood.
     */
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    getValue() {
        return this.value || '';
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive': true,
            'input': true,
            'has-placeholder': this.placeholder != null,
            'has-value': this.hasValue(),
            'has-focus': this.hasFocus,
            'interactive-disabled': this.disabled,
        });
    }
    focusChanged() {
        // If clearOnEdit is enabled and the input blurred but has a value, set a flag
        if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
    }
    hasValue() {
        return this.getValue().length > 0;
    }
    hostData() {
        const mode = getIonMode(this);
        return {
            'aria-disabled': this.disabled ? 'true' : null,
            class: Object.assign({}, createColorClasses(this.color), { [`${mode}`]: true, 'has-value': this.hasValue(), 'has-focus': this.hasFocus })
        };
    }
    __stencil_render() {
        const value = this.getValue();
        const labelId = this.inputId + '-lbl';
        const label = findItemLabel(this.el);
        if (label) {
            label.id = labelId;
        }
        return [
            h("input", { class: "native-input", ref: input => this.nativeInput = input, "aria-labelledby": labelId, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown }),
            (this.clearInput && !this.readonly && !this.disabled) && h("button", { type: "button", class: "input-clear-icon", tabindex: "-1", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput })
        ];
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "debounce": ["debounceChanged"],
        "disabled": ["disabledChanged"],
        "value": ["valueChanged"]
    }; }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ".sc-ion-input-ios-h {\n  \n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: initial;\n  --placeholder-opacity: .5;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --background: transparent;\n  --color: initial;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  \n  padding: 0 !important;\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  z-index: 2;\n}\n\nion-item.sc-ion-input-ios-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-ios-h {\n  --padding-start: 0;\n}\n\n.ion-color.sc-ion-input-ios-h {\n  color: var(--ion-color-base);\n}\n\n.native-input.sc-ion-input-ios {\n  border-radius: var(--border-radius);\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: inline-block;\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  border: 0;\n  outline: none;\n  background: transparent;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .native-input.sc-ion-input-ios {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n.native-input.sc-ion-input-ios::-webkit-input-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.native-input.sc-ion-input-ios::-moz-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.native-input.sc-ion-input-ios:-ms-input-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.native-input.sc-ion-input-ios::-ms-input-placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.native-input.sc-ion-input-ios::placeholder {\n  color: var(--placeholder-color);\n  font-family: inherit;\n  font-style: var(--placeholder-font-style);\n  font-weight: var(--placeholder-font-weight);\n  opacity: var(--placeholder-opacity);\n}\n.native-input.sc-ion-input-ios:-webkit-autofill {\n  background-color: transparent;\n}\n.native-input.sc-ion-input-ios:invalid {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.native-input.sc-ion-input-ios::-ms-clear {\n  display: none;\n}\n\n.native-input[disabled].sc-ion-input-ios {\n  opacity: 0.4;\n}\n\n.cloned-input.sc-ion-input-ios {\n  left: 0;\n  top: 0;\n  position: absolute;\n  pointer-events: none;\n}\n[dir=rtl].sc-ion-input-ios .cloned-input.sc-ion-input-ios, [dir=rtl].sc-ion-input-ios-h .cloned-input.sc-ion-input-ios, [dir=rtl] .sc-ion-input-ios-h .cloned-input.sc-ion-input-ios {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n.input-clear-icon.sc-ion-input-ios {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  background-position: center;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  visibility: hidden;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.has-focus.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios {\n  visibility: visible;\n}\n\n.has-focus.sc-ion-input-ios-h {\n  pointer-events: none;\n}\n\n.has-focus.sc-ion-input-ios-h input.sc-ion-input-ios, .has-focus.sc-ion-input-ios-h a.sc-ion-input-ios, .has-focus.sc-ion-input-ios-h button.sc-ion-input-ios {\n  pointer-events: auto;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 10px;\n  --padding-end: 8px;\n  --padding-bottom: 10px;\n  --padding-start: 0;\n  font-size: inherit;\n}\n\n.item-label-stacked.sc-ion-input-ios-h, .item-label-stacked .sc-ion-input-ios-h, .item-label-floating.sc-ion-input-ios-h, .item-label-floating .sc-ion-input-ios-h {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 0px;\n}\n\n.input-clear-icon.sc-ion-input-ios {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%20512%20512\'><path%20fill=\'var(--ion-color-step-600,%20%23666666)\'%20d=\'M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z\'/></svg>\");\n  width: 30px;\n  height: 30px;\n  background-size: 18px;\n}"; }
}
let inputIds = 0;

export { Input as ion_input };
