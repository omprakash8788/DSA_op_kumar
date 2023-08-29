//Equal to 52 or Not 
// You are given an array of N integer . You need to print YES if 52 is present in array ,else print NO
//  Input arr=[4,7,9,8,3]
//  N=5;
// Output NO
let arr=[4,7,9,8,3]
let N=5;
let count=0;
for(let i=0; i<N; i++){
    if(arr[i]===52){
        count++
    }
}
if(count>1){
    console.log("YES");
}
else{
    console.log("NO");
}

