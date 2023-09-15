// Divisible Sum Pairs
// Given an array of integers and a positive integer k , determine the number of (i, j)  pairs where  i<j and  arr[i] + arr[j]  is divisible by k.

// Example:-
//     n = 6, k = 3
//     ar = [1, 3, 2, 6, 1, 2]
//     output = 5

let ar = [1, 3, 2, 6, 1, 2]
let n=6;
let k=3
let count=0;
for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        if((ar[i]+ar[j])%k==0){
            count++
        }
    }
}
console.log(count);




