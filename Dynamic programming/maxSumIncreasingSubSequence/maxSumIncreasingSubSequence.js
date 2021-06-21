// Time complexity - O(n^2)
// Space complexity - O(n)

function maxSumIncreasingSubsequence(array) {
    let sums = [...array];
    let sequence = new Array(array.length).fill(null);
    let maxSumIdx = 0;

    for (let i=0;i<array.length;i++) {
        let currentNum = array[i];
        for (let j=0;j<i;j++) {
            let otherNum = array[j];

            if (currentNum > otherNum && currentNum + sums[j] >= sums[i]) {
                sums[i] = currentNum + sums[j];
                sequence[i] = j;
            }
        }

        if (sums[maxSumIdx] < sums[i]) {
            maxSumIdx = i;
        }
    }

    return [sums[maxSumIdx],buildSequence(maxSumIdx,sequence,array)]
}

function buildSequence(maxSumIdx,sequences,array) {
    let sequence = [];
    let startingIndex = maxSumIdx;
    while (sequences[startingIndex] !== undefined) {
        sequence.unshift(array[startingIndex]);
        startingIndex = sequences[startingIndex];
    }

    return sequence;
}

maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30])