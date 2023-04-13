// https://moodle.easv.dk/pluginfile.php/186198/mod_label/intro/05_loops_JS_opgaver.pdf
// standard for loop:
// output: alle dage i januar - 'Dag 1', 'Dag 2'... osv.
for(let i = 1; i <= 31; i++) {
    console.log(`Dag ${i}`);
}

// for...of loop - array:
const names = ['Julia', 'Kim', 'Sofie', 'Frederikke', 'Nathalie', 'Antonio', 'Jakob'];

// ny måde at loop gennem et array:
for(student of names) {
    console.log(student);
}

// gammel måde at loope gennem et array - anvender length property:
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


// for...in loop - object:
const motercycle = {
    make: "Honda",
    model: "CRF300L",
    year: 2021,
    color: 'red',
    horsePower: 27,
    abs: true
}

for(key in motercycle) {
    console.log(`${key}: ${motercycle[key]}`);
}




// Opgave 1
// A standard for loop - Create a for loop which returns this in the console:
for(let i = 0; i <= 13; i++) {
    console.log(`Dag nr. ${i}`);
    if(i === 5) break;
}

// Opgave 2
// A standard for loop - multiplication - Create a new for loop, which outputs the multiplication table for the multiplier: 8. The result in the console should look like this:
for(let i = 1; i <= 10; i++) {
    console.log(`${i} x 8 = ${i * 8}`);
}
for(let i = 1; i <= 10; i++) {
    console.log(`${i} x 5 = ${i * 5}`);
}

// Opgave 3
// A standard for loop - multiplication advanced - Write a script that outputs the multiplication tables for every multiplier from 1 to 10 (100 results in total). The output in the console should look like below.
for(let x = 1; x <= 10; x++) {
    for(let y = 1; y <= 10; y++) {
        console.log(`${x} x ${y} = ${x * y}`);
    }
}

// Opgave 4
//Looping through an array - use the for … of - First, create an array with some content, for instance one like this:
const animals = ["Dog", "Cat", "Monkey", "Panda", "Tiger"];

for(species of animals) {
    console.log(species);
}

// Opgave 5
// Looping through an object - use the for … in - First, create an object with some properties and values. It can for instance be an object of a car.
const car = {
    make: "Toyoda",
    model: "Aigo",
    year: 2012,
    color: 'red',
    horsePower: "idk",
}

for(key in car) {
    console.log(`${key}: ${car[key]}`);
}

// Opgave 6
//For loop – even and odd - advanced - Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number 
for(let i = 0; i <= 20; i++) {
    //tjek om i er lige eller ulige
    if(i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}