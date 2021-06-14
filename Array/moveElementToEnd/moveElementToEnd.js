function moveElementToEnd(array, toMove) {
    if (array.length > 0) {
        let startIndex = 0;
        let endIndex = 1;

        while (endIndex < array.length) {

            if (array[startIndex] === toMove) {

                if (array[endIndex] === array[startIndex]) {
                    endIndex ++;
                } else {
                    let temp = array[startIndex];
                    array[startIndex] = array[endIndex];
                    array[endIndex] = temp;
                    startIndex ++;
                    endIndex ++;
                }

            } else {
                startIndex ++;
                endIndex ++;
            }
        }
    }

    console.log(array);
    return array;
}

moveElementToEnd([1, 2, 3, 4, 5],3)