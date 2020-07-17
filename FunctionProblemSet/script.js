//isEven

// function isEven(num) {
//   if (num % 2 === 0) {
//    return true;
// } else {
//    return false
//   }
// }

function isEven(num) {
  return num % 2 === 0;
}

isEven(4);
isEven(21);
isEven(68);
isEven(333);

//factorial()

function factorial(num) {
  //define a result variable
  var result = 1;
  //calculate factorial and store value
  for (var i = 2; i <=num; i++) {
    result *= 1;
  }
  //return the result variable
  return result;
}
// factorial(4) 4 x 3 x 2 x 1

// function factorial(num) {
//   var result = num;
//
//   if (num ===0 || num === 1)
//     return 1;
//
//   while (num > 1) {
//     num --;
//     result = result * num;
//   }
//   return result;
// }

factorial(5);
factorial(2);
factorial(10);
factorial(0);


//Replacing character string

function kebabToSnake(str) {
  //replace all '-' with "_"'switch
  //return str
  var newStr =  str.replace(/-/g, "_");
  return newStr;
}

kebabToSnake("hello-world");
kebabToSnake("dogs-are-awesome");
kebabToSnake("blah");
