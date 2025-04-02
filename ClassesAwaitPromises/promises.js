function setTimedOutPromisified(ms){
    const p= new Promise(resolve => setTimeout(resolve,ms));
    return p;
}

function callback()
{
    console.log("some time is passed");
}

setTimedOutPromisified(15000).then(callback);