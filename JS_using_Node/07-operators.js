// bit-wise operator in JS
console.log(5 & 1); // it returns 1
// why it returns 1 lets find
// 5 in binary is 0101 and 1 in binary is 0001
// 0101
// 0001
// ------
// 0001 
// ------
// & (AND) means if both the bit values are 1 then result is 1 other wise 0
 

console.log(5 | 10); // it returns 15
// 0101
// 1010
// -----
// 1111
// -----
// | (OR) means if one bit or both bit value is 1 then the result is 1 otherwise 0


console.log(5 ^ 6); // it returns 3
// 0101
// 0110
// -----
// 0011
// -----
// ^ (XOR) means if the two bits are different, result is 1 and if they are same result is 0.


console.log(~5); // it returns -6
// 00000000 00000000 00000000 00000101
// -----------------------------------
// 11111111 11111111 11111111 11111010
// -----------------------------------
// ~ (NOT) flips the value 0 becomes 1 and 1 becomes 0
// formula ~n = -(n+1)
