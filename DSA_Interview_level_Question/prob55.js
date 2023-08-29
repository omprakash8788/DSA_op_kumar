function chocolateFeast(n, c, m) {
    let n=9
    let arr=[1,8,6,12,5,4,8,9,13]
    // Write your code here
    let numChocolates = Math.floor(n / c);
    let wrappers = Math.floor(n / c); 
    
   
   
    while(wrappers >= m){
        let chocolatesbought = (numChocolates + Math.floor(wrappers / m)) - numChocolates;
        numChocolates = numChocolates + Math.floor(wrappers / m);
        wrappers = wrappers % m + chocolatesbought;
       
        
    }
        return numChocolates
   
    

}