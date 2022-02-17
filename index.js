'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
var MostPointsRecord=scores[0];
var LeastPointRecords=scores[0];
var CounterMostRecord=0;
var CounterLeastRecord=0;

for(var index=1;index<scores.length+1;index++){
    if(scores[index]> MostPointsRecord){
        MostPointsRecord=scores[index];
        CounterMostRecord++;
    }else if(scores[index]<LeastPointRecords){
        LeastPointRecords=scores[index];
        CounterLeastRecord++;
    }
}
var record=[CounterMostRecord,CounterLeastRecord]
return record;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
