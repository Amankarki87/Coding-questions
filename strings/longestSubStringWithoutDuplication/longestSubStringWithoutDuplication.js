// Time - O(n ^ 2),  space - O(1)

// function longestSubstringWithoutDuplication(string) {
//     let longest = [0,1];

//     for (let i = 0; i < string.length; i++) {
        
//         let current_hash = {
//             [string[i]] : true 
//         };

//         let endIndex = i + 1;

//         while (endIndex < string.length) {
//             if (current_hash[string[endIndex]]) {
//                 break;
//             }

//             current_hash[string[endIndex]] = true;
//             endIndex ++;
//         }
        
//         if (longest[1] - longest[0] < endIndex - i) {
//             longest = [i,endIndex];
//         }
        
//     }

//     console.log(string.slice(longest[0],longest[1]));
//     return string.slice(longest[0],longest[1]);
// }

// Time - O(n),  space - O(min(n,a)) 
// n - no of characters in string
// a - no of unique characters.
 
function longestSubstringWithoutDuplication(string) {
    let longest = [0,1];
    let startIdx = 0;
    let characters = {};

    for (let i = 0;i<string.length;i++) {
        let char = string[i];
        if (char in characters) {
            startIdx = Math.max(startIdx,characters[char] + 1);
        }

        if (longest[1] - longest[0] < i + 1 - startIdx) {
            longest = [startIdx,i+1];
        }

        characters[char] = i;
    }

    console.log(string.slice(longest[0],longest[1]));
    return string.slice(longest[0],longest[1]);
}

longestSubstringWithoutDuplication("clementisacap")