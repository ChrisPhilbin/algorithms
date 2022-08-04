const binarySearch = (arr, val) => {
  //time complexity - log(n)
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    console.log(middle, "middle value");
    let currentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); //should return 2

//function accepts a SORTED array and will return the index where the second argument is located within the array
