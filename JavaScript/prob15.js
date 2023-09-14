// Q. Even Array sum 
// You are given an array , whose size is stored in a variable of size N.
// You have to print the sum of all elements of an array.
// Input arr=[1,2,3,4,5], N=5
// Output  6

let N=5;
let arr=[1,2,3,4,5]
let sum=0;
for(let i=0; i<N; i++){
    if(arr[i]%2==0){
        sum=sum+arr[i]
    }
}
console.log(sum);


