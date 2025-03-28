// // Change Mode
// const currentMode = sessionStorage.getItem("mode");
// if(currentMode){
//     const body = document.querySelector("body");
//     body.classList.toggle(currentMode);
// }


// const buttonChangeMode = document.querySelector("#change-mode");
// buttonChangeMode.addEventListener("click", () => {
//     const body = document.querySelector("body");
//     body.classList.toggle("dark");

//     const currentMode = sessionStorage.getItem("mode");
//     if(currentMode){
//         sessionStorage.setItem("mode", "");
//     }
//     else{
//         sessionStorage.setItem("mode", "dark");
//     }
// });

// const resetMode = document.querySelector("#reset-mode");
// resetMode.addEventListener("click", () => {
//     sessionStorage.removeItem("mode");
//     const body = document.querySelector("body");
//     body.classList.remove("dark");
// });
// // End Change Mode

// consst buttonClearAll = document.querySelector("clear-all");

//--------- Spread syntax ----------
let listUserDB = [
    "Duong Duc Hieu",
    "Nguyen Thuy Ha Vy"
];
let listUserFE = [
    "Do Thi E"
];
listUserDB = {...listUserDB, ...listUserFE};
console.log(listUserDB); 