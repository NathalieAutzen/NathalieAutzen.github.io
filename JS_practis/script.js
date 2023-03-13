// Opgave 1
let amountBeer = 8;

if (amountBeer >= 1) {
    console.log(`You have ${amountBeer} beer in your fridge`)
} else {
    console.log("You don't have any beer")
}


// Opgave 2
let amountEggs = 12;

if (amountEggs >= 4) {
    console.log(`You have ${amountEggs} eggs in your fridge`);
} else if (amountEggs >= 1) {
    console.log(`You ned to buy more eggs you only have ${amountEggs} left`);
} else if (amountEggs < 1) {
    console.log(`You are out of eggs`);
}


// Opgave 3
let points = 37;

if (points === 100) {
    console.log(`You have ${points} points, your grade is 12`);
} else if (points > 90) {
    console.log(`You have ${points} points, your grade is 10`);
} else if (points > 80) {
    console.log(`You have ${points} points, your grade is 7`);
} else if (points > 70) {
    console.log(`You have ${points} points, your grade is 4`);
} else if (points > 60) {
    console.log(`You have ${points} points, your grade is 02... You almost didn't pass`);
} else if (points > 50) {
    console.log(`You have ${points} points, your grade is 00... You failed`);
} else if (points > 0) {
    console.log(`You have ${points} points, your grade is -3... What the fuck are you doing?`);
}


// Opgave 4
/*//Choose the correct comparison operator to alert true, when x is greater than y.
x = 10;
y = 5;
alert(x > y);

//Choose the correct comparison operator to alert true, when x is equal to y.
x = 10;
y = 10;
alert(x == y);

//Choose the correct comparison operator to alert true, when x is NOT equal to y.
x = 10;
y = 5;
alert(x != y);

//Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
// (age < 18) er for at gøre til true or false
//dDen første efter ? er true, den der kommer efter : er false
var age = n;
var voteable = (age < 18) ? "Too young" : "Old enough";
alert(voteable);

//Fix the if statement to alert "Hello World" if x is greater than y.
if (x > y) {
    alert("Hello World");
}

//Fix the if statement to alert "Hello World" if x is greater than y, otherwise alert "Goodbye".
if (x > y) {
    alert("Hello World");
} else {
    alert("Goodbye");
}*/



// Opgave 5
let age = 11;
//using !NOT - the statement evaluates to true, when age is not between 12-100:
if(!(age >= 12 && age <= 100)) {
    console.log(`Age is ${age} - and not between 12-100`);
}
//using the OR logical
if(age <= 12 || age > 100) {
    console.log(`Your age is ${age}, you are not between 12-100`)
}