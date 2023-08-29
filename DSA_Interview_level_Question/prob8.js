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
console.log(sum) // 6 return 
// i =0+1=1+1=2+1=3+1=4+1=5  ,5<5 f 

// if(1%2==0) f
// if(2%2=0) t
//if(3%2==0) f
//if(4%2=0) t
// if(5%2==0) f

// sum=0+2=2+4=6