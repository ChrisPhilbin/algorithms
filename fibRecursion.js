const calculateFib = (num) => {
  return num <= 1 ? 1 : calculateFib(num - 1) + calculateFib(num - 2);
};

console.log(calculateFib(5));
