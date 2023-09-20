// Q. Count Vowel and consonent 
// You have to find the count of vowels and consonant in the string and print it .
// Input str="Manipal", N=7;
// Output = 3  4

let N=7;
let str="Manipal"
let vowels=0;
let consonant=0;
for(let i=0; i<N; i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
        vowels++
    }
    else{
        consonant++
    }
}
console.log(vowels, consonant);







