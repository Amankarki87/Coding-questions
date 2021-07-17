// Time - O(nlog(n))
// Space - O(1)

function minimumWaitingTime(queries) {
    queries.sort((a,b) => a - b);
    let totalWaitingTime = 0;
    for (let idx = 0;idx < queries.length;idx ++) {
        const duration = queries[idx];
        const queriesLeft = queries.length - (idx + 1);
        totalWaitingTime += duration * queriesLeft;
    }
    console.log(totalWaitingTime);
    return totalWaitingTime;
}

minimumWaitingTime([3, 2, 1, 2, 6]);