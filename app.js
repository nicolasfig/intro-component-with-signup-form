/* Getting input fields*/

const nameInput = document.querySelector(".name");
const msgName = document.querySelector(".msg-name");

const lastname = document.querySelector(".lastname");
const msgLastName = document.querySelector(".msg-lastname");

const email = document.querySelector(".email");
const msgEmail = document.querySelector(".msg-email");

const password = document.querySelector(".password");
const msgPass = document.querySelector(".msg-password");

/* Getting buttons */
const trailBtn = document.querySelector(".trial-btn");
const submitBtn = document.querySelector(".submit-btn");

const validation = () => {
  if (nameInput.value === "") {
    msgName.innerHTML = "Name cannot be empty";
  }
  if (lastname.value === "") {
    msgLastName.innerHTML = "Last Name cannot be empty";
  }
  if (email.value === "") {
    msgEmail.innerHTML = "Email cannot be empty";
  }
  if (password.value === "") {
    msgPass.innerHTML = "Password cannot be empty";
  }
};

submitBtn.addEventListener("click", () => {
  validation();
});
