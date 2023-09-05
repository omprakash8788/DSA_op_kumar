// Q - Even Array 
// You are given an array store in a variable with the name of arr.
// Print only the even elements in the array 
// Print each number in a new line 
// Input arr=[1,2,3,4,5] ,N=5
// Output 
//      2 
//      4
let arr = [1,2,3,4,5]
let N=5;

for(let i=0; i<N; i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}


