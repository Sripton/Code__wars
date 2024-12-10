// input -> 56577
// output -> 50000 6000 500 70 7

//  Решение 1
// const expandedForm  = (item) => {
//     let str = '';
//     for(let i = item.toString().length-1, j = 0; i >=0, j < item.toString().length; i--, j++){
//         str += +item.toString()[j] * Math.pow(10,i) + " ";
//     }
//     return str
// }
// console.log(expandedForm(56577)); // 50000 6000 500 70 7
// console.log(expandedForm(1988)); // 1000 900 80 8

//  Решение 2
// const expandedForm = (item) => {
//     let str = '';
//     const powArray = [];
//     for(let i = item.toString().length-1; i >= 0; i--){
//         powArray.push(10 **i);
//     }
//     for(let i = 0; i < item.toString().length; i++){
//         str += +item.toString()[i] * powArray[i] + " "
//     }
//     return str;
// }
// console.log(expandedForm(56577)); // 50000 6000 500 70 7
// console.log(expandedForm(1988)); // 1000 900 80 8

//  Решение 3
// const expandedForm = (item) => {
//     const itemStr = item.toString();
//     let str = '';
//     for(let i = itemStr.length-1, j = 0; i >= 0, j< itemStr.length; i--, j++){
//         let pows = 10 ** i;
//         str += +itemStr[j] * pows + " "
//     }
//     return str
// }
// console.log(expandedForm(56577)); // 50000 6000 500 70 7
// console.log(expandedForm(1988)); // 1000 900 80 8

//  Решение 4
// const expandedForm = (item) => {
//   const itemStr = item.toString();
//   let str = "";
//   let muliPly = Math.pow(10, itemStr.length - 1);
//   for (let i = 0; i < itemStr.length; i++) {
//     const element = +itemStr[i];
//     const nextElement = +itemStr[i + 1];
//     if (element) {
//       str += element * muliPly;
//     }
//     if (nextElement) {
//       str += " ";
//     }
//     muliPly = muliPly /= 10
//   }
//   return str;
// };
// console.log(expandedForm(56577)); // 50000 6000 500 70 7
// console.log(expandedForm(1988)); // 1000 900 80 8

//  Решение 4
// const expandedForm = (item) =>
//   item
//     .toString()
//     .split("")
//     .reverse()
//     .map((elem, index) => +elem * Math.pow(10, index))
//     .reverse()
//     .join(" ");
// console.log(expandedForm(56577)); // 50000 6000 500 70 7
// console.log(expandedForm(1988)); // 1000 900 80 8


//  Решение 5
// const expandedForm = (item) => {
//     const itemStr = ""+item;
//     let str = '';
//     for(let i = 0, j = itemStr.length-1; i < item.length, j >= 0; i++, j--){
//         str += itemStr[i]  + "0".repeat(j) + " "
//     }
//     return str
// }
// console.log(expandedForm(56577)); // 50000 6000 500 70 7
// console.log(expandedForm(1988)); // 1000 900 80 8
