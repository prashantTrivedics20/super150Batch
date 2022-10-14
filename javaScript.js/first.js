function first() {
    console.log("first");
    third();
    // Second();
}

function Second() {
    console.log("second");
    // third();

}

function third() {
    console.log("third");
    Second();



}


first();

console.log(this);