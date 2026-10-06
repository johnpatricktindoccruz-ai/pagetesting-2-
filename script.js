/* =====================================
   TAB SYSTEM
===================================== */

function showTab(tabName) {

    const sections = document.querySelectorAll(".tab-section");

    sections.forEach(section => {
        section.classList.remove("active");
    });


    const selectedSection = document.getElementById(tabName);

    if (selectedSection) {
        selectedSection.classList.add("active");
    }


    /* Close mobile navigation */

    const navigation = document.getElementById("navigation");

    navigation.classList.remove("show");


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================
   MOBILE MENU
===================================== */

function toggleMenu() {

    const navigation = document.getElementById("navigation");

    navigation.classList.toggle("show");
}


/* =====================================
   PROFILE IMAGE UPLOAD
===================================== */

function changeProfilePicture(event) {

    const file = event.target.files[0];

    if (!file) {
        return;
    }


    /* Check that the selected file is an image */

    if (!file.type.startsWith("image/")) {

        alert("Please select an image file.");

        return;
    }


    const reader = new FileReader();


    reader.onload = function(e) {

        const profileImage =
            document.getElementById("profileImage");

        profileImage.src = e.target.result;

    };


    reader.readAsDataURL(file);
}


/* =====================================
   ACTIVE NAVIGATION
===================================== */

const navigationButtons =
    document.querySelectorAll("#navigation button");


navigationButtons.forEach(button => {

    button.addEventListener("click", function() {

        navigationButtons.forEach(btn => {

            btn.style.color = "";

        });


        this.style.color = "#00e5ff";

    });

});


/* =====================================
   TERMINAL TYPING EFFECT
===================================== */

const terminalText =
    document.querySelector(".terminal-output");


/* =====================================
   PAGE LOAD
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "%c SYSTEM ONLINE ",
        "background:#00e5ff;color:#001018;font-weight:bold;"
    );

    console.log(
        "Welcome to John Patrick Cruz's IT Portfolio."
    );

});