/** 
 * Time complexity O(n)
 * Space complexity O(1)
*/

function longestPeak(array) {
    if (array.length < 3) { 
        return 0;
    }

    let tip = -Infinity;
    let longestPeak = 0; 
    let currentPeakLength = 0; 
    
    for (let i=1;i<array.length;i++) {

        if (!(array[i-1] < array[i] && array[i] > array[i+1])) {
            continue;
        }

        tip = array[i];

        let startIndex = i;
        while (startIndex > -1) {
            if (array[startIndex-1] < array[startIndex]) {
                currentPeakLength +=1;
            } else {
                break;
            }

            startIndex --;
        }

        let endIndex = i;
        while (endIndex < array.length) {
            if (array[endIndex] > array[endIndex+1]) {
                currentPeakLength +=1;
            } else {
                break;
            }
            endIndex ++;
        }

        if (currentPeakLength > longestPeak) {
            longestPeak = currentPeakLength + 1;
            currentPeakLength = 0;
        }

    }

    console.log(longestPeak)

    return longestPeak;
}

longestPeak([1, 2, 3, 4, 5, 6, 10, 100, 1000]);