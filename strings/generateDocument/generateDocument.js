// Time complexity - O(n+m) // n -> no of characters,m -> no of document
// Space complexity - O(n)

function generateDocument(characters, document) {
    let characterCount = {};
    
    for (const character of characters) {
        if (!characterCount[character]) {
            characterCount[character] = 0;
        }
        
        characterCount[character] += 1;
    }

    for (const doc of document) {

        if (!characterCount[doc] || characterCount[doc] === 0) {
            return false;
        }
        
        characterCount[doc]--;
    }

    console.log(true);
    return true;
}

generateDocument("Bste!hetsi ogEAxpelrt x ","AlgoExpert is the Best!")