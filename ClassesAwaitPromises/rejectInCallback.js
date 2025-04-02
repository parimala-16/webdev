const fs= require("fs");

function readFileAsync(){
    return new Promise(function(resolve,reject){
        fs.readFile("b.txt","utf-8",function(err,data){
            if(err){
                reject("No file found");
            }
            else{
                resolve(data);
            }
        });
    });
}

readFileAsync().then(function(x){
    console.log("contents of file "+x);
}).catch(function(e){
    console.log(e);
});