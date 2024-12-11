// Задача  Переместите первую букву каждого слова в конец,
// а затем добавьте «ay» в конец слова. Оставьте знаки препинания нетронутыми.

// Example
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Решение 1
// const pigIt = (item) => {
//   let itemString = item.split(" ");
//   const newArray = [];
//   for (let i = 0; i < itemString.length; i++) {
//     newArray.push(itemString[i].slice(1) + itemString[i].slice(0, 1));
//   }
//   let str = "";
//   for (let i = 0; i < newArray.length; i++) {
//     if (/\W/gi.test(newArray[i])) {
//      str += newArray[i];
//     }else {
//         str += newArray[i] + "ay" + " ";
//     }
//   }
//   return str;
// };
// console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
// console.log(pigIt("Hello world !")); // elloHay orldway !
// console.log(pigIt("Such a beautifull world !")); // uchSay aay eautifullbay orldway !

//  Решение 2
// const pigIt = (item) => {
//   return item
//     .split(" ")
//     .map((elem) =>
//       /\W/.test(elem) ? elem : elem.slice(1) + elem.slice(0, 1) + "ay"
//     )
//     .join(" ");
// };
// console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
// console.log(pigIt("Hello world !")); // elloHay orldway !
// console.log(pigIt("Such a beautifull world !")); // uchSay aay eautifullbay orldway !


// //  Решение 3
// const pigIt = (item) => {
//     const first = [];
//     const second = [];
//     let str = '';
//     const matchItem = item.match(/\S+/gi);
//     for(let i = 0; i < matchItem.length; i++) {
//         first.push(matchItem[i].slice(0,1));
//         second.push(matchItem[i].slice(1));
//     }
//     for(let i = 0; i < matchItem.length; i++){
//         if(/\W/gi.test(matchItem[i])){
//             str += matchItem[i]
//         }else {
//             str += second[i] + first[i]  + "ay ";
//         }
//     }
//     return str
// }
// console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
// console.log(pigIt("Hello world !")); // elloHay orldway !
// console.log(pigIt("Such a beautifull world !")); // uchSay aay eautifullbay orldway !
