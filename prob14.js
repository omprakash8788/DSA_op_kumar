// Q. Vowel and consonent count.
// You have to find the count of vowels and consonant in the string and print it .
// Input str="Manipal", N=7;
// Output = 3  4

let N=7;
let str="Manipal"
let Vowel=0;
let consonant=0;
for(let i=0; i<N; i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
        Vowel++
    }
    else{
        consonant++
    }
}
console.log(Vowel, consonant);
// Dry run 
// i=0+1=1+1=2+1=3+1=4+1=5+1=6+1=7  , 7<7 f
// if(n=="aeiou") f  

// consonant =0+1=1+1=2+1=3+4=4
// Vowel=0+1=1+1=2+1=3




