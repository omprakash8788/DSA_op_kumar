

	// Taking input a string.
	var string = "GeeksforGeeks is computer science portal";
	
	// Taking a regular expression.
	var regexp1 = /G/;
	var regexp2 = /c/;
	var regexp3 = /z/;
	
	// Output
	console.log(string.search(regexp1));
	//Expected Output: 0
	
	console.log(string.search(regexp2));
	// Expected Output: 17
	
	console.log(string.search(regexp3));
	// Expected Output: 
