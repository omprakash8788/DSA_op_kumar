// Your task is make unique array
// Given a storted array , remove the dublicate from the array.
// Input arr=[3,3,3,6,8]
// Output = 3 6 8

let arr=[3,3,3,6,8]
let N=5;
let obj={}
let newArr=""
for(let i=0; i<N; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }
}
//console.log(obj);
for(let key in obj){
    if(obj[key]==1){
        newArr=newArr+key+" "
    }
}
console.log(newArr);