// Your code goes here

// 1. Nav links change properties when moused over
document.querySelectorAll(".nav-link").forEach(el => {
    el.addEventListener("mouseover", () => {
        el.style.transform = "scale(1.2)";
        el.style.transition = "transform 0.5s";
        el.style.color = "#90b6c1";
        setTimeout(() => {
            el.style.transform = "scale(1)";
            el.style.color = "#212529";
        }, 500);
    }, false);
});


// 2. Images change size when mouse enters and leaves
document.querySelectorAll("img").forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.05)";
        el.style.transition = "transform 1s";
    });
    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
    });
});

// Header stays in front of elements when scrolling down
const header = document.querySelector(".main-navigation");
header.style.zIndex = "1";

// 3. Paragraph font-size increases when wheeled over
document.querySelectorAll("p").forEach(el => {
    el.addEventListener("wheel", (el) => {
        el.target.style.fontSize = "1.8rem";
    });
});

// 4. Buttons at bottom of page change colors when clicked
document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("click", (el) => {
        el.target.style.background = "#ffebcd";
        el.target.style.color = "#212529";
    });
});

const images = document.querySelectorAll("img");






// images.forEach(event => {
//     event.addEventListener("mouseenter", () => {
//     images.style.transform = "scale(1.1)";
//     images.style.transform = "transform 1s";
// });

// mouse over nav