function isPalindrome(string) {
  // Start coding here
  let arrayWord = string.split("")
  let reverseWord = arrayWord.reverse().join("")

  return string === reverseWord


}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false