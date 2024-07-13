const dashboard = document.querySelector(".dashboard");
const dashboardToggle = document.querySelector(".title");
const dashTexts = document.querySelectorAll(".dash");
const root = document.querySelector(":root");


dashboardToggle.addEventListener("click", () => {
    dashTexts.forEach((dashTexts) => {
        dashTexts.style.display = dashTexts.style.display === "none" ? "block" : "none";
    });
    let dashVar = getComputedStyle(root);

    root.style.setProperty("--dashboard-toggle", dashToggle(dashVar.getPropertyValue("--dashboard-toggle")));
});

function dashToggle(temp) {
    return temp === "1fr" ? "65px" : "1fr";
}