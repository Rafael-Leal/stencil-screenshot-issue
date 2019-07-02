System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getContext, getIonMode, getElement, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                getContext = module.e;
                getIonMode = module.c;
                getElement = module.f;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            var SPLIT_PANE_MAIN = 'split-pane-main';
            var SPLIT_PANE_SIDE = 'split-pane-side';
            var QUERY = {
                'xs': '(min-width: 0px)',
                'sm': '(min-width: 576px)',
                'md': '(min-width: 768px)',
                'lg': '(min-width: 992px)',
                'xl': '(min-width: 1200px)',
                'never': ''
            };
            var SplitPane = /** @class */ (function () {
                function SplitPane(hostRef) {
                    registerInstance(this, hostRef);
                    this.visible = false;
                    /**
                     * If `true`, the split pane will be hidden.
                     */
                    this.disabled = false;
                    /**
                     * When the split-pane should be shown.
                     * Can be a CSS media query expression, or a shortcut expression.
                     * Can also be a boolean expression.
                     */
                    this.when = QUERY['lg'];
                    this.ionSplitPaneVisible = createEvent(this, "ionSplitPaneVisible", 7);
                    this.isServer = getContext(this, "isServer");
                    this.win = getContext(this, "window");
                }
                SplitPane.prototype.visibleChanged = function (visible) {
                    var detail = { visible: visible, isPane: this.isPane.bind(this) };
                    this.ionSplitPaneVisible.emit(detail);
                };
                SplitPane.prototype.componentDidLoad = function () {
                    this.styleChildren();
                    this.updateState();
                };
                SplitPane.prototype.componentDidUnload = function () {
                    if (this.rmL) {
                        this.rmL();
                        this.rmL = undefined;
                    }
                };
                SplitPane.prototype.updateState = function () {
                    var _this = this;
                    if (this.isServer) {
                        return;
                    }
                    if (this.rmL) {
                        this.rmL();
                        this.rmL = undefined;
                    }
                    // Check if the split-pane is disabled
                    if (this.disabled) {
                        this.visible = false;
                        return;
                    }
                    // When query is a boolean
                    var query = this.when;
                    if (typeof query === 'boolean') {
                        this.visible = query;
                        return;
                    }
                    // When query is a string, let's find first if it is a shortcut
                    var mediaQuery = QUERY[query] || query;
                    // Media query is empty or null, we hide it
                    if (mediaQuery.length === 0) {
                        this.visible = false;
                        return;
                    }
                    if (this.win.matchMedia) {
                        // Listen on media query
                        var callback_1 = function (q) {
                            _this.visible = q.matches;
                        };
                        var mediaList_1 = this.win.matchMedia(mediaQuery);
                        mediaList_1.addListener(callback_1);
                        this.rmL = function () { return mediaList_1.removeListener(callback_1); };
                        this.visible = mediaList_1.matches;
                    }
                };
                SplitPane.prototype.isPane = function (element) {
                    if (!this.visible) {
                        return false;
                    }
                    return element.parentElement === this.el
                        && element.classList.contains(SPLIT_PANE_SIDE);
                };
                SplitPane.prototype.styleChildren = function () {
                    if (this.isServer) {
                        return;
                    }
                    var contentId = this.contentId;
                    var children = this.el.children;
                    var nu = this.el.childElementCount;
                    var foundMain = false;
                    for (var i = 0; i < nu; i++) {
                        var child = children[i];
                        var isMain = contentId !== undefined ? child.id === contentId : child.hasAttribute('main');
                        if (isMain) {
                            if (foundMain) {
                                console.warn('split pane cannot have more than one main node');
                                return;
                            }
                            foundMain = true;
                        }
                        setPaneClass(child, isMain);
                    }
                    if (!foundMain) {
                        console.warn('split pane does not have a specified main node');
                    }
                };
                SplitPane.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            // Used internally for styling
                            _a["split-pane-" + mode] = true,
                            _a['split-pane-visible'] = this.visible,
                            _a)
                    };
                };
                Object.defineProperty(SplitPane.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SplitPane, "watchers", {
                    get: function () {
                        return {
                            "visible": ["visibleChanged"],
                            "disabled": ["updateState"],
                            "when": ["updateState"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                SplitPane.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(SplitPane, "style", {
                    get: function () { return "ion-split-pane {\n  /**\n   * \@prop --border: Border between panes\n   */\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  contain: strict;\n}\n\n.split-pane-visible > .split-pane-side,\n.split-pane-visible > .split-pane-main {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: relative;\n  -ms-flex: 1;\n  flex: 1;\n  /* stylelint-disable-next-line declaration-no-important */\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n  z-index: 0;\n}\n\n.split-pane-visible > .split-pane-side:not(ion-menu),\n.split-pane-visible > ion-menu.split-pane-side.menu-enabled {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n\n.split-pane-side:not(ion-menu) {\n  display: none;\n}\n\n.split-pane-visible > .split-pane-side {\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.split-pane-visible > .split-pane-side[side=end] {\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n.split-pane-md {\n  --border: 1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));\n}\n\n.split-pane-md.split-pane-visible > .split-pane-side {\n  min-width: 270px;\n  max-width: 28%;\n  border-right: var(--border);\n  border-left: 0;\n}\n\n.split-pane-md.split-pane-visible > .split-pane-side[side=end] {\n  min-width: 270px;\n  max-width: 28%;\n  border-right: 0;\n  border-left: var(--border);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return SplitPane;
            }());
            exports('ion_split_pane', SplitPane);
            function setPaneClass(el, isMain) {
                var toAdd;
                var toRemove;
                if (isMain) {
                    toAdd = SPLIT_PANE_MAIN;
                    toRemove = SPLIT_PANE_SIDE;
                }
                else {
                    toAdd = SPLIT_PANE_SIDE;
                    toRemove = SPLIT_PANE_MAIN;
                }
                var classList = el.classList;
                classList.add(toAdd);
                classList.remove(toRemove);
            }
        }
    };
});
