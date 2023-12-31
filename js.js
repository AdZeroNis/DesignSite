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
      } else {
          // Add the invalid class if the field is empty
          this.classList.add("invalid");
      }
  });
});
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
 function isValidNationalCode(nationalCode) {
    var regex = /^[0-9]{10}$/;
     if (!regex.test(nationalCode)) {
         return false;
     }
  
     let sumnationalCodeNumber = 0;
     for (let i = 0; i < 9; i++) {
         sumnationalCodeNumber += parseInt(nationalCode[i]) * (10 - i);
     }
  
     var rem = sumnationalCodeNumber % 11;
     var lastNationalCodeDigit = parseInt(nationalCode[9]);
     if ((rem > 1 && (11 * rem === lastNationalCodeDigit)) || (rem <= 1 && rem === lastNationalCodeDigit)) {
         return true;
     }
  
     return false;
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
     if (!gender) {
        document.getElementById('genderError').innerText = 'لطفا جنسیت خود را انتخاب کنید';
        isValid = false;
    }
     // Reset previous invalid field styles
     var inputFields = document.querySelectorAll("#register .input-box input");
     var errorMessages = document.querySelectorAll("#register .error-message");
     inputFields.forEach(function (field) {
         field.classList.remove("invalid");
     });
     errorMessages.forEach(function (message) {
         message.textContent = "";
     });
     
 
     if (educationLevel && password && email && phoneNumber && nationalCode && username) {
         var usernameValue = username.value.trim();
         var passwordValue = password.value.trim();
         var emailValue = email.value.trim();
         var phoneNumberValue = phoneNumber.value.trim();
         var nationalCodeValue = nationalCode.value.trim();
         var educationLevelValue = educationLevel.value.trim(); 
         
 
         // Validate patterns for individual fields
         var usernamePattern = /^(?![0-9])[a-zA-Z0-9\u0600-\u06FF]{3,}$/;
         var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/;
         var phoneNumberPattern = /^0\d{10}$/;
         var emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
         var educationLevelPattern = /^(high-school|bachelors|masters|phd)$/;
           if (!educationLevelPattern.test(educationLevelValue)) { 
             alert("مدرک تحصیلی را انتخاب کنید")
             isValid = false;
         }
 
         if (!usernamePattern.test(usernameValue)) {
             username.classList.add("invalid");
             document.getElementById('usernameError').textContent = 'لطفا یک نام کاربری وارد کنید';
             isValid = false;
         }
 
         if (!passwordPattern.test(passwordValue)) {
             password.classList.add("invalid");
             document.getElementById('passwordError').textContent = 'لطفا رمز مناسب انتخاب کنید';
             isValid = false;
         }
 
         if (!isValidNationalCode(nationalCodeValue)) {
             nationalCode.classList.add("invalid");
             document.getElementById('CodeError').textContent = 'لطفا یک کد ملی معتبر وارد کنید';
             isValid = false;
         }
 
         if (!phoneNumberPattern.test(phoneNumberValue)) {
             phoneNumber.classList.add("invalid");
             document.getElementById('PhoneError').textContent = 'لطفا یک شماره تلفن صحیح وارد کنید';
             isValid = false;
         }
 
         if (!emailPattern.test(emailValue)) {
             email.classList.add("invalid");
             document.getElementById('emailError').textContent = 'لطفا ایمیل درست وارد کنید';
             isValid = false;
         }
         
     } else {
         
         isValid = false;
         username.classList.add("invalid");
         nationalCode.classList.add("invalid");
         email.classList.add("invalid");
         phoneNumber.classList.add("invalid");
         password.classList.add("invalid");
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
 