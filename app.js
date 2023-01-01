/* Getting input fields*/

const nameInput = document.querySelector(".name");
const msgName = document.querySelector(".msg-name");

const lastname = document.querySelector(".lastname");
const msgLastName = document.querySelector(".msg-lastname");

const email = document.querySelector(".email");
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const msgEmail = document.querySelector(".msg-email");

const password = document.querySelector(".password");
const msgPass = document.querySelector(".msg-password");

/* Getting buttons */
const trailBtn = document.querySelector(".trial-btn");
const submitBtn = document.querySelector(".submit-btn");

const validation = () => {
  if (nameInput.value === "") {
    msgName.innerHTML = "Name cannot be empty";
    nameInput.style.border = "2px solid var(--dark-red)";
    nameInput.placeholder = "";
    nameInput.style.backgroundImage =
      "url(./images/circle-exclamation-solid.svg)";
  } else {
    msgName.innerHTML = "";
  }
  if (lastname.value === "") {
    msgLastName.innerHTML = "Last Name cannot be empty";
    lastname.style.border = "2px solid var(--dark-red)";
    lastname.placeholder = "";
    lastname.style.backgroundImage =
      "url(./images/circle-exclamation-solid.svg)";
  } else {
    msgLastName.innerHTML = "";
  }
  if (email.value === "") {
    msgEmail.innerHTML = "Email cannot be empty";
    email.style.border = "2px solid var(--dark-red)";
    email.placeholder = "";
    email.style.backgroundImage = "url(./images/circle-exclamation-solid.svg)";
  } else {
    msgEmail.innerHTML = "";
  }
  if (!pattern.test(email.value)) {
    msgEmail.innerHTML = "Looks like this is not an email";
    email.style.border = "2px solid var(--dark-red)";
    email.placeholder = "";
    email.style.backgroundImage = "url(./images/circle-exclamation-solid.svg)";
  } else {
    msgEmail.innerHTML = "";
  }
  if (password.value === "") {
    msgPass.innerHTML = "Password cannot be empty";
    password.style.border = "2px solid var(--dark-red)";
    password.placeholder = "";
    password.style.backgroundImage =
      "url(./images/circle-exclamation-solid.svg)";
  } else {
    msgPass.innerHTML = "";
  }
};

submitBtn.addEventListener("click", () => {
  validation();
});
