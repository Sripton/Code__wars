// Задача: дублирующий кодер
// Цель этого упражнения — преобразовать строку в новую строку, где каждый символ в новой
// строке — это «(», если этот символ встречается в исходной строке только один раз, или
// «)», если этот символ встречается в исходной строке более одного раза. Нужно
// игнорировать заглавные буквы при определении, является ли символ дубликатом.

// Требуемый результат
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Решение 1
// const duplicateEncode = (word) => {
//   return word
//     .toLowerCase()
//     .split("")
//     .map((elem) =>
//       word.indexOf(elem) === word.lastIndexOf(elem) ? "(" : ")"
//     ).join('')
// };

// console.log(duplicateEncode("din")); // (((
// console.log(duplicateEncode("recede")); // ()()()
// console.log(duplicateEncode("Success")); //  )())())
// console.log(duplicateEncode("(( @")); //  "))(("

// Решение 2
// const duplicateEncode = (word) => {
//   let str = "";
//   for (let i = 0; i < word.toLowerCase().length; i++) {
//     if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
//       str += "(";
//     } else {
//       str += ")";
//     }
//   }
//   return str;
// };

// console.log(duplicateEncode("din")); // (((
// console.log(duplicateEncode("recede")); // ()()()
// console.log(duplicateEncode("Success")); // )())())
// console.log(duplicateEncode("(( @")); // ))((


// Решение 3
// const duplicateEncode = (word) => {
//     return word.toLowerCase().replace(/./g, m => word.indexOf(m) === word.lastIndexOf(m) ? '(' : ')');
// }

// console.log(duplicateEncode("din")); // (((
// console.log(duplicateEncode("recede")); // ()()()
// console.log(duplicateEncode("Success")); // )())())
// console.log(duplicateEncode("(( @")); // ))((
