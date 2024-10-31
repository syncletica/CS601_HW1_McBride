document.addEventListener("DOMContentLoaded", function () {
    var namePattern = /^[A-Za-z\s]+$/;
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    // Validate name length
    function validateNameLength(input, lengthSpanId) {
      var value = input.value;
      var lengthMessage = document.getElementById(lengthSpanId);
  
      if (value === "") {
        lengthMessage.textContent = "Contains at least 2 characters"; // Neutral message
        lengthMessage.classList.remove("error", "success");
      } else if (value.length >= 2) {
        lengthMessage.textContent = "✔ Contains at least 2 characters"; // Success message
        lengthMessage.classList.remove("error");
        lengthMessage.classList.add("success");
      } else {
        lengthMessage.textContent = "✘ Contains at least 2 characters"; // Error message
        lengthMessage.classList.remove("success");
        lengthMessage.classList.add("error");
      }
    }
  
    // Validate name characters
    function validateNameCharacters(input, lettersSpanId) {
      var value = input.value.trim();
      var lettersMessage = document.getElementById(lettersSpanId);
  
      if (value === "") {
        lettersMessage.textContent = "Contains only letters"; // Neutral message
        lettersMessage.classList.remove("error", "success");
      } else if (namePattern.test(value)) {
        lettersMessage.textContent = "✔ Contains only letters"; // Success message
        lettersMessage.classList.remove("error");
        lettersMessage.classList.add("success");
      } else {
        lettersMessage.textContent = "✘ Contains only letters"; // Error message
        lettersMessage.classList.remove("success");
        lettersMessage.classList.add("error");
      }
    }
  
    // Validate email format
    function validateEmail(input, emailSpanId) {
      var value = input.value.trim();
      var emailMessage = document.getElementById(emailSpanId);
  
      if (value === "") {
        emailMessage.textContent = "Valid email required"; // Neutral message
        emailMessage.classList.remove("error", "success");
      } else if (emailPattern.test(value)) {
        emailMessage.textContent = "✔ Valid email required"; // Success message
        emailMessage.classList.remove("error");
        emailMessage.classList.add("success");
      } else {
        emailMessage.textContent = "✘ Valid email required"; // Error message
        emailMessage.classList.remove("success");
        emailMessage.classList.add("error");
      }
    }
  
    // Validate package selection
    function validatePackage() {
      var packageSelect = document.getElementById("package");
      var packageMessage = document.getElementById("package-error");
  
      if (packageSelect.value === "") {
        packageMessage.textContent = "Selection required"; // Neutral message
        packageMessage.classList.remove("error", "success");
      } else {
        packageMessage.textContent = "✔ Selection required"; // Success message
        packageMessage.classList.remove("error");
        packageMessage.classList.add("success");
      }
    }
  
    // Validate subscribe checkbox
    function validateSubscribe() {
      var subscribeCheckbox = document.getElementById("subscribe");
      var subscribeMessage = document.getElementById("subscribe-error");
  
      if (!subscribeCheckbox.checked) {
        subscribeMessage.textContent = "Confirmation required"; // Neutral message
        subscribeMessage.classList.remove("error", "success");
      } else {
        subscribeMessage.textContent = "✔ Confirmation required"; // Success message
        subscribeMessage.classList.remove("error");
        subscribeMessage.classList.add("success");
      }
    }
  
    // Add event listeners for real-time validation of first name
    document.getElementById("firstname").addEventListener("input", function () {
      validateNameLength(this, "firstname-length");
    });
  
    // Add event listeners for real-time validation of last name
    document.getElementById("lastname").addEventListener("input", function () {
      validateNameLength(this, "lastname-length");
    });
  
    // Add event listener for real-time validation of email
    document.getElementById("email").addEventListener("input", function () {
      validateEmail(this, "email-format");
    });
  
    // Add event listener for package selection
    document.getElementById("package").addEventListener("change", function () {
      validatePackage();
    });
  
    // Add event listener for subscribe checkbox
    document.getElementById("subscribe").addEventListener("change", function () {
      validateSubscribe();
    });
  
    // On form submission
    document.querySelector("form").onsubmit = function (event) {
      var firstName = document.getElementById("firstname");
      var lastName = document.getElementById("lastname");
      var email = document.getElementById("email");
  
      // Validate names
      validateNameLength(firstName, "firstname-length");
      validateNameLength(lastName, "lastname-length");
  
      // Validate email
      validateEmail(email, "email-format");
  
      // Validate package and subscribe
      validatePackage();
      validateSubscribe();
  
      // Prevent form submission if there are any errors
      if (document.querySelector(".error")) {
        event.preventDefault(); // Stop form submission if there are errors
      }
    };
  });
  