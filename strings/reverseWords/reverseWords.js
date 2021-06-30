// Time complexity - O(n)
// Space complexity - O(n)

// With using split and reverse
// function reverseWordsInString(string) {
//     string = string.split(" ");
//     let newString = [];

//     for (let i = string.length - 1;i > -1;i --) {
//         newString.push(string[i]);
//     }

//     console.log(newString.join(" "));
//     return newString.join(" ");;
// }


// Without using split and reverse
// Time complexity - O(n)
// Space complexity - O(n)

// function reverseWordsInString(string) {
//     let words = [];
//     let startOfWord = 0;

//     for (let idx = 0;idx < string.length;idx ++) {
//         const character = string[idx];

//         if (character === ' ') {
//             words.push(string.slice(startOfWord,idx));
//             startOfWord = idx;
//         } else if (string[startOfWord] === ' ') {
//             words.push(' ');
//             startOfWord = idx;
//         }
//     }

//     words.push(string.slice(startOfWord));
//     words = reverseArray(words);
//     return words.join('');
// }

// function reverseArray(words) {
//     let start = 0;
//     let end = words.length - 1;

//     while (start < end) {
//         let temp = words[start];
//         words[start] = words[end];
//         words[end] = temp;
//         start ++;
//         end --;
//     }

//     return words;
// }

// Without using split and reverse
// Time complexity - O(n)
// Space complexity - O(n)

function reverseWordsInString(string) {
    const characters = [];

    for (const str of string) {
        characters.push(str);
    }

    reverseArray(characters,0,string.length - 1);

    let startIdx = 0;

    while (startIdx < characters.length) {
        let endIdx = startIdx;
        while (endIdx < characters.length && characters[endIdx] !== ' ') {
            endIdx ++;
        }

        reverseArray(characters,startIdx,endIdx - 1);
        startIdx = endIdx + 1;
    }

    console.log("--- words ----",characters.join(""));
    return characters.join("")
}
    
function reverseArray(words,start,end) {
    
    while (start < end) {
        let temp = words[start];
        words[start] = words[end];
        words[end] = temp;
        start ++;
        end --;
    }
    return words;
}

reverseWordsInString("Reverse  These  Words");