import{ checkDau } from "./helpers/checkDau.js"
import{ checkCL } from "./helpers/checkCL.js"
//-----------Call Back ----------
// Ví dụ 1:
// const congViec1 = () =>{
//     console.log("Công việc 1");
// }
// const congViec2 = (callback) =>{
//     callback();
//     console.log("Công việc 2");
// }
// congViec2(congViec1);

// Ví dụ 2:
// const checkDau = (n) => {
//     if(n >= 0 ){
//         console.log("Đây là số dương");
//     }
//     else{
//         console.log("Đây là số âm");
//     }
// }
// const checkCL = (n) => {
//     if(n % 2 == 0){
//         console.log("Đây là số chẵn");
//     }
//     else{
//         console.log("Đây là số lẻ");
//     }
// }
// const tinhTong = (a, b, callback) => {
//    const res = (a + b);
//    callback(res);
// } 
// tinhTong(10, 20, (n) => {
//     checkDau(n);
//     checkCL(n);
// });

// Ví dụ 3
// const loginSuc = () => {
//     console.log("Đăng nhập thành công");
// }
//  const checkLogin = (database, callback) => {
//     const email = "hieutest@gmail.com";
//     const password = "666666";
//     if(database.email === email && database.password === password){
//         callback();
//     }
//     else{
//         console.log("Đăng nhập thất bại");
//     }
//  }
//  let data = {
//     email: "hieutest@gmail.com",
//     password: "666666"
//  };
//  checkLogin(data, loginSuc);



//----------Promise--------------

// Cấu trúc của 1 hàm Promise ::
// var promise = new Promise((resolve, reject) => {
// // resolve(): Nếu thành công thì chạy vào hàm này
// // reject(): Nếu thất bại thì chạy vào hàm này
// });
// promise
// .then((succes) => {
//     // Nếu thành công thì chạy vào đây
// })
// .catch((error) =>{
//     // Nếu thất bại thì chạy vào đây
// })
// .finally(() => { có thể bỏ được không cần dùng
//     // luôn luôn chạy vào đây
// })

// Ví dụ 1:
// var a = 10;
// var promise = new Promise((resolve, reject) => {
//     if(a === undefined){
//         reject();
//     }
//     else{
//         resolve(a);
//     }
// });
// promise
// .then((succes) => {
//     console.log(succes);
//     return succes;
// })
// .then((succes) => {
//     const res = succes + 10;
//     console.log(res);
// })
// .catch(() =>{
//     console.log("Thất bại");
// })
// .finally(() => {
//     console.log("Luôn chạy vào đây");
// })


//------------- Fetch API---------------
// fetch("https://www.logitechg.com/vi-vn/products/gaming-mice.html")
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     const newArray = data.products.map((item) => {
//         return item.title;
//     });

//     const htmls = newArray.join("");
    
//     const productsList = document.querySelector("#product-list");
//     productsList.innerHTML = htmls;
//     // console.log(newArray);
//     console.log(htmls);
// });

const fetchApi = async (api) =>{
    const response = await fetch(api);
    const data = await response.json();
    return data;
}
fetchApi("http://localhost:3000/products")
.then((data) => {
    console.log(data);
})


// ----------- JSON server và postman -------------

