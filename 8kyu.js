// // sum without high and lowest number 
// // sumArray = array => array 
// // ? array.sort((a,b) => a - b).slice(1,-1)
// // .reduce((prev,curr) => prev + curr, 0)
// // :0
// // console.log(sumArray([6, 2, 1, 8, 10])) // = 16 

// // reverse string 
// // solution = str => str 
// // ? str.split('').reverse().join('')
// // :0 
// // console.log(solution('hello'))

// // reverse words
// // const reverseW = str => {
// //   let reverseA =  str.split(' ').map(word => word.split('').reverse().join(''));
// //   return reverseA.join(' ')
// // }
// // console.log(reverseW('Troi oi'))

// // friend or foe 
// // const solution = array => array.filter(friend => friend.length == 4)
// // console.log(solution(['nhan', 'nam', 'tung', 'hien', 'lam']))

// // find smallest integer in the array 
// class SmallestIntegerFinder {
//   findSmallestInt = args => Math.min(...args)
// }
// console.log(SmallestIntegerFinder([1, 2 , 3 , -4]))

// sum of positive 
const positiveSum = arr => {
 return arr.reduce((x,y) => x + (y > 0 ? y : 0), 0)
}
