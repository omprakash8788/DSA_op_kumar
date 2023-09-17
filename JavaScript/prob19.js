// Intersection of Array
// You are given 2 arrays arr1 and arr2 of N integers .
// Your task is to write a program that finds the one interger which is common  in both arrays.
// Note : There is always one interger common in both arrays.

let N=3;
let arr1=[4,5,7]
let arr2=[9,2,5]
// Output = 5
let res=[]
for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        if(arr1[i]==arr2[j]){
            res.push(arr1[i])
        }
    }
}
console.log(res.join(" "));


