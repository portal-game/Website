/*
setup.js
This script is used to get all of the data needed to setup
the website at runtime. Some perivate data cannot be found
if the user is not authenticated already. Authnetication
status should be checked for via cookies.
*/

// startURL - The URL of the file which stores the URLs of
// the important public files so they can easily be updated
// if/when necessary.

run();

async function run() {
    const startURL = "https://raw.githubusercontent.com/rvishwajith/PortalPublicData/main/URLs.txt";
    let startLines = (await getText(startURL)).split("\n");

    let serverURLs = []

    for(let i = 0; i < startLines.length; i++) {
        if(startLines[i].startsWith("@ServerFile")) {
            let url = startLines[i].replace("@ServerFile:", "").trim();
            serverURLs.push(url);
        }
    }
}






/*
 * GetText() - Get a file at the given url. Must either be
 * a public github file or CORS-enabled.
 * 
 * Call with await() and use in async functions.
 */
async function getText(url) {
    const file = await fetch(url);
    return await file.text();
}