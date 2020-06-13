/*

    N220 Section 25750
    Harmanjot Singh
    FizzBuzz
    26 March 2020

*/

// main function
function main() {
    // heading
    document.body.innerHTML = "<h1>FizzBuzz</h1>";

    // keep executing this loop until we reach 100 in counting
    for(let i = 0; i <= 100; i++) {
        // I think it makes more sense to just print 0 for 0 
        if(i == 0) {
            document.body.innerHTML += "0" + "<br>";
        } else if(i % 3 == 0 && i % 5 == 0) { // if the number is both divisible by 3 and 5
            document.body.innerHTML += "fizzbuzz" + "<br>";
        }
        else if(i % 3 == 0) { // if the number is only divisible by 3
            document.body.innerHTML += "fizz" + "<br>";
        } else if(i % 5 == 0) { // if the number is only divisible by 5
            document.body.innerHTML += "buzz" + "<br>";
        }
        else { // just print the actual number itself
            document.body.innerHTML += i + "<br>";
        } 
    }
}