// -------- Arrow function: hàm mũi tên ---------
// var tong = (...a) => {
//     let tong = 0;
//     for(const 2900i of a){
//         tong += i;
//     }
//     return tong;
// }
// var ketQua = tong(10, 20, 30, 40, 50, 60, 70, 90, 100);
// console.log(ketQua);
// praseInt(prompt("Nhập n:") hàm nhập gtri) convert hàm nhập về dạng number
// Ví dụ 2: Bieuthuc = 1/n + 2/n + 3/n + ... + n/n
// const bieuThuc = (n) => {
//     let res = 0;
//     for(let i = 1; i <= n; i++){
//         res += (i/n);
//     }
//     return res;
// }
// let n;
// do {
//     n = parseInt(prompt("Nhập n:"));
//     if(n <= 0){
//         console.log("Vui lòng nhập số lớn hơn 0");
//     }
//     else{
//         const ans = bieuThuc(n);
//         console.log(ans);
//     }
// } while (n <= 0);


// -------- Try catch: Bắt lỗi chương trình ---------
// try {
//      Chạy vào đây đầu tiên
// } catch(error){
//      Nếu lỗi chạy vào đây
// } finally {
//      luôn luôn chạy vào đây và chạy sau cùng
// }
// const a = 10;
// try{
//     console.log("a =" + a);
// } catch(error){
//     console.log(error);
// } finally{
//     console.log("Luon chay vao day");
// }
// var infoUser = {
//     name: "Duong Duc Hieu"
// };
// console.log(infoUser);
// infoUser.phone = "0123456789";
// console.log(infoUser);


// ------ forEach để duyệt qua mỗi phần tử của mảng -----
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// numbers.forEach((item, index, arrayOrigin) =>{
//     sum += item;
//     console.log(item);
//     console.log(index);
//     console.log(arrayOrigin);
//     console.log("---------");
// });
// console.log(sum);
// numbers.forEach((item, index) => {
//     numbers[index] = item + 1;
// });
// console.log(numbers);


// ------ arr.every(item, index, array) --------
// ktra tất cả các phần tử của 1 mảng phải thỏa mãn đk
// const monHoc = [
//     {
//         ten: "Toan",
//         diem: 8.6
//     },
//     {
//         ten: "Ly",
//         diem: 9.2
//     },
//     {
//         ten: "Hoa",
//         diem: 8.5
//     },
//     {
//         ten: "Tin",
//         diem: 7.8
//     },
// ]
// const hsG = monHoc.every((item) =>{
//     return (item.diem >= 8);
// });
// console.log(hsG);


// ------- array.some(item, index, array) ---------
// Ktra chỉ cần 1 một phần tử của một mảng thỏa mãn đk là dc


// ------ array.find(item, index, array) -------
// tìm xem trong mảng có giá trị nào giống với giá trị đang cần tìm ko
//  const monHoc = [
//      {
//          ten: "Toan",
//          diem: 8.6
//      },
//      {
//          ten: "Ly",
//          diem: 9.2
//      },
//      {
//         ten: "Hoa",
//          diem: 8.5
//      },
//      {
//          ten: "Tin",
//          diem: 7.8
//      },
//  ]
//  const monTin = monHoc.find((item) => {
//     return item.ten === "Tin";
//  });
//  console.log(monTin);


// --- array.filter() tìm được nhiều phần tử trong mảng ---
// const monTin = monHoc.filter((item) => {
//          return item.ten === "Tin";
//       });
// console.log(monTin);


// ----- array.map() lặp qua các ptu của mảng và trả về 1 mảng mới
//   const monHoc = [
//       {
//           ten: "Toan",
//           diem: 8.6
//       },
//       {
//           ten: "Ly",
//           diem: 9.2
//       },
//       {
//          ten: "Hoa",
//           diem: 8.5
//       },
//       {
//           ten: "Tin",
//           diem: 7.8
//       },
//   ]
//   const monTin = monHoc.find((item) => {
//      return item.ten === "Tin";
//   });
// const mangMoi = monHoc.map((item) =>{
//     return item;
// });
// console.log(mangMoi);


// array.reduce() duyệt qua từng phần tử của mảng để tính toán trả về gtri cuối cùng
const numbers = [1,2,3,4];
const sum = numbers.reduce((total, item) => {
    console.log(total);
    console.log(item);
    console.log("---------");
    return total + item;
});
console.log(sum);