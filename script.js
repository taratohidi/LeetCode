"use strict";

// 1523. Count Odd Numbers in an Interval Range
// let arr;
// let a;
// const countOdds = function (low, high) {
//   let arr = [low];
//   let a = low;
//   while (a < high) {
//     a += 1;
//     arr.push(a);
//   }
//   const oddArr = arr.filter((num) => num % 2 === 1);
//   return oddArr.length;
// };
// console.log(countOdds(1, 21));

// 1491. Average Salary Excluding the Minimum and Maximum Salary

// const average = function (salary) {
//   const min = Math.min(...salary);
//   const max = Math.max(...salary);
//   const avgArr = salary.filter((num) => num !== min && num !== max);

//   const avgSum = avgArr.reduce((acc, cur) => acc + cur, 0);
//   return avgSum / avgArr.length;
// };

// console.log(average([1000, 2000, 3000]));

///////////////////////////
////#2. Add Two Numbers

// const addTwoNumbers = function (l1, l2) {
//   const l1Rev = l1.reverse();
//   const l2Rev = l2.reverse();
//   let l1Str = l1Rev.join("");
//   let l2Str = l2Rev.join("");
//   if (l1Str.length > l2Str.length) {
//     l2Str = l2Str.padStart(l1Str.length, "0");
//   } else if (l2Str.length > l1Str.length) {
//     l1Str = l1Str.padStart(l2Str.length, "0");
//   }

//   let addNums = Number(l1Str) + Number(l2Str);
//   addNums = addNums
//     .toString()
//     .split("")
//     .reverse()
//     .map((num) => Number(num));

//   return addNums;
// };

// console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

/////////////////////////
//#13. Roman to Integer

// const romObj = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };
// const romanToInt = function (str) {
//   let newStr = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "I" && str[i + 1] === "V") {
//       newStr += 4;
//       i++;
//     } else if (str[i] === "I" && str[i + 1] === "X") {
//       newStr += 9;
//       i++;
//     } else if (str[i] === "X" && str[i + 1] === "L") {
//       newStr += 40;
//       i++;
//     } else if (str[i] === "X" && str[i + 1] === "C") {
//       newStr += 90;
//       i++;
//     } else if (str[i] === "C" && str[i + 1] === "D") {
//       newStr += 400;
//       i++;
//     } else if (str[i] === "C" && str[i + 1] === "M") {
//       newStr += 900;
//       i++;
//     } else {
//       newStr += romObj[str[i]];
//     }
//   }
//   return newStr;
// };
// console.log(romanToInt("III"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));

/////////////////////////
//#14. Longest Common Prefix
const longestCommonPrefix = function (strs) {
  let prefix = "";
  if (!strs[0] || strs.length === 1) return strs[0] || prefix;

  for (let i = 0; i < strs[0].length; i++) {
    let commonPrefix = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== commonPrefix) return prefix;
    }

    prefix = prefix + commonPrefix;
  }
  return prefix;
};

console.log("---challange 14---");
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["abc"]));
console.log(longestCommonPrefix(["abcdefgh", "abcde", "abe"]));
console.log(longestCommonPrefix(["abc", "abc", "abc"]));
console.log(longestCommonPrefix(["abc", "abcde", "xyz"]));
