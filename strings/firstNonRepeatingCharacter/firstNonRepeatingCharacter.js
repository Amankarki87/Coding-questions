// Time - O(n^2)
// Space - O(1)

function firstNonRepeatingCharacter(string) {
    let characterFrequencies = {};

    for (const str of string) {
        if (!characterFrequencies[str]) {
            characterFrequencies[str] = 0;
        }

        characterFrequencies[str] ++;
    }

    for (let i = 0;i<string.length;i++) {
        let currentCharacter = string[i];
        if (characterFrequencies[currentCharacter] === 1) {
            console.log(i)
            return i;
        }
    }
    return -1;
}

firstNonRepeatingCharacter("abcdcaf");