/*
data-manager.js
Rohith Vishwajith (EID: rv24456)
*/

/*
Async foreach allows waiting for the execution of a foreach to complete
and then calling it with then()
*/

Object.defineProperty(Array.prototype, "asyncForEach", {
    enumerable: false, value: function(task) {
        return new Promise((resolve, reject) => {
            this.forEach(function(item, index, array){
                task(item, index, array);
                if(Object.is(array.length - 1, index)) {resolve({ status: 'finished', count: array.length })}
            });
        })
    }
});

run();

async function run() {
    const url = "https://raw.githubusercontent.com/portal-game/Data/main/Main.txt";
    let lines = await getLines(url);
    lines.asyncForEach((line) => {
        if(line.startsWith("@ServerFile:")) { parseServerFile(line.replace("@ServerFile:", "").trim()); }
    })
}

async function parseServerFile(url) {
    let lines = await getLines(url);
    lines.forEach((line) => {
        if(line.startsWith("@Server")) {
            line = line.replace("@Server:", "").replace("}", "").replace("{", "").trim();
            let data = line.split(",");
            let ip = data[0].trim(), name = data[1].trim();
            console.log("IP: " + ip + " Name: " + name);
        }
    })
}

async function getLines(url) {
    const file = await fetch(url);
    const text = await file.text();
    return text.split("\n");
}

$('')