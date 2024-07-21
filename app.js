let indicator = document.querySelector(".indicator");
let signinForm = document.querySelector(".signin-form");
let signupForm = document.querySelector(".signup-form");

const signup = () => {
  signinForm.style.left = "-450px";
  signupForm.style.left = "50px";
  indicator.style.left = "110px"
}
const signin = () => {
  signinForm.style.left = "50px";
  signupForm.style.left = "450px";
  indicator.style.left = "0px"
}
