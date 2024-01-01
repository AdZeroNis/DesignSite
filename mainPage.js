window.addEventListener("DOMContentLoaded", function () {
  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");
  if (storedPassword == null && storedUsername == null) {
    window.location.href = "HTML2.html";
  }

  if (storedUsername && storedPassword) {
    var usernameInput = document.querySelector(
      "#login .input-box input[type='text']"
    );
    var passwordInput = document.querySelector(
      "#login .input-box input[type='password']"
    );

    if (usernameInput && passwordInput) {
      usernameInput.value = storedUsername;
      passwordInput.value = storedPassword;
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Function to load content dynamically
  function loadContent(url) {
    if (url === "./HTML2.html") {
      // If the link is for "Exit", navigate directly without displaying content in the Outlet section
      window.location.href = url;
    } else {
      // For other links, show the Outlet section and load content
      document.querySelector(".Outlet").style.display = "block";
      fetch(url)
        .then((response) => response.text())
        .then((data) => {
          document.querySelector(".Outlet").innerHTML = data;

          // Execute Chart.js scripts after loading the content
          executeChartScripts();
        })
        .catch((error) => console.error("Error loading content:", error));
    }
  }

  // Function to toggle the afterClick class
  function toggleAfterClickClass(clickedItem) {
    document.querySelectorAll(".item").forEach(function (item) {
      item.classList.remove("afterClick");
    });
    clickedItem.classList.add("afterClick");
  }

  // Function to execute Chart.js scripts
  function executeChartScripts() {
    var ctxLine = document.getElementById('myLineChart').getContext('2d');
    var myLineChart = new Chart(ctxLine, {
      type: 'line',
      data: {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
        datasets: [
          {
            label: 'میزان فروش 1',
            data: [10, 20, 15, 25, 18],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
          },
          {
            label: 'میزان فروش 2',
            data: [15, 25, 18, 30, 22],
            borderColor: 'rgba(255, 0, 0, 1)',
            fill: false
          },
          {
            label: 'میزان فروش 3',
            data: [5, 15, 10, 20, 12],
            borderColor: 'rgba(0, 0, 255, 1)',
            fill: false
          }
        ]
      }
    });

    var ctxBar = document.getElementById('myBarChart').getContext('2d');
    var myBarChart = new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
        datasets: [{
          label: 'میزان رضایت',
          data: [10, 20, 15, 25, 18],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      }
    });
  }

  // Load content for the default link by default
  const defaultLink = document.querySelector(".item");
  loadContent(defaultLink.getAttribute("href"));
  toggleAfterClickClass(defaultLink);

  // Event listeners for each li element
  document.querySelectorAll(".item").forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const targetUrl = item.getAttribute("href");
      loadContent(targetUrl);
      toggleAfterClickClass(item);
    });
  });
});

