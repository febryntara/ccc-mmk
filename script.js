const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelector(".nav-items");
const heroButton = document.querySelector(".hero-button");
const modal = document.querySelector(".modal-container");
const modalClose = document.querySelector(".modal-form > span");
const modalLoading = document.querySelector(".modal-loading");
const modalAlertS = document.querySelector(".modal-alert-success");
const modalAlertF = document.querySelector(".modal-alert-fail");
const preRegButton = document.querySelector(".preRegister-buttons > button");
const popUpButton = document.querySelector(".popup-button");
// const popUpClose = document.querySelector(".popup-close");
const popUp = document.querySelector(".popup-container");


navToggle.addEventListener("click",function(){
    navItems.classList.toggle("nav-restore")
    modal.classList.remove("modal-restore")
    popUp.classList.remove("popup-restore")
})
navItems.addEventListener("click", function(){
  navItems.classList.remove("nav-restore")
  document.querySelector(".nav-toggle > input").checked = false
})
heroButton.addEventListener("click", function(){
    modal.classList.toggle("modal-restore")
})
modalClose.addEventListener("click", function(){
    modal.classList.toggle("modal-restore")
})
preRegButton.addEventListener("click", function(){
  popUp.classList.toggle("popup-restore")
})
popUp.addEventListener("click", function(){
  popUp.classList.toggle("popup-restore")
})
popUpButton.addEventListener("click", function(){
  // popUp.classList.toggle("popup-restore")
  modal.classList.toggle("modal-restore")
})


// SECTION REST API START
const scriptURL = 'https://script.google.com/macros/s/AKfycbxBg8dkmZf9EIKPE79OIqoAudieS1940Bh9hPAty_VFwY4Kgxo77_iQ6SCRu460uV8-/exec'
  const form = document.forms['dataPreReg']

  form.addEventListener('submit', e => {
    e.preventDefault()
    modalLoading.classList.toggle("modal-do-loading");
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          console.log('Success!')
          form.reset();
          modalLoading.classList.toggle("modal-do-loading")
          modalAlertS.classList.add("modal-do-loading")
          setTimeout(function() {
              modalAlertS.classList.remove("modal-do-loading")
          }, 3000)
        })
      .catch(error => {
          console.error('Error!')
          modalAlertF.classList.add("modal-do-loading")
          setTimeout(function() {
              modalAlertF.classList.remove("modal-do-loading")
          }, 3000)
        })
    
  })
//   SECTION REST API END