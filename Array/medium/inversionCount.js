// Time - O(n^2)
// Space - O(1)

var inversionCount = function(arr) {
    if (arr.length < 1) {
        return arr;
    }

    let count = 0;
    for (let i = 0;i < arr.length;i++) {
        for (let j = i+1;j < arr.length;j++) {
            if (arr[i] > arr[j]) {
                count += 1;
            }
        }
    }

    console.log(count);
    return count;
}

inversionCount([8,4,2,1])