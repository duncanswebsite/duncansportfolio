const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('show');
})



document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out"
        });
    });

    document.querySelectorAll("button, a").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            gsap.to(cursor, { scale: 2, duration: 0.2 });
        });
        el.addEventListener("mouseleave", () => {
            gsap.to(cursor, { scale: 1, duration: 0.2 });
        });
    });
});

const hero_tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero-section',
        start: "top top",
        end: '+=400px top',
        scrub: 2,
        pin: true
    }
});

document.querySelectorAll('.hero-section .hero-content .title span').forEach((span, index) => {
    hero_tl.to(span, {
        y: -1500,
        duration: 4,
        ease: "power1.out"
    }, index * 0.1)
})


gsap.to('.hero-section', {
    y: -1200, duration: 4, ease: 'power1.out',
    scrollTrigger: {
        trigger: '.hero-section',
        start: "top top",
        end: '+=800px top', 
        scrub: 2,
        pin: true
    }
})

const lenis = new Lenis({
    duration: 3
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let horizontalSection = document.querySelector('.horizontal');

gsap.to(horizontalSection, {
    x: () => horizontalSection.scrollWidth * -1,
    xPercent: 100,
    scrollTrigger: {
        trigger: horizontalSection,
        start: "center center",
        end: '+=2000px', // expand the scroll width by 2000px
        scrub: 2,
        pin: "#horizontal-scroll",
        invalidateOnRefresh: true
    }
})

const textElements = gsap.utils.toArray('.text')

textElements.forEach(text => {
    gsap.to(text, {
        backgroundSize: "100%",
        ease: 'none',
        scrollTrigger: {
            trigger: text,
            start: 'center 80%',
            end: 'center 30%',
            scrub: true
        }
    })
})

const parallax = document.querySelector('.parallax');

gsap.to(parallax, {
    backgroundPosition: '0px 100%',
    ease: 'none',
    duration: 4,
    scrollTrigger: {
        trigger: parallax,
        start: '-60% top',
        end: 'bottom bottom',
        scrub: true
    }
})


gsap.to("#footer .flex .wrapper h1", {
    y: 0,
    duration: 4,
    scrollTrigger: {
        trigger: '#footer .flex .wrapper h1',
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: 4
    }
})
let currentIndex = 0;

function showSlider(element) {
    currentIndex = 0;
    const slider = element.querySelector('.slider');
    slider.style.transform = 'translateX(0)';
}

function resetSlider(element) {
    currentIndex = 0;
    const slider = element.querySelector('.slider');
    slider.style.transition = 'none';
    slider.style.transform = 'translateX(0)';
    setTimeout(() => slider.style.transition = 'transform 0.5s ease', 0);
}

function slideLeft(button) {
    const slider = button.parentElement.querySelector('.slider');
    const items = slider.querySelectorAll('.item');
    if (currentIndex > 0) {
        currentIndex--;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function slideRight(button) {
    const slider = button.parentElement.querySelector('.slider');
    const items = slider.querySelectorAll('.item');
    if (currentIndex < items.length - 1) {
        currentIndex++;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

