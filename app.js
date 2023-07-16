/* Created by Tivotal */

let passInput = document.querySelector(".password");
let toggleBtn = document.querySelector(".toggleBtn");
let form = document.querySelector(".form");

let showError = (field, error) => {
  //adding error class to field
  field.classList.add("error");

  //creating new span element
  let errorText = document.createElement("span");
  //adding classname to span
  errorText.classList.add("error-text");
  //assigning value to error text
  errorText.innerText = error;

  //getting field parent and appending error text into it
  field.closest(".form-group").appendChild(errorText);
};

let handleData = (e) => {
  //preventing form to submit
  e.preventDefault();

  //getting all inputs
  let nameInput = document.querySelector(".name");
  let emailInput = document.querySelector(".email");
  let genderInput = document.querySelector(".gender");
  let dateInput = document.querySelector(".date");

  //getting all input value and trim them
  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let pass = passInput.value.trim();
  let date = dateInput.value;
  let gender = genderInput.value;

  //general format for email
  let emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  //removing all error class and error text before validating form
  document.querySelectorAll(".error").forEach((error) => {
    error.classList.remove("error");
  });

  document.querySelectorAll(".error-text").forEach((text) => text.remove());

  //validating data
  if (name === "") {
    showError(nameInput, "Enter your full name");
  }

  if (!emailFormat.test(email)) {
    showError(emailInput, "Enter valid email");
  }

  if (date === "") {
    showError(dateInput, "Enter your date of birth");
  }

  if (gender === "") {
    showError(genderInput, "Select your gender");
  }

  if (pass === "") {
    showError(passInput, "Enter your password");
  }

  //checking any errors in form
  let errorInputs = document.querySelectorAll(".error");

  //returning if any error exists
  if (errorInputs.length > 0) return;

  //if there is no error , submitting the form
  form.submit();
};

toggleBtn.addEventListener("click", () => {
  //changing password input type
  passInput.type = passInput.type === "password" ? "text" : "password";

  //changing icon based on password input type
  toggleBtn.className =
    passInput.type === "password" ? "fas fa-eye" : "fas fa-eye-slash";
});

form.addEventListener("submit", handleData);
