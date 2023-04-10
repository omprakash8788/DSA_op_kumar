let s="carerca"
let charCount={}
let oddCount=0;


for(let i=0; i<s.length; i++){
    const char=s[i]
    charCount[char]=(charCount[char] || 0)+1;
}
for(let char in charCount){
    if(charCount[char]%2!==0){
        oddCount++
    }
}
if(oddCount<=1){
console.log("Yes");
}
else{
    console.log(("No"));
}

