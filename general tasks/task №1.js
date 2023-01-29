const string = "Привет! Как дела?";
const vowelsArray = ["а", "е", "и", "о", "у", "ы", "э", "ю", "я"];


function getVowels(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        const curentLetter = str[i]

        if (vowelsArray.includes(curentLetter)) {
            result = result + curentLetter
        }
    }

    return result;
}

console.log(getVowels(string));