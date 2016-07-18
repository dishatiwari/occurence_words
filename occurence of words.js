function calculateOccurrence(stringtext) {

    for (let i = 0; i < stringtext.length; i++) {
        let count = 0;

        for (let j = i + 1; j < stringtext.length; j++) {

            if (stringtext[i] === stringtext[j]) {
                count++;
                console.log(stringtext[i] + "  " + count);
            }
        }
    }
}
calculateOccurrence('dishatiwari');
