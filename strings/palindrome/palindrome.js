// Solution 1

// Time- O(n ^ 2) -> O(n) * O(n) (When concating string , it traverse whole string)
// Space- O(n) (Space taken up when concating string)

// function isPalindrome(string) {
//     let reversedString = '';
//     for (let i = string.length - 1;i > -1;i--) {
//         reversedString += string[i];
//     }

//     console.log(string === reversedString);
//     return string === reversedString;
// }

// Solution 2

// Time- O(n) Space- O(n)

// function isPalindrome(string) {
//     let reversedString = [];
//     for (let i = string.length - 1;i > -1;i--) {
//         reversedString.push(string[i]);
//     }

//     console.log(string === reversedString.join(''));
//     return string === reversedString.join('');
// }

// Solution 3 (using recursion)
// Time complexity - O(n)
// Space complexity - O(n)

function isPalindrome(string,i = 0) {
    let j = string.length - 1 - i;
    return i >= j ? true : string[i] === string[j] && isPalindrome(string,i+1);
}

// Solution 4

// Time complexity - O(n)
// Space complexity - O(1)

// function isPalindrome(string) {
//     let startIdx = 0;
//     let endIdx = string.length - 1;
//     let isPalindrome = true;

//     while (startIdx < endIdx) {
//         if ( string[startIdx] !== string[endIdx] ) {
//             isPalindrome = false;
//         }

//         endIdx --;
//         startIdx ++;
//     }

//     console.log(isPalindrome);
//     return isPalindrome;
// }

isPalindrome("abcdcba");