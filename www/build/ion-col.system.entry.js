System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, getContext, getIonMode, h, getElement, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getContext = module.e;
                getIonMode = module.c;
                h = module.h;
                getElement = module.f;
                Host = module.H;
            }],
        execute: function () {
            var SIZE_TO_MEDIA = {
                'xs': '(min-width: 0px)',
                'sm': '(min-width: 576px)',
                'md': '(min-width: 768px)',
                'lg': '(min-width: 992px)',
                'xl': '(min-width: 1200px)',
            };
            // Check if the window matches the media query
            // at the breakpoint passed
            // e.g. matchBreakpoint('sm') => true if screen width exceeds 576px
            function matchBreakpoint(win, breakpoint) {
                if (breakpoint === undefined || breakpoint === '') {
                    return true;
                }
                if (win.matchMedia) {
                    var mediaQuery = SIZE_TO_MEDIA[breakpoint];
                    return win.matchMedia(mediaQuery).matches;
                }
                return false;
            }
            var win = window;
            var SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'));
            var BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];
            var Col = /** @class */ (function () {
                function Col(hostRef) {
                    registerInstance(this, hostRef);
                    this.win = getContext(this, "window");
                }
                Col.prototype.onResize = function () {
                    this.el.forceUpdate();
                };
                // Loop through all of the breakpoints to see if the media query
                // matches and grab the column value from the relevant prop if so
                Col.prototype.getColumns = function (property) {
                    var matched;
                    for (var _i = 0, BREAKPOINTS_1 = BREAKPOINTS; _i < BREAKPOINTS_1.length; _i++) {
                        var breakpoint = BREAKPOINTS_1[_i];
                        var matches = matchBreakpoint(this.win, breakpoint);
                        // Grab the value of the property, if it exists and our
                        // media query matches we return the value
                        var columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
                        if (matches && columns !== undefined) {
                            matched = columns;
                        }
                    }
                    // Return the last matched columns since the breakpoints
                    // increase in size and we want to return the largest match
                    return matched;
                };
                Col.prototype.calculateSize = function () {
                    var columns = this.getColumns('size');
                    // If size wasn't set for any breakpoint
                    // or if the user set the size without a value
                    // it means we need to stick with the default and return
                    // e.g. <ion-col size-md>
                    if (!columns || columns === '') {
                        return;
                    }
                    // If the size is set to auto then don't calculate a size
                    var colSize = (columns === 'auto')
                        ? 'auto'
                        // If CSS supports variables we should use the grid columns var
                        : SUPPORTS_VARS ? "calc(calc(" + columns + " / var(--ion-grid-columns, 12)) * 100%)"
                            // Convert the columns to a percentage by dividing by the total number
                            // of columns (12) and then multiplying by 100
                            : ((columns / 12) * 100) + '%';
                    return {
                        'flex': "0 0 " + colSize,
                        'width': "" + colSize,
                        'max-width': "" + colSize
                    };
                };
                // Called by push, pull, and offset since they use the same calculations
                Col.prototype.calculatePosition = function (property, modifier) {
                    var _a;
                    var columns = this.getColumns(property);
                    if (!columns) {
                        return;
                    }
                    // If the number of columns passed are greater than 0 and less than
                    // 12 we can position the column, else default to auto
                    var amount = SUPPORTS_VARS
                        // If CSS supports variables we should use the grid columns var
                        ? "calc(calc(" + columns + " / var(--ion-grid-columns, 12)) * 100%)"
                        // Convert the columns to a percentage by dividing by the total number
                        // of columns (12) and then multiplying by 100
                        : (columns > 0 && columns < 12) ? (columns / 12 * 100) + '%' : 'auto';
                    return _a = {},
                        _a[modifier] = amount,
                        _a;
                };
                Col.prototype.calculateOffset = function (isRTL) {
                    return this.calculatePosition('offset', isRTL ? 'margin-right' : 'margin-left');
                };
                Col.prototype.calculatePull = function (isRTL) {
                    return this.calculatePosition('pull', isRTL ? 'left' : 'right');
                };
                Col.prototype.calculatePush = function (isRTL) {
                    return this.calculatePosition('push', isRTL ? 'right' : 'left');
                };
                Col.prototype.hostData = function () {
                    var _a;
                    var isRTL = this.win.document.dir === 'rtl';
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a),
                        style: Object.assign({}, this.calculateOffset(isRTL), this.calculatePull(isRTL), this.calculatePush(isRTL), this.calculateSize())
                    };
                };
                Col.prototype.__stencil_render = function () {
                    return h("slot", null);
                };
                Object.defineProperty(Col.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Col.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Col, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --ion-grid-columns: The number of total Columns in the Grid\n   * \@prop --ion-grid-column-padding: Padding for the Column\n   * \@prop --ion-grid-column-padding-xs: Padding for the Column on xs screens and up\n   * \@prop --ion-grid-column-padding-sm: Padding for the Column on sm screens and up\n   * \@prop --ion-grid-column-padding-md: Padding for the Column on md screens and up\n   * \@prop --ion-grid-column-padding-lg: Padding for the Column on lg screens and up\n   * \@prop --ion-grid-column-padding-xl: Padding for the Column on xl screens and up\n   */\n  padding-left: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n  padding-right: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n  padding-top: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n  padding-bottom: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  width: 100%;\n  max-width: 100%;\n  min-height: 1px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n    padding-inline-start: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n    -webkit-padding-end: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n    padding-inline-end: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n  }\n}\n\@media (min-width: 576px) {\n  :host {\n    padding-left: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));\n    padding-right: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));\n    padding-top: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));\n    padding-bottom: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));\n  }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));\n      padding-inline-start: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));\n      -webkit-padding-end: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));\n      padding-inline-end: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));\n    }\n  }\n}\n\@media (min-width: 768px) {\n  :host {\n    padding-left: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));\n    padding-right: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));\n    padding-top: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));\n    padding-bottom: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));\n  }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));\n      padding-inline-start: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));\n      -webkit-padding-end: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));\n      padding-inline-end: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));\n    }\n  }\n}\n\@media (min-width: 992px) {\n  :host {\n    padding-left: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));\n    padding-right: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));\n    padding-top: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));\n    padding-bottom: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));\n  }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));\n      padding-inline-start: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));\n      -webkit-padding-end: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));\n      padding-inline-end: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));\n    }\n  }\n}\n\@media (min-width: 1200px) {\n  :host {\n    padding-left: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));\n    padding-right: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));\n    padding-top: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));\n    padding-bottom: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));\n  }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));\n      padding-inline-start: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));\n      -webkit-padding-end: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));\n      padding-inline-end: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));\n    }\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Col;
            }());
            exports('ion_col', Col);
        }
    };
});
