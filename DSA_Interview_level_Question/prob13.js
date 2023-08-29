// Character at Odd Position 
// You have to print all the characters in the string , which are present at odd position .
// Input str="Manipal" ,N=7
// Output= aia
let N=7;
let str="Manipal";
let newStr="";
for(let i=0; i<N; i++){
    if(i%2!==0){
        newStr=newStr+str[i]
    }
}
console.log(newStr)
// Dry run
// i=0+1=1+1=2+1=3+1=4+1=5+1=6+1=7   , 7<7 f,
// if(0%2!==0) f
// if(1%2!==0) t
//if(2%2!==0) f
// if(3%2!==0) t
// if(4%2!==0) f
// if(5%2!==0) t
// if(6%2!==0) f

// ns="aia"
