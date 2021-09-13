// Time - O(log(n))
// Space - O(1)

function searchForRange(array, target) {
    const finalRange = [-1,-1];
    alteredBinarySearch(array,finalRange,target,0,array.length - 1,true);
    alteredBinarySearch(array,finalRange,target,0,array.length - 1,false);
    return finalRange;
}

function alteredBinarySearch(array,finalRange,target,left,right,goLeft) {
    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        let potentialMatch = array[mid];

        if (potentialMatch < target) {
            left = mid + 1;
        } else if (potentialMatch > target) {
            right = mid - 1;
        } else {
            if (goLeft) {
                if (mid === 0 || array[mid - 1] !== target) {
                    return finalRange[0] = mid;
                } 

                right = mid - 1;
            } else {
                if (mid === array.length - 1 || array[mid + 1] !== target) {
                    return finalRange[1] = mid;
                }

                left = mid + 1;
            }
        }
    }
}

searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73],45)