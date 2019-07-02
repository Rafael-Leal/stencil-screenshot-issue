System.register(['./chunk-a61457cf.system.js', './chunk-f43705e2.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, h, getElement, Host, createColorClasses;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.c;
                h = module.h;
                getElement = module.f;
                Host = module.H;
            }, function (module) {
                createColorClasses = module.c;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             *
             * @slot - Content is placed between the named slots if provided without a slot.
             * @slot start - Content is placed to the left of the divider text in LTR, and to the right in RTL.
             * @slot end - Content is placed to the right of the divider text in LTR, and to the left in RTL.
             */
            var ItemDivider = /** @class */ (function () {
                function ItemDivider(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * When it's set to `true`, the item-divider will stay visible when it reaches the top
                     * of the viewport until the next `ion-item-divider` replaces it.
                     *
                     * This feature relies in `position:sticky`:
                     * https://caniuse.com/#feat=css-sticky
                     */
                    this.sticky = false;
                }
                ItemDivider.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["" + mode] = true, _a['item-divider-sticky'] = this.sticky, _a['item'] = true, _a))
                    };
                };
                ItemDivider.prototype.__stencil_render = function () {
                    return [
                        h("slot", { name: "start" }),
                        h("div", { class: "item-divider-inner" }, h("div", { class: "item-divider-wrapper" }, h("slot", null)), h("slot", { name: "end" }))
                    ];
                };
                Object.defineProperty(ItemDivider.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                ItemDivider.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(ItemDivider, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --background: Background of the item divider\n   *\n   * \@prop --color: Color of the item divider\n   *\n   * \@prop --padding-top: Top padding of the item divider\n   * \@prop --padding-end: End padding of the item divider\n   * \@prop --padding-bottom: Bottom padding of the item divider\n   * \@prop --padding-start: Start padding of the item divider\n   *\n   * \@prop --inner-padding-top: Top inner padding of the item divider\n   * \@prop --inner-padding-end: End inner padding of the item divider\n   * \@prop --inner-padding-bottom: Bottom inner padding of the item divider\n   * \@prop --inner-padding-start: Start inner padding of the item divider\n   */\n  --padding-top: 0px;\n  --padding-end: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --inner-padding-top: 0px;\n  --inner-padding-end: 0px;\n  --inner-padding-bottom: 0px;\n  --inner-padding-start: 0px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 30px;\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  overflow: hidden;\n  z-index: 100;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\n    padding-inline-start: calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n:host(.ion-color) {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n:host(.item-divider-sticky) {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.item-divider-inner {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: var(--inner-padding-start);\n  padding-right: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n  padding-top: var(--inner-padding-top);\n  padding-bottom: var(--inner-padding-bottom);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  min-height: inherit;\n  border: 0;\n  overflow: hidden;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .item-divider-inner {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--inner-padding-start);\n    padding-inline-start: var(--inner-padding-start);\n    -webkit-padding-end: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n    padding-inline-end: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n  }\n}\n\n.item-divider-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n:host {\n  --background: var(--ion-color-step-50, #f2f2f2);\n  --color: var(--ion-color-step-850, #262626);\n  --padding-start: 16px;\n  --inner-padding-end: 8px;\n  border-radius: 0;\n  position: relative;\n  font-size: 17px;\n}\n\n:host([slot=start]) {\n  margin-left: 0;\n  margin-right: 16px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host([slot=start]) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 0;\n    margin-inline-start: 0;\n    -webkit-margin-end: 16px;\n    margin-inline-end: 16px;\n  }\n}\n\n:host([slot=end]) {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host([slot=end]) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 8px;\n    margin-inline-start: 8px;\n    -webkit-margin-end: 8px;\n    margin-inline-end: 8px;\n  }\n}\n\n::slotted(ion-icon[slot=start]),\n::slotted(ion-icon[slot=end]) {\n  margin-left: 0;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ::slotted(ion-icon[slot=start]),\n::slotted(ion-icon[slot=end]) {\n    margin-left: unset;\n    -webkit-margin-start: 0;\n    margin-inline-start: 0;\n  }\n}\n\n::slotted(ion-label) {\n  margin-left: 0;\n  margin-right: 8px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ::slotted(ion-label) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 0;\n    margin-inline-start: 0;\n    -webkit-margin-end: 8px;\n    margin-inline-end: 8px;\n  }\n}\n\n::slotted(h1) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 24px;\n  font-weight: normal;\n}\n\n::slotted(h2) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n::slotted(h3),\n::slotted(h4),\n::slotted(h5),\n::slotted(h6) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 3px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: normal;\n}\n\n::slotted(p) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  color: var(--ion-color-step-400, #999999);\n  font-size: 14px;\n  line-height: normal;\n  text-overflow: inherit;\n  overflow: inherit;\n}\n\n::slotted(h2:last-child) ::slotted(h3:last-child),\n::slotted(h4:last-child),\n::slotted(h5:last-child),\n::slotted(h6:last-child),\n::slotted(p:last-child) {\n  margin-bottom: 0;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ItemDivider;
            }());
            exports('ion_item_divider', ItemDivider);
        }
    };
});
