function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
}

setTimeoutPromisified(1000).then(function(){
    console.log("after 1 sec");
    return setTimeoutPromisified(3000)}).then(function(){
        console.log("after 3 secs");
        return setTimeoutPromisified(5000)}).then(function(){
            console.log("after 5 secs");
});