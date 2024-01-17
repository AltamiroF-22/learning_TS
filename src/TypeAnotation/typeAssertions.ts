const body1 = document.querySelector("body");
if (body1) body1.style.backgroundColor = "#f29";

// Non-null assertion (!)
const body2 = document.querySelector("body")!;
body2.style.backgroundColor = "#f29";

//Type assertion
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.backgroundColor = "#f29";
