"use strict";

// 1523. Count Odd Numbers in an Interval Range
// let arr;
// let a;
const countOdds = function (low, high) {
  let arr = [low];
  let a = low;
  while (a < high) {
    a += 1;
    arr.push(a);
  }
  const oddArr = arr.filter((num) => num % 2 === 1);
  return oddArr.length;
};
console.log(countOdds(1, 21));

// 1491. Average Salary Excluding the Minimum and Maximum Salary

const average = function (salary) {
  const min = Math.min(...salary);
  const max = Math.max(...salary);
  const avgArr = salary.filter((num) => num !== min && num !== max);

  const avgSum = avgArr.reduce((acc, cur) => acc + cur, 0);
  return avgSum / avgArr.length;
};

console.log(average([1000, 2000, 3000]));

// 1. Two Sum
const twoSum = function (nums, target) {
  let outObj = {};

  nums.forEach((el, i) => {
    outObj[el] = i;
  });

  for (const [i, value] of nums.entries()) {
    const a = target - value;
    if (outObj[a] !== undefined && outObj[a] !== i) {
      return [i, outObj[a]];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
