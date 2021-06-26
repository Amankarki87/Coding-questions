// Time complexity - O(n ^ 3 + m)
// Space complexity - O(n + m)
// Implement again once studied recursion

function numbersInPi(pi, numbers) {
    const numbersTable = {};

    for (const number of numbers) {
        numbersTable[number] = true;
    }

    const minSpaces = getMinSpaces(pi,numbersTable,{},0);
    console.log(minSpaces === Infinity ? -1 : minSpaces);
    return minSpaces === Infinity ? -1 : minSpaces;
}

function getMinSpaces(pi,numbersTable,cache,idx) {
    if (idx === pi.length) {
        return -1;
    }

    if (cache[idx]) {
        return cache[idx];
    }

    let minSpaces = Infinity;

    for (let i = idx;i<pi.length;i++) {
        const prefix = pi.slice(idx,i+1);
        if (numbersTable[prefix]) {
            const minSpacesInSuffix = getMinSpaces(pi,numbersTable,cache,i+1);
            minSpaces = Math.min(minSpaces,minSpacesInSuffix + 1);
        }
    }

    cache[idx] = minSpaces;
    console.log("---- start here ---");
    console.log("--- index is ---",idx);
    console.log("--- cache index is ---",cache);
    console.log("---- End here ---");
    return cache[idx];
}

numbersInPi("3141592",["3141", "5", "31", "2","4159","9","42"])