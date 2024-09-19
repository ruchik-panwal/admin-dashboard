const dashboard = document.querySelector(".dashboard");
const dashboardToggle = document.querySelector(".title");
const dashTexts = document.querySelectorAll(".dash");
const root = document.querySelector(":root");
let toggle = 0, dashAni = "", textAni = "";


// dashboardToggle.addEventListener("click", () => {
//     dashTexts.forEach((dashTexts) => {
//         dashTexts.style.display = dashTexts.style.display === "none" ? "block" : "none";
//     });
//     let dashVar = getComputedStyle(root);

//     root.style.setProperty("--dashboard-toggle", dashToggle(dashVar.getPropertyValue("--dashboard-toggle")));
// });

dashboardToggle.addEventListener("click", () => {

    animation();

});


function dashToggle(temp) {
    return temp === "1fr" ? "65px" : "1fr";
}

const themeTogg = document.querySelector("#theme");

themeTogg.addEventListener("click", () => {
    root.className = root.className === "light" ? "dark" : "light";
});

function animation() {

    if (toggle == 0) {

        dashAni = gsap.to("body", {
            gridTemplateColumns: "65px 4fr 350px",
            duration: 1
        });

       textAni = gsap.to(".dash", {
            opacity: "0.1",
            display: "none",
            ease: "expo.out"

        })

        toggle = 1;
    }
    else {
        dashAni.reverse();
        textAni.reverse();
        toggle = 0;
    }
}