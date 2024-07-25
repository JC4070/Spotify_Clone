
function togglePassword() {
  var passwordInput = document.getElementById('login-password');
  var eyeIcon = document.getElementById('eye-icon');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.src = '../ICONS/hide.png'; 
  } else {
    passwordInput.type = 'password';
    eyeIcon.src = '../ICONS/open.png';
  }
}




document.addEventListener("DOMContentLoaded", function() {
  
  let form = document.querySelector("#signup-form");

 
  form.addEventListener("submit", function(event) {
  
      event.preventDefault();


      let email = document.querySelector("#signup-email").value;
      let password = document.querySelector("#signup-password").value;

      if (email.trim() === '' || password.trim() === '') {
          alert("Email and password are required");
          return;
      }

     
      let userData = JSON.parse(localStorage.getItem("userDetails")) || [];

    
      let emailExists = userData.some(user => user.email === email);
      if (emailExists) {
          alert("Email already registered");
          return;
      }

     
      userData.push({ email: email, password: password });
      alert("Sign up Successsful!!. You can log in now.")

    
      localStorage.setItem("userDetails", JSON.stringify(userData));

      
      window.location.href = '../HTML/login.html';

      form.reset();
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector("#login-form");

  form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      let email = document.querySelector("#login-email").value;
      let password = document.querySelector("#login-password").value;

      let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
      let checkStatus = false;

      for (let user of userData) {
          if (user.email === email && user.password === password) {
              checkStatus = true;
              break;
          }
      }

      if (checkStatus) {
          alert("Login Successful!");
          window.location.href = "../HTML/code.html";
      } else {
          alert("Invalid email or password. Please sign up if you are new to Spotify.");
          window.location.href = "../HTML/sign-up.html";
      }
  });
});

 
