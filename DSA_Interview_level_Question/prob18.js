// Q. Given a square matrix print both the diagonals.

let arr=[
    [1,2,3],  // i==j 
    [4,5,6],  // i==j
    [7,8,9],  // i==j
    
];
// Output = left diagonal - 1 5 9 , right diagonal = 3 5 7 
let rows=arr.length; //rows=3
let cols=arr[0].length; // cols=3
//console.log(cols)
let left="";
let right="";
//console.log(rows);
for(let i=0; i<=rows-1; i++){
    for(let j=0; i<=cols-1; j++){
      if(i==j){
        left=left+arr[i][j]+" ";
      }
    }
}
console.log(left)


 