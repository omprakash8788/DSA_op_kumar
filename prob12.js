// Print characters of a string in reverse .
// You are given a string , whose size is store in a variable with the name N.
// You have to print all the characters in the string in reverse order .
// Input str="Manipal" ,N=7
// Output = lapinaM 
let N=7;
let str="Manipal"
let newStr=""
for(let i=str.length-1; i>=0; i--){
    newStr=newStr+str[i] 
}
console.log(newStr);
// Dry run 
// i=6-1=5-1=4-1=3-1=2-1=1-1=0-1=-1  , -1>=0 f,
// ns="lapinaM"



