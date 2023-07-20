//your JS code here. If required.
function nonrepating(str) {
	const charF=[];
	for(const char of str){
		charF[char]=(charF[char] || 0)+ 1;
	}
	for(const char of str){
		if(charF[char]==1)
			return char;
	}
	return null;
}
let str=prompt("Enter a string");   
alert(nonrepating(str));