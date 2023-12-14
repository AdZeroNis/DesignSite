window.addEventListener("DOMContentLoaded", function() {
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
    if(storedPassword==null && storedUsername==null){
      window.location.href="HTML2.html";
    }

    if (storedUsername && storedPassword) {
        var usernameInput = document.querySelector("#login .input-box input[type='text']");
        var passwordInput = document.querySelector("#login .input-box input[type='password']");

        usernameInput.value = storedUsername;
        passwordInput.value = storedPassword;
    }
});
