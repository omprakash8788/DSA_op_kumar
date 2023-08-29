// Q. Given an array find the unique items in array .
// Input  arr=[1,1,2,3,3]
// Output = 2;
let  arr=[1,1,2,3,3]
let obj={}// {"1":2,"2":1,"3":2 }
for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]==undefined){ //arr[4]=
        obj[arr[i]]=1
    }
    else{
        obj[arr[i]]++
    }
}
for(let key in obj){
    if(obj[key]==1){
        console.log(key)
    }
}
// Dry run 
// i=1+1=2+1=3+1=4+1=5  , 5<5 f,

 

