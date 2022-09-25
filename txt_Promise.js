const CountWords = require('./CountWords');
const fs = require('fs');

function getDataPromise(fileName, dataType) {

    let promise = new Promise((resolve, reject) => {
        fs.readFile(fileName, dataType, (error, data) => {
            if (data)
                resolve(data);
            else
                reject(error);
        });
    });

    return promise;
};


function txt_Promise(fileName) {
    let dataPromise = getDataPromise('./Optimism_and_your_health.txt', 'utf-8');
    dataPromise.then(result => {
        let count = CountWords(result);

        let message = `Synonyms Count: ${count['synonymsCount']}` +
            `\nRelated Words Count: ${count['relatedCount']}` +
            `\nNear Antonyms Count: ${count['nearAntonymsCount']}` +
            `\nAntonyms Count: ${count['antonymsCount']}`;


        fs.writeFile(fileName, message, () => { console.log(`File \"${fileName}\" Was Succesfully Written To!!

Message Written:
\"${message}\"`); });
    }).catch(result => { console.log(result); });
}

module.exports = txt_Promise;