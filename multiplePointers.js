const countUniqueValues = (arr) => {
  if (arr.length === 0 || arr.length === 1) {
    return arr.length;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
//should return 7

console.log(countUniqueValues([]));
//should return 0

console.log(countUniqueValues([8]));
//should return 1

console.log(countUniqueValues([1, 1, 1, 1]));
//should return 1
