// Function signature:
// name: letterIndex
// arguments: str a string
// return: object

// Given a string, returns an object with a each letter as a property
// property set to the number of the letter index in the string
// Has no side-effects.


function letterIndex(str) {
  var output = {};
  // for (var i in str) {
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    // var index = i;
    if (output[char]) {
      output[char].push(i);
    } else {
      output[char] = [i];
    }
  }
  return output;
}


console.log(letterIndex('hi there'));
