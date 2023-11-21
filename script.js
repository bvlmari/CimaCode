document.addEventListener("DOMContentLoaded", function() {
    let prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-1000px"; // Increase this value if the navbar is not fully disappearing
        }

        prevScrollPos = currentScrollPos;
    };
});
