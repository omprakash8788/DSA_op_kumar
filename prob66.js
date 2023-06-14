function findPattern(str, pat) {
    const n = str.length;
    const m = pat.length;
    for (let i = 0; i <= n - m; i++) {
      let j;
      for (j = 0; j < m; j++) {
        if (str[i + j] !== pat[j]) {
          break;
        }
      }
      if (j === m) {
        console.log("Yes");
      }
    }
    console.log("No");
  }
  