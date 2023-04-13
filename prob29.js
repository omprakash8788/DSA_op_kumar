 
	   let n=5;
	   let arr=[1,2,3,4,5]
	    let a=arr[n-1]
	      for(let i=n-2; i>=0; i--){
	          arr[i+1]=arr[i]
	      }
	      arr[0]=a
	      console.log(arr)