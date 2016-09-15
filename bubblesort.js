function bubbleSort(array) {
	//console.log("est");
	var length = array.length - 1;
	while (length > 0) {
		for (var i = 0; i < length; i++) {
			if(compare(array[i], array[i+1])) {
				[array[i], array[i+1]] = swap(array[i], array[i+1]);
			}
		}
		length --;
	}
	
	return array;
}

function swap(num1, num2) {
	return [num2, num1];
}

function compare(num1, num2) {
	return num1 > num2;
}

