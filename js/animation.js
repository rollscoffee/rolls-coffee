console.log("Animation Loaded");

const revealElements = document.querySelectorAll(
    ".product-card, .about, .footer"
);

const observer = new IntersectionObserver(

    (entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold:0.12

    }

);

revealElements.forEach((element,index)=>{

    element.classList.add("reveal");

    element.style.transitionDelay =
    `${index*70}ms`;

    observer.observe(element);

});
