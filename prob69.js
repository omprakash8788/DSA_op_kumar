
//    Write a program to reverse an array or string
//    Given an array (or string), the task is to reverse    the array/string.
//    Input  arr= [1, 2, 3]
//    Output = 3 2 1
//    Input arr = [4, 5, 1, 2]
//    Output = 2 1 5 4

let   arr = [4, 5, 1, 2]
let newArray="";
for(let i=arr.length-1; i>=0; i--){
    newArray=newArray+arr[i]+" "
}
console.log(newArray);



