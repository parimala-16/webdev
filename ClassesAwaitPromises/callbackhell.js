setTimeout(function(){
    console.log("hi");
    setTimeout(function(){
        console.log("hello");
        setTimeout(function(){
            console.log("hello there");
        },5000);
    },3000);
},1000);

// hi prints after 1 sec hello prints after 4 secs and hello there prints after 9 secs