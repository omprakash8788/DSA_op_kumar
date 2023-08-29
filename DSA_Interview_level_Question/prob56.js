let nums = [0,1,0,3,12]
let i = 0;
let j = 0;

while(i < nums.length) {
    if(nums[i] == 0) {
        i++;
    } else {
        let temp;
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;

        i++;
        j++;
    }
}
console.log(nums)