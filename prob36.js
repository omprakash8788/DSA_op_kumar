N = 7
arr= [2,6,1,9,4,5,3]
  //get unique
  arr=[...new Set(arr)];
     
  arr.sort((a,b)=>a-b) // sort 
  let max=0;
  let count=0;
  for(let i=0; i<N; i++){ 
      if(i>0 && arr[i]===arr[i-1]+1){ // check current ele== prv ele+1
          count++
      }
      else{
          count=1
      }
      max=Math.max(max,count)
  }
 console.log(max);

