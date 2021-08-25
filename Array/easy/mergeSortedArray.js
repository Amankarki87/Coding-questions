// Time - O(m + n)
// Space - O(1)

var merge = function(nums1, m, nums2, n) {
    if (n < 0) {return nums1;}
    
    let i = m - 1;
    let j = n - 1;
    let idx = nums1.length - 1;
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[idx] = nums1[i];
            nums1[i] = nums2[j];
            i --;
        } else {
            nums1[idx] = nums2[j];
            j --;
        }
        idx --;
    }  
    
    while (j >= 0) {
        nums1[idx--] = nums2[j--]
    }
};

merge([1,2,3,0,0,0],3,[2,5,6],3)