function rIC(callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
}
function hasShadowDom(el) {
    return !!el.shadowRoot && !!el.attachShadow;
}
function findItemLabel(componentEl) {
    const itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
}
function renderHiddenInput(always, container, name, value, disabled) {
    if (always || hasShadowDom(container)) {
        let input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
}
function clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
}
function assert(actual, reason) {
    if (!actual) {
        const message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
}
function now(ev) {
    return ev.timeStamp || Date.now();
}
function pointerCoord(ev) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
}
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
function isEndSide(win, side) {
    const isRTL = win.document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`);
    }
}
function deferEvent(event) {
    return debounceEvent(event, 0);
}
function debounceEvent(event, wait) {
    const original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
}
function debounce(func, wait = 0) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(func, wait, ...args);
    };
}

export { renderHiddenInput as a, assert as b, clamp as c, debounceEvent as d, debounce as e, findItemLabel as f, hasShadowDom as h, isEndSide as i, now as n, pointerCoord as p, rIC as r };
