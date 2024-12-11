// Решение 1 найти единственный элемент который либо четный либо не четный
// const foundOutLier = (int) => {
//     const even  = [];
//     const odd = [];
//   for(let i = 0; i < int.length; i++){
//     if(int[i] % 2 === 0) {
//         even.push(int[i]);
//     }
//     if(int[i] % 2 !== 0){
//          odd.push(int[i]);
//     }
//   } 
//   if(even.length === 1) {
//     return even.pop();
//   }else {
//     return odd.pop();
//   }
// };
// console.log(foundOutLier([1, 3, 5, 7, 8, 9, 11, 13, 17])); // 8
// console.log(foundOutLier([2, 4, 6, 11, 8, 90, 10, 132, 176])); // 11
