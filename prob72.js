// Q Sum of Row .
// You have to print the sum of all element in a row , on a new line
//    let N=3;
//    let M=2;
//     let arr=[
//          [1,2],
//          [3,4],
//          [5,6]  
//             ]
// Output 3
//        7
//        11

let N=3;
let M=2;
let arr=[
    
    [1,2], 
    [3,4],  
    [5,6]
]
for(let i=0; i<N; i++){
    let sum=0;
    for(let j=0; j<M; j++){
        sum=sum+arr[i][j]
    }
    console.log(sum)
}
// Dry run 
// i=0+1=1+1=2+1=3  , 3<3 t 

// j=0+1=1+1=2   ,2<2 f
// sum=sum+arr[0][0]=>1
// sum=1+arr[0][1]=>2=3

// j=0+1=1  ,1<2 t
// s=0+arr[1][0]=>3
// s=3+arr[1][1]=>4=3+4=7

// j=0+1=1 , 1<2 t
// s=0+arr[2][0]=>5
//s=5+arr[2][1]=>6=5+6=11





