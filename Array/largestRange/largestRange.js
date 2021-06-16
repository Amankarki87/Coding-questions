/** 
 * Time complexity O(n)
 * Space complexity O(1)
*/

function largestRange(array) {

    let range_map = {};

    for (let i = 0; i< array.length;i++) {
        if (!range_map[array[i]]) {
            range_map[array[i]] = true;
        }
    }

    let largestPaths = 0;
    let bestPaths = [];

    for (let i = 0; i< array.length; i++) {
        if (!range_map[array[i]]) continue;
        range_map[array[i]] = false;
        let currentLength = 1;
        let left = array[i] - 1;
        let right = array[i] + 1;

        while (range_map[left]) {
            range_map[left] = false;
            currentLength ++;
            left --;
        }

        while (range_map[right]) {
            range_map[right] = false;
            currentLength ++;
            right ++;
        }

        if (currentLength > largestPaths) {
            largestPaths = currentLength;
            bestPaths = [left + 1,right -1];
        }
    }

    return bestPaths;
}

largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6])