// input ->
// "http://github.com/carbonfive/raygun"
// "http://www.zombie-bites.com"
// "www.xakep.ru"
// "https://youtube.com"
// "http://google.co.jp"

// output ->
// github
// zombie-bites
// xakep
// youtube
// google

// --> Решение с валидными доменами 1 -->
// const domainName = (url) => {
//   return url
//     .replace(/\b(http|https)\:\/\/|\bwww\./gim, "")
//     .replace(/\b\.(com|ru|co).*/gim, "");
// };
// console.log(domainName("http://github.com/carbonfive/raygun")); // github
// console.log(domainName("http://www.zombie-bites.com")); // zombie-bites
// console.log(domainName("www.xakep.ru")); // xakep
// console.log(domainName("https://youtube.com")); // youtube
// console.log(domainName("http://google.co.jp")); // google

// --> Решение с валидными доменами 2 -->
// const domainName = (url) => {
//   return url
//     .replace(/^(http\:\/\/)|(https\:\/\/)|(www\.)/gi, "")
//     .replace(/\..+$/gi, "");
// };
// console.log(domainName("http://github.com/carbonfive/raygun")); // github
// console.log(domainName("http://www.zombie-bites.com")); // zombie-bites
// console.log(domainName("www.xakep.ru")); // xakep
// console.log(domainName("https://youtube.com")); // youtube
// console.log(domainName("http://google.co.jp")); // google



