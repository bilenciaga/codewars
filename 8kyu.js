// sum without high and lowest number 
sumArray = array => array 
? array.sort((a,b) => a - b).slice(1,-1)
.reduce((prev,curr) => prev + curr, 0)
:0
console.log(sumArray([6, 2, 1, 8, 10])) // = 16 

// reverse string 
reverseString = str => str 
? str.split('').reverse().join('')
:0 
console.log(reverseString('hello'))