const arr = [1, 2, 2, 6, 5, 1];
const n = arr.length;
const bulbs = new Array(n).fill(true); 
for (let i = 0; i < n; i++) {
  const index = arr[i] - 1
  bulbs[index] = !bulbs[index]; 
}

const firstOnBulb = bulbs.indexOf(true) + 1;

const lastOnBulb = n - bulbs.reverse().indexOf(true);

console.log( firstOnBulb);
console.log(lastOnBulb);
