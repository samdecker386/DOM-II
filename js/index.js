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

    // Prevent default as instructed
    el.addEventListener("click", (event) => {
        event.preventDefault();
    });
});

// 2. Images change size when mouse enters
document.querySelectorAll("img").forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.05)";
        el.style.transition = "transform 1s";
    });

// 3. Images resume size when mouse leaves
    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
    });
});

// Header stays in front of elements when scrolling down
const header = document.querySelector(".main-navigation");
header.style.zIndex = "1";

// 4. Paragraph font-size increases when wheeled over
document.querySelectorAll("p").forEach(el => {
    el.addEventListener("wheel", (el) => {
        el.target.style.fontSize = "1.8rem";

        // Stop propogation #1
        el.stopPropagation();
    });
});

// 5. Paragraph background color changes when mouse leaves
document.querySelectorAll("p").forEach(el => {
    el.addEventListener("mouseout", (el) => {
        el.target.style.background = "#f9f8fd";

        // Stop propagation #2
        el.stopPropagation();
    });
});

// 6. Buttons at bottom of page change colors when clicked
document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("click", (el) => {
        el.target.style.background = "#ffebcd";
        el.target.style.color = "#212529";
    });
});

// 7. Double clicking content titles will make them bold
document.querySelectorAll(".logo-heading, h2, h4").forEach(el => {
    el.addEventListener("dblclick", (el) => {
        el.target.style.fontWeight = "bold";

        // Stop propogation #3
        el.stopPropagation();
    });
});

// 8. Header image changes when page is resized
const funBus = document.querySelector("header img");
window.addEventListener("resize", () => {
    funBus.src = "https://meetingsandconventionspei.com/wp-content/uploads/2015/02/Tour-Bus-Header.jpg"
});

// 9. Right click on mouse creates an alert message
document.addEventListener("auxclick", (el) => {
    alert("DON'T RIGHT CLICK THIS PAGE!");
});

// 10. Loading or refreshing the page causes a prompt2020
window.addEventListener('load', function(){
    window.prompt('I just time-traveled. What year is it?');
    });