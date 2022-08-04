const palindrome = "race car";

const isPalindrome = (word) => {
  if (!word) {
    return;
  }

  word = word.replace(/\s/g, "").split("");

  const letterCounts = {};
  let oddCounts = 0;

  word.forEach((letter) => {
    letterCounts[letter] = letterCounts[letter] + 1 || 1;
  });

  Object.values(letterCounts).forEach((counts) => {
    if (counts % 2 !== 0) {
      oddCounts++;
    }
  });

  return oddCounts % 2 !== 0;
};

console.log(isPalindrome(palindrome));
