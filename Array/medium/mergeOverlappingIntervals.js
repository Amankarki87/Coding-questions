// Time - O(nlog(n))
// Space - O(n)

function mergeOverlappingIntervals(array) {
    let intervals = array.sort((a,b) => a[0] - b[0]);
    let currentInterval = intervals[0];
    let mergedIntervals = [currentInterval];

    for (const interval of intervals) {
        const [start,end] = currentInterval;
        const [nextStart,nextEnd] = interval;

        if (end >= nextStart) currentInterval[1] = Math.max(end,nextEnd);
        else {
            mergedIntervals.push(interval);
            currentInterval = interval;
        }
    }
    console.log(mergedIntervals);
    return mergedIntervals;
}

mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10]
])