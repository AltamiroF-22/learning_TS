////////////  Recommended  ///////////////

// Condicional
const body1 = document.querySelector("body");
if (body1) body1.style.backgroundColor = "#f22";

//Type assertion
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.backgroundColor = "#f22";

// HTMLElement
const input = document.querySelector(".input") as HTMLInputElement;
input.type = "text";
input.value = "hire me :)";
input.focus();

///////////// Not Recommended ///////////

// Non-null assertion (!)
const body2 = document.querySelector("body")!;
body2.style.backgroundColor = "#f22";
