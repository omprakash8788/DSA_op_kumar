
let shiva=""
for(let i=0; i<N; i++){
    let max=-Infinity
    for(let j=0; j<M; j++){
        if(arr[i][j]>max){
            max=arr[i][j]+" "
        }
    }
    shiva+=max
}
console.log(shiva);