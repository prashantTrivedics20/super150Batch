// Arrays


// let arr = new Array(5);
// console.log(arr);

// let arr2 = [];

// let arr3 = [1, 2, 3, 4, 5, 6, "hello", "gla", true, function() {
//     // alert("hello word");
//     console.log("hello");
// }];

// console.log(arr3[0]);
// console.log(arr3);
// console.log(arr3[9]());
// console.log(arr3.pop());
// console.log(arr3);
// // push
// console.log(arr3.push('false', 45));
// //console.log(arr3.shift());
// arr3.unshift("23", 78);
// console.log(arr3);



// console.log([2] == [2]);
// let a = [1, 2, 3, 4];
// let b = [...a];
// console.log(a == b);


let c = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    // console.log(c[1][1]);


// for (let i = 0; i < c.length; i++) {
//     for (let j = 0; j < c[i].length; j++) {
//         console.log(i, j);
//     }
//     console.log("\n");
// }

// sum


let sum = 0;

for (let i = 0; i < c.length; i++) {
    for (let j = 0; j < c[i].length; j++) {
        sum = sum + c[i][j];
    }

}
// console.log(sum);

// flatteningof the object


let d = [];
let k = 0;
for (let i = 0; i < c.length; i++) {
    for (let j = 0; j < c[i].length; j++) {
        d[k] = c[i][j];
        k++;
    }

}
// console.log(d);

// splice


// d.splice(3, 0, 5); // it will add the elememt
// // d = d.slice(2, 4);// it return the new array
// // console.log(d);

// delete d[0];
// console.log(d);
// // d.forEach(alert);
// d.forEach((e) => {
//     console.log(e);
// })


// d.map(())

// let mayarr = [2, 4, 6, 9, 13, 15];

// // filter
// let evenArr = mayarr.filter(function(x) {
//     return x % 2 != 1
// })
// console.log(evenArr);

let str = "my name is prashant trivedi";


let arr = str.split(" ");

console.log(arr);

let s = "";

function reverse(s) {
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
        let char = s[i];
        s[i] = s[j];
        s[j] = char;
        i++;
        j--;
    }

    return s;
}

let result = "";
for (let i = 0; i < arr.length; i++) {

    let arr1 = reverse(arr[i].split(""));
    arr1.forEach(element => {
        result = result + element;

    });
    result = result + " ";
}
console.log(result);


// let s = "";
// for (let i = 0; i < arr.length; i++) {

//     let k = arr[i];

//     for (let j = k.length - 1; j >= 0; j--) {

//         s = s + k.charAt(j);

//     }
//     s = s + " ";
// }

// console.log(s);


let resultant = "";

let newString = "back ground - color-red :";


newString = newString.trim();

for (let i = 0; i < newString.length; i++) {

    if (newString[i] == ' ') {


        resultant = resultant +




    }

}