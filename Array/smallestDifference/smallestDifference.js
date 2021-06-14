// Time complexity - O(nlog(n)) + O(mlog(m))
// Space complexity - O(1)

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => a-b);
    arrayTwo.sort((a,b) => a - b);
    let arrayOneIndex = 0;
    let arrayTwoIndex = 0;
    let smallestDifference = Infinity;
    let smallest = [];

    while (arrayOneIndex < arrayOne.length && arrayTwoIndex < arrayTwo.length) {
        let firstNum = arrayOne[arrayOneIndex];
        let secondNum = arrayTwo[arrayTwoIndex];

        if (firstNum < secondNum) {
            arrayOneIndex += 1;
        } else if (firstNum > secondNum) {
            arrayTwoIndex += 1;
        } else {
            return [firstNum,secondNum]
        }

        let currentDifference = Math.abs(firstNum-secondNum);

        if (currentDifference < smallestDifference) {
            smallestDifference = currentDifference;
            smallest = [firstNum,secondNum];
        }
    }
    console.log(smallest);
    return smallest;
}

smallestDifference([-1, 5, 10, 20, 28, 3],[26, 134, 135, 15, 17]);