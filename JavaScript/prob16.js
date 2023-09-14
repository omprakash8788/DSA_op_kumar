// Your task is make unique array
// Given a storted array , remove the dublicate from the array.
// Input arr=[3,3,3,6,8]
// Output = 3 6 8

let arr=[3,3,3,6,8]
let N=5;

let obj={};
for(let i=0; i<N; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }
}
// console.log(obj);  { '3': 1, '6': 1, '8': 1 }
let new_Arr="";
for(let key in obj){
    if(obj[key]==1){
        new_Arr=new_Arr+key+" "
    }
}
console.log(new_Arr);



 
