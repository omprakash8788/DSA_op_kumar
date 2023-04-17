// let s = "abcd";
// let t = "aebcrd";
// if (s.length > t.length) return false;
// const t_length = t.length;
// let subsequence = 0;
// for (let i = 0; i < t_length; i++) {
//   if (s[subsequence] === t[i]) {
//     subsequence++;
//   }
// }
// if (subsequence == s.length) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }
let a="abcd"
let b="aebcrd"
if (a.length > b.length) return false;
const b_length = b.length;
let subsequence = 0;
for (let i = 0; i < b_length; i++) {
  if (a[subsequence] === b[i]) {
    subsequence++;
  }
}
if (subsequence == a.length) {
  console.log("YES");
} else {
  console.log("NO");
}

