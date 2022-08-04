//solution implements the 2 pointers pattern

function areThereDuplicates() {
  if (arguments.length === 0 || arguments.length === 1) return false;

  let i = 0;

  for (let j = 1; j < arguments.length; j++) {
    if (arguments[i] === arguments[j]) {
      return true;
    }
    arguments[j] = arguments[i];
    i++;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4)); //should return false
console.log(areThereDuplicates(1, 1, 2, 7)); //should return true
console.log(areThereDuplicates()); //should return false
console.log(areThereDuplicates(1)); //should return false
console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1)); //should return true;
