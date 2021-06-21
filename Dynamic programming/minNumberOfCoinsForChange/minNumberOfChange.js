function minNumberOfCoinsForChange(n, denoms) {
    let ways = new Array(n+1).fill(Infinity);
    ways[0] = 0;
    
    for (let pointerToDenom = 0;pointerToDenom < denoms.length;pointerToDenom++) {
        let denom = denoms[pointerToDenom];
        if (denom > n) continue;
        for (let i=1;i<ways.length;i++) {
            if (i < denom) continue;
            let currentMinChange = ways[i-denom];

            if(currentMinChange < ways[i]) {
                ways[i] = currentMinChange + 1;
            }
        }
    }
    
    if (ways[n] === Infinity) return -1;
    return ways[n];
}

minNumberOfCoinsForChange(7,[2,4]);