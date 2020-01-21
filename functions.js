console.log('Functions')

const nuggetizer = (animal) => {
    const output = `processed ${animal}`;
    return output;
};

console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('fish'));
console.log(nuggetizer('tire'));

const dogBreed = (dog) => {
    return `My favorite dog breed is ${dog}`
};

console.log(dogBreed('lab'));
console.log(dogBreed('actually cat'));

// Challenge 1
const fortytwo = (num) => {
    const addFortyTwo = num + 42;
    const output = `${num} + 42 = ${addFortyTwo}`;
    return output;
};

// Challenge 2
const oldAge = (year) => {
    const age = 2099 - year;
    const output = `You were born in ${year}, in 2099 you will be ${age} years old.`;
    return output;
};

// Challenge 1 Output
console.log(fortytwo(1)); // 43
console.log(fortytwo(40)); // 82

// Challenge 2 Output
console.log(oldAge(2000)); // 99
console.log(oldAge(1982)); // 117