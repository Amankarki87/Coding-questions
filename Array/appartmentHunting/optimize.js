// Time complexity - O(B * R)
// Space complexity - O(R)

function apartmentHunting(blocks, reqs) {
    const minDistancesFromBlocks = reqs.map(req => getMinDistances(blocks,req));
    const maxDistanceAtBlocks = getMaxDistances(blocks,minDistancesFromBlocks);
    return getIdxAtMinValue(maxDistanceAtBlocks);
}

function getMinDistances(blocks,req) {
    const minDistances = new Array(blocks.length);
    let closeReqIndex = Infinity;
    for (let i=0;i<blocks.length;i++) {
        if (blocks[i][req]) {
            closeReqIndex = i;
        }
        minDistances[i] = getDifference(i,closeReqIndex);
    }

    for (let j = blocks.length -1;j >= 0; j --) {
        if (blocks[j][req]) {
            closeReqIndex = j;
        }

        minDistances[j] = Math.min(minDistances[j],getDifference(closeReqIndex,j));
    }

    return minDistances;
}

function getMaxDistances(blocks,minDistancesFromBlocks) {
    let maxDistanceAtBlocks = new Array(blocks.length).fill(-Infinity);
    for (let i = 0;i<blocks.length;i++) {
        for (let j = 0;j < minDistancesFromBlocks.length;j++) {
            maxDistanceAtBlocks[i] = Math.max(maxDistanceAtBlocks[i],minDistancesFromBlocks[j][i]);
        }
    }
    return maxDistanceAtBlocks;
}

function getDifference(a,b) {
    return Math.abs(a-b);
}

function getIdxAtMinValue(maxDistanceAtBlocks) {
    let currentMinimum = Infinity;
    let idx = 0;
    
    for (let i=0;i<maxDistanceAtBlocks.length;i++) {
        if (maxDistanceAtBlocks[i] < currentMinimum) {
            currentMinimum = maxDistanceAtBlocks[i];
            idx = i;
        }
    }

    return idx;
}

apartmentHunting(
[
    {
      "gym": false,
      "school": true,
      "store": false
    },
    {
      "gym": true,
      "school": false,
      "store": false
    },
    {
      "gym": true,
      "school": true,
      "store": false
    },
    {
      "gym": false,
      "school": true,
      "store": false
    },
    {
      "gym": false,
      "school": true,
      "store": true
    }
],["gym", "school", "store"])