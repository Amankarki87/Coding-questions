// Time - 0(4^n * n)
// Space - 0(4^n * n)

function phoneNumberMnemonics(phoneNumber) {
    let currentMnemonics = new Array(phoneNumber.length).fill('0');
    let mnemonics = [];
    phoneNumberMnemonicsHelper(0,phoneNumber,currentMnemonics,mnemonics);
    console.log("---mnemonics ----",mnemonics);
    return mnemonics;
}

function phoneNumberMnemonicsHelper(idx,phoneNumber,currentMnemonics,mnemonics) {
    if (idx === phoneNumber.length) {
        mnemonics.push(currentMnemonics.join(''));
        return mnemonics;
    } else {
        let digit = phoneNumber[idx];
        let letters = DIGIT_LETTER[digit];

        for (const letter of letters) {
            currentMnemonics[idx] = letter;
            phoneNumberMnemonicsHelper(idx + 1,phoneNumber,currentMnemonics,mnemonics);
        }
    }
}

const DIGIT_LETTER = {
    0: ["0"],
    1: ["1"],
    2: ["a","b","c"],
    3: ["d","e","f"],
    4: ["g","h","i"],
    5: ["j","k","l"],
    6: ["m","n","o"],
    7: ["p","q","r","s"],
    8: ["t","u","v"],
    9: ["w","x","y","z"]
}

phoneNumberMnemonics("1905")