// Remove duplicates
// Given an array of n integers, the array is sorted. You have to remove the duplicates, print only unique elements.
let n=6
let arr =[1,1,2,2,4,3]

let obj={}
for(let i=0; i<n; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1;
    }
    else{
         obj[arr[i]]++
    }
}
let count=0;
let bag="";
for(let key in obj){
    if(obj[key]>=1){
        count++;
        bag=bag+key+" "
    }
}
console.log(bag)
