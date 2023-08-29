//Q. Print arrays in horizontal
// You are given an array , whose size is store in a variable of size N.
// The array is store in a variable with the name ,arr
//         Input 
//         N=5
//         arr=[1,2,3,4,5]
//         Output=1 2 3 4 5
let N=5;
let arr=[1,2,3,4,5]
let newArr=""
for(let i=0; i<N; i++){
newArr=newArr+arr[i]+" ";
}
console.log(newArr)
// ------ Dry run ----------//
//i=0+1=1+1=2+1=3+1=4+1=5  5<5 f 
//newArr=""+1+ ="1 2 3 4 5 " 
