console.log("Fly Cart Loaded");

function flyToCart(imageElement){

    const cart = document.getElementById("cart-btn");

    if(!imageElement || !cart) return;

    const clone = imageElement.cloneNode(true);

    const start = imageElement.getBoundingClientRect();
    const end = cart.getBoundingClientRect();

    clone.style.position = "fixed";
    clone.style.left = start.left + "px";
    clone.style.top = start.top + "px";

    clone.style.width = start.width + "px";
    clone.style.height = start.height + "px";

    clone.style.objectFit = "cover";

    clone.style.borderRadius = "18px";

    clone.style.zIndex = "999999";

    clone.style.pointerEvents = "none";

    clone.style.transition =
    "all .8s cubic-bezier(.2,.8,.2,1)";

    document.body.appendChild(clone);

    requestAnimationFrame(()=>{

        clone.style.left =
        end.left + 10 + "px";

        clone.style.top =
        end.top + 10 + "px";

        clone.style.width = "22px";

        clone.style.height = "22px";

        clone.style.opacity = ".2";

        clone.style.transform = "scale(.3) rotate(20deg)";

    });

    setTimeout(()=>{

        clone.remove();

    },800);

}
