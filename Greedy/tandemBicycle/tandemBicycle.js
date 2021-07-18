// Time complexity - O(nlog(n)
// Space - O(1)

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a,b)=> a - b);
    blueShirtSpeeds.sort((a,b)=> a - b);

    if (!fastest) reverseArray(redShirtSpeeds);

    let totalCounts = 0;

    for (let idx = 0;idx < redShirtSpeeds.length;idx++) {
        let rider1 =  redShirtSpeeds[idx];
        let rider2 =  blueShirtSpeeds[redShirtSpeeds.length - idx - 1];
        totalCounts += Math.max(rider1,rider2);
    }

    return totalCounts;
}

function reverseArray(redShirtSpeeds) {
    let start = 0;
    let end = redShirtSpeeds.length - 1;

    while (start < end) {
        let temp = redShirtSpeeds[start];
        redShirtSpeeds[start] = redShirtSpeeds[end];
        redShirtSpeeds[end] = temp;
        start ++;
        end --;
    }

    return redShirtSpeeds;
}

tandemBicycle([5, 5, 3, 9, 2],[3, 6, 7, 2, 1],true);