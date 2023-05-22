// let N = 5;
// let K = 3;
// let arr = [9, 9, -5, 9, 5];

// let minExpense = Infinity;

// for (let i = 0; i <= N - K; i++) {
//   let sum = 0;
//   for (let j = i; j < i + K; j++) {
//     sum += arr[j];
//   }
//   minExpense = Math.min(minExpense, sum);
// }

// console.log(minExpense);

let N = 5;
let K = 3;
let arr = [9, 9, -5, 9, 5];

let minExpense = Infinity;
let left = 0;
let right = 0;
let sum = 0;

while (right < N) {
  sum += arr[right];

  if (right - left + 1 === K) {
    minExpense = Math.min(minExpense, sum);
    sum -= arr[left];
    left++;
  }

  right++;
}

console.log(minExpense);

