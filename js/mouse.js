elLogo = document.getElementById("img-logo");

document.getElementById("celtics").addEventListener("mouseover", function() {
    document.body.classList.add("celtics-colors");
    elLogo.classList.remove("d-none");
    elLogo.src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png";
});
document.getElementById("celtics").addEventListener("mouseout", function() {
    removeColors("celtics-colors");
});

document.getElementById("patriots").addEventListener("mouseover", function() {
    document.body.classList.add("patriots-colors");
    elLogo.classList.remove("d-none");
    elLogo.src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/New_England_Patriots_logo.svg/200px-New_England_Patriots_logo.svg.png";
});
document.getElementById("patriots").addEventListener("mouseout", function() {
    removeColors("patriots-colors");
});

document.getElementById("red-sox").addEventListener("mouseover", function() {
    document.body.classList.add("red-sox-colors");
    elLogo.classList.remove("d-none");
    elLogo.src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/RedSoxPrimary_HangingSocks.svg/1200px-RedSoxPrimary_HangingSocks.svg.png";
});
document.getElementById("red-sox").addEventListener("mouseout", function() {
    removeColors("red-sox-colors");
});

document.getElementById("bruins").addEventListener("mouseover", function() {
    document.body.classList.add("bruins-colors");
    elLogo.classList.remove("d-none");
    elLogo.src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Boston_Bruins.svg/1200px-Boston_Bruins.svg.png";
});
document.getElementById("bruins").addEventListener("mouseout", function() {
    removeColors("bruins-colors");
});


function removeColors(colorClass) {
    document.body.classList.remove(colorClass);
    elLogo.classList.add("d-none");
}