// Given an array find the unique items in array
// Output 3

let arr=[1,2,1,2,3]
let obj={}
for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }
    else{
        obj[arr[i]]++
    }
}
//console.log(obj);
for(let key in obj){
    if(obj[key]==1){
        console.log(key);
    }
}

