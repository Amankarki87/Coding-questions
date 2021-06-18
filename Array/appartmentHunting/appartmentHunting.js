// Time complexity - O(B^2 * R)
// Space complexity - O(R)

function apartmentHunting(blocks, reqs) {
    let distance = new Array(blocks.length).fill(-Infinity);

    for (let block = 0; block < blocks.length;block++) {
        // let currentBlock = blocks[block];
        for (let req = 0;req<reqs.length;req++) {
            let currentRequirement = reqs[req];
            let currentMinimum = Infinity;

            for (let j = 0;j<blocks.length;j++) {
                if (blocks[j][currentRequirement]) {
                    currentMinimum = Math.min(currentMinimum,getDifference(block,j));
                }
            }
            distance[block] = Math.max(distance[block],currentMinimum);
        }
    }

    return getIdxAtMinValue(distance);
}

function getDifference(a,b) {
    return Math.abs(a-b);
}

function getIdxAtMinValue(distance) {
    let idxAtMinValue = 0;
    let currentMinValue = Infinity;

    for (let i = 0; i< distance.length; i++) {
        if (distance[i] < currentMinValue) {
            idxAtMinValue = i;
            currentMinValue = distance[i];
        }
    }

    return idxAtMinValue;
}

apartmentHunting([
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