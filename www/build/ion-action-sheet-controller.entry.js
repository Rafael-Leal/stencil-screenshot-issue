import { r as registerInstance, e as getContext } from './chunk-8bad6bbf.js';
import { c as createOverlay, a as dismissOverlay, g as getOverlay } from './chunk-dffa9f01.js';

class ActionSheetController {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.doc = getContext(this, "document");
    }
    /**
     * Create an action sheet overlay with action sheet options.
     *
     * @param options The options to use to create the action sheet.
     */
    create(options) {
        return createOverlay('ion-action-sheet', options);
    }
    /**
     * Dismiss the open action sheet overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the action sheet.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the action sheet.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the action sheet to dismiss. If an id is not provided, it will dismiss the most recently opened action sheet.
     */
    dismiss(data, role, id) {
        return dismissOverlay(document, data, role, 'ion-action-sheet', id);
    }
    /**
     * Get the most recently opened action sheet overlay.
     */
    async getTop() {
        return getOverlay(document, 'ion-action-sheet');
    }
}

export { ActionSheetController as ion_action_sheet_controller };
