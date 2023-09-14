// Count number of common elements between a sorted array and a reverse sorted array
// Given two arrays consisting of N distinct integers such that the array A[] and B[] are sorted in ascending and descending order respectively, the task is to find the number of values common in both arrays.
let N=6;
let arr1=[1,2,2,3,4,5]             // arr1=[1,2,2,3,4,5]  ,  arr2=[4,4,3,2,1,1] 
let arr2=[4,4,3,2,1,1] 
// Output - 4 
let count=0;
let L=0;
let R=N-1;
while(L<N && R>=0){
    if(arr2[R]==arr1[L]){
        count++
        L++
        R--
    }
    else if(arr1[L]<arr2[R]){
        L++
    }
    else{
        R--
    }
}
console.log(count);











