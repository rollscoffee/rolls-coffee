console.log("Checkout Loaded");

const checkoutBtn = document.getElementById("checkout-btn");

checkoutBtn.addEventListener("click", checkoutWhatsApp);

function checkoutWhatsApp() {

    if (cart.length === 0) {

        alert("Keranjang masih kosong!");

        return;

    }

    let message = "☕ *Rolls Coffee*%0A%0A";

    let total = 0;

    cart.forEach((item, index) => {

        const subtotal = item.price * item.qty;

        total += subtotal;

        message +=
        `*${index + 1}. ${item.name}*%0A` +
        `• Ukuran : ${item.size}%0A`;

        if(item.bean)
            message += `• Biji Kopi : ${item.bean}%0A`;

        if(item.sugar)
            message += `• Gula : ${item.sugar}%0A`;

        if(item.coffee)
            message += `• Level Kopi : ${item.coffee}%0A`;

        if(item.note)
            message += `• Catatan : ${item.note}%0A`;

        message +=
        `• Qty : ${item.qty}%0A` +
        `• Subtotal : ${rupiah(subtotal)}%0A%0A`;

    });

    message +=
    `━━━━━━━━━━━━━━%0A` +
    `*TOTAL : ${rupiah(total)}*%0A%0A` +
    `Nama : %0A` +
    `Alamat : %0A` +
    `Metode Pembayaran :`;

    const phone = "6285882153483"; // Ganti nomor WA Rolls Coffee

    window.open(

        `https://wa.me/${phone}?text=${message}`,

        "_blank"

    );

}
