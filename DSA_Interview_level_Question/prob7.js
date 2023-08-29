// Q. Sum of Array 
// You are given an array , whose size is stored in a variable of size N.
// You have to print the sum of all elements of an array.
// Input arr=[1,2,3,4,5], N=5
// Output  15
let N=5;
let arr=[1,2,3,4,5]
let sum=0;
for(let i=0; i<N; i++){
    sum=sum+arr[i]
}
console.log(sum)
// dry run 
// i=0+1=1+1=2+1=3+1=4+1=5     , 5<5 f

// sum=6+4=10+5=15
