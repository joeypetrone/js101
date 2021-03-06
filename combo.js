console.log('Combos');

// Challenge #1
// Create a function called evenOdd that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.

// Challenge #1

const evenOdd = (num) => {
    if (!Number.isInteger(num)){
        return `"${num}" is not a number.`;
    } else if (num % 2) {         // returns true for an odd number due to it having a 1 remainder from a modulus 2 
        return 'Odd';
    } else if (num != 0) {
        return 'Even';
    } else {
        return 'Zero';
    }
};

console.log(evenOdd(33)); // Odd
console.log(evenOdd(34)); // Even
console.log(evenOdd(-1)); // Odd
console.log(evenOdd(0)); // Zero
console.log(evenOdd('Hello')); // "Hello" is not a number.




// Challenge #2
// given a number, find its opposite. 2 = -2

// Challenge #2

const findOpp = (num) => {
    if (!Number.isInteger(num)){
        return `${num} is not a number.`;        
    } else if (num !== 0) {
        return num = -1*num;
    } else {
        return 'No opposite for 0';
    }
};

console.log(findOpp(2)); // -2
console.log(findOpp(-2)); // 2
console.log(findOpp(0)); // No opposite for 0
console.log(findOpp('Two')); // This is not an number
console.log(findOpp(2.0)); // -2.0
const num = 2.0; // -2.0
console.log(num);



// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

// Challenge #3

const palFinder = (pal) => {
    if (Number.isInteger(pal)) {
        pal = pal.toString();
    }
    const newPal = pal.toLowerCase().split('.').join('').split(' ').join('');
    console.log(newPal);
    const revPal = newPal.split('').reverse().join('');
    console.log(revPal);
    return revPal === newPal;
};

// testing toString() and Number.isInteger()
let thing = 567;
thing = thing.toString();
console.log(Number.isInteger(thing));
console.log(thing);

console.log(palFinder('pap')); // true
console.log(palFinder('Racecar')); // true
console.log(palFinder('Race car')); // true
console.log(palFinder('Palindrome')); // false
console.log(palFinder('This is false!')); // false
console.log(palFinder('!Heb! !beH!')); // true
console.log(palFinder(545)); // true
console.log(palFinder(69900996)); //true
console.log(palFinder('Mr. Owl ate my metal worm')); //true


// Challenge #4
// Lawrence the wide mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat the lips of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence encounters, output small if the animal is an alligator (case insensitive) otherwise return wide.

// Challenge #4
 const newCreature = (animal) => {
     const isGator = 'alligator'; 
     if (animal.toLowerCase().includes(isGator) && animal.length === isGator.length) {
         return 'small';
     } else {
         return 'wide';
     }
 }

console.log(newCreature('Alligator')); // small
console.log(newCreature('alligator')); // small
console.log(newCreature('bird')); // wide
console.log(newCreature('frog')); // wide


