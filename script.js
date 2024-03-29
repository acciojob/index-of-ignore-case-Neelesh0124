function indexOfIgnoreCase(s1, s2) {
  // write your code here
	for (let i = 0; i < s1.length; i++) {
		if (s1[i]==s2[i]) {
			console.log(i)
			break;
		}
		
	}
}

 Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
