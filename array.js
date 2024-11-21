// pop remove the last element in array
let array = [1, 2, 3, 4]
array.pop()
console.log(array) // output[1,2,3]
//push add number in the the last
array.push(2)
console.log(array) //output[1,2,3,2]
//shift also remove the element like pop but remove it remove the first element
array.shift()
console.log(array) // output[2,3,2]
//unshift add the first element in the array
array.unshift(4)
console.log(array) //output[4,2,3,2]
//concat is used to join the arrays
let a1 = [1, 2]
let a2 = [3, 4]
let a3 = [5, 6]
let a4 = a1.concat(a2, a3)
console.log(a4) // output[1,2,,4,5,6]
