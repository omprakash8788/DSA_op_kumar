//      Cyclically rotate an array by one  
//      Given an array, rotate the array by one position in clock-wise direction.     
//      Input:
//      N = 5
//      A[] = {1, 2, 3, 4, 5}
//      Output:
//      5 1 2 3 4
let arr =[1,2,3,4,5]
let n=5


let a=arr[n-1] //5
for(let i=n-2; i>=0; i--){
    arr[i+1]=arr[i]
}
arr[0]=a
console.log(arr);

// console.log(a);
