// Program to Print Matrix in Z form

// Given a square matrix of order n*n, we need to print elements of the matrix in Z form

let N=3;
let arr=[[1,2,3],[4,5,6],[7,8,9]]
let bag="";
for(let i=0; i<N; i++){
    bag=bag+arr[0][i]+" "
}
let i=1;
let j=N-2;
while(i<N && j>=0){
    bag=bag+arr[i][j]+" ";
    i++;
    j--
}
for(let j=1; j<N; j++){
    bag=bag+arr[N-1][j]+" ";
}
console.log(bag)
