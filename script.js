	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

	var  minNumber = 1;
	var maxNumber = 3;
	
	
	function guessing(){	
	var count = 0;
	var x, text;
	var randomNumber = getRandomInt(minNumber, maxNumber);
	alert(randomNumber);
	
	do{
		count++;
	
		if (count > 10)
		{
			text = "het luot";
			document.getElementById("demo").innerHTML = text;
			break;
		}
		
		var num = document.getElementById("number").value;
		
		
		if (num < randomNumber )
			text = "Your guess is lower. Guess higher";
		else if (x > randomNumber){
			text = "Your guess is higher. Guess lower";
			}
		else {
			text = "CONGRATULATIONS!!!" ;
			}
		 document.getElementById("demo").innerHTML = text;
	} while (num !=  randomNumber  && count <= 10); 
	if (x  ==  randomNumber )
		text ="You win";
		document.getElementById("demo").innerHTML = text;
	}