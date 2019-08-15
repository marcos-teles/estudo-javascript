console.log("loader")

const scripts = {
    PERSON: "js/Person.js",
    ENEMY:  "js/Enemy.js",
    PLAYER: "/js/Player.js",
}

async function importScript(src){
    return new Promise(function(resolve, reject){
        var script = document.createElement("script");
        script.src = src;
        document.head.appendChild(script);
        script.onload = resolve;
    });
}

/*function importScript(src){
    var script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
}*/