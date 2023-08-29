// let arr=["banana","banana","banana"]
// let 

const arr = ["banana", "banana", "banana"];

const uniqueFruits = [...new Set(arr)]; 

if (uniqueFruits.length === 1) {
  console.log("Single Type");
} else {
  console.log("Mixed Basket");
}
