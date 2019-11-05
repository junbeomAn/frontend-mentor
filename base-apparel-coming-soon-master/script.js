let sendBtn = document.querySelector(".send-btn");

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let errMessage = document.querySelector(".error-msg");
  let errIcon = document.querySelector(".error-icon");
  let inputEmail = document.querySelector(".input-email");
  const { value } = inputEmail;
  
  let isValidEmail = !value ? false :!!(value.split("").find(function(v){
    return v === "@";
  }));  

  if (!isValidEmail) {
    errMessage.style.display = "block";
    errIcon.style.display = "block";
    inputEmail.classList.add("error");
    sendBtn.style.left = "-65px";
  } else {
    errMessage.style.display = "none";
    errIcon.style.display = "none";
    inputEmail.classList.remove("error");
    sendBtn.style.left = "-45px";
  }
});