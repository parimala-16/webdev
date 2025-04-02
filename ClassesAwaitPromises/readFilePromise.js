const fs= require("fs")

function readTheFile(readingData){
    fs.readFile("a.txt","utf-8", function(err,data){
            readingData(data);
    })
}

function readFiles(fileName){
    return new Promise(readTheFile);
}

function callback(content){
    console.log(content);
}
const p = readFiles();
p.then(callback);

