
// Count number of common elements between a sorted array and a reverse sorted array

// Given two arrays consisting of N distinct integers such that the array A[] and B[] are sorted in ascending and descending order respectively, the task is to find the number of values common in both arrays.
let N=6;
let arr1=[1,2,2,3,4,5]
let arr2=[4,4,3,2,1,1]

// Output = 4;
let l=0;
let r=N-1;
let count=0;

while(l<N && r>=0){
    if(arr2[r]==arr1[l]){
        count++;
        l++;
        r--
    }
    else if(arr1[l]<arr2[r]){
        l++
    }
    else{
        r--
    }
}
console.log(count);
