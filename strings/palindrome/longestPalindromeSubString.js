// Time complexity - O(n ^ 2)
// Space complexity - O(n)

function longestPalindromicSubstring(string) {
    let currentLongest = [0,1];

    for (let i = 1;i < string.length;i++) {
        const odd = getPalindromeLength(string, i - 1,i+1);
        const even = getPalindromeLength(string, i - 1,i);
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        currentLongest = longest[1] - longest[0] > currentLongest[1] - currentLongest[0] ? longest : currentLongest;
    }
    console.log(string.slice(currentLongest[0],currentLongest[1]))
    return string.slice(currentLongest[0],currentLongest[1]);
}

function getPalindromeLength(string,left,right) {
    while (left >=0 && right < string.length) {
        if (string[left] !== string[right]) break;
        left --;
        right ++;
    }

    return [left + 1,right];
}


longestPalindromicSubstring("abaxyzzyxf")