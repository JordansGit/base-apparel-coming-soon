/*
form error - exclamation mark 
form error text underneath it: please provide a valid email address (i think the text is default) 

google form validation to learn about it. 
*/

let btn = document.querySelector(".form-btn"); 

btn.addEventListener("click", myFunction); 

function myFunction() {
  btn.style.background = "linear-gradient(135deg, hsl(0, 80%, 95%), hsl(0, 74%, 85%)"; 
  btn.style.boxShadow = "0 10px 25px -6px #888888"; 
}

