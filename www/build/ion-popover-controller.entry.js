import { r as registerInstance, e as getContext } from './chunk-8bad6bbf.js';
import { c as createOverlay, a as dismissOverlay, g as getOverlay } from './chunk-dffa9f01.js';

class PopoverController {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.doc = getContext(this, "document");
    }
    /**
     * Create a popover overlay with popover options.
     *
     * @param options The options to use to create the popover.
     */
    create(options) {
        return createOverlay('ion-popover', options);
    }
    /**
     * Dismiss the open popover overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the popover.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the popover.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the popover to dismiss. If an id is not provided, it will dismiss the most recently opened popover.
     */
    dismiss(data, role, id) {
        return dismissOverlay(document, data, role, 'ion-popover', id);
    }
    /**
     * Get the most recently opened popover overlay.
     */
    async getTop() {
        return getOverlay(document, 'ion-popover');
    }
}

export { PopoverController as ion_popover_controller };
