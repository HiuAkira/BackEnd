//console.log(window);
// ---- window.open(url, name, options) để mở link của 1 cso
// const openTab = () => {
//     window.open(
//         "https://www.facebook.com/Akira1909",
//         "_blank",
//         "width = 1200, height = 600, left = 100, top="
//          );
// };

// ---- window.close(urll, name, options) để đóng link
// var tab;
// const openTab = () => {
//     tab = window.open(
//          "https://www.facebook.com/Akira1909",
//          "_blank",
//          "width = 1200, height = 600, left = 100, top="
//           );
//  };
//  const closeTab = () => {
//     tab.close();
//  }
// console.log(screen);
// console.log(screen.width);
// console.log(screen.height);

// --- window.location: dùng xử lý liên quan đến URL
// console.log(location);
// const reloadTab = () => {
//     location.reload();
// }
// setInterval(() => {
//     location.reload();
// }, 2000);

// ------ Query ------
// console.log(location);
// console.log(history);
// history.length(): số trang đã truy cập
// history.back(): trở lại trang trước vừa truy cập
// history.go(idex): Nhảy về số trang idex
// const goBack =() =>{
//     history.back();
// }

// window.navigator: dùng để lấy các thông tin liên quan đến trình duyệt của người dùng
//slide bài 9 Javascript cơ bản(tiết5)
// console.log(navigator);

// ----------- Tạo cookie -----------
// const fullName = prompt("Nhập tên của bạn");
// console.log(fullName);
// document.cookie = `fullName=${fullName}`;
// function setCookie(cname, cvalue, exdays){
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expries=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + "; " + expires;
// }
// const fullName = prompt("Nhập tên của bạn");
// console.log(fullName);
// setCookie("fullName",fullName,3);

// -------- Lấy data từ cookie ---------
// function getCookie(cname) 
// { 
//     varname= cname+ "="; 
//     varca= document.cookie.split(";"); 
//     for(vari= 0; i<ca.length; i++) { 
//         varc=ca[i]; while(c.charAt(0) == "") 
//         { c=c.substring(1); } if(c.indexOf(name) == 0) 
//             { returnc.substring(name.length,c.length); } 
//         } 
//     return""; 
// }
// const fullName = getCookie("phone");
// console.log(fullName);


// ------------ Xóa data từ cookie -----------
// chỉ cần xét lại giá trị ngày hết hạn expries về những thời gian trước đây
function deleteCookie(cname) { 
    document.cookie=`${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`; 
}
deleteCookie("fullName");
 

