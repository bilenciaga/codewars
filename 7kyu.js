// friend or foe 
// const solution = array => array.filter(friend => friend.length == 4)
// console.log(solution(['nhan', 'nam', 'tung', 'hien', 'lam']))

// const oddOrEven = array => {
//   const sum = array.reduce((p,c) => p + c, 0);
//   console.log(sum)
//   if (sum % 2)  { return 'odd' }
//   else {return 'even'}
// }
// console.log(oddOrEven([3, 2, 3, 4]))

function solution(letter, word) {
  if ( letter.trim().length > 0 && word.trim().length > 0) {
    const letterAO = letter.split("").sort().join("")
    const wordAO = word.split("").sort().join("")
    console.log(letterAO, wordAO)
    if ( wordAO.includes(letterAO)) return true
    return false
  }
  return false
}
console.log(solution('god1','dog'))