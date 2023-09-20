// Create a function to check if a number is prime or not . If number is a prime print yes otherwise print no.
// A prime number is a number that is divisible by 1 and itself only. 
// let num=13 
// output = yes
let num=13 
let count=0;
for(let i=1; i<=num; i++){
    if(num%i==0){
        count++
    }
}
// console.log(count);
if(count==2){
    console.log("yes");
}
else{
    console.log("no");
}






