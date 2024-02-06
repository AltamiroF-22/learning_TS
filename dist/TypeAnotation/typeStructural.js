"use strict";
const verifyUser = (user, sentValue) => {
    return (user.userName === sentValue.userName && user.password === sentValue.password);
};
const bdUser = { userName: "Altamiro", password: "123456789" };
const sentUser = { userName: "Altamiro", password: "123456789" };
const loggerdIn = verifyUser(bdUser, sentUser);
console.log(loggerdIn);
