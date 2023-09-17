//Equal to 30 or Not 
// You are given an array of N integer . You need to print YES if 30 is present in array ,else print NO
//  Input arr=[4,7,9,8,3]
//  N=5;
// K=30
// Output NO
let arr=[4,7,9,8,3]
let N=5;
let k=30;
let count=0;
for(let i=0; i<N; i++){
    if(arr[i]===k){
        count++
    }
}
if(count>1){
    console.log("Yes");
}
else{
    console.log("No");
}


