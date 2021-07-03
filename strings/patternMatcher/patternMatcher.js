// time - O(n^2 + m)
// Space - O(n + m)

function patternMatcher(pattern, string) {
    if (pattern.length > string.lenth ) return [];
    let newPatterns = generatePatterns(pattern);
    let counts = {"x": 0,"y": 0};
    let yFirstIndex = getFirstYIndexAndCounts(newPatterns,counts);
    let didSwitch = pattern[0] === "y" ? true : false;
    let stringLength = string.length;
    let result = [];

    if (yFirstIndex !== null) {
        for (let i = 1; i < string.length;i++) {
            let lengthOfY = (stringLength - i * counts["x"])/counts["y"];

            if (lengthOfY % 1 !== 0) {
                continue;
            }

            let yIdx = yFirstIndex * i;
            let x = string.slice(0,i);
            let y = string.slice(yIdx,yIdx + lengthOfY);

            let newString = [];
            
            for (let i = 0;i < newPatterns.length;i++) {
                if (newPatterns[i] === "x") {
                    newString[i] = x;
                } else {
                    newString[i] = y;
                }
            }

            if (newString.join("") === string) {
                result = didSwitch ? [y,x] : [x,y]; 
                return result;
            } else {
                continue;
            }
        }
    } else {
        for (let i = 1;i<string.length;i++) {
            let lengthOfX = stringLength / counts["x"];
            if (lengthOfX % 1 !== 0 ) {
                continue;
            }

            let x = string.slice(0,i);
            let newStrings = [];

            for (let i = 0;i<newPatterns.length;i++) {
                newStrings[i] = x;
            }

            if (newStrings.join("") === string) {
                return result = [x];
            } else {
                continue;
            }

        }
    }

}

// O(m)
function generatePatterns(pattern) {
    let newPatterns = pattern.split("");

    if (pattern[0] === "x") {
        return newPatterns;
    } else {
        return newPatterns.map(newPattern => newPattern === "y" ? "x":"y");
    }
}

// O(m)
function getFirstYIndexAndCounts(newPatterns,counts) {
    let yFirstIndex = null;
    
    for (let i = 0;i<newPatterns.length;i++) {
        counts[newPatterns[i]] += 1;

        if (newPatterns[i] === "y" && yFirstIndex === null) {
            yFirstIndex = i;
        }
    }

    return yFirstIndex;
}

patternMatcher("yxyx","abab")