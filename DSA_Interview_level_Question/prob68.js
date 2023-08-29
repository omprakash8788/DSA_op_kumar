/*
 Find the pair whose sum is equal to k 
  arr=[8, 7, 2, 5, 3, 1]
  k=10
*/
//  ----------- Brute force approch .......
let  arr=[8, 7, 2, 5, 3, 1]
let n=6
let k=10;
let countPairs=0

for(let i=0; i<=n-2; i++){     // n 
  for(let j=i+1; j<=n-1; j++){ // n  ,  Tc - O(n^2)
    if(arr[i]+arr[j]==k){
       countPairs++ 
    }
  } 
}
console.log(countPairs);

//  Two Pointer Approch .........



