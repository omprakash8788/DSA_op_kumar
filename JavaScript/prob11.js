/*  Count pairs with given sum
Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.
Example 1:
Input:
N = 4, K = 6
arr=[1, 5, 7, 1]   
Output: 2
Explanation: 
arr[0] + arr[1] = 1 + 5 = 6 
and arr[1] + arr[3] = 5 + 1 = 6.     */
let arr=[1, 5, 7, 1]
let N = 4, K = 6;
let count_pairs=0;
for(let i=0; i<N; i++){
    for(let j=i+1; j<N; j++){
        if(arr[i]+arr[j]==K){
           count_pairs++
        }
    }
}
console.log(count_pairs);



