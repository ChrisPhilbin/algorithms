const frequencyCounter = (num1, num2) => {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) return false;

  freq1 = {};
  freq2 = {};

  for (let val of num1) {
    freq1[val] = freq1[val] + 1 || 1;
  }

  for (let val of num2) {
    freq2[val] = freq2[val] + 1 || 1;
  }

  for (key in freq1) {
    if (freq1[key] !== freq2[key]) return false;
  }

  return true;
};

console.log(frequencyCounter(222, 202)); //should return false
