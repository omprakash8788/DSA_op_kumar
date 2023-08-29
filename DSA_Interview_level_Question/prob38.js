// Rotate By 90
// Given a matrix of size N , turn it by 90 degrees in anti-clockwise direction .

let N=3
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i=N-1; i>=0; i--){
    let newMatrix=""
    for(let j=0; j<N; j++){
        newMatrix=newMatrix+matrix[j][i]+" ";
    }
    console.log(newMatrix);
}
