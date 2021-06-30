// Time complexity - O(w * n * log(n))
// Space complexity - O(w * n)
// w - no of words
// n - length of longest word

function groupAnagrams(words) {
    let anagram = {};

    for (let word of words) {
        let sortedWord = word.split('').sort().join('');

        if (sortedWord in anagram) {
            anagram[sortedWord].push(word);
        } else {
            anagram[sortedWord] = [word];
        }
    }

    console.log(Object.values(anagram))
    return Object.values(anagram);
}

groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])