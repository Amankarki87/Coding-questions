// Time complexity - O(n), space complexity - O(n)

function spiralTraverse(array) {
    let startRow = 0;
    let endRow = array.length - 1;
    let startColumn = 0;
    let endColumn = array[0].length - 1;
    let result = [];

    while (startRow < endRow && startColumn < endColumn) {
        for (let i = startColumn; i <= endColumn; i++) {
            result.push(array[startRow][i]);
        }

        for (let j = startRow + 1; j <= endRow; j++) {
            result.push(array[j][endColumn]);
        }

        for (let j= endColumn - 1; j > startRow -1 ; j --) {
            result.push(array[endRow][j]);
        }

        for (let j= endRow - 1; j > startRow; j --) {
            result.push(array[j][startRow]);
        }

        startRow += 1;
        endRow -=1
        startColumn += 1;
        endColumn -= 1;
    }

    console.log(result);
    return result;
}

spiralTraverse([[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]])