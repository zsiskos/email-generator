// Variables
const maxLength = 42
const charSet = "abcdefghijklmnopqrstuvwxyz0123456789"
  
//References
let emailInputEl = document.getElementById('email-title-input')
let emailDisplay = document.getElementById('email-title-final')
let initBtn = document.getElementById('btn-init')
let generateBtn = document.getElementById('btn-generate')
let displayEl = document.getElementById('display')
let copyBtn = document.getElementById('btn-copy')
let copyDisplayEl = document.getElementById('copy-display')
let toolTipEl = document.getElementById('myTooltip')


//State
let emailLength, emailFrontLength, emailBackLength, randomNum, emailFront, warning, emailFinal


//Event Listeners
initBtn.addEventListener('click', init)
generateBtn.addEventListener('click', generate)
copyBtn.addEventListener('click', copyEmail)
copyBtn.addEventListener('mouseout', mouseOut)

//Functions
init()

function init() {
  emailInputEl.value = "Enter base for email"
  emailDisplay.innerHTML = " "
  displayEl.style.visibility = "hidden"
  copyDisplayEl.style.visibility = "hidden"
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
  emailFinal = (emailFront + randomNum + emailInputEl.value + randomNum + emailBack).replace(/\s+/g, "").toLowerCase()
  render()
}

function generateFront(emailFrontLength){
  emailFront = " "
  editCharSet = charSet.replace(randomNum, "")
  for (let i = 0; i < emailFrontLength; i++) {
    emailFront += editCharSet.charAt(Math.floor(Math.random() * editCharSet.length));
  }
}

function generateBack(emailBackLength){
  emailBack = " "
  editCharSet = charSet.replace(randomNum, "")
  for (let i = 0; i < emailBackLength; i++) {
    emailBack += editCharSet.charAt(Math.floor(Math.random() * editCharSet.length));
  }
}

function copyEmail(){
  let emailArea = document.createElement("textarea")
  document.body.appendChild(emailArea)
  emailArea.value = emailFinal
  emailArea.select()
  emailArea.setSelectionRange(0, 99999)
  document.execCommand("copy")
  document.body.removeChild(emailArea)
  toolTipEl.innerHTML = "Copied"
}

function mouseOut(){
  toolTipEl.innerHTML = "Copy to clipboard"
}

function render(){
  emailLength = (emailFinal + 2).length
  if (emailLength > maxLength) {
    emailDisplay.innerHTML = "Too long. Please shorten and try again."
  } else {
    emailDisplay.innerHTML = emailFinal
    copyDisplayEl.style.visibility = "visible"
  }
  displayEl.style.visibility = "visible"
}