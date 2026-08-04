if ("serviceWorker" in navigator) {

    window.addEventListener("load", async () => {

        try {

            const registration = await navigator.serviceWorker.register("service-worker.js");

            console.log("✅ Service Worker Registered");

            console.log(registration);

        } catch (error) {

            console.error("❌ Service Worker Failed");

            console.error(error);

        }

    });

}
