function countOfAllIndexMatchingNumbers(nums) {
  var count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == i) {
        count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;