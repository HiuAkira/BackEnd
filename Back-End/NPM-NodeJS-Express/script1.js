// localStorage.setItem("fullName", "Dương Đức Hiếu");

const fullName = localStorage.getItem("fullName");
// console.log(fullName);
const test = document.querySelector("#test");
test.innerHTML = fullName;

// Change Mode
const currentMode = localStorage.getItem("mode");
if(currentMode){
    const body = document.querySelector("body");
    body.classList.toggle(currentMode);
}


const buttonChangeMode = document.querySelector("#change-mode");
buttonChangeMode.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");

    const currentMode = localStorage.getItem("mode");
    if(currentMode){
        localStorage.setItem("mode", "");
    }
    else{
        localStorage.setItem("mode", "dark");
    }
});
// End Change Mode