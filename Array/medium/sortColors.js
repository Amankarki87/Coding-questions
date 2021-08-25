// Time - O(n)
// Space - O(1)

var sortColors = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let current = 0;
    
    while (current <= right) {
        let value = nums[current];
        if (value === 0 ) {
            let leftValue = nums[left];
            nums[left] = nums[current];
            nums[current] = leftValue;
            left += 1;
            current += 1;
        } else if ( value === 2) {
            let rightValue = nums[right];
            nums[right] = nums[current];
            nums[current] = rightValue;
            right -= 1;
        } else {
            current += 1;
        }
    }

    return nums;
}

sortColors([2,0,2,1,1,0]);