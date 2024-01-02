var registerForm = document.querySelector("#register");
var inputFields = document.querySelectorAll("#register .input-box input");

// Attach event listener to the form
registerForm.addEventListener('submit', validateRegisterForm);

// Attach event listener to the input fields
inputFields.forEach(function (field) {
 field.addEventListener('input', function () {
     // Remove the invalid class if the field is not empty
     if (this.value !== '') {
         this.classList.remove("invalid");
     }
 });
});
var loginForm = document.querySelector("#login");
var loginInputFields = document.querySelectorAll("#login .input-box input");

// Attach event listener to the form
loginForm.addEventListener('submit', validateLoginForm);

// Attach event listener to the input fields
loginInputFields.forEach(function (field) {
 field.addEventListener('input', function () {
    // Remove the invalid class if the field is not empty
    if (this.value !== '') {
        this.classList.remove("invalid");
        
    }
 });
});

function validateLoginForm(event) {
    event.preventDefault();
   var username = document.querySelector("#login .input-box input[type='text']");
   var password = document.querySelector("#login .input-box input[type='password']");
 
   var isValid = true; // Flag to track form validity
 
   var inputFields = document.querySelectorAll("#login .input-box input");
   var errorMessages = document.querySelectorAll("#login .error-message");
 inputFields.forEach(function (field) {
        field.classList.remove("invalid");
    });
    errorMessages.forEach(function (message) {
        message.textContent = "";
    });

   if (username) {
       var usernameValue = username.value.trim();
       var usernamePattern = /^(?![0-9])[a-zA-Z0-9\u0600-\u06FF]{3,}$/;
       if (!usernamePattern.test(usernameValue)) {
           username.classList.add("invalid");
           var existingErrorMessage = username.nextElementSibling;
           if (!existingErrorMessage || !existingErrorMessage.classList.contains('error-message')) {
               var errorMessage = document.createElement('span');
               errorMessage.textContent = 'لطفا یک نام کاربری وارد کنید';
               errorMessage.style.color = "white";
               errorMessage.classList.add('error-message');
               username.parentElement.appendChild(errorMessage);

           }
           isValid = false;
       }
    }

  if (password) {
       var passwordValue = password.value.trim();
       var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/;
       if (!passwordPattern.test(passwordValue)) {
           password.classList.add("invalid");
           var existingErrorMessage = password.nextElementSibling;
           if (!existingErrorMessage || !existingErrorMessage.classList.contains('error-message')) {
               var errorMessage = document.createElement('span');
               errorMessage.textContent = 'لطفا یک نام کاربری وارد کنید';
               errorMessage.style.color = "white";
               errorMessage.classList.add('error-message');
               password.parentElement.appendChild(errorMessage);
           }
           isValid = false;
       }
     }
     if (isValid) {
        password.classList.remove("invalid");
       // Store username and password in local storage
       localStorage.setItem("username", username.value);
       localStorage.setItem("password", password.value);
       window.location.href="mainPage.html";
    }
  
    return isValid;
  } 
 function isValidNationalCode(nationalCode) {
    if (/^[0-9]{10}$/.test(nationalCode)) { // valid codemelli.lenght 
        let sumCodemelliNumber = 0; 
        for (let i = 0; i < 9; i++) { 
            sumCodemelliNumber += parseInt(nationalCode[i]) * (10 - i); 
        } 
        let rem = sumCodemelliNumber % 11; 
        let lastNationalCodeDigit = parseInt(nationalCode[9]); 
        if ((rem > 1 && (11 - rem === lastNationalCodeDigit)) || (rem <= 1 && rem === lastNationalCodeDigit)) { // valid codemelli 
            return true; 
        } else { 
            return false; 
        } 
    } else { // invalid codemelli 
        return false; 
    } 
}
 
 function validateRegisterForm() {
    var username = document.querySelector("#register .input-box input[type='text']");
    var password = document.querySelector("#register .input-box input[type='password']");
    var nationalCode = document.querySelector("#register .input-box input[id='nationalCode']");
    var phoneNumber = document.querySelector("#register .input-box input[type='number']:not([id='nationalCode'])"); 
    var email = document.querySelector("#register .input-box input[type='email']");
    var gender = document.querySelector("#register .input-box input[type='radio']:checked");
    var educationLevel = document.querySelector("#register .input-box select");
    var isValid = true; // Flag to track form validity
    document.getElementById('genderError').innerText = '';
 
    // Reset previous invalid field styles
    var inputFields = document.querySelectorAll("#register .input-box input");
    var errorMessages = document.querySelectorAll("#register .error-message");
    inputFields.forEach(function (field) {
        field.classList.remove("invalid");
    });
    errorMessages.forEach(function (message) {
        message.textContent = "";
    });
 
    // Validate each field separately
    if (username) {
        var usernameValue = username.value.trim();
        var usernamePattern = /^(?![0-9])[a-zA-Z0-9\u0600-\u06FF]{3,}$/;
        if (!usernamePattern.test(usernameValue)) {
            username.classList.add("invalid");
            var existingErrorMessage = username.nextElementSibling;
            if (!existingErrorMessage || !existingErrorMessage.classList.contains('error-message')) {
                var errorMessage = document.createElement('span');
                errorMessage.textContent = 'لطفا یک نام کاربری وارد کنید';
                errorMessage.style.color = "white";
                errorMessage.classList.add('error-message');
                username.parentElement.appendChild(errorMessage);
            }
            isValid = false;
        }
     }
 
     if (password) {
        var passwordValue = password.value.trim();
        var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/;
        if (!passwordPattern.test(passwordValue)) {
            password.classList.add("invalid");
            var existingErrorMessage = password.nextElementSibling;
            if (!existingErrorMessage || !existingErrorMessage.classList.contains('error-message')) {
                var errorMessage = document.createElement('span');
                errorMessage.textContent = 'لطفا یک نام کاربری مناسب وارد کنید';
                errorMessage.style.color = "white";
                errorMessage.classList.add('error-message');
                password.parentElement.appendChild(errorMessage);
            }
            isValid = false;
        }
      }
      
      if (nationalCode) {
        var nationalCodeValue = nationalCode.value.trim();
        if (!isValidNationalCode(nationalCodeValue)) {
            nationalCode.classList.add("invalid");
            var existingErrorMessage = nationalCode.nextElementSibling;
            if (!existingErrorMessage || !existingErrorMessage.classList.contains('error-message')) {
                var errorMessage = document.createElement('span');
                errorMessage.textContent = 'لطفا کد ملی معتبر وارد کنید';
                errorMessage.style.color = "white";
                errorMessage.classList.add('error-message');
                nationalCode.parentElement.appendChild(errorMessage);
            }
            isValid = false;
        }
      }
      
      if (phoneNumber) {
        var phoneNumberValue = phoneNumber.value.trim();
        var phoneNumberPattern = /^0\d{10}$/;
        if (!phoneNumberPattern.test(phoneNumberValue)) {
            phoneNumber.classList.add("invalid");
            var existingErrorMessage = phoneNumber.nextElementSibling;
            if (!existingErrorMessage || !existingErrorMessage.classList.contains('error-message')) {
                var errorMessage = document.createElement('span');
                errorMessage.textContent = 'لطفا شماره تلفن معتبر وارد کنید';
                errorMessage.style.color = "white";
                errorMessage.classList.add('error-message');
                phoneNumber.parentElement.appendChild(errorMessage);
            }
            isValid = false;
        }
      }
      
      if (email) {
        var emailValue = email.value.trim();
        var emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (!emailPattern.test(emailValue)) {
            email.classList.add("invalid");
            var existingErrorMessage = email.nextElementSibling;
            if (!existingErrorMessage || !existingErrorMessage.classList.contains('error-message')) {
                var errorMessage = document.createElement('span');
                errorMessage.textContent = 'لطفا یک ایمیل وارد کنید';
                errorMessage.style.color = "white";
                errorMessage.classList.add('error-message');
                email.parentElement.appendChild(errorMessage);
            }
            isValid = false;
        }
      }
      var gender = document.querySelector("#register .input-box input[type='radio']:checked");
      if (!gender) {
        // Add the invalid class and display an error message
        var errorContainer = document.getElementById('genderError');
        errorContainer.textContent = 'لطفا جنسیت خود را انتخاب کنید';
        isValid = false;
      }
      var educationLevel = document.querySelector("#register .input-box select");

       
      if (educationLevel.value === "") {
 // No option is selected, add the invalid class and display an error message
       var errorContainer = document.getElementById('educError');
       alert('لطفا مدرک تحصیلی خود را انتخاب کنید')
       isValid = false;
}
 
    if (isValid) {
        // Submit the form or perform further actions
        window.location.href = "mainPage.html";
    }
 
    return isValid;
 }
 
 function login() {
     
     var a = document.getElementById("loginBtn");
     var b = document.getElementById("registerBtn");
     var x = document.getElementById("login");
     var y = document.getElementById("register");
     x.style.left = "4px";
     y.style.right = "-520px";
     a.classList.add("white-btn");
     b.classList.remove("white-btn");
     x.style.opacity = 1;
     y.style.opacity = 0;
 }
 
 function register() {
     var a = document.getElementById("loginBtn");
     var b = document.getElementById("registerBtn");
     var x = document.getElementById("login");
     var y = document.getElementById("register");
 
     if (x && y) {
         x.style.left = "-510px";
         y.style.right = "5px";
         a.classList.remove("white-btn");
         b.classList.add("white-btn");
         x.style.opacity = 0;
         y.style.opacity = 1;
     }
 }
 