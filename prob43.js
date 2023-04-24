let arr=[[1,1],[3,4]]
 
    const n = arr.length;
    const m = arr[0].length;
  
    const leftDiagonal = new Set();
    const rightDiagonal = new Set();
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (i === j) {
          leftDiagonal.add(arr[i][j]);
        }
        if (i + j === n - 1) {
          rightDiagonal.add(arr[i][j]);
        }
      }
    }
  
    const productX = Array.from(leftDiagonal)
      .concat(Array.from(rightDiagonal))
      .filter((value) => value > 0)
      .reduce((acc, value) => acc * value, 1);
  
    return productX > 0 ? productX : -1;
  
  console.log(productX);
  // Example usage:
//   const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
  
//   console.log(productX); // Output: 45
  