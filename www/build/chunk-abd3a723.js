function hostContext(selector, el) {
    return el.closest(selector) !== null;
}
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
function createColorClasses(color) {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
}
function getClassList(classes) {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
}
function getClassMap(classes) {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
}
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
async function openURL(win, url, ev, direction) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = win.document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            await router.componentOnReady();
            return router.push(url, direction);
        }
    }
    return false;
}

export { createColorClasses as c, getClassMap as g, hostContext as h, openURL as o };
