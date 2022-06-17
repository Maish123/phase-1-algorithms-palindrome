function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = (word.toLowerCase().split("").reverse(). join(""))
  if (reversedWord === word){
    return true;
  } else{
    return false;
  };
};

isPalindrome("racecar");



/* 
  Add your pseudocode here
  define a way in which  a string will read foward and backward. 
  we can dothis by splitting the string to array then reversing it
  this returns array of strings reversed. 
  Join them.
  use a conditional to check whether this variable === string argument
  return true if they are alike
  return false if they are not alike



/*
  Add written explanation of your solution here
*/
//describe a function(isPalindrome), describe a processs of how to actually reverse a string.
//this means to make a string or a word read the same foward or backward.
//assign it to a variable then check whether this variable will actually match with
//the given string. You will check with an if statement to return true if they match or false
//if they dont match 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
