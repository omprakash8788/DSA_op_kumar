// Q - Even Array 
// You are given an array store in a variable with the name of arr.
// Print only the even elements in the array 
// Print each number in a new line 
// Input arr=[1,2,3,4,5] ,N=5
// Output 
//      2 
//      4
let arr=[1,2,3,4,5]
let N=5;
for(let i=0; i<N; i++){
    if(arr[i]%2==0){ // 5%2==0 f
        console.log(arr[i])
    }
}
// Dry run 
// i=0+1=1+1=2+1=3+1=4+1=5  , 5<5 f;
// if(1%2==0) fal
// if(2%2==0) tr
// arr[1]=2
// arr[2]=3
// if(3%2==0) f
// arr[3]=4
// 4%2==0
// console.log(4)

