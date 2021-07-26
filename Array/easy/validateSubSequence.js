function isValidSubsequence(array, sequence) {
    if (array.length > 0) {
        let sequenceIndex = 0;

        for (let i = 0; i < array.length; i++) {
            if (sequenceIndex === sequence.length) break;

            if (array[i] === sequence[sequenceIndex]) {
                sequenceIndex++;
            }
        }

        console.log(sequenceIndex == sequence.length)
        return sequenceIndex === sequence.length;
    }
    return false;
}

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[5, 1, 22, 25, 6, -1, 8, 10])