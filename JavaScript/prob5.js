/* Reverse String
Write a function that reverses a string. The input string is given as an array of characters s.
Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]   */
let s = ["h","e","l","l","o"]  
let left=0;
let right=s.length-1;
while(left<right){
    // swap value.
    // left<right
    let temp=s[left]
    s[left]=s[right]
    s[right]=temp;
    left++
    right--
}
console.log(s.join());


   
   


