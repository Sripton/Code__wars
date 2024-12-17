// Решение 1
// const effectWave = (str, num) => {
//   let result = "";
//   let z = 0;
//   for (let i = 0; i < num; i++) {
//     let word = "";
//     for (let j = 0; j < num; j++) {
//       if (j === z) {
//         word += str[j].toUpperCase();
//       } else {
//         word += str[j];
//       }
//     }
//     z++;
//     if (i < num - 1) {
//       result += word + " "; // Добавляем пробел между словами
//     } else {
//       result += word; // Последнее слово без пробела
//     }
//   }
//   return result;
// };
// console.log(effectWave("elmar", 5));  // Elmar eLmar elMar elmAr elmaR

// Решение 2
// const effectWave = (str, num) => {
//   const array = [];
//   for (let i = 0; i < num; i++) {
//     array.push(str);
//   }
//   let result = "";
//   let k = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (j === k) {
//         result += array[i][k].toUpperCase();
//       } else {
//         result += array[i][j];
//       }
//     }
//     result += ' '
//     k++;
//     // if (i < num - 1) {
//     //   result += " ";
//     // } else {
//     //   result += "";
//     // }
//   }
//   return result
// };
// console.log(effectWave("elmar", 5)); // Elmar eLmar elMar elmAr elmaR

// Решение 3
// const effectWave = (str, num) => {
//   const array = [];
//   for (let i = 0; i < num; i++) {
//     array.push(str);
//   }
//   const wordsUpperCase = [];
//   const wordsLowerCase = [];
//   for(let i = 0; i < array.length; i++){
//     wordsUpperCase.push(array[i].charAt(i).toUpperCase() + array[i].slice(i+1));
//     wordsLowerCase.push(array[i].slice(0,i))
//   }
//   let string = '';
//   for(let i = 0; i < array.length; i++){
//     string += wordsLowerCase[i] + wordsUpperCase[i] + " "
//   }
//   return string 
// };
// console.log(effectWave("elmar", 5));


// const string = "000000000000000000000000000567890";
// const result = [];
// const chunkSize = 4;
// for (let i = 0; i < string.length; i += chunkSize) {
//   let chunk = ""; // Собираем текущую часть вручную
//   for (let j = 0; j < chunkSize && i + j < string.length; j++) {
//     chunk += string[i + j];
//   }
//   result.push(chunk); // Добавляем текущую часть в массив
// }
// console.log(result);
// [
//     '0000', '0000',
//     '0000', '0000',
//     '0000', '0000',
//     '0005', '6789',
//     '0'
//   ]

// function getElements(str, size) {
//   size = 4;
//   let chunk = "";
//   let chunkIndex = 0;
//   const newArray = [];
//   for (let i = 0; i < str.length; i++) {
//     chunk += str[i];
//     if ((i + 1) % size === 0) {
//       newArray[chunkIndex] = chunk;
//       chunk = "";
//       chunkIndex++;
//     }
//   }
//   return newArray;
// }
// console.log(getElements("00000000000000000000000000056789", 4));

// const string = "00000000000000000000000000056789";
// const result = [];
// const chunkSize = 4;
// for (let i = 0; i < string.length; i += chunkSize) {
//     let chunk = ""; // Собираем текущую часть вручную
//     for (let j = 0; j < chunkSize && i + j < string.length; j++) {
//         chunk += string[i + j];
//     }
//     result.push(chunk); // Добавляем текущую часть в массив
// }
// console.log(result);

// const string = "00000000000000000000000000056789";
// const result = [];
// const chunkSize = 4;
// for (let i = 0; i < string.length; i += 4) {
//   let chunk = "";
//   for (let j = 0; j < chunkSize; j++) {
//     chunk += string[i+j];
//   }
//   result.push(chunk);
// }
// console.log(result);
