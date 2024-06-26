document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("loginModal");
    var btn = document.getElementById("loginBtn");
    var closeBtns = document.getElementsByClassName("close");
    var signinForm = document.getElementById("signinForm");
    var registerForm = document.getElementById("registerForm");
    var signinLink = document.getElementById("signinLink");
    var registerLink = document.getElementById("registerLink");
  
    // Open the modal on button click
    btn.onclick = function() {
      modal.style.display = "flex";
      signinForm.style.display = "block"; // Display signin form by default
      registerForm.style.display = "none"; // Hide register form initially
    }
  
    // Close the modal when close button is clicked
    for (var i = 0; i < closeBtns.length; i++) {
      closeBtns[i].onclick = function() {
        modal.style.display = "none";
      }
    }
  
    // Switch to Register form when "Register here" link is clicked
    registerLink.onclick = function() {
      signinForm.style.display = "none";
      registerForm.style.display = "block";
    }
  
    // Switch to Signin form when "Sign in here" link is clicked
    signinLink.onclick = function() {
      signinForm.style.display = "block";
      registerForm.style.display = "none";
    }
  
    // Close modal if user clicks outside the modal content
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    // Handle form submissions (for demonstration purposes)
    document.getElementById("signinFormContent").onsubmit = function(event) {
      event.preventDefault();
      // Handle signin form submission here
      console.log("Signin form submitted!");
    }
  
    document.getElementById("registerFormContent").onsubmit = function(event) {
      event.preventDefault();
      // Handle registration form submission here
      console.log("Registration form submitted!");
    }
  });
  