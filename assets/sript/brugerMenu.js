(function () {
    const BUTTON = document.querySelector(".burgerMenuButton")
    const MENU = document.querySelector(".primaryNav")

    BUTTON.addEventListener("click", clickHandler)

    function clickHandler() {
        MENU.classList.toggle("primaryNav--show")
        
        if (MENU.ariaHidden = "true") {
            MENU.setAttribute("aria-hidden", false)
        } else {
            MENU.setAttribute("aria-hidden", true)
        }
    }
})()