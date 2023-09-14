// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
let nums=[0,1,0,3,12]
let left=0;
for(let i=0; i<nums.length; i++){
    if(nums[i]!=0){
        let temp=nums[i];
        nums[i]=nums[left];
        nums[left]=temp;
        left++
    }
}
console.log(nums);

// let a=10;
// let b=20;
// const temp = a; // store a value in temp
// a=b;  // store b value in a 
// b=temp;   // store temp value in b .
// console.log(a, b);
