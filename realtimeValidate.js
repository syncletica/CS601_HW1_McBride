document.addEventListener("DOMContentLoaded", function () {
  var namePattern = /^[A-Za-z\s]+$/;
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // FIRST NAME LENGTH
  function validateFirstNameLength(input) {
    var value = input.value.trim();
    var lengthMessage = document.getElementById("firstname-length");

    if (value === "") {
      lengthMessage.textContent = "✘ Contains at least 2 characters";
      lengthMessage.classList.remove("success");
      lengthMessage.classList.add("error");
      lengthMessage.style.color = "red";
    } else if (value.length >= 2) {
      lengthMessage.textContent = "✔ Contains at least 2 characters";
      lengthMessage.classList.remove("error");
      lengthMessage.classList.add("success");
      lengthMessage.style.color = "green";
    } else {
      lengthMessage.textContent = "✘ Contains at least 2 characters";
      lengthMessage.classList.remove("success");
      lengthMessage.classList.add("error");
      lengthMessage.style.color = "red";
    }
  }

  // FIRST NAME CHAR
  function validateFirstNameCharacters(input) {
    var value = input.value.trim();
    var lettersMessage = document.getElementById("firstname-letters");

    if (value === "") {
      lettersMessage.textContent = "✘ Contains only letters";
      lettersMessage.classList.remove("success");
      lettersMessage.classList.add("error");
      lettersMessage.style.color = "red";
    } else if (namePattern.test(value)) {
      lettersMessage.textContent = "✔ Contains only letters";
      lettersMessage.classList.remove("error");
      lettersMessage.classList.add("success");
      lettersMessage.style.color = "green";
    } else {
      lettersMessage.textContent = "✘ Contains only letters";
      lettersMessage.classList.remove("success");
      lettersMessage.classList.add("error");
      lettersMessage.style.color = "red";
    }
  }

  // LAST NAME LENGTH
  function validateLastNameLength(input) {
    var value = input.value.trim();
    var lengthMessage = document.getElementById("lastname-length");

    if (value === "") {
      lengthMessage.textContent = "✘ Contains at least 2 characters";
      lengthMessage.classList.remove("success");
      lengthMessage.classList.add("error");
      lengthMessage.style.color = "red";
    } else if (value.length >= 2) {
      lengthMessage.textContent = "✔ Contains at least 2 characters";
      lengthMessage.classList.remove("error");
      lengthMessage.classList.add("success");
      lengthMessage.style.color = "green";
    } else {
      lengthMessage.textContent = "✘ Contains at least 2 characters";
      lengthMessage.classList.remove("success");
      lengthMessage.classList.add("error");
      lengthMessage.style.color = "red";
    }
  }

  // LAST NAME CHAR ONLY
  function validateLastNameCharacters(input) {
    var value = input.value.trim();
    var lettersMessage = document.getElementById("lastname-letters");

    if (value === "") {
      lettersMessage.textContent = "✘ Contains only letters";
      lettersMessage.classList.remove("success");
      lettersMessage.classList.add("error");
      lettersMessage.style.color = "red";
    } else if (namePattern.test(value)) {
      lettersMessage.textContent = "✔ Contains only letters";
      lettersMessage.classList.remove("error");
      lettersMessage.classList.add("success");
      lettersMessage.style.color = "green";
    } else {
      lettersMessage.textContent = "✘ Contains only letters";
      lettersMessage.classList.remove("success");
      lettersMessage.classList.add("error");
      lettersMessage.style.color = "red";
    }
  }

  //EMAIL FORMAT
  function validateEmail(input) {
    var value = input.value.trim();
    var emailMessage = document.getElementById("email-format");

    if (value === "") {
      emailMessage.textContent = "✘ Valid email required";
      emailMessage.classList.remove("error", "success");
      emailMessage.style.color = "red";
    } else if (emailPattern.test(value)) {
      emailMessage.textContent = "✔ Valid email required";
      emailMessage.classList.remove("error");
      emailMessage.classList.add("success");
      emailMessage.style.color = "green";
    } else {
      emailMessage.textContent = "✘ Valid email required";
      emailMessage.classList.remove("success");
      emailMessage.classList.add("error");
      emailMessage.style.color = "red";
    }
  }

  // PACKAGE SELECTED
  function validatePackage() {
    var packageSelect = document.getElementById("package");
    var packageMessage = document.getElementById("package-error");

    if (packageSelect.value === "") {
      packageMessage.textContent = "✘ Selection required";
      packageMessage.classList.remove("success");
      packageMessage.classList.add("error");
      packageMessage.style.color = "red";
    } else {
      packageMessage.textContent = "✔ Selection required";
      packageMessage.classList.remove("error");
      packageMessage.classList.add("success");
      packageMessage.style.color = "green";
    }
  }

  // CHECKBOX CHECKED
  function validateSubscribe() {
    var subscribeCheckbox = document.getElementById("subscribe");
    var subscribeMessage = document.getElementById("subscribe-error");

    if (!subscribeCheckbox.checked) {
      subscribeMessage.textContent = "✘ Confirmation required";
      subscribeMessage.classList.remove("success");
      subscribeMessage.classList.add("error");
      subscribeMessage.style.color = "red";
    } else {
      subscribeMessage.textContent = "✔ Confirmation required";
      subscribeMessage.classList.remove("error");
      subscribeMessage.classList.add("success");
      subscribeMessage.style.color = "green";
    }
  }

  // REALTIME FEEDBACK
  document.getElementById("firstname").addEventListener("input", function () {
    validateFirstNameLength(this);
    validateFirstNameCharacters(this);
  });

  document.getElementById("lastname").addEventListener("input", function () {
    validateLastNameLength(this);
    validateLastNameCharacters(this);
  });

  document.getElementById("email").addEventListener("input", function () {
    validateEmail(this);
  });

  document.getElementById("package").addEventListener("change", function () {
    validatePackage();
  });

  document.getElementById("subscribe").addEventListener("change", function () {
    validateSubscribe();
  });

  // VALIDATE ON SUBMIT
  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();

    var firstNameInput = document.getElementById("firstname");
    var lastNameInput = document.getElementById("lastname");
    var emailInput = document.getElementById("email");
    var packageSelect = document.getElementById("package");

    validateFirstNameLength(firstNameInput);
    validateFirstNameCharacters(firstNameInput);

    validateLastNameLength(lastNameInput);
    validateLastNameCharacters(lastNameInput);

    validateEmail(emailInput);

    validatePackage(packageSelect);

    validateSubscribe();

    if (document.querySelector(".error")) {
      return;
    }

    //COMPLETION MSG
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var selectedPackage = document.getElementById("package").value;

    document.getElementById("form-wrapper").style.display = "none";

    document.getElementById("first-name-display").textContent = firstName;
    document.getElementById("last-name-display").textContent = lastName;
    document.getElementById("email-display").textContent = email;
    document.getElementById("package-display").textContent = selectedPackage;

    document.getElementById("completionMessage").style.display = "block";
  };
});
