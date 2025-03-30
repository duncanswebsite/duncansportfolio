document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");

    if (!cursor) return; 

    document.addEventListener("mousemove", (e) => {
        const offsetX = e.pageX; 
        const offsetY = e.pageY;
        cursor.style.left = `${offsetX}px`;
        cursor.style.top = `${offsetY}px`;
    });

    const clickableElements = document.querySelectorAll("button, a");

    clickableElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.style.width = "40px";
            cursor.style.height = "40px";
        });

        element.addEventListener("mouseleave", () => {
            cursor.style.width = "20px";
            cursor.style.height = "20px";
        });
    });
});
