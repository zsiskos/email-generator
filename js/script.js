// Variables
const maxLength = 42
const charSet = "abcdefghijklmnopqrstuvwxyz0123456789"
  
//References
let emailInputEl = document.getElementById('email-title-input')
let emailFinal = document.getElementById('email-title-final')
let initBtn = document.getElementById('btn-init')
let generateBtn = document.getElementById('btn-generate')
let displayEl = document.getElementById('display')
let sendEl = document.getElementById('send')

//State
let emailLength, emailFrontLength, emailBackLength, randomNum, emailFront, warning
displayEl.style.visibility = "hidden"
sendEl.style.visibility = "hidden"

//Event Listeners
initBtn.addEventListener('click', init)
generateBtn.addEventListener('click', generate)

//Functions
init()

function init() {
  emailInputEl.value = "Enter base for email"
  emailFinal.innerHTML = " "
  displayEl.style.visibility = "hidden"
  sendEl.style.visibility = "hidden"
  characterLengths();
}

function characterLengths() {
  emailFrontLength = Math.floor(Math.random() * (13 - 5 + 1) + 5)
  emailBackLength = Math.floor(Math.random() * (16 - 5 + 1) + 5)
  randomNum = Math.floor(Math.random() * 10)
}

function generate(){
  generateFront(emailFrontLength)
  generateBack(emailBackLength)
  render()
}

function generateFront(emailFrontLength){
  emailFront = " ";
  editCharSet = charSet.replace(randomNum, "")
  for (let i = 0; i < emailFrontLength; i++) {
    emailFront += editCharSet.charAt(Math.floor(Math.random() * editCharSet.length));
  }
  return emailFront
}

function generateBack(emailBackLength){
  emailBack = " ";
  editCharSet = charSet.replace(randomNum, "")
  for (let i = 0; i < emailBackLength; i++) {
    emailBack += editCharSet.charAt(Math.floor(Math.random() * editCharSet.length));
  }
  return emailBack
}

function render(){
  emailLength = emailFrontLength + emailInputEl.value.replace(/\s+/g, "").length + emailBackLength + 2
  if (emailLength > maxLength) {
    emailFinal.innerHTML = "Too long. Please shorten and try again."
  } else {
    emailFinal.innerHTML = (emailFront + randomNum + emailInputEl.value + randomNum + emailBack).replace(/\s+/g, "").toLowerCase()
  }
  displayEl.style.visibility = "visible"
}