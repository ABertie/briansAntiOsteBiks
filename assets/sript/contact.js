const SUBMITFORM = document.querySelector(".submitForm")
const SUBMITFORM__IMPUT = SUBMITFORM.querySelectorAll(".submitForm__input")

let success = true

SUBMITFORM.addEventListener("submit", function (event) {
    event.preventDefault();
    Array.from(event.target).forEach(element => validate(element))
})

function validate(element) {
    const SUBMITFORM__IMPUT__FEEDBACK = element.nextSibling.nextSibling
    const makeFeedback = massage => {
        SUBMITFORM__IMPUT__FEEDBACK.innerHTML = massage
        success = false
    }

    if (element.required && !element.value) return makeFeedback("Dette felt skal udfyldes!")

    if (element.type === "email") {
        if (!includeSymbol(element.value, "@")
            || tooManyAts(element.value)
            || hasIllegalAt(element.value)) {
            return makeFeedback("Dette er en ugyldig email!")
        }
    }

    if (element.type === "tel") {
        if (isTooLong(element.value)
            || isTooShort(element.value)
            || !hasLegalCharacters(element.value)) {
            return makeFeedback("Dette er en ugyldig nummer!")
        }
    }

    if (success) SUBMITFORM.submit()
}

function submit() {
    const URL__STRING = window.location.href;
    const URL__OBJECT = new URL(URL__STRING);
    
    if (URL__OBJECT.searchParams.get("name")) {
        let userName = URL__OBJECT.searchParams.get("name")
        let userEmail = URL__OBJECT.searchParams.get("email")
        let userPhone = URL__OBJECT.searchParams.get("phoneNumber")
        let thankYouMassage = `Hej ${userName}, vi vil ringe dig op på ${userPhone} eller kontakte dig på ${userEmail} snarest mugligt.`;
        SUBMITFORM.innerHTML = thankYouMassage;
    }   
}

const includeSymbol = (string, symbol) => string.includes(symbol)
const tooManyAts = string => string.split("@").length > 2
const hasIllegalAt = string => string.indexOf("@") === 0 || string.indexOf("@") === string.length - 1

const isTooLong = (string, maxlength = 20) => string.length > maxlength
const isTooShort = (string, minlength = 3) => string.length < minlength
const hasLegalCharacters = (string) => /^[0-9+#\*\s]+$/.test(string)