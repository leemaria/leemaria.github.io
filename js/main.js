function myFunction() {
    let x = window.matchMedia("(max-width: 1242px)");
    if (x.matches || (!x.matches && document.documentElement.scrollTop > 900)) {
        console.log(!x.matches && document.documentElement.scrollTop > 900);

        if (!x.matches && document.documentElement.scrollTop > 900)
            toggleNav();

        document.getElementsByTagName("nav")[0].classList = "navbar fixed-top navbar-expand-md bg-light";
        document.getElementById("sqrs").className = "navbar-nav";
        document.getElementById("sqrs").id = "sqrs-off";
        document.getElementsByClassName("svg-lines")[0].setAttribute("hidden", "");
        document.getElementsByTagName("h1")[0].setAttribute("hidden", "");




    } else {
        document.getElementsByTagName("nav")[0].classList.remove("navbar");
        document.getElementsByTagName("nav")[0].classList.remove("fixed-top");
        document.getElementsByTagName("nav")[0].classList.remove("bg-light");
        document.getElementsByClassName("svg-lines")[0].removeAttribute("hidden");
        document.getElementsByTagName("h1")[0].removeAttribute("hidden");


        console.log(document.getElementById("sqrs-off"));
        if (document.getElementById("sqrs-off") != true) {
           document.getElementById("sqrs-off").classList.remove("navbar-nav");
           document.getElementById("sqrs-off").id = "sqrs";
        }


        toggleNav();

    }
}

function toggleNav(){
    let navItems = document.getElementById("sqrs").children;

    for (let i = 0; i < navItems.length; i++){
        //Toggle link class settings
        navItems[i].children[0].classList.toggle("sqr-txt");

        //Toggle li class settings
        navItems[i].classList.toggle("sqr");
    }
}

//var x = window.matchMedia("(max-width: 1242px)");
myFunction(); // Call listener function at run time
window.matchMedia("(max-width: 1242px)").addListener(myFunction); // Attach listener function on state changes


window.addEventListener("scroll", myFunction);


function createTopBar() {
    document.getElementsByTagName("nav")[0].className = "navbar fixed-top navbar-expand-md bg-light";
    document.getElementById("sqrs").className = "navbar-nav";
    document.getElementsByClassName("svg-lines")[0].setAttribute("hidden", "");
    document.getElementsByTagName("h1")[0].setAttribute("hidden", "");
}

function createFullNav() {
    document.getElementsByTagName("nav")[0].classList.remove("navbar");
    document.getElementsByTagName("nav")[0].classList.remove("fixed-top");
    document.getElementsByTagName("nav")[0].classList.remove("bg-light");
    document.getElementById("sqrs").classList.remove("navbar-nav");
    document.getElementsByClassName("svg-lines")[0].removeAttribute("hidden");
    document.getElementsByTagName("h1")[0].removeAttribute("hidden");
}