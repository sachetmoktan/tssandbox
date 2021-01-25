let myString: string;
let myNum: number;
let myBool: Boolean;

// myString = 'Hello World';
myString = 'HelloWorld'.slice(0,3);
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
let strrArray: Array<string>;
strrArray = ['Dog', 'Cat', 'Fish'];
console.log(strrArray);

//Array of number
let numArray: Array<number>;
numArray  = [1, 2, 3, 4];
console.log(numArray);

// Tuple
let strnumtuple: [string, number];
// The argument must be in order: string and then only number
strnumtuple = ['Sachet', 1];
// strnumtuple = [1, 'Sachet'] err
// strnumtuple = ['Sachet', 1, 2, 3]; no err
console.log(strnumtuple);


let myVoid: void = null;   //undefined also works
console.log(myVoid);

let myNull: null = null;
let myUndefined: undefined = undefined;