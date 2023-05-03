let  arr=[8, 7, 2, 5, 3, 1]
let n=6
let k=10;
let countPairs=0
let L=0;
let R=n-1;
let sum=0
arr.sort(function(a,b) {return a-b})
while(L<R){
    sum=arr[L]+arr[R]
    if(sum==k){
        countPairs++
        break
    }
    else if(sum<k){
        L++
    }
    else{
        R--
    }

}
console.log(countPairs);