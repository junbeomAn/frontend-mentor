var form = document.getElementById("sign-up-form");
var inputs = document.getElementsByClassName("info");
var submit = document.getElementsByClassName("submit-button")[0];
var errMsg = document.getElementsByClassName("error-message");
var errIcon = document.getElementsByClassName("error-icon");
form.addEventListener("click", function(e) {
  e.preventDefault();
});

submit.addEventListener("click", function() {
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      errMsg[i].style.display = "block";
      errIcon[i].style.display = "block";
      inputs[i].style.border = "1px solid hsl(0, 100%, 74%)";
    } else {
      errMsg[i].style.display = "none";
      errIcon[i].style.display = "none";
      inputs[i].style.border = "0.8px solid #cacaca";
    }
  }
  if (!inputs[2].value.endsWith(".com")) {
    errMsg[2].style.display = "block";
    errIcon[2].style.display = "block";
    inputs[2].style.border = "1px solid hsl(0, 100%, 74%)";
  } else {
    errMsg[2].style.display = "none";
    errIcon[2].style.display = "none";
    inputs[2].style.border = "0.8px solid #cacaca";
  }
});
