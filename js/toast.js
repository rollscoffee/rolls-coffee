
console.log("Toast Loaded");

/* ==========================================
 *  Rolls Coffee Toast
 = *========================================= */

function showToast(title, message, type = "success") {

    const oldToast = document.querySelector(".toast");

    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement("div");

    toast.className = `toast toast-${type}`;

    toast.innerHTML = `
    <div class="toast-icon">
    ${type === "success"

        ? '<i data-lucide="check"></i>'

        : '<i data-lucide="circle-alert"></i>'}
    </div>

    <div class="toast-content">
    <div class="toast-title">${title}</div>
    <div class="toast-message">${message}</div>
    </div>

    <button class="toast-close">&times;</button>
    `;

    document.body.appendChild(toast);

    lucide.createIcons();

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    const closeToast = () => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    };

    toast.querySelector(".toast-close")
    .addEventListener("click", closeToast);

    setTimeout(closeToast, 3000);

}
