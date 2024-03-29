import { r as registerInstance, d as createEvent, e as getContext, c as getIonMode, f as getElement, h, H as Host } from './chunk-8bad6bbf.js';
import { i as isEndSide } from './chunk-3702a6ef.js';

const SWIPE_MARGIN = 30;
const ELASTIC_FACTOR = 0.55;
let openSlidingItem;
class ItemSliding {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.item = null;
        this.openAmount = 0;
        this.initialOpenAmount = 0;
        this.optsWidthRightSide = 0;
        this.optsWidthLeftSide = 0;
        this.sides = 0 /* None */;
        this.optsDirty = true;
        this.state = 2 /* Disabled */;
        /**
         * If `true`, the user cannot interact with the sliding item.
         */
        this.disabled = false;
        this.ionDrag = createEvent(this, "ionDrag", 7);
        this.queue = getContext(this, "queue");
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    async componentDidLoad() {
        this.item = this.el.querySelector('ion-item');
        await this.updateOptions();
        this.gesture = (await __sc_import_app('./index-7c257cac.js')).createGesture({
            el: this.el,
            gestureName: 'item-swipe',
            gesturePriority: 100,
            threshold: 5,
            canStart: () => this.canStart(),
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.disabledChanged();
    }
    componentDidUnload() {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
        this.item = null;
        this.leftOptions = this.rightOptions = undefined;
        if (openSlidingItem === this.el) {
            openSlidingItem = undefined;
        }
    }
    /**
     * Get the amount the item is open in pixels.
     */
    getOpenAmount() {
        return Promise.resolve(this.openAmount);
    }
    /**
     * Get the ratio of the open amount of the item compared to the width of the options.
     * If the number returned is positive, then the options on the right side are open.
     * If the number returned is negative, then the options on the left side are open.
     * If the absolute value of the number is greater than 1, the item is open more than
     * the width of the options.
     */
    getSlidingRatio() {
        return Promise.resolve(this.getSlidingRatioSync());
    }
    /**
     * Open the sliding item.
     *
     * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
     */
    async open(side) {
        if (this.item === null) {
            return;
        }
        const optionsToOpen = this.getOptions(side);
        if (!optionsToOpen) {
            return;
        }
        /**
         * If side is not set, we need to infer the side
         * so we know which direction to move the options
         */
        if (side === undefined) {
            side = (optionsToOpen === this.leftOptions) ? 'start' : 'end';
        }
        // In RTL we want to switch the sides
        side = isEndSide(window, side) ? 'end' : 'start';
        const isStartOpen = this.openAmount < 0;
        const isEndOpen = this.openAmount > 0;
        /**
         * If a side is open and a user tries to
         * re-open the same side, we should not do anything
         */
        if (isStartOpen && optionsToOpen === this.leftOptions) {
            return;
        }
        if (isEndOpen && optionsToOpen === this.rightOptions) {
            return;
        }
        this.closeOpened();
        this.state = 4 /* Enabled */;
        requestAnimationFrame(() => {
            this.calculateOptsWidth();
            const width = (side === 'end') ? this.optsWidthRightSide : -this.optsWidthLeftSide;
            openSlidingItem = this.el;
            this.setOpenAmount(width, false);
            this.state = (side === 'end') ? 8 /* End */ : 16 /* Start */;
        });
    }
    /**
     * Close the sliding item. Items can also be closed from the [List](../../list/List).
     */
    async close() {
        this.setOpenAmount(0, true);
    }
    /**
     * Close all of the sliding items in the list. Items can also be closed from the [List](../../list/List).
     */
    async closeOpened() {
        if (openSlidingItem !== undefined) {
            openSlidingItem.close();
            openSlidingItem = undefined;
            return true;
        }
        return false;
    }
    /**
     * Given an optional side, return the ion-item-options element.
     *
     * @param side This side of the options to get. If a side is not provided it will
     * return the first one available.
     */
    getOptions(side) {
        if (side === undefined) {
            return this.leftOptions || this.rightOptions;
        }
        else if (side === 'start') {
            return this.leftOptions;
        }
        else {
            return this.rightOptions;
        }
    }
    async updateOptions() {
        const options = this.el.querySelectorAll('ion-item-options');
        let sides = 0;
        // Reset left and right options in case they were removed
        this.leftOptions = this.rightOptions = undefined;
        for (let i = 0; i < options.length; i++) {
            const option = await options.item(i).componentOnReady();
            const side = isEndSide(window, option.side) ? 'end' : 'start';
            if (side === 'start') {
                this.leftOptions = option;
                sides |= 1 /* Start */;
            }
            else {
                this.rightOptions = option;
                sides |= 2 /* End */;
            }
        }
        this.optsDirty = true;
        this.sides = sides;
    }
    canStart() {
        const selected = openSlidingItem;
        if (selected && selected !== this.el) {
            this.closeOpened();
            return false;
        }
        return !!(this.rightOptions || this.leftOptions);
    }
    onStart() {
        openSlidingItem = this.el;
        if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (this.openAmount === 0) {
            this.optsDirty = true;
            this.state = 4 /* Enabled */;
        }
        this.initialOpenAmount = this.openAmount;
        if (this.item) {
            this.item.style.transition = 'none';
        }
    }
    onMove(gesture) {
        if (this.optsDirty) {
            this.calculateOptsWidth();
        }
        let openAmount = this.initialOpenAmount - gesture.deltaX;
        switch (this.sides) {
            case 2 /* End */:
                openAmount = Math.max(0, openAmount);
                break;
            case 1 /* Start */:
                openAmount = Math.min(0, openAmount);
                break;
            case 3 /* Both */: break;
            case 0 /* None */: return;
            default:
                console.warn('invalid ItemSideFlags value', this.sides);
                break;
        }
        let optsWidth;
        if (openAmount > this.optsWidthRightSide) {
            optsWidth = this.optsWidthRightSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        else if (openAmount < -this.optsWidthLeftSide) {
            optsWidth = -this.optsWidthLeftSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        this.setOpenAmount(openAmount, false);
    }
    onEnd(gesture) {
        const velocity = gesture.velocityX;
        let restingPoint = (this.openAmount > 0)
            ? this.optsWidthRightSide
            : -this.optsWidthLeftSide;
        // Check if the drag didn't clear the buttons mid-point
        // and we aren't moving fast enough to swipe open
        const isResetDirection = (this.openAmount > 0) === !(velocity < 0);
        const isMovingFast = Math.abs(velocity) > 0.3;
        const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
        if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
            restingPoint = 0;
        }
        const state = this.state;
        this.setOpenAmount(restingPoint, true);
        if ((state & 32 /* SwipeEnd */) !== 0 && this.rightOptions) {
            this.rightOptions.fireSwipeEvent();
        }
        else if ((state & 64 /* SwipeStart */) !== 0 && this.leftOptions) {
            this.leftOptions.fireSwipeEvent();
        }
    }
    calculateOptsWidth() {
        this.optsWidthRightSide = 0;
        if (this.rightOptions) {
            this.rightOptions.style.display = 'flex';
            this.optsWidthRightSide = this.rightOptions.offsetWidth;
            this.rightOptions.style.display = '';
        }
        this.optsWidthLeftSide = 0;
        if (this.leftOptions) {
            this.leftOptions.style.display = 'flex';
            this.optsWidthLeftSide = this.leftOptions.offsetWidth;
            this.leftOptions.style.display = '';
        }
        this.optsDirty = false;
    }
    setOpenAmount(openAmount, isFinal) {
        if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (!this.item) {
            return;
        }
        const style = this.item.style;
        this.openAmount = openAmount;
        if (isFinal) {
            style.transition = '';
        }
        if (openAmount > 0) {
            this.state = (openAmount >= (this.optsWidthRightSide + SWIPE_MARGIN))
                ? 8 /* End */ | 32 /* SwipeEnd */
                : 8 /* End */;
        }
        else if (openAmount < 0) {
            this.state = (openAmount <= (-this.optsWidthLeftSide - SWIPE_MARGIN))
                ? 16 /* Start */ | 64 /* SwipeStart */
                : 16 /* Start */;
        }
        else {
            this.tmr = setTimeout(() => {
                this.state = 2 /* Disabled */;
                this.tmr = undefined;
            }, 600);
            openSlidingItem = undefined;
            style.transform = '';
            return;
        }
        style.transform = `translate3d(${-openAmount}px,0,0)`;
        this.ionDrag.emit({
            amount: openAmount,
            ratio: this.getSlidingRatioSync()
        });
    }
    getSlidingRatioSync() {
        if (this.openAmount > 0) {
            return this.openAmount / this.optsWidthRightSide;
        }
        else if (this.openAmount < 0) {
            return this.openAmount / this.optsWidthLeftSide;
        }
        else {
            return 0;
        }
    }
    hostData() {
        const mode = getIonMode(this);
        return {
            class: {
                [`${mode}`]: true,
                'item-sliding-active-slide': (this.state !== 2 /* Disabled */),
                'item-sliding-active-options-end': (this.state & 8 /* End */) !== 0,
                'item-sliding-active-options-start': (this.state & 16 /* Start */) !== 0,
                'item-sliding-active-swipe-end': (this.state & 32 /* SwipeEnd */) !== 0,
                'item-sliding-active-swipe-start': (this.state & 64 /* SwipeStart */) !== 0
            }
        };
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"]
    }; }
    render() { return h(Host, this.hostData()); }
    static get style() { return "ion-item-sliding {\n  display: block;\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nion-item-sliding .item {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.item-sliding-active-slide .item {\n  position: relative;\n  -webkit-transition: -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  opacity: 1;\n  z-index: 2;\n  pointer-events: none;\n  will-change: transform;\n}\n\n.item-sliding-active-swipe-end .item-options-end .item-option-expandable {\n  /* stylelint-disable-next-line property-blacklist */\n  padding-left: 100%;\n  -ms-flex-order: 1;\n  order: 1;\n  -webkit-transition-duration: 0.6s;\n  transition-duration: 0.6s;\n  -webkit-transition-property: padding-left;\n  transition-property: padding-left;\n}\n[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable, :host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable {\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.item-sliding-active-swipe-start .item-options-start .item-option-expandable {\n  /* stylelint-disable-next-line property-blacklist */\n  padding-right: 100%;\n  -ms-flex-order: -1;\n  order: -1;\n  -webkit-transition-duration: 0.6s;\n  transition-duration: 0.6s;\n  -webkit-transition-property: padding-right;\n  transition-property: padding-right;\n}\n[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable, :host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable {\n  -ms-flex-order: 1;\n  order: 1;\n}"; }
}
function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
    // The logic required to know when the sliding item should close (openAmount=0)
    // depends on three booleans (isResetDirection, isMovingFast, isOnResetZone)
    // and it ended up being too complicated to be written manually without errors
    // so the truth table is attached below: (0=false, 1=true)
    // isResetDirection | isMovingFast | isOnResetZone || shouldClose
    //         0        |       0      |       0       ||    0
    //         0        |       0      |       1       ||    1
    //         0        |       1      |       0       ||    0
    //         0        |       1      |       1       ||    0
    //         1        |       0      |       0       ||    0
    //         1        |       0      |       1       ||    1
    //         1        |       1      |       0       ||    1
    //         1        |       1      |       1       ||    1
    // The resulting expression was generated by resolving the K-map (Karnaugh map):
    return (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
}

export { ItemSliding as ion_item_sliding };
