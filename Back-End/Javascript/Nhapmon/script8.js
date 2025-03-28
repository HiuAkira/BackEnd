//--------- Scope --------------
// var a = 10;
// function test(){
//     console.log(a);
// }
// test();


//-------- Hoisting ------------
// function test(){
//     console.log("OK");
// }
// test();


//-------- This ------------
// const button = document.querySelector("#button");
// button.addEventListener("click",function(){
//     console.log(this);
// });


//-------- Modules ---------
// export function test(){
//     console.log
// }
// import { sum } from "./test1.js";
// const res = sum(20,30);
// console.log(res);

// Đổi tên hàm
// C1:
// const hamTong = (a,b) =>{
//     return a + b;
// }
// export {hamTong as tong}
// import { tong } from "./test1.js";
// const res = tong(10,20);
// console.log(res);

// C2:
// import {sum as tong} from "./test1.js";
// const res = tong(10,20);
// console.log(res);


// ---------------- JSON -------------
// var objectJS = {
//     fullName: "Dương Đức Hiếu",
//     phone: "0988886666",
//     email: "hieu@gmail.com"
// };

// var objectJSON = `
// {
//     fullName: "Dương Đức Hiếu",
//     phone: "0988886666",
//     email: "hieu@gmail.com"
// }`;

// Ví dụ 1: JSON có giá trị là object
// var objectJSON = `
// {
//     fullName: "Dương Đức Hiếu",
//     phone: "0988886666",
//     email: "hieu@gmail.com"
// }`;
// console.log(objectJSON);
// const objectJS = JSON.parse(objectJSON); // Chuyển từ JSON sang JS
// console.log(objectJS);
// const objectJSON2 = JSON.stringify(objectJS); // Chuyển từ JS sang JSON
// console.log(objectJSON2);