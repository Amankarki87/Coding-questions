// Time complexity - O(n^2)
// Time complexity - O(n^2)
// Space complexity - O(n)

// function minNumberOfJumps(array) {
//     let jumps = new Array(array.length).fill(Infinity);
//     jumps[0] = 0;
    
//     for (let i = 1;i < array.length;i++) {
//         for (let j = 0; j < i; j++) {
//             if (array[j] + j >= i) {
//                 jumps[i] = Math.min(jumps[j] + 1,jumps[i])
//             }
//         }
//     }

//     return jumps[array.length - 1];
// }

// Time complexity - O(n)
// Space complexity - O(1)

function minNumberOfJumps(array) {
    if (array.length === 0) return 0;
    let maxReach = array[0];
    let jumps = 0;
    let steps = array[0];

    for (let i=1;i<array.length - 1;i++) {
        maxReach = Math.max(maxReach,i+array[i]);
        steps --;
        
        if (steps === 0) {
            jumps += 1;
            steps = maxReach - i;
        }
    }

    return jumps + 1;
}

minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3])