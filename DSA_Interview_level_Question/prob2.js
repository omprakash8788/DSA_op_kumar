// Q. Your first pattern 
// You are given a number store in variable with the name N.
// Input N=3
// Output 
//        * * *
//        * * *
//        * * *
let N=3;
for(let i=1; i<=N; i++){
    let store="";
    for(let j=1; j<=N; j++){
        store=store+"*"+" "
    }
    console.log(store)
}
// ----------------- Dry Run --------------
// i=1+1=2 , 2<=3 t, 

// j=1+1=2+1=3+1=4 , 4<=3 f,
// s="* * *" 




