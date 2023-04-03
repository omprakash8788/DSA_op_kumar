// Your first 2D Array .
// You have to print the element of 2D array , row by row.
let N=3;
let M=2;
let arr=[
    [1,2],
    [3,4],
    [5,6]               
]
for(let i=0; i<N; i++){
    let newArr="";
    for(let j=0; j<M; j++){
        newArr=newArr+arr[i][j]+" ";
    }
    console.log(newArr)
}