function findPattern(str, pat) {
    const n = str.length;
    const m = pat.length;
  
    // Loop through the string
    for (let i = 0; i <= n - m; i++) {
      let j;
  
      // Check if the current substring matches the pattern
      for (j = 0; j < m; j++) {
        if (str[i + j] !== pat[j]) {
          break;
        }
      }
  
      // If the pattern is found, return 'yes'
      if (j === m) {
        return 'yes';
      }
    }
  
    // If no matching substring is found, return 'no'
    return 'no';
  }
  
  // Test case
  const str = 'abcbababaa';
  const pat = 'cab';
  console.log(findPattern(str, pat));
  