var myString;
var myNum;
var myBool;
// myString = 'Hello World';
myString = 'HelloWorld'.slice(0, 3);
// myString =  22;  err
myNum = 20;
// myNum = 'Hello World';  err
myBool = true;
// myBool = 22;  err
console.log(myString);
console.log(myNum);
console.log(myBool);
//Array of string
// let strArray: string[];  
var strrArray;
strrArray = ['Dog', 'Cat', 'Fish'];
console.log(strrArray);
//Array of number
var numArray;
numArray = [1, 2, 3, 4];
console.log(numArray);
// Tuple
var strnumtuple;
// The argument must be in order: string and then only number
strnumtuple = ['Sachet', 1];
// strnumtuple = [1, 'Sachet'] err
// strnumtuple = ['Sachet', 1, 2, 3]; no err
console.log(strnumtuple);
var myVoid = null; //undefined also works
console.log(myVoid);
var myNull = null;
var myUndefined = undefined;
