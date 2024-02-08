/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/TypeAnotation/exercicio/form-controll.ts":
/*!******************************************************!*\
  !*** ./src/TypeAnotation/exercicio/form-controll.ts ***!
  \******************************************************/
/***/ (() => {


const SHOW_ERROR_MESSAGES = "show-error-message";
const form = document.querySelector(".form");
const userName = document.querySelector(".username");
const userEmail = document.querySelector(".email");
const userPassword = document.querySelector(".password");
const userPassword2 = document.querySelector(".password2");
form.addEventListener("submit", function (e) {
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
const checkForEmptyFields = (userName, userEmail, userPassword, userPassword2) => {
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
const checkForEqualsPassWords = (userPassword, userPassword2) => {
    if (userPassword.value.trim() != userPassword2.value.trim()) {
        showErrorMessage(userPassword, "As senhas devem ser iguais!");
        showErrorMessage(userPassword2, "As senhas devem ser iguais!");
    }
    return;
};
// check if the user name have less than 5 or more than 15 characters
const checkForUserNameLength = (userName) => {
    if (userName.value.trim().length < 5 || userName.value.trim().length > 15) {
        showErrorMessage(userName, "Nome de usuário precisa ter entre 5 - 15 caracteres");
    }
};
// check if the user Passwords have less than 10 or more than 24 characters
const checkForUserPasswordLength = (userPassword, userPassword2) => {
    if (userPassword.value.trim().length < 10 ||
        userPassword.value.trim().length > 24) {
        showErrorMessage(userPassword, "A senha precisa ter entre 10 - 24 caracteres");
        showErrorMessage(userPassword2, "A senha precisa ter entre 10 - 24 caracteres");
    }
};
// this function hide the errors messages who is false
const hideErrorMessages = (form) => {
    form
        .querySelectorAll("." + SHOW_ERROR_MESSAGES)
        .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
};
// this fuction creates an error messages
const showErrorMessage = (input, msg) => {
    const formField = input.parentElement;
    const errorMessage = formField.querySelector(".error-message");
    errorMessage.innerText = msg;
    formField.classList.add(SHOW_ERROR_MESSAGES);
};
const checkIsFormValid = (form) => {
    let send = true;
    form
        .querySelectorAll("." + SHOW_ERROR_MESSAGES)
        .forEach(() => (send = false));
    return send;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************************!*\
  !*** ./src/TypeAnotation/exercicio/index.ts ***!
  \**********************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./form-controll */ "./src/TypeAnotation/exercicio/form-controll.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map