// Задача: преобразование строки в верблюжий регистр
// Завершите метод, чтобы он преобразовывал слова, разделенные тире/подчеркиванием, в
// верблюжий регистр. Первое слово в выводе должно быть написано с заглавной буквы только
// в том случае, если исходное слово было написано с заглавной буквы (известный как
// верхний верблюжий регистр, также часто называемый регистром Паскаля).

// Требуемый результат
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// Решение 1
// const toCamelCase = (str) => {
// return str.replace(/[-_]\w/gi, match => match.toUpperCase()).replace(/[-_]/gi, '');
// };
// console.log(toCamelCase("the-stealth-warrior")); // theStealthWarrior
// console.log(toCamelCase("The_Stealth_Warrior")); // TheStealthWarrior

// Решение 2
// const toCamelCase =  (str) => {
//     const regexStr = /[-_]\w/gi;
//     return str.replace(regexStr, (match) => match[1].toUpperCase());
// }
// console.log(toCamelCase("the-stealth-warrior")); // theStealthWarrior
// console.log(toCamelCase("The_Stealth_Warrior")); // TheStealthWarrior

// Решение 3
// const toCamelCase = (str) => {
//   const array = str.split("");
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "-" || array[i] === "_") {
//       array[i + 1] = array[i + 1].toUpperCase();
//       array[i] = "";
//     }
//   }
//   return array.join("");
// };
// console.log(toCamelCase("the-stealth-warrior")); // theStealthWarrior
// console.log(toCamelCase("The_Stealth_Warrior")); // TheStealthWarrior
