function triggerAnimation() {
    let svg = document.getElementById("successAnimation");
    let msg = document.getElementById("successMessage");
    svg.style.display = "block";
    msg.style.display = "block";
    svg.classList.add("animated");
}
