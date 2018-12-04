function reverseArray () {
  let reverseArr =[];
  for (let i = 0; i < arguments[0].length; i++) {
    reverseArr[i] = arguments[0][arguments[0].length-i-1]
  }
  return reverseArr;
}

function reverseArrayInPlace () {
  let reverseArr =[];
  for (let i = 0; i < arguments[0].length; i++) {
    reverseArr[i] = arguments[0][arguments[0].length-i-1]
  }
  for (let i = 0; i < arrayValue.length; i++){
     arrayValue[i] = reverseArr[i];
  }
}




console.log(reverseArray(["A", "B", "C"]));

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
