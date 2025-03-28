// -------------- Một số hàm built-in ------------------
// alert("xin chào các bạn!");
// var result = confirm("Bạn đã có người yêu chưa?");
// console.log(result);
// var res = prompt("Nhập n");
// console.log(res);
// console.warn(res);
// console.error(res);
// setTimeout(function() {
//     console.log("A");
//  }, 1000);
// setInterval(function() {
//     console.log("B");
// }, 1000)
// var b = setInterval(function() {
//      console.log("B");
//  }, 1000)
//  setTimeout(function(){
//     clearInterval(b);
//  }, 5000);
// typeof trả về đúng kiểu của biến
// var a = 10;
// var b = "Nội dung ...";
// var c;
// var d = null;
// var e = true;
// console.log(typeof(a)); // trả về kiểu number
// console.log(typeof(b));
// console.log(typeof(a + b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));
// console.log(typeof(a == "number")); // true


// ------- Làm việc với String ---------
// var fullName = "Duong Duc Hieu";
// console.log(fullName.length);
// indexOf trả về vị trí đầu tiên của chuỗi trong 1 chuỗi bki
// lastIndexof trả về vị trí cuối cùng của chuỗi trong 1 chuỗi bki
// slice(i,j) để cắt 1 chuỗi từ vị trí i đến j
// replace("chuỗi 1", "chuỗi 2") thay thế chuỗi 1(chuỗi đầu tiên) thành chuỗi 2
// regax( tìm hiểu là gì)
// strim() dùng để bỏ đi khoảng trắng ở 2 đầu
// charAt() lấy ký tự thông qua index
// split() chuyển 1 chuỗi thành 1 array với điều kiện tìm ra điểm chung của chuỗi đó
// isNaN ktra về dạng số
// toString(i) chuyển 1 số thành 1 string
// toFixed(i) làm tròn số thập phân khoảng i số


// ------------ Làm việc với mảng -------------
// join(separator) thêm dấu bất kỳ vào để ngăn cách giữa các phần tử
// var list = ["HTMLS",  "CSS" , "Javascript"];
// console.log(list.join());
// console.log(list.join(","));
// console.log(list.join(''));
// console.log(list.join(", "));
// console.log(list.join(" - "));
// array.pop() lấy ra(xóa) phần tử cuối của mảng
// array.push() thêm 1 hoặc nhiều phần tử vào cuối mảng, trả về độ dài mới
// array.shift() trả(xóa) phần tử ở đầu mảng
// array.unshift() thêm 1 hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới
// array.spilce(vị trí, bao nhiêu ptu cần xóa, các ptu được thêm vào) xóa hoặc chèn phần tử mới vào mảng, trả về mảng bị xóa
// array.concat(array2, array3) nối 2 array ko làm ảnh hưởng đển array ban đầu
// array.slice(start, end) (vtri bd, vtri kt) dùng để cắt các phần tử

// -------------------- If else ---------------
// var age = 16;
// var check = age >= 18 ? console.log("Đã đủ tuổi!") : console.log("Chưa đủ tuổi!");

// var number = 5;
// switch (number) {
//     case 0:
//         console.log("Day la so 0");
//         break;
//     case 1:
//         console.log("Day la so 1");
//         break;
//     case 2:
//         console.log("Day la so 2");
//         break;
//     default:
//         console.log("Khong thoa man!")
//         break;
// }

// ------- Vòng lặp for in lấy ra phần tử của 1 object----------
// var inUse = {
//     fullName: "Duong Duc Hieu",
//     email: "hieu@gmail.com",
//     phone: "0123456789"
// };
// for (id in inUse){
//     console.log(id);
//     console.log(inUse[id]);
// }

// --------- Vòng lặp for of lấy ra phần từ của một array, string -----
var list = ["HTMLS", "CSS3", "JavaScript"];
// for(int item = 0; item < list.length; item++){
//     console.log(item);
//     console.log(list[item]);
// }
for(var item of list){
    console.log(item);
}