// Time - O(n + m) (for indexOf operation) * O(n) (for traversing string) - O(n^2)
// Space - O(n)

function underscorifySubstring(string, substring) {
    let locations = getLocations(string,substring);
    let locationsCollapsed = collapseLocations(locations);
    return underscorify(locationsCollapsed,string);
}

function getLocations(string,substring) {
    let startIdx = 0;
    let locations = [];

    while (startIdx < string.length) {
        let nextIdx = string.indexOf(substring,startIdx);

        if (nextIdx > -1) {
            locations.push([nextIdx,nextIdx + substring.length]);
        } else {
            break;
        }

        startIdx = nextIdx + 1; 
    }

    return locations;
}

function collapseLocations(locations) {
    let location = [locations[0]];
    let current = location[0];
    let idx = 1;
    let newLocations = [current];

    while (idx < locations.length) {
        let latestLocation = locations[idx];
        if (latestLocation[0] <= current[1]) {
            current[1] = latestLocation[1]; 
        } else {
            newLocations.push(latestLocation);
            current = latestLocation;
        }
        idx ++;
    }
    return newLocations;
}

function underscorify(locations,string) {
    let locationIdx = 0;
    let stringIdx = 0;
    let i = 0;
    let result = [];
    let inBetweenUnderscore = false;

    while (stringIdx < string.length && locationIdx < locations.length) {
        if (stringIdx === locations[locationIdx][i]) {
            result.push("_");
            inBetweenUnderscore = !inBetweenUnderscore;

            if (!inBetweenUnderscore) locationIdx ++;
            i = i === 0 ? 1 : 0;
        }
        result.push(string[stringIdx]);
        stringIdx++;
    }

    if (stringIdx < string.length) {
        result.push(string.slice(stringIdx));
    }

    if (locationIdx < locations.length) {
        result.push('_')
    }

    console.log(result.join(''))
    return result.join('');
}

underscorifySubstring("testthis is a testtest to see if testestest it works","test");