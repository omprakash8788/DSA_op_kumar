// Map characters
// You have to print the first N english smaller case alphabets , mapped with the value starting from 1 to N.
// Input N=5 , 
// Output= a-1
//         b-2
//         c-3
//         d-4
//         e-5
let N=5
let char="abcdefghijklmnopqrstuvwxyz";
let obj={}
for(let i=0; i<N; i++){
    let x=char[i]
    if(obj[x]==undefined){
        obj[x]=i+1
    }
    else{
        obj[x]++
    }
}
for(let key in obj){
    console.log(key +"-"+ obj[key])
}


