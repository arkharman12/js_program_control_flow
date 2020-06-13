/*

    N220 Section 25750
    Harmanjot Singh
    Triangle Loop
    26 March 2020

*/

// main function
function main() {
    // heading
    document.body.innerHTML = "<h1>Triangle Loop</h1>";

    // keep executing this loop until we have a row with 7 hashtags
    for(let i = "#"; i.length <= 7; i = i + "#") {
        // also insert a new line at the end of every iteration
        document.body.innerHTML += i + "<br>";
    }

}