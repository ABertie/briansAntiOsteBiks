// const ABertieCarousel = (function () {
        const CAROUSEL = document.querySelector(".carousel")
        const BACK = CAROUSEL.querySelector(".carousel__backButton")
        const SLIDER = CAROUSEL.querySelector(".carosel__slider")
        const FORWARD = CAROUSEL.querySelector(".carousel__forwardButton")
        const NAV = CAROUSEL.querySelector(".carousel__spots")
        const SLIDE = SLIDER.querySelectorAll(".carousel__card")

        var index = 0
        SLIDER.innerHTML = SLIDE[index].innerHTML

        for (let i = 0; i < SLIDE.length; i++) {
            const SPOT = document.createElement("button")
            SPOT.classList.add('carousel__button')
            NAV.appendChild(SPOT)
            highlightButton()
        }

        BACK.addEventListener("click", moveBack)
        FORWARD.addEventListener("click", moveForward)

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
                        SLIDER.classList.add('aninmationRight')
                    } else {
                        SLIDER.classList.add('aninmationLeft')
                    }
                    index = i
                    highlightButton()
                    shuffeleAnimation()
                })
            })
        } 

        function moveBack() {
            if (index === 0) {
                index = SLIDE.length
            }
            index--
            highlightButton()
            shuffeleAnimation()
        }

        function moveForward() {
            index++
            if (SLIDE.length === index) {
                index = 0
            }
            highlightButton()
            shuffeleAnimation('aninmationLeft')
        }

        function shuffeleAnimation(movingDeraction) {
            SLIDER.classList.add(movingDeraction)
            console.log(movingDeraction);
            SLIDER.addEventListener("aninmationend", function() {
                SLIDER.classList.remove(movingDeraction)
                SLIDER.innerHTML = SLIDE[index].innerHTML
                if (movingDeraction === 'aninmationLeft') {var newMovingDeraction = 'aninmationRight'}
                if (movingDeraction === 'aninmationRight') {var newMovingDeraction = 'aninmationLeft'}
                SLIDER.classList.add(newMovingDeraction)
            })
            SLIDER.addEventListener("aninmationend", function() {SLIDER.classList.remove(newMovingDeraction)})
/*             if (SLIDER.classList.contains('aninmationLeft')) {
                SLIDER.classList.remove('aninmationLeft')
                SLIDER.innerHTML = SLIDE[index].innerHTML
                SLIDER.classList.add('aninmationRight')
                
                SLIDER.querySelector(".aninmationRight").addEventListener("animationend", function() {
                    SLIDER.classList.remove('aninmationRight')
                })
            }  */
        }
// })()