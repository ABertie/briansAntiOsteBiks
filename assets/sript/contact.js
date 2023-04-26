const SUBMITFORM = document.querySelector(".submitForm") 

const SUBMITFORM__IMPUT__NAME = SUBMITFORM.querySelector("#submitForm__name")
const SUBMITFORM__IMPUT__EMAIL = SUBMITFORM.querySelector("#submitForm__email")
const SUBMITFORM__IMPUT__TLF = SUBMITFORM.querySelector("#submitForm__tlf")

SUBMITFORM.addEventListener("submit", function(event){
    event.preventDefault();
    if (SUBMITFORM__IMPUT__NAME.value == "") {
        alert("Navn er ikke udfyldt")
    } else if (SUBMITFORM__IMPUT__EMAIL.value == "") {
        alert("Email er ikke udfyldt")
    } else if (SUBMITFORM__IMPUT__TLF.value == "") {
        alert("telefon nummer er ikke udfyldt")
    } else {
        SUBMITFORM.submit()
    }
})

const URL__STRING = window.location.href;
const URL__OBJECT = new URL(URL__STRING);

if (URL__OBJECT.searchParams.get("name")) {
    let userName = URL__OBJECT.searchParams.get("name")
    let userEmail = URL__OBJECT.searchParams.get("email")
    let userPhone = URL__OBJECT.searchParams.get("phoneNumber")
    let thankYouMassage = `Hej ${userName}, vi vil ringe dig op på ${userPhone} eller kontakte dig på ${userEmail} snarest mugligt.`;
    SUBMITFORM.innerHTML = thankYouMassage;
}


// Timer:
// window.setTimeout(function(){}, 3000);