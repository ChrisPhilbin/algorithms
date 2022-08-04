const findZeroZum = (arr) => {
  if (!arr || arr.length === 0 || arr.length === 1) {
    return undefined;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return undefined;
};

console.log(findZeroZum([-3, -2, -1, 0, 0, 1, 5])); //should return [-1, 1]
console.log(findZeroZum([1])); //should return undefined
console.log(findZeroZum()); //should return undefined
console.log(findZeroZum([])); //should return undefined
