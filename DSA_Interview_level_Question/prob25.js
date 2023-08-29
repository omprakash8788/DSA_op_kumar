
// substring under condition 
// Your task is to find the count of all such substring , which start and ends with the same character 

// Input  string="bcdbc"
// Output = 7
let string="bcdbc"
let count=0;
for(let i=0; i<string.length; i++){
    for(let j=i; j<string.length; j++){
        if(string[i]==string[j]){
            count++
        }
    }
}
console.log(count);





