// const ABertieCarousel = (function () {
        const CAROUSEL = document.querySelector(".carousel")
        const BACK = CAROUSEL.querySelector(".carousel__backButton")
        const SLIDER = CAROUSEL.querySelector(".carosel__slider")
        const FORWARD = CAROUSEL.querySelector(".carousel__forwardButton")
        const NAV = CAROUSEL.querySelector(".carousel__spots")
        const SLIDE = []

        var index = 0
        SLIDER.innerHTML = (SLIDE[index])

        SLIDE.forEach(function () {
            const SPOT = document.createElement("button")
            SPOT.classList.add('carousel__button')
            NAV.appendChild(SPOT)
        })
        highlightButton()

        BACK.addEventListener("click", moveBack)
        FORWARD.addEventListener("click", moveForward)
        SLIDE.addEventListener("animationend", shuffeleAnimation)

        function highlightButton() {
            const SPOTS = NAV.querySelectorAll("button")
            SPOTS.forEach(function (button, i) {
                if (index === i) {
                    button.classList.add('carousel__highlight')
                } else {
                    button.classList.remove('carousel__highlight')
                }

                button.addEventListener("click", function () {
                    if (index > i) {
                        SLIDE.classList.add('aninmationClassRight')
                    } else {
                        SLIDE.classList.add('aninmationClassLeft')
                    }
                    index = i
                    highlightButton()
                })
            })
        }

        function moveBack() {
            if (index === 0) {
                index = SLIDE.length
            }
            index--
            SLIDE.classList.add('aninmationClassRight')
            highlightButton()
        }

        function moveForward() {
            index++
            if (SLIDE.length === index) {
                index = 0
            }
            SLIDE.classList.add('aninmationClassLeft')
            highlightButton()
        }

        function shuffeleAnimation() {
            if (SLIDE.classList.contains('aninmationClassRight')) {
                SLIDE.classList.remove('aninmationClassRight')
                SLIDER.innerHTML = (SLIDE[index])
                SLIDE.classList.add('aninmationClassLeft')
            } else {
                SLIDE.classList.remove('aninmationClassLeft')
            }

            if (SLIDE.classList.contains('aninmationClassLeft')) {
                SLIDE.classList.remove('aninmationClassLeft')
                SLIDER.innerHTML = (SLIDE[index])
                SLIDE.classList.add('aninmationClassRight')
            } else {
                SLIDE.classList.remove('aninmationClassRight')
            }
        }
// })()