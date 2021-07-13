// Time - O(k ^ n) where k - number of allowed steps, n - height of staircase
// Space - O(n)

// function staircaseTraversal(height, maxSteps) {
//     return numberOfWaysToTop(height,maxSteps);
// }

// function numberOfWaysToTop(height,maxSteps) {
//     if (height <= 1) return 1;
//     let numberOfWays = 0;

//     for (let i = 1;i < Math.min(height,maxSteps) + 1;i++) {
//         numberOfWays += numberOfWaysToTop(height - i,maxSteps);
//     }

//     return numberOfWays;
// }

// Time - O(k*n)
// Space - O(n)

// function staircaseTraversal(height, maxSteps) {
//     return numberOfWaysToTop(height,maxSteps,{0: 1, 1: 1});
// }
    
// function numberOfWaysToTop(height,maxSteps,memoize) {
//     if (memoize[height]) return memoize[height];
//     let numberOfWays = 0;
    
//     for (let i = 1;i < Math.min(height,maxSteps) + 1;i++) {
//         console.log("--------- Start here -------");
//         console.log("-Before-",numberOfWays);
//         numberOfWays += numberOfWaysToTop(height - i,maxSteps,memoize);
//         console.log("-After-",numberOfWays);
//         console.log("---------- End here -------");
//     }

//     memoize[height] = numberOfWays;
//     return numberOfWays;
// }

// Time - O(n*k)
// Space - O(n)

// function staircaseTraversal(height, maxSteps) {
//     const waysToTop = new Array(height + 1).fill(0);
//     waysToTop[0] = 1;
//     waysToTop[1] = 1;

//     for (let i = 2;i < height + 1;i++) {
//         let step = 1;

//         while (step <= maxSteps && step <= i) {
//             waysToTop[i] = waysToTop[i] + waysToTop[i - step];
//             step ++;
//         }
//     }

//     console.log(waysToTop[height]);
//     return waysToTop[height];
// }

// Time - O(n)
// Space - O(n)
 
function staircaseTraversal(height, maxSteps) {
    let currentNumberOfWays = 0;
    const waysToTop = [1];

    for (let currentHeight = 1;currentHeight < height + 1;currentHeight++) {
        let startOfWindow = currentHeight - maxSteps - 1;
        let endOfWindow = currentHeight - 1;

        if (startOfWindow >= 0) currentNumberOfWays -= waysToTop[startOfWindow];
        
        currentNumberOfWays += waysToTop[endOfWindow];
        waysToTop.push(currentNumberOfWays);
    }

    console.log(currentNumberOfWays);
    return currentNumberOfWays;
}

staircaseTraversal(4,2)