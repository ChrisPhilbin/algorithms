const findAveragePair = (arr, target) => {
  if (!arr || arr.length === 0 || arr.length === 1) {
    return false;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let calculatedAverage = (arr[left] + arr[right]) / 2;

    if (calculatedAverage === target) {
      return true;
    } else if (calculatedAverage < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
};

console.log(findAveragePair([1, 2, 3], 2.5)); //true
console.log(findAveragePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(findAveragePair([], 4)); //false
