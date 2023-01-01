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
    nameInput.style.border = "1px solid var(--dark-red)";
  } else {
    msgName.innerHTML = "";
  }
  if (lastname.value === "") {
    msgLastName.innerHTML = "Last Name cannot be empty";
    lastname.style.border = "1px solid var(--dark-red)";
  } else {
    msgLastName.innerHTML = "";
  }
  if (email.value === "") {
    msgEmail.innerHTML = "Email cannot be empty";
    email.style.border = "1px solid var(--dark-red)";
  } else {
    msgEmail.innerHTML = "";
  }
  if (!pattern.test(email.value)) {
    msgEmail.innerHTML = "Looks like this is not an email";
    email.style.border = "1px solid var(--dark-red)";
  } else {
    msgEmail.innerHTML = "";
  }
  if (password.value === "") {
    msgPass.innerHTML = "Password cannot be empty";
    password.style.border = "1px solid var(--dark-red)";
    password.placeholder = "f06a";
  } else {
    msgPass.innerHTML = "";
  }
};

submitBtn.addEventListener("click", () => {
  validation();
});
