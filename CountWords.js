function CountWords(file) {
    const words = require('./words.json');

    let synonymsCount = 0;
    let relatedCount = 0;
    let nearAntonymsCount = 0;
    let antonymsCount = 0;

    let newFile = file.replaceAll(/\s/g, ' ');
    newFile = newFile.replaceAll(/[;:—,."()!?]/g, '');
    let parseWords = newFile.split(' ');
    for (let word of parseWords) {
        if (words['Synonyms'].includes(word.toLowerCase()))
            synonymsCount++;

        else if (words['Related'].includes(word.toLowerCase()))
            relatedCount++;

        else if (words['Near Antonyms'].includes(word.toLowerCase()))
            nearAntonymsCount++;

        else if (words['Antonyms'].includes(word.toLowerCase()))
            antonymsCount++;
    }

    return {
        synonymsCount: synonymsCount,
        relatedCount: relatedCount,
        nearAntonymsCount: nearAntonymsCount,
        antonymsCount: antonymsCount
    }
}

module.exports = CountWords;