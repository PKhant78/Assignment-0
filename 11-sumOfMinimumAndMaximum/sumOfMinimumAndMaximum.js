function sumOfMinimumAndMaximum(nums) {
  var lowest = nums[0];
  var highest = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (lowest > nums[i]) {
      lowest = nums[i];
    }
    if (highest < nums[i]) {
      highest = nums[i];
    }
  }

  var sum = lowest + highest;

  return sum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;