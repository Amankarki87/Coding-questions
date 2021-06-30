// Time complexity - O(n^2), space complexity - O(n)

function threeNumberSum(array, targetSum) {
    let sumArray = [];
    array.sort((a,b) => a-b);

    for (let i=0;i < array.length;i++) {
        let leftIndex = i+1;
        let rightIndex = array.length - 1;
        while (leftIndex < rightIndex) {
            let sum = array[i] + array[leftIndex] + array[rightIndex];

            if (sum > targetSum) {
                rightIndex -= 1;
            } else if ( sum < targetSum) {
                leftIndex +=1;
            } else {
                sumArray.push([array[i],array[leftIndex], array[rightIndex]]);
                rightIndex -=1;
                leftIndex +=1;
            }
        }
    }

    console.log(sumArray)
    return sumArray;
}

threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6],0)

[-8,-6,1,2,3,5,6,12]