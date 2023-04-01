//Q. Minimum in array 
// You are given an array store in a variable with the size arr
// You have to find the minimum number in the array.
let N=5;
let arr=[12,23,3,7,87]

// Expected output =3 
let min= arr[0]
for(let i=0; i<N; i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(min)
// Dry run -----------
// i=0+1=1+1=2+1=3+1=4+1=5   , 5<5 f,

// if(12<12) f
// if(23<12) f
// if(3<12) t
// if(7<3) f
// if(87<3) f


// min=3






