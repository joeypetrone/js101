console.log('Arrays');

const junkDrawer = ['hi', 2, true, {name: 'Joey Petrone'}, [1, 2, 3, 4]];

console.log(junkDrawer[2]);
junkDrawer.push('fluffy');
console.log(junkDrawer[5]);

const valuePrinter = (arr, i) => {
    return arr[i];
}

console.log(valuePrinter([1, 2, 3, 4, 5], 2)); // 3
console.log(valuePrinter(['cat', 'dog', 'bear', 'turtle', 'fish'], 3)); // turtle 