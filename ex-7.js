function isPalindrome(string) {
  let spiltString = string.split("")
  let reverseString = spiltString.reverse()
  let joinReverseString = reverseString.join("")
  console.log(reverseString)
  console.log(string)
  if(joinReverseString  === string){
    return true
  }else {return false}
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false

