// Not using this file in html
// using realTimeValidate.js instead

document.addEventListener("DOMContentLoaded", function () {
  function validateForm(event) {
    var firstName = document.getElementById("firstname");
    var lastName = document.getElementById("lastname");
    var email = document.getElementById("email").value.trim();
    var selectedPackage = document.getElementById("package").value;
    var subscribe = document.getElementById("subscribe").checked;

    var namePattern = /^[A-Za-z\s]+$/;
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (firstName.value.length < 2) {
      alert("First name is required and must have 2 or more letters.");
      firstName.focus();
      return false;
    }

    if (!namePattern.test(firstName.value)) {
      alert("First name can only contain letters.");
      firstName.focus();
      return false;
    }

    if (lastName.value.length < 2) {
      alert("Last name is required and must have 2 or more letters.");
      lastName.focus();
      return false;
    }

    if (!namePattern.test(lastName.value)) {
      alert("Last name can only contain letters.");
      lastName.focus();
      return false;
    }

    if (email.length === 0) {
      alert("Email is required.");
      document.getElementById("email").focus();
      return false;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address (e.g., user@example.com)");
      document.getElementById("email").focus();
      return false;
    }

    if (selectedPackage === "") {
      alert("Please select a package.");
      document.getElementById("package").focus();
      return false;
    }

    if (!subscribe) {
      alert(
        "Must confirm subscription to our newsletter by checking the checkbox."
      );
      document.getElementById("subscribe").focus();
      return false;
    }

    document.getElementById("form-wrapper").style.display = "none";

    document.getElementById("first-name-display").textContent = firstName.value;
    document.getElementById("last-name-display").textContent = lastName.value;
    document.getElementById("email-display").textContent = email;
    document.getElementById("package-display").textContent = selectedPackage;

    document.getElementById("completionMessage").style.display = "block";

    return false;
  }
  document.querySelector("form").onsubmit = validateForm;
});
