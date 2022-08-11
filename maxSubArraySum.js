const maxSubArraySum = (arr, num) => {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    //add up the initial range of nums in the array from 0 to num
    total += arr[i];
  }

  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    //subtract right most digit in the current window from the left most digit in the window and then compare max vals and keep highest
    total = Math.max(total, currentTotal);
  }

  return total;
};

console.log(maxSubArraySum([100, 200, 300, 400], 2)); //should return 700
console.log(maxSubArraySum([2, 3], 3)); //should return null
