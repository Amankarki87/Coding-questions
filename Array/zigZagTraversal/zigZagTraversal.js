function zigzagTraverse(array) {
    let row = 0;
    let column = 0;
    let width = array[0].length - 1;
    let height = array.length - 1;
    let goingDown = true;
    let result = [];

    while (!isOutOfBounds(row,column,width,height)) {
        result.push(array[row][column]);
        
        if (goingDown) {
            if (column === 0 || row === height) {
                goingDown = false;
                if (column === 0) {
                    row +=1;
                } else {
                    column += 1;
                }
            } else {
                row += 1;
                column -= 1;
            }
        } else {
            if (row === 0 || column === width) {
                goingDown = true;
                if (column === width) {
                    row += 1;
                } else {
                    column += 1;
                }
            } else {
                row -= 1;
                column += 1;
            }
        }

    }

    console.log(result);
    return result;
}

function isOutOfBounds(row,column,width,height) {
    return row < 0 || row > height || column < 0 || column > width; 
}

zigzagTraverse([[1, 3, 4, 10],[2, 5, 9, 11],[6, 8, 12, 15],[7, 13, 14, 16]])