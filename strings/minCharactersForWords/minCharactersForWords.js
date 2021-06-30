// Time - O(n * l) - where n - no of words, l - length of the longest word
// Space - O(c)

function minimumCharactersForWords(words) {
    let maximumFrequencies = {};

    for (let word of words) {
        const currentFrequencies = getCurrentFreq(word);
        getMaxFrequencies(maximumFrequencies,currentFrequencies);
    }

    console.log(characters(maximumFrequencies))
    return characters(maximumFrequencies);
}

function getCurrentFreq(word) {
    let frequencies = {};

    for (let i of word) {
        if (!frequencies[i]) {
            frequencies[i] = 0;
        }

        frequencies[i] += 1;
    }

    return frequencies;
}

function getMaxFrequencies(maxFreq,currentFreq) {
    for (const freq in currentFreq) {
        let frequencies = currentFreq[freq];
        if (freq in maxFreq) {
            maxFreq[freq] = Math.max(frequencies,maxFreq[freq]);
        } else {
            maxFreq[freq] = frequencies;
        }
    }

    return maxFreq;
}

function characters(maxFrequencies) {
    let charactersArray = [];

    for (let character in maxFrequencies) {
        for (let i = 0; i < maxFrequencies[character];i++) {
            charactersArray.push(character)
        }
    }

    return charactersArray;
}

minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]);
  