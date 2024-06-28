// 1. uchta sondan eng kattasini chiqaruvchi algaritm
//  2. foydalanuvchi mablag’ini kiritadi va mehmonhonada olinadigan hona turini ayting 1000 - lux | 500 - yarim lux yoki 500dan 200 gacha bo’lsa odiy hona 200 dan kam bo’lsa - joy yo’q 
//  3. foydalanucvchi son kiritadi agar son 3 ga bo’linsa fizz 5 ga bo’lisa bass agar 3 ham 5 ga bo’linsa fizz-bazz 4. uchta sondan eng kichigini chiqaruvchi algaritm


// let num1 = prompt('num1ni kiriting')
// let num2 = prompt('num2ni kiriting')
// let num3 = prompt('num3ni kiriting')

// if(num1 > num2 && num1 > num3){
//     console.log(num1)
// }else if(num2 > num1 && num2 > num3){
//     console.log(num2)
// }else{
//     console.log(num3)
// }


// let price = prompt('mablag’ini kiriting')
 
// if (price >= 1000) {
//     console.log('lux')
// } else if (price >= 500 && price <= 1000) {
//     console.log('yarim lux')
// } else if (price >= 500 && price <= 200) {
//     console.log('oddiy')
// }else {
//     console.log('joy yo’q')
// }

// let num4 = prompt('num4ni kiriting')

// if (num4 % 3 == 0 && num4 % 5 == 0) {
//     console.log('fizz-bazz')
// } else if (num4 % 3 == 0) {
//     console.log('fizz')
// } else if (num4 % 5 == 0) {
//     console.log('bazz')
// } else {
//     console.log('joy yo’q')
// }

// let num5 = prompt('num5ni kiriting')
// let num6 = prompt('num6ni kiriting')
// let num7 = prompt('num7ni kiriting')

// if(num5 < num6 && num5 < num7){
//     console.log(num5)
// }else if(num6 < num5 && num6 < num7){
//     console.log(num6)
// }else{
//     console.log(num7)
// }








let btn = document.querySelector(".toggle")
let btn2 = document.querySelector(".toggle2")


btn.addEventListener( 'click', () =>{    document.querySelector(".sidebar").classList.toggle("active")
})

btn2.addEventListener( 'click', () =>{    document.querySelector(".sidebar").classList.toggle("active")
})