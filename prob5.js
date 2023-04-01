//Q - Reverse Array 
// You are given an array store in the variable the name arr
// The size of array is stored in variable with the name N
// Input , N=5 , arr=[1,2,3,4,5]
// Output = 5 4 3 2 1
let N=5
let arr=[1,2,3,4,5]

let newArr="";
for(let i=arr.length-1; i>=0; i--){
    newArr=newArr+arr[i]+" ";
}
console.log(newArr)
// --------- dry run --------
//i=4-1=3-1=2-1=1-1=0-1=; -1>=0 f 
 newArr=" 5 4 3 2 1 " // arr[0]=1




