// Time complexity - O(n^2)
// Space complexity - O(n)

function diskStacking(disks) {
    disks.sort((a,b)=> a[2] - b[2]);
    let heights = [];
    let sequence = [];
    for (let i = 0;i < disks.length;i ++) {
        heights.push(disks[i][2]);
        sequence.push(null);
    }

    let maxIdx = 0;

    for (let i = 1;i<disks.length;i++) {
        let currentDisk = disks[i];
        for (let j = 0; j < i;j++) {
            let otherDisk = disks[j];
            if (validateDiskStack(currentDisk,otherDisk)) {
                if (currentDisk[2] + heights[j] > heights[i]) {
                    heights[i] = currentDisk[2] + heights[j];
                    sequence[i] = j;
                }
            }
        }

        if (heights[i] > heights[maxIdx]) {
            maxIdx = i;
        }
    }

    return buildSequence(disks,sequence,maxIdx);
}

function validateDiskStack(currentDisk,otherDisk) {
    return otherDisk[0] < currentDisk[0] && otherDisk[1] < currentDisk[1] && otherDisk[2] < currentDisk[2];
}

function buildSequence(disks,sequence,maxIdx) {
    let pointer = maxIdx;
    let result = [];
    result.push(disks[maxIdx]);

    while (sequence[pointer] !== null ) {
        result.unshift(disks[sequence[pointer]]);
        pointer = sequence[pointer];
    }

    console.log(result);
    return result;
}

diskStacking([[2, 1, 2],[3, 2, 3],[2, 2, 8],[2, 3, 4],[1, 3, 1],[4, 4, 5]]);