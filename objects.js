console.log('objects');

// return length of word
const wordLength = (word) => {
    return `Number of letters is ${word.length}`;
};

console.log(wordLength('cat'));  // 3
console.log(wordLength('monkeybutt'));  // 10

// Check your age
const ageCheck = (age) => {
    if (age >= 21) {
        console.log('PARTY!!!!!!!!!!!!!!!!!!!!!');
    } else {
        console.log('No drinks for you!')
    }
};

ageCheck(12); // No drinks for you!
ageCheck(24); // PARTY!!!!!!!!!!!!!!!!!!!!!

const expense = {
    dateCreated: '01/17/2020',
    location: 'Baja Burrito',
    cost: 12.57,
    isGood: true
};

// dot notation
console.log(expense.cost);

// bracket notation
console.log(expense['cost']);

const employee = {
    firstName: 'Bob',
    lastName: 'Newman',
    job: 'Engineer',
    salary: 75000.00,
    'favorite drink': 'Diet Coke',
    isGoodAtJob: true
};

// Challenge

const statusMaker = (emp) => {
    if (emp.firstName[0] === 'M') {
        emp.status = 'vip';
    } else {
        emp.status = 'peasant';
    }
    return emp
}

console.log(statusMaker(employee));