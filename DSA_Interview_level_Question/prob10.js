//Q. Maximum in array 
// You are given an array store in a variable with the size arr
// You have to find the maximum number in the array.
let N=5;
let arr=[12,23,3,7,87]
// Output = 87;

let max=arr[0]
for(let i=0; i<N; i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
console.log(max)
// Dry run 
// i=0+1+1=2+1=3+1+1=5  , 5<5 f

// if(arr[0]>arr[0])  12>12 f
// if(arr[1]>arr[0])  23>12 t
// if(arr[2]>23)  3>23 f
// if(arr[3]>23)  7>23 f
// if(arr[4]>23)  87>23 t

// max =87
