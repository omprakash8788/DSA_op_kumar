// String 
// Q .Print characters of a string 
// You are given a string , whose size is store in a variable with the name N
// The string itself is stored in a variable with the name  str.
// Your task is print all characters stored in str .
// Input N=7 , str="Manipal" 
// Output =  Manipal
let N=7;
let str="Manipal";

let newStr="";
for(let i=0; i<N; i++){
    newStr=newStr+str[i];
}
console.log(newStr)
// Dry run 
// i=0+1=1+1=2+1=3+1=4+1=5+1=6+1=7  , 7<7 f,
// ns= ""+M="Manipal"

