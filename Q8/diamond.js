// Решение 1
// const diamond = (n) => {
//     if(n <= 0 && n % 2 === 0){
//         return null;
//     }
//     let midle = parseInt(n+1)/2;
//     let str = '';
//     console.log(midle);
//     for(let i = 1; i <= n; i++){
//         if(i <= midle){
//             str += " ".repeat(midle - i) + "*".repeat(2*i-1) + "\n";
//         }else {
//             str += ' '.repeat(Math.abs(midle-i)) + "*".repeat(Math.abs(2*(n-i)+1)) + "\n";
//         }
//     }
//     return str;
// }
// console.log(diamond(5));

//   *
//  ***
// *****
//  ***
//   *

// Решение 2
// const diamond = (n) => {
//   if (n <= 0 && n % 2 === 0) {
//     return null;
//   }
//   const tabsArray = []; // [ 2, 1, 0, 1, 2 ]
//   const starsArray = [];
//   const midle = parseInt(n + 1) / 2;
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     tabsArray.push(Math.abs(midle - i));
//     if (i <= midle) {
//       starsArray.push(2 * i - 1);
//     } else {
//       starsArray.push(2 * (n - i) + 1);
//     }
//   }
//   for (
//     let i = 0, j = 0;
//     i < tabsArray.length, j < starsArray.length;
//     i++, j++
//   ) {
//     str += " ".repeat(tabsArray[i]) + "*".repeat(starsArray[j]) + "\n";
//   }
//   return str;
// };
// console.log(diamond(7));
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

// Решение 3
// const diamond = (n) => {
//   if (n <= 0 && n % 2 === 0) {
//     return null;
//   }
//   const midle = parseInt(n + 1) / 2;
//   let i = 1;
//   let str = "";
//   while (i <= n) {
//     if (i <= midle) {
//       str += " ".repeat(midle - i) + "*".repeat(2 * i - 1) + "\n";
//     } else {
//       str +=
//         " ".repeat(Math.abs(midle - i)) + "*".repeat(2 * (n - i) + 1) + "\n";
//     }
//     i++;
//   }
//   return str;
// };
// console.log(diamond(7));
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

// Решение 4
// const diamond = (n) => {
//     if(n <= 0 && n % 2 === 0){
//         return null;
//     }
//     let str = '';
//     for(let i = 0; i < n; i++){
//         const helper = Math.abs((n-2*i -1)/2);
//         str += ' '.repeat(helper);
//         if(i <= Math.floor(n/2)){
//             str += '*'.repeat(2 * i +1)  + '\n'
//         }else {
//             str += '*'.repeat(2 * (n-i)-1) + "\n";
//         }
//     }
//     return str;
// }

//  console.log(diamond(7));

//   *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

// Решение 5
// const diamond = (n) => {
//   if (n <= 0 && n % 2 === 0) {
//     return null;
//   }
//   const midle = Math.floor(n/2);
//   return Array.apply(null, { length: n }).map((element, index) => {
//     const identefiction = Math.abs(index - midle);
//     const diamondList = n - identefiction *2;
//     return Array(identefiction+1).join(' ') + Array(diamondList+1).join("*")
//   }).join('\n');
// return midle
// };
//   console.log(diamond(5));

// //    *
// //   ***
// //  *****
// //   ***
// //    *


