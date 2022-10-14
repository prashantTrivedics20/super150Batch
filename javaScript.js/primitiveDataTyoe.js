//console.log("hello prashant");

// alert(NaN ** 2);

// let x = NaN;
// console.log(x, typeof x);
// let isgreater = -4 > 1;
// console.log(isgreater);

// let y;
// console.log(y, typeof(y)); // the type of the undefined  is undefined

// console.log(typeof(null)); // the type of the null is object

// alert('this is an alert Screen');


// for taking the input from the user input we use prompt

// let a = prompt('How  old are you', 25);

// alert(`you are ${a} year old`);


// document.write("this is the statemet "); /// it is use for printing the value to  the browser.l


// let a = '31';
// console.log(typeof a);
// // to convert the type conversion we use the type coneversion
// // for String to number we use the Number constructor


// a = Number(a);

// console.log(typeof a);

// a += 1;

// console.log(a);



// let x;
// let y;
// let z;

// x = String(3.14);

// console.log(x, typeof(x));


// y = Boolean('');
// console.log(y, typeof y);



let x = '12';
console.log(x / -2); // it will treated as  number// it will formulate the result  -6




let num = 2;
console.log(++num); // it will first increment the value and  then return the value..

console.log(num);
console.log(num++); // it will first return the  value and then return the value..



console.log(num);

// = assignment  operator return the value...


// let a = false;

// let b = true;

// let c = true;

// console.log(c && b && a);


// console.log(!!!true);



// console.log('tree' > 'arie') // it will return the boolean value...





// presedence  of  &&  is more in compare to ||  operator..




// if  statement ..4..

// let age = 10;

// if (age < 10) {
//     console.log(true);
// }


// if (true) alert('true');



let age = prompt("enter the age", '');


// if (age < 18) {
//     console.log("you re right");
// } else {
//     console.log("you are inputed wrong");
//}

//age > 18 ? alert("you are write") : age < 18 ? alert("you are wrong") : alert("equal");

let sum = 0;

while (true) {
    let a = prompt("enter the value", '');
    if (a == 0 || a == null) {
        alert(`${sum}`);

        break;
    }

    sum += Number(a);



}
0