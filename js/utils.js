/* ==========================================
 *  Rolls Coffee Utilities
 = *========================================= */

/**
 * Format angka menjadi Rupiah
 * contoh:
 * rupiah(18000)
 * => Rp18.000
 */
function rupiah(value) {
    return "Rp" + Number(value).toLocaleString("id-ID");
}

/**
 * Membuat element HTML
 */
function createElement(tag, className = "", html = "") {

    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (html) {
        element.innerHTML = html;
    }

    return element;
}

/**
 * Debounce
 */
function debounce(callback, delay = 200) {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}

/**
 * Throttle
 */
function throttle(callback, limit = 100) {

    let waiting = false;

    return (...args) => {

        if (waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, limit);

    };

}

/**
 * Scroll ke element
 */
function scrollToElement(selector) {

    document.querySelector(selector)?.scrollIntoView({

        behavior: "smooth"

    });

}
