import { r as registerInstance, c as getIonMode, h, H as Host } from './chunk-8bad6bbf.js';

class ItemGroup {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    hostData() {
        const mode = getIonMode(this);
        return {
            'role': 'group',
            class: {
                [`${mode}`]: true,
                // Used internally for styling
                [`item-group-${mode}`]: true,
                'item': true
            }
        };
    }
    render() { return h(Host, this.hostData()); }
    static get style() { return "ion-item-group {\n  display: block;\n}\n\n.item-group-md ion-item:last-child,\n.item-group-md ion-item-sliding:last-child ion-item {\n  --border-width: 0;\n}"; }
}

export { ItemGroup as ion_item_group };
