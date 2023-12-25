function validateLoginForm() {
   var username = document.querySelector("#login .input-box input[type='text']");
   var password = document.querySelector("#login .input-box input[type='password']");

   var isValid = true; // Flag to track form validity

   if (username.value === "") {
       username.classList.add("invalid");
       isValid = false;
   } else {
       username.classList.remove("invalid");
   }

   if (password.value === "") {
       password.classList.add("invalid");
       isValid = false;
   } else {
       password.classList.remove("invalid");
       // Store username and password in local storage
       localStorage.setItem("username", username.value);
       localStorage.setItem("password", password.value);
   }

   if (isValid) {
       window.location.href = "mainPage.html";
   }

   return isValid;
}



  function validateRegisterForm() {
    var username = document.querySelector("#register .input-box input[type='text']");
    var password = document.querySelector("#register .input-box input[type='password']");
    var nationalCode = document.querySelector("#register .input-box input[type='number']");
    var phoneNumber = document.querySelector("#register .input-box input[type='number']");
    var email = document.querySelector("#register .input-box input[type='email']");
    var gender = document.querySelector("#register .input-box input[type='radio']:checked");

    var isValid = true; // Flag to track form validity

    // Reset previous invalid field styles
    var inputFields = document.querySelectorAll("#register .input-box input");
    inputFields.forEach(function (field) {
        field.classList.remove("invalid");
    });

    if (username && password && email && phoneNumber && nationalCode && gender) {
        var usernameValue = username.value.trim();
        var passwordValue = password.value.trim();
        var emailValue = email.value.trim();
        var phoneNumberValue = phoneNumber.value.trim();
        var nationalCodeValue = nationalCode.value.trim();

        // Validate patterns for individual fields
        var usernamePattern = /^[A-Za-z]+$/;
        var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/;
        var phoneNumberPattern = /^0\d{10}$/;
        var emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        var nationalCodePattern = /^0*[0-9]{10}$/;

        if (!usernamePattern.test(usernameValue)) {
            username.classList.add("invalid");
            isValid = false;
        }

        if (!passwordPattern.test(passwordValue)) {
            password.classList.add("invalid");
            isValid = false;
        }

        if (!nationalCodePattern.test(nationalCodeValue)) {
            nationalCode.classList.add("invalid");
            isValid = false;
        }

        if (!phoneNumberPattern.test(phoneNumberValue)) {
            phoneNumber.classList.add("invalid");
            isValid = false;
        }

        if (!emailPattern.test(emailValue)) {
            email.classList.add("invalid");
            isValid = false;
        }
    } else {
        
        isValid = false;
        alert("همه فیلد ها رو پر کنید")
    }

    if (isValid) {
        // Submit the form or perform further actions
        window.location.href = "mainPage.html";
    }

    return isValid;
}

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");



function login() {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    var x = document.getElementById("login");
    var y = document.getElementById("register");

    if (x && y) {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }
}
