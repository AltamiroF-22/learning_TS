const SHOW_ERROR_MESSAGES = "show-error-message";

const form = document.querySelector(".form") as HTMLFormElement;
const userName = document.querySelector(".username") as HTMLInputElement;
const userEmail = document.querySelector(".email") as HTMLInputElement;
const userPassword = document.querySelector(".password") as HTMLInputElement;
const userPassword2 = document.querySelector(".password2") as HTMLInputElement;

form.addEventListener("submit", function (e: Event) {
  e.preventDefault();
  hideErrorMessages(this);
  checkForUserNameLength(userName);
  checkForUserPasswordLength(userPassword, userPassword2);
  checkForEmptyFields(userName, userEmail, userPassword, userPassword2);
  checkForEqualsPassWords(userPassword, userPassword2);
  // if no erros messages then submit
  if (checkIsFormValid(this)) {
    // form.submit();
    alert("O formulário foi enviado");
  }
});

// check if in the form has some empty fild
const checkForEmptyFields = (
  userName: HTMLInputElement,
  userEmail: HTMLInputElement,
  userPassword: HTMLInputElement,
  userPassword2: HTMLInputElement
): void => {
  if (userName.value.trim() === "") {
    showErrorMessage(userName, "Nome do usuário é requerido!");
  }

  if (userEmail.value.trim() === "") {
    showErrorMessage(userEmail, "E-mail do usuário é requerido!");
  }

  if (userPassword.value.trim() === "") {
    showErrorMessage(userPassword, "Senha do usuário é requerida!");
  }
  if (userPassword2.value.trim() === "") {
    showErrorMessage(userPassword2, "Senha do usuário é requerida!");
  }
  return;
};

// check if the password is equals
const checkForEqualsPassWords = (
  userPassword: HTMLInputElement,
  userPassword2: HTMLInputElement
): void => {
  if (userPassword.value.trim() != userPassword2.value.trim()) {
    showErrorMessage(userPassword, "As senhas devem ser iguais!");
    showErrorMessage(userPassword2, "As senhas devem ser iguais!");
  }
  return;
};

// check if the user name have less than 5 or more than 15 characters
const checkForUserNameLength = (userName: HTMLInputElement): void => {
  if (userName.value.trim().length < 5 || userName.value.trim().length > 15) {
    showErrorMessage(
      userName,
      "Nome de usuário precisa ter entre 5 - 15 caracteres"
    );
  }
};

// check if the user Passwords have less than 10 or more than 24 characters
const checkForUserPasswordLength = (
  userPassword: HTMLInputElement,
  userPassword2: HTMLInputElement
): void => {
  if (
    userPassword.value.trim().length < 10 ||
    userPassword.value.trim().length > 24
  ) {
    showErrorMessage(
      userPassword,
      "A senha precisa ter entre 10 - 24 caracteres"
    );
    showErrorMessage(
      userPassword2,
      "A senha precisa ter entre 10 - 24 caracteres"
    );
  }
};

// this function hide the errors messages who is false
const hideErrorMessages = (form: HTMLFormElement): void => {
  form
    .querySelectorAll("." + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
};

// this fuction creates an error messages
const showErrorMessage = (input: HTMLInputElement, msg: string): void => {
  const formField = input.parentElement as HTMLDivElement;

  const errorMessage = formField.querySelector(
    ".error-message"
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formField.classList.add(SHOW_ERROR_MESSAGES);
};

const checkIsFormValid = (form: HTMLFormElement): boolean => {
  let send = true;
  form
    .querySelectorAll("." + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));
  return send;
};
