// Time - O(n)
// Space - O(n)

function caesarCipherEncryptor(string, key) {
    let keyInAlphabet = key % 26;
    let shiftedAlphabetKeys = [];

    for (const letter of string) {
        let currentString = shiftedAlphabet(letter,keyInAlphabet);
        shiftedAlphabetKeys.push(currentString);
    }

    console.log(shiftedAlphabetKeys);
    return shiftedAlphabetKeys.join("");
}

function shiftedAlphabet(currentString,key) {
    const newLetterCode = currentString.charCodeAt() + key;
    return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));
}

caesarCipherEncryptor("xyz",2)