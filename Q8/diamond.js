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
