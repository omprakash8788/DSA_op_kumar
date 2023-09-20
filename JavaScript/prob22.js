// Given string str of length N, the task is to remove uppercase, 
let str="Mani"
// Output = ani
let newStr="";
let char="abcdefghijklmnopqrstuvwxyz";
for(let i=0; i<str.length; i++){
    for(let j=0; j<char.length; j++){
        if(str[i]==char[j]){
            newStr=newStr+str[i]
        }
    }
}
console.log(newStr);
