// Time complexity - O(NC)
// Space complexity - O(NC) N - No of items, C - capacity 

function knapsackProblem(items, capacity) {
    let knapSackValues = [];

    for (let i = 0;i<items.length + 1;i++) {
        let row = new Array(capacity+1).fill(0);
        knapSackValues.push(row);
    }

    for (let i = 1;i < items.length + 1;i++) {

        let currentWeight = items[i-1][1];
        let currentValue = items[i-1][0];

        for (let c = 0;c < capacity + 1 ; c++) {
            if (currentWeight > c) {
                knapSackValues[i][c] = knapSackValues[i-1][c];
            } else {
                knapSackValues[i][c] = Math.max(
                    knapSackValues[i-1][c],
                    knapSackValues[i-1][c-currentWeight] + currentValue
                );
            }
        }
    }

    console.log([knapSackValues[items.length][capacity],getKnapSackItems(knapSackValues,items)]);
    return ([knapSackValues[items.length][capacity],getKnapSackItems(knapSackValues,items)]);
}

function getKnapSackItems (knapSackValues,items) {
    let sequence = [];
    let i = knapSackValues.length - 1;
    let c = knapSackValues[0].length - 1;

    while (i > 0) {

        if (knapSackValues[i][c] === knapSackValues[i-1][c]) {
            i --;
        } else {
            sequence.unshift(i-1);
            i--;
            c -= items[i][1];
        }

        if (c === 0) break;
    }

    return sequence;
}

knapsackProblem([[1, 2],[4, 3],[5, 6],[6, 7]],10)