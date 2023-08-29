let arr=[1,2,0]

let set = new Set() ,res=1;
for(let ele of arr){
    if(ele > 0){
        set.add(ele)
    }
}
while(set.has(res)){
    ++res;
}
console.log(res);