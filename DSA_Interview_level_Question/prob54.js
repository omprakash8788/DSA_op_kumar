function isPastaManHappy(N, m, arr) {
    let i = 0; 
    let j = 0; 
  
    while (i < N && j < m) {
      if (arr[i] <= 1) {
        j++;
        i++;
      } else {
        arr[i] -= 1;
        j++;
      }
    }
  
    if (j === m) {
      return "Happy";
    } else {
      return "Angry";
    }
  }
  
  const N = 3;
  const m = 2;
  const arr = [1, 1, 3];
  
  const result = isPastaManHappy(N, m, arr);
  console.log(result);
  