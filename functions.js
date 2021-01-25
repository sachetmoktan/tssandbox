function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 2));
// console.log(getSum('Hello',2)); error
var getDiff = function (num1, num2) {
    return num1 - num2;
};
console.log(getDiff(1, 2));
// console.log(getSum('Hello',2)); error
function getSums(num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
}
console.log(getSums('5', 2));
console.log(getSums(5, 2));
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
console.log(getName('Sachet', 'Moktan'));
console.log(getName('Sachet'));
