System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var registerInstance, getMode, Build, h, Host, getElement, getAssetPath;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getMode = module.j;
                Build = module.B;
                h = module.h;
                Host = module.H;
                getElement = module.f;
                getAssetPath = module.k;
            }],
        execute: function () {
            var CACHED_MAP;
            var getIconMap = function () {
                if (!CACHED_MAP) {
                    var win = window;
                    win.Ionicons = win.Ionicons || {};
                    CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
                }
                return CACHED_MAP;
            };
            var addIcons = function (icons) {
                var map = getIconMap();
                Object.keys(icons).forEach(function (name) {
                    map.set(name, icons[name]);
                });
            };
            var getName = function (name, mode, ios, md) {
                // default to "md" if somehow the mode wasn't set
                mode = (mode || 'md').toLowerCase();
                mode = mode === 'ios' ? 'ios' : 'md';
                // if an icon was passed in using the ios or md attributes
                // set the iconName to whatever was passed in
                if (ios && mode === 'ios') {
                    name = ios.toLowerCase();
                }
                else if (md && mode === 'md') {
                    name = md.toLowerCase();
                }
                else if (name) {
                    name = name.toLowerCase();
                    if (!/^md-|^ios-|^logo-/.test(name)) {
                        // this does not have one of the defaults
                        // so lets auto add in the mode prefix for them
                        name = mode + "-" + name;
                    }
                }
                if (typeof name !== 'string' || name.trim() === '') {
                    return null;
                }
                // only allow alpha characters and dash
                var invalidChars = name.replace(/[a-z]|-|\d/gi, '');
                if (invalidChars !== '') {
                    return null;
                }
                return name;
            };
            var getSrc = function (src) {
                if (typeof src === 'string') {
                    src = src.trim();
                    if (isSrc(src)) {
                        return src;
                    }
                }
                return null;
            };
            var isSrc = function (str) {
                return str.length > 0 && /(\/|\.)/.test(str);
            };
            var isValid = function (elm) {
                if (elm.nodeType === 1) {
                    if (elm.nodeName.toLowerCase() === 'script') {
                        return false;
                    }
                    for (var i = 0; i < elm.attributes.length; i++) {
                        var val = elm.attributes[i].value;
                        if (typeof val === 'string' && val.toLowerCase().indexOf('on') === 0) {
                            return false;
                        }
                    }
                    for (var i = 0; i < elm.childNodes.length; i++) {
                        if (!isValid(elm.childNodes[i])) {
                            return false;
                        }
                    }
                }
                return true;
            };
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Icon = /** @class */ (function () {
                function Icon(hostRef) {
                    registerInstance(this, hostRef);
                    this.mode = getIonMode(this);
                    this.isVisible = false;
                    /**
                     * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
                     * Default, `false`.
                     */
                    this.lazy = false;
                }
                Icon.prototype.connectedCallback = function () {
                    var _this = this;
                    // purposely do not return the promise here because loading
                    // the svg file should not hold up loading the app
                    // only load the svg if it's visible
                    this.waitUntilVisible(this.el, '50px', function () {
                        _this.isVisible = true;
                        _this.loadIcon();
                    });
                };
                Icon.prototype.disconnectedCallback = function () {
                    if (this.io) {
                        this.io.disconnect();
                        this.io = undefined;
                    }
                };
                Icon.prototype.waitUntilVisible = function (el, rootMargin, cb) {
                    var _this = this;
                    if (Build.isBrowser && this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
                        var io_1 = this.io = new window.IntersectionObserver(function (data) {
                            if (data[0].isIntersecting) {
                                io_1.disconnect();
                                _this.io = undefined;
                                cb();
                            }
                        }, { rootMargin: rootMargin });
                        io_1.observe(el);
                    }
                    else {
                        // browser doesn't support IntersectionObserver
                        // so just fallback to always show it
                        cb();
                    }
                };
                Icon.prototype.loadIcon = function () {
                    var _this = this;
                    if (Build.isBrowser && this.isVisible) {
                        var url = this.getUrl();
                        if (url) {
                            getSvgContent(this.el.ownerDocument, url, 's-ion-icon')
                                .then(function (svgContent) { return _this.svgContent = svgContent; });
                        }
                        else {
                            console.error('icon was not resolved');
                        }
                    }
                    if (!this.ariaLabel) {
                        var name = getName(this.getName(), this.mode, this.ios, this.md);
                        // user did not provide a label
                        // come up with the label based on the icon name
                        if (name) {
                            this.ariaLabel = name
                                .replace('ios-', '')
                                .replace('md-', '')
                                .replace(/\-/g, ' ');
                        }
                    }
                };
                Icon.prototype.getName = function () {
                    if (this.name !== undefined) {
                        return this.name;
                    }
                    if (this.icon && !isSrc(this.icon)) {
                        return this.icon;
                    }
                    return undefined;
                };
                Icon.prototype.getUrl = function () {
                    var url = getSrc(this.src);
                    if (url) {
                        return url;
                    }
                    url = getName(this.getName(), this.mode, this.ios, this.md);
                    if (url) {
                        return getNamedUrl(url);
                    }
                    url = getSrc(this.icon);
                    if (url) {
                        return url;
                    }
                    return null;
                };
                Icon.prototype.render = function () {
                    var _a, _b;
                    var mode = this.mode || 'md';
                    var flipRtl = this.flipRtl || (this.ariaLabel && this.ariaLabel.indexOf('arrow') > -1 && this.flipRtl !== false);
                    return (h(Host, { role: "img", class: Object.assign((_a = {}, _a["" + mode] = true, _a), createColorClasses(this.color), (_b = {}, _b["icon-" + this.size] = !!this.size, _b['flip-rtl'] = !!flipRtl && this.el.ownerDocument.dir === 'rtl', _b)) }, ((Build.isBrowser && this.svgContent)
                        ? h("div", { class: "icon-inner", innerHTML: this.svgContent })
                        : h("div", { class: "icon-inner" }))));
                };
                Object.defineProperty(Icon, "assetsDirs", {
                    get: function () { return ["svg"]; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Icon.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Icon, "watchers", {
                    get: function () {
                        return {
                            "name": ["loadIcon"],
                            "src": ["loadIcon"],
                            "icon": ["loadIcon"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Icon, "style", {
                    get: function () { return ":host {\n  display: inline-block;\n\n  width: 1em;\n  height: 1em;\n\n  contain: strict;\n\n  fill: currentColor;\n\n  -webkit-box-sizing: content-box !important;\n\n  box-sizing: content-box !important;\n}\n\n.icon-inner,\nsvg {\n  display: block;\n\n  height: 100%;\n  width: 100%;\n}\n\n\n/* Icon RTL\n * -----------------------------------------------------------\n */\n\n:host(.flip-rtl) .icon-inner {\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n}\n\n\n/* Icon Sizes\n * -----------------------------------------------------------\n */\n\n:host(.icon-small) {\n  font-size: 18px !important;\n}\n\n:host(.icon-large){\n  font-size: 32px !important;\n}\n\n\n/* Icon Colors\n * -----------------------------------------------------------\n */\n\n:host(.ion-color) {\n  color: var(--ion-color-base) !important;\n}\n\n:host(.ion-color-primary) {\n  --ion-color-base: var(--ion-color-primary, #3880ff);\n}\n\n:host(.ion-color-secondary) {\n  --ion-color-base: var(--ion-color-secondary, #0cd1e8);\n}\n\n:host(.ion-color-tertiary) {\n  --ion-color-base: var(--ion-color-tertiary, #f4a942);\n}\n\n:host(.ion-color-success) {\n  --ion-color-base: var(--ion-color-success, #10dc60);\n}\n\n:host(.ion-color-warning) {\n  --ion-color-base: var(--ion-color-warning, #ffce00);\n}\n\n:host(.ion-color-danger) {\n  --ion-color-base: var(--ion-color-danger, #f14141);\n}\n\n:host(.ion-color-light) {\n  --ion-color-base: var(--ion-color-light, #f4f5f8);\n}\n\n:host(.ion-color-medium) {\n  --ion-color-base: var(--ion-color-medium, #989aa2);\n}\n\n:host(.ion-color-dark) {\n  --ion-color-base: var(--ion-color-dark, #222428);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Icon;
            }());
            exports('ion_icon', Icon);
            var getIonMode = function (ref) {
                return getMode(ref) || document.documentElement.getAttribute('mode') || 'md';
            };
            var getNamedUrl = function (name) {
                var url = getIconMap().get(name);
                if (url) {
                    return url;
                }
                return getAssetPath("svg/" + name + ".svg");
            };
            var requests = new Map();
            var getSvgContent = function (doc, url, scopedId) {
                // see if we already have a request for this url
                var req = requests.get(url);
                if (!req) {
                    // we don't already have a request
                    req = fetch(url, { cache: 'force-cache' }).then(function (rsp) {
                        if (isStatusValid(rsp.status)) {
                            return rsp.text();
                        }
                        return Promise.resolve(null);
                    }).then(function (svgContent) { return validateContent(doc, svgContent, scopedId); });
                    // cache for the same requests
                    requests.set(url, req);
                }
                return req;
            };
            var isStatusValid = function (status) {
                return status <= 299;
            };
            var validateContent = function (document, svgContent, scopeId) {
                if (svgContent) {
                    var frag = document.createDocumentFragment();
                    var div = document.createElement('div');
                    div.innerHTML = svgContent;
                    frag.appendChild(div);
                    // setup this way to ensure it works on our buddy IE
                    for (var i = div.childNodes.length - 1; i >= 0; i--) {
                        if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
                            div.removeChild(div.childNodes[i]);
                        }
                    }
                    // must only have 1 root element
                    var svgElm = div.firstElementChild;
                    if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
                        if (scopeId) {
                            svgElm.setAttribute('class', scopeId);
                        }
                        // root element must be an svg
                        // lets double check we've got valid elements
                        // do not allow scripts
                        if (isValid(svgElm)) {
                            return div.innerHTML;
                        }
                    }
                }
                return '';
            };
            var createColorClasses = function (color) {
                var _a;
                return (color) ? (_a = {
                        'ion-color': true
                    },
                    _a["ion-color-" + color] = true,
                    _a) : null;
            };
        }
    };
});
