// Time complexity - O(nm * min(n,m))
// Space complexity - O(nm * min(n,m))

// function longestCommonSubsequence(str1, str2) {
//     let lcs = [];
//     for (let i = 0;i<str1.length + 1;i++) {
//         const row = new Array(str2.length + 1).fill([]);
//         lcs.push(row);
//     }

//     for (let i = 1;i<str1.length + 1;i++) {
//         for (let j = 1;j<str2.length + 1;j++) {
//             if (str1[i-1] === str2[j-1]) {
//                 lcs[i][j] = lcs[i-1][j-1].concat(str1[i-1]);
//             } else {
//                 lcs[i][j] = lcs[i][j-1].length > lcs[i-1][j].length ? lcs[i][j-1] : lcs[i-1][j];
//             }
//         }
//     }

//     console.log("----lcs is ----",lcs[str1.length][str2.length]);
//     return lcs[str1.length][str2.length]
// }

// Time complexity - O(nm * min(n,m))
// Space complexity - O((min(n,m)) ^ 2)

// function longestCommonSubsequence(str1,str2) {
//     const small = str1.length < str2.length ? str1 : str2;
//     const big = str1.length >= str2.length ? str1 : str2;
//     const evenLcs = new Array(small.length + 1).fill([]);
//     const oddLcs = new Array(small.length + 1).fill([]);

//     for (let i = 1; i < big.length + 1; i++) {
//         let currentLcs,previousLcs;
//         if (i%2 === 1) {
//             currentLcs = oddLcs;
//             previousLcs = evenLcs;
//         } else {
//             currentLcs = evenLcs;
//             previousLcs = oddLcs;
//         }

//         for (let j = 1;j < small.length + 1;j++) {
//             if (big[i - 1] === small[j -1]) {
//                 currentLcs[j] = previousLcs[j-1].concat(big[i-1]);
//             } else {
//                 currentLcs[j] = previousLcs[j].length > currentLcs[j-1].length ? previousLcs[j] : currentLcs[j-1];
//             }
//         }
//     }

//     console.log(big.length %2 === 0 ? evenLcs[small.length] : oddLcs[small.length]);
//     return big.length %2 === 0 ? evenLcs[small.length] : oddLcs[small.length];
// }

// Time complexity - O(nm)
// Space complexity - O(nm)

function longestCommonSubsequence(str1, str2) {
    let lcs = [];
    
    for (let i=0;i<str1.length + 1;i++) {
        let row = [];
        for (let j=0;j<str2.length + 1;j++) {
            let entry = new Array(4);
            entry[1] = 0;
            row.push(entry);
        }
        lcs.push(row);
    }

    for (let i = 1;i < str1.length + 1;i++) {
        for (let j = 1;j < str2.length + 1;j++) {
            if (str1[i-1] === str2[j-1]) {
                lcs[i][j] = [str1[i-1],lcs[i-1][j-1][1] + 1,i-1,j-1];
            } else {
                if (lcs[i-1][j][1] > lcs[i][j-1][1]) {
                    lcs[i][j] = [null,lcs[i-1][j][1],i-1,j];
                } else {
                    lcs[i][j] = [null,lcs[i][j-1][1],i,j - 1];
                }
            }
        }
    }

    return buildSequence(lcs);
}

function buildSequence(lcs) {
    let sequence = [];
    let i = lcs.length - 1;
    let j = lcs[0].length - 1;
    
    while (i !== 0 && j !== 0) {
        let currentElement = lcs[i][j];

        if (currentElement[0]) {
            sequence.unshift(currentElement[0]);
        }

        i = currentElement[2];
        j = currentElement[3];
    }

    return sequence;
}

longestCommonSubsequence("ZXVVYZW","XKYKZPW");