// Q. Check Palindrome 
// You are given a string , whose size is stored in a variable with the name N.
// The string is stored in a variable with the name str.
// Print YES , if the string is a palindrome , else print NO.
// Input let str="mam" ,N=3

let N=3;
let str="mam"
let newStr="";
for(let i=str.length-1; i>=0; i--){
   newStr=newStr+str[i]
}
if(newStr==str){
    console.log("YES")
}
else{
    console.log("NO")
}
// i=2-1=1-1=0-1=-1 , -1>=0 f,
//ns ="mam"
