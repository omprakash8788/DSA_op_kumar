
// Print matrix in zigzag format

let N=3;
let M=3;

let matrix =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let newMatrix=""
for(let i=0; i<N; i++){
    if(i%2==0){
        for(let j=M-1; j>=0; j--){
            newMatrix=newMatrix+matrix[i][j]+" "
        }
    }
    else{
        for(let j=0; j<M; j++){
            newMatrix=newMatrix+matrix[i][j]+" "
        }
    }
}
console.log(newMatrix);

