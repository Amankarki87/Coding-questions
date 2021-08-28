// Time - O(n)
// Space - O(1)

// var missingNumber = function (nums) {
//     let size = nums.length;
//     let totalSumOfNNumber = size * (size + 1)/2;
//     let currentSum = 0;

//     for (let i=0;i<nums.length;i++) {
//         currentSum += nums[i];
//     }

//     return totalSumOfNNumber - currentSum;
// }

// Time - O(n)
// Space - O(1)

var missingNumber = function (nums) {
    let xor1 = nums[0];
    
    for (let i = 1;i < nums.length;i++) {
        xor1 = xor1 ^ nums[i];
    }

    for (let i = 0;i < nums.length + 1; i++ ) {
        xor1 = xor1 ^ i;
    }
    
    return xor1;
}

missingNumber([3,0,1])