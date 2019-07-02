System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.c;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            var ItemGroup = /** @class */ (function () {
                function ItemGroup(hostRef) {
                    registerInstance(this, hostRef);
                }
                ItemGroup.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        'role': 'group',
                        class: (_a = {},
                            _a["" + mode] = true,
                            // Used internally for styling
                            _a["item-group-" + mode] = true,
                            _a['item'] = true,
                            _a)
                    };
                };
                ItemGroup.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(ItemGroup, "style", {
                    get: function () { return "ion-item-group {\n  display: block;\n}\n\n.item-group-md ion-item:last-child,\n.item-group-md ion-item-sliding:last-child ion-item {\n  --border-width: 0;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ItemGroup;
            }());
            exports('ion_item_group', ItemGroup);
        }
    };
});
