const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelector(".nav-items");
const heroButton = document.querySelector(".hero-button");
const modal = document.querySelector(".modal-container");
const modalClose = document.querySelector(".modal-form > span");

navToggle.addEventListener("click",function(){
    navItems.classList.toggle("nav-restore")
    modal.classList.remove("modal-restore")
})
heroButton.addEventListener("click", function(){
    modal.classList.toggle("modal-restore")
})
modalClose.addEventListener("click", function(){
    modal.classList.toggle("modal-restore")
})


// SECTION REST API START
const scriptURL = 'https://script.google.com/macros/s/AKfycbxBg8dkmZf9EIKPE79OIqoAudieS1940Bh9hPAty_VFwY4Kgxo77_iQ6SCRu460uV8-/exec'
  const form = document.forms['dataPreReg']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!'))
      .catch(error => console.error('Error!'))
  })
//   SECTION REST API END