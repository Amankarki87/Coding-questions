// Time complexity - O(n)
// Space complexity - O(n)

function runLengthEncoding(string) {
    let encodedLength = [];
    let runLengthCount = 1;

    for (let i = 1;i < string.length;i ++) {
        if (string[i] !== string[i-1] || runLengthCount === 9 ) {
            encodedLength.push(runLengthCount,string[i - 1]);
            runLengthCount = 0;
        }

        runLengthCount ++;
    }

    encodedLength.push(runLengthCount,string[string.length - 1]);
    console.log(encodedLength.join(""));
    return encodedLength.join("");
}

runLengthEncoding("AAAAAAAAAAAAABBCCCCDD");