/*

    N220 Section 25750
    Harmanjot Singh
    Number Guesser
    26 March 2020

*/

// object to store the controls
const controls = {
    // input field
    input : null,
    // go button
    button: null,
    // outfield one
    outputField: null,
    // outfield two
    outputFieldTwo: null,
    // set # of tries counter to 0
    counter: 0,
    // generate random number between 0 and 128
    number: Math.floor(Math.random() * 129),
    // restart button
    buttonTwo: null
}

// main function
function main() {
    // create a div
    controls.outputField = document.createElement("div");
    // heading
    controls.outputField.innerHTML += "<h1>Number Guesser</h1>";
    // sub-heading
    controls.outputField.innerHTML += "I am thinking of a number between 0 and 128. Let's see if you can guess it correctly! <br><br>";
    document.body.appendChild(controls.outputField);

    // create a input field
    controls.input = document.createElement("input");
    controls.input.style.fontSize = "14px";
    controls.input.style.color = "black";
    controls.input.style.width = "200px";
    controls.input.style.height = "32px";
    // input field placeholder
    controls.input.setAttribute("placeholder", "Enter your guess number");
    document.body.appendChild(controls.input);

    // create the button
    controls.button = document.createElement("button");
    controls.button.style.fontSize = "12px";
    controls.button.style.width = "100px";
    controls.button.style.height = "32px";
    controls.button.style.position = "absolute";
    controls.button.style.left = "220px";
    controls.button.style.top = "103px";
    controls.button.innerHTML = "GO";
    // event listener for when the button gets clicked
    controls.button.addEventListener("click", numGuesser);
    document.body.appendChild(controls.button);
}

// number guesser method
function numGuesser() {
    // create the second div
    controls.outputFieldTwo = document.createElement("div");
    document.body.appendChild(controls.outputFieldTwo);

    // user's guess
    let guess = Number(controls.input.value);

    // if user guess is equal to the number
    if (guess == controls.number) {
        controls.outputFieldTwo.innerHTML += "<br>Congratulations! You guessed it correctly in " + controls.counter + " tries. Click restart to play again <br><br>";
        controls.counter++;
        // create the restart button
        controls.buttonTwo = document.createElement("button");
        controls.buttonTwo.style.fontSize = "12px";
        controls.buttonTwo.style.width = "100px";
        controls.buttonTwo.style.height = "32px";
        controls.buttonTwo.style.position = "absolute";
        controls.buttonTwo.innerHTML = "Restart";
        // add the event listener when the restart button gets clicked
        controls.buttonTwo.addEventListener("click", refresh);
        document.body.appendChild(controls.buttonTwo);
    } else if (controls.input.value.trim() == "") { // if user enters nothing
        controls.outputFieldTwo.innerHTML += "<br> Enter your guess number and hit GO";
        guess = Number(controls.input.value); // store the user guess
    } else if (guess > controls.number) { // if user guess is bigger than the number
        controls.outputFieldTwo.innerHTML += "<br>Your guess " + guess + " was Too High. Keep trying!";
        controls.counter++; // increment the counter
        guess = Number(controls.input.value); // store the user guess
    } else if (guess < controls.number) { // if user guess is less than the number
        controls.outputFieldTwo.innerHTML += "<br> Your guess " + guess + " was Too Low. Keep trying!";
        controls.counter++; // increment the counter
        guess = Number(controls.input.value); // store the user guess
    } else { // if user decided to enter some random junk, which they do ;)
        controls.outputFieldTwo.innerHTML += "<br> I am not sure what you are typing. Click restart to play again <br><br>";
        // create the restart button
        controls.buttonTwo = document.createElement("button");
        controls.buttonTwo.style.fontSize = "12px";
        controls.buttonTwo.style.width = "100px";
        controls.buttonTwo.style.height = "32px";
        controls.buttonTwo.style.position = "absolute";
        controls.buttonTwo.innerHTML = "Restart";
        // add the event listner when the restart button gets clicked
        controls.buttonTwo.addEventListener("click", refresh);
        document.body.appendChild(controls.buttonTwo);
    }
}

// reload the game
function refresh() {
    // JavaScript function for reloading the window
    location.reload();
}