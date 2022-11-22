let darkmodeButton = document.getElementsByClassName("switcher-button-bg");
let darkmodeToggle = document.getElementsByClassName("switcher-button");
let followerBoxes = document.getElementsByClassName("follower-box");
let overviewBoxes = document.getElementsByClassName("overview-box");
let lmBlackText = document.getElementsByClassName("lm-black-text");
let lmGreyText = document.getElementsByClassName("lm-grey-text");

let dmState = false;

darkmodeButton[0].addEventListener("click", function(){
    if (dmState === false) {
        darkmodeToggle[0].style.left = "3px";
        darkmodeToggle[0].style.backgroundColor = "#20222f";
        darkmodeButton[0].style.background = "var(--darkmode-button-gradient)";
        document.getElementById("body").classList.toggle("darkmode-body");
        
        for (let i = 0; i < followerBoxes.length; i++) {
            followerBoxes[i].style.backgroundColor = "var(--darkmode-box-color)";
        }

        for (let i = 0; i < overviewBoxes.length; i++) {
            overviewBoxes[i].style.backgroundColor = "var(--darkmode-box-color)";
        }

        for (let i = 0; i < lmBlackText.length; i++) {
            lmBlackText[i].classList.toggle("dm-white-text");
        }

        for (let i = 0; i < lmGreyText.length; i++) {
            lmGreyText[i].classList.toggle("dm-grey-text");
        }

        dmState = true;
    } else {
        darkmodeToggle[0].style.left = "28px";
        darkmodeToggle[0].style.backgroundColor = "#f2f2f9";
        darkmodeButton[0].style.background = null;
        document.getElementById("body").classList.toggle("darkmode-body");

        for (let i = 0; i < followerBoxes.length; i++) {
            followerBoxes[i].style.backgroundColor = "var(--box-color)";
        }

        for (let i = 0; i < overviewBoxes.length; i++) {
            overviewBoxes[i].style.backgroundColor = "var(--box-color)";
        }

        for (let i = 0; i < lmBlackText.length; i++) {
            lmBlackText[i].classList.toggle("dm-white-text");
        }

        for (let i = 0; i < lmGreyText.length; i++) {
            lmGreyText[i].classList.toggle("dm-grey-text");
        }

        dmState = false;
    }
});