document.addEventListener("DOMContentLoaded", () => {

    const cursor = document.querySelector(".custom-cursor");

    if (!cursor) return; 
    document.addEventListener("mousemove", (e) => {
        const offsetX = e.pageX;
        const offsetY = e.pageY; 

        cursor.style.left = `${offsetX - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${offsetY - cursor.offsetHeight / 2}px`;
    });

    const clickableElements = document.querySelectorAll("button, a");

    clickableElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.style.transform = "scale(2)"; 
            element.classList.add("invert-color"); 
        });

        element.addEventListener("mouseleave", () => {
            cursor.style.transform = "scale(1)"; 
            element.classList.remove("invert-color"); 
        });
    });

    const hamburger = document.querySelector(".hamburger"); 
    const menu = document.querySelector(".nav-list"); 

    if (hamburger && menu) {
        menu.classList.remove("show");

        hamburger.addEventListener("click", () => {
            menu.classList.toggle("show");
        });
    }
});
