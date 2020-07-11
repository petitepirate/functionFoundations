// 1
//Mine:
function appendToString(string1, string2) {
	return string1.concat(string2);
}
appendToString('Hello', ' World!'); // "Hello World!"

//Teacher:
function appendToString(str1, str2) {
	return str1 + str2;
}
//-------------------------------------------------------------

//2
//Mine:
function prependToString(string1, string2) {
	return string2 + string1;
}
prependToString('nothing', '');

//Teacher:
function prependToString(str1, str2) {
	return str2 + str1;
}
//-------------------------------------------------------------

//3
//Mine:
function charAt(string, index) {
	var charAt = string[index];
	if (index <= string.length) {
		return charAt;
	} else {
		return '';
	}
}
charAt('awesome', 12);

//Teacher:
function charAt(str, idx) {
	// one-line solution using a ternary operator (condensed if/else)
	return idx < str.length ? str[idx] : '';
}
//-------------------------------------------------------------

//4
//Mine:
function stringIncludes(word, char) {
	for (let i = 0; i < word.length; i++) {
		if (word[i] === char) {
			return true;
		}
	}
	return false;
}
stringIncludes('awesome', 'z');

//Teacher:
function stringIncludes(str, char) {
	// the ES2015 keyword 'let' is preferable for loop iterator variables
	//  since it is scoped to that block
	//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			return true;
		}
	}
	return false;
}
//-------------------------------------------------------------

//5
//Mine:
function stringIndexOf(word, char) {
	for (let i = 0; i < word.length; i++) {
		if (word[i] === char) {
			return i;
		}
	}
	return -1;
}

stringIndexOf('awesome', 'e');

//Teacher:
function stringIndexOf(str, char) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			return i;
		}
	}
	// by the time you've reached this line, the loop has examined
	//   every single character in the string
	return -1;
}
//-------------------------------------------------------------

//6
//Mine:
function stringLastIndexOf(str1, str2) {
	let index = -1;
	for (var i = 0; i < str1.length; i++) {
		if (str1[i] === str2) {
			index = i;
		}
	}
	return index;
}

// Teachers:
function stringLastIndexOf(str, char) {
	// the approach is the same as the last problem, except
	//  the loop goes backwards
	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] === char) {
			return i;
		}
	}
	return -1;
}
//-------------------------------------------------------------

// 7
//Mine:
function repeat(string, times) {
	var repeatedString = '';
	while (times > 0) {
		repeatedString += string;
		times--;
	}
	return repeatedString;
}
repeat('abc', 3);

// Teacher:
function repeat(str, num) {
	var newStr = ''; // string we will build up

	for (let i = 0; i < num; i++) {
		// note that this creates a new string every iteration of the loop
		//  because JavaScript strings are immutable
		newStr += str;
	}

	return newStr;
}
//-------------------------------------------------------------

// 8
//Mine:
function removeFromString(str, index, number) {
	var outputStringArray = str.split('');
	outputStringArray.splice(index, number);
	return outputStringArray.join('');
}

removeFromString('Elie', 0, 1);

//Teacher:
// converting to an array method
function removeFromStringArr(str, start, removeCount) {
	let arr = str.split('');
	arr.splice(start, removeCount);
	return arr.join('');
}

// regular method
function removeFromString(str, start, removeCount) {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		if (i < start || i >= start + removeCount) {
			newStr += str[i];
		}
	}
	return newStr;
}
//-------------------------------------------------------------

// 9
//Mine:
function includes(array, num) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === num) {
			return true;
		}
	}
	return false;
}

includes([ 1, 2, 3, 4 ], 4);
includes([ 1, 2, 3, 4 ], 14);

//Teacher:
function includes(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return true;
		}
	}
	return false;
}
//-------------------------------------------------------------

// 10
//Mine:
function indexOf(array, num) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === num) {
			return i;
		}
	}
	return -1;
}

var arr = [ 5, 10, 15, 20 ];
indexOf(arr, 20);

var arr2 = [ 1, 2, 3, 4, 5 ];
indexOf(arr2, 2);

//Teacher:
function indexOf(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
}
//-------------------------------------------------------------

// 11
//Mine:
function lastIndexOf(array, num) {
	let index = -1;
	for (var i = 0; i < array.length; i++) {
		if (array[i] === num) {
			index = i;
		}
	}
	return index;
}

lastIndexOf([ 1, 2, 3, 4 ], 2);
lastIndexOf([ 1, 2, 3, 4, 2 ], 2);

//Teacher:
function lastIndexOf(arr, val) {
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
}
//-------------------------------------------------------------

// 12
//Mine:
function push(array4, num) {
	array4[array4.length] = num;
	return array4.length;
}

var array4 = [ 5, 2, 1, 6 ];
push(array4, 20);
array4;

//Teacher:
function push(arr, value) {
	// remember JS arrays are dynamic (in fact, technically they are objects)
	//  so you can dynamically assign a new index at arr.length
	//   and the length automatically updates
	arr[arr.length] = value;
	return arr.length;
}
//-------------------------------------------------------------

// 13
//Mine:
function pop(arr) {
	return arr && arr.splice(-1)[0];
}

var arr = [ 1, 2, 3, 4 ];
pop(arr); // 4
arr;

//Teacher:
function pop(arr) {
	if (arr.length === 0) {
		return; // default function return value is 'undefined'
	}
	// store the last value
	let finalVar = arr[arr.length - 1];
	// decreasing the length will automatically shrink the array
	arr.length = arr.length - 1;

	return finalVar;
}
//-------------------------------------------------------------

// 14
//Mine:
function unshift(array, value) {
	array.splice(0, 0, value);
	return array.length;
}

var array = [ 1, 2, 3 ];
unshift(array, 0);
array;
unshift([ 4, 5, 6 ], 10);

//Teachers:
function unshift(arr, val) {
	// starting from the end of the array, each item has to be
	//  moved up one to account for the new element at the beginning
	for (let i = arr.length; i >= 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = val;
	return arr.length;
}
//-------------------------------------------------------------

// 15
//Mine:
function shift(arr) {
	if (arr.length === 0) {
		return;
	}
	let firstVar = arr[0];
	arr = arr.splice(0, 1);
	return firstVar;
}

var arr = [ 'a', 'b', 'c' ];
shift(arr); // "a"
arr;

//Teacher:
function shift(arr) {
	if (arr.length === 0) {
		return;
	}
	let firstVal = arr[0];
	// have to move up each element to account for missing first element
	for (let i = 1; i < arr.length; i++) {
		arr[i - 1] = arr[i];
	}
	arr.length = arr.length - 1;
	return firstVal;
}
//-------------------------------------------------------------

// 16
//Mine:
function reverse(array) {
	for (let i = 0; i < array.length / 2; i++) {
		[ array[i], array[array.length - 1 - i] ] = [ array[array.length - 1 - i], array[i] ];
	}
	return array;
}

var array = [ 1, 2, 3 ];
reverse(array);

//Teacher:
/* 
   * swap each value in the array starting from the 
   *  beginning and going to the middle. Note the middle element
   *  itself does not need to be swapped
   */
function reverse(arr) {
	// midpoint is length / 2, floored to account for odd lengths
	let middle = Math.floor(arr.length / 2);

	for (let i = 0; i < middle; i++) {
		let end = arr.length - 1;
		// make a temporary variable to store a value closer
		//  to the beginning
		let temp = arr[i];
		// swap the value closer to the beginning with
		//  a value the same distance from the end
		arr[i] = arr[end - i];
		// swap the value closer to the end with
		//  the temporary variable
		arr[end - i] = temp;
	}
	return arr;
}
//-------------------------------------------------------------

// 17
//Mine:
function max(array) {
	var m = -Infinity,
		i = 0,
		n = array.length;

	for (; i != n; ++i) {
		if (array[i] > m) {
			m = array[i];
		}
	}

	return m;
}

//Teacher:
function max(arr) {
	// we can use the first element as the default 'maximum'
	let maximum = arr[0];
	// then if we encounter a larger element in the rest of the array,
	//   replace the value. Note we can start our loop at index 1
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > maximum) {
			maximum = arr[i];
		}
	}
	return maximum;
}
//-------------------------------------------------------------

// 18
//Mine:
function min(arr) {
	let minimum = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < minimum) {
			minimum = arr[i];
		}
	}
	return minimum;
}

min([ 5, 1, 4, 7, 1, 2 ]); // 1

//Teacher:
function min(arr) {
	let lowest = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < lowest) {
			lowest = arr[i];
		}
	}
	return lowest;
}
//-------------------------------------------------------------

// 19
//Mine:
function slice(arr, start, end) {
	let result = [];
	from = Math.max(start, 0);
	to = Math.min(end);

	if (!end || end > arr.length) {
		for (let i = from; i < arr.length; i++) {
			result.push(arr[i]);
		}
	} else {
		for (let i = from; i < to; i++) {
			result.push(arr[i]);
		}
	}
	return result;
}

slice([ 1, 2, 3, 4, 5 ], 0, 2);

//Teachers:
function slice(arr, start, end) {
	let newArr = [];
	// handle end not being passed or being too large
	if (end === undefined || end > arr.length) {
		end = arr.length;
	}
	// slice from start to end
	for (let i = start; i < end; i++) {
		newArr.push(arr[i]);
	}
	return newArr;
}
//-------------------------------------------------------------

// 20
//Mine:
function squareEvenNumbers(numStr) {
	let sum = 0;
	for (let i = 0; i < numStr.length; i++) {
		if (numStr[i] % 2 === 0) {
			sum += Math.pow(numStr[i], 2);
		}
	}
	return sum;
}

squareEvenNumbers([ 1, 2, 3, 4, 5 ]);

//Teacher:
function squareEvenNumbers(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sum += arr[i] ** 2;
		}
	}
	return sum;
}
//-------------------------------------------------------------

// 21
//Mine:
function keys(object) {
	var keys1 = [];
	for (var key in object) {
		keys1.push(key);
	}
	return keys1;
}

var obj = { a: 1, b: 2, c: 3 };
keys(obj);

//Teacher:
function keys(obj) {
	let arr = [];
	for (let key in obj) {
		arr.push(key);
	}
	return arr;
}
//-------------------------------------------------------------

// 22
//Mine:
function values(obj) {
	var array = [];
	for (var key in obj) {
		array.push(obj[key]);
	}
	return array;
}

var obj = { first: 'Matt', last: 'Lane', isDogOwner: true };
values(obj);

//Teachers:
function values(obj) {
	let valuesArr = [];
	for (let key in obj) {
		valuesArr.push(obj[key]);
	}
	return valuesArr;
}
//-------------------------------------------------------------

// 23
//Mine:
function swapKeyAndValue({ ...obj }, key) {
	if (obj.hasOwnProperty(key)) {
		const new_key = obj[key];
		obj[new_key] = key;
		delete obj[key];
	}

	return obj;
}
var instructor = { name: 'Elie', job: 'Instructor' };

swapKeyAndValue(instructor, 'name');

//Teacher:
function swapKeyAndValue(obj, swapKey) {
	let newObj = {};

	// loop through old object
	for (let key in obj) {
		if (key === swapKey) {
			// the one key needs to be swapped with its value
			newObj[obj[key]] = key;
		} else {
			// the other keys and values just need to be copied over
			newObj[key] = obj[key];
		}
	}
	return newObj;
}
//-------------------------------------------------------------

// 24
//Mine:
function entries(obj) {
	return Object.keys(obj).map(function(key) {
		return [ key, obj[key] ];
	});
}

var obj = { a: 1, b: 2, c: 3 };
entries(obj);

//Teacher:
function entries(obj) {
	let container = [];
	for (let key in obj) {
		// push a sub-array of [key, obj] into the parent array
		container.push([ key, obj[key] ]);
	}
	return container;
}
//-------------------------------------------------------------

// 25
//Mine:
function countValues(array, what) {
	var count = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] === what) {
			count++;
		}
	}
	return count;
}

countValues([ 4, 1, 4, 2, 3, 4, 4 ], 100);

//Teacher:
function countValues(arr, val) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			count++;
		}
	}
	return count;
}
//-------------------------------------------------------------

// 26
//Mine:
function generatePairs(n) {
	var result = [];
	for (a = 0; a <= n; a++) {
		for (b = a; b <= n; b++) {
			result.push([ a, b ]);
		}
	}
	return result;
}

//Teacher:
function generatePairs(n) {
	var result = [];
	for (i = 0; i <= n; i++) {
		for (j = i; j <= n; j++) {
			result.push([ i, j ]);
		}
	}
	return result;
}
//-------------------------------------------------------------

// 27
//Mine:
function multiples(x, n) {
	const arr = [];
	for (let i = 1; i <= n; i++) arr.push(x * i);
	return arr;
}

multiples(3, 4);

//Teacher:
function multiples(x, n) {
	const arr = [];
	// multiply x * i for every number from 1 up to and including n
	for (let i = 1; i <= n; i++) {
		arr.push(i * x);
	}
	return arr;
}
//-------------------------------------------------------------

// 28
//Mine:
function pluck(array, key) {
	return array.map(function(item) {
		return item[key];
	});
}

pluck([ { name: 'Tim' }, { name: 'Matt' }, { name: 'Elie' } ], 'name');

//Teacher:
function pluck(arr, key) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i][key]);
	}
	return newArr;
}
//-------------------------------------------------------------

// 29
//Mine:
function twoHighest(arr) {
	var highest = 0;
	var secondHighest = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= highest) {
			secondHighest = highest;
			highest = arr[i];
		} else if (arr[i] > secondHighest && arr[i] < highest) {
			secondHighest = arr[i];
		}
	}

	return [ secondHighest, highest ];
}

twoHighest([ 1, 2, 2 ]);

// Teacher:
/**
   * This approach takes 1 single sweep of the array with two pointers.
   *  The highest and secondHighest are initialized to negative Infinity
   *  so that any numbers in the array will be eligible. Then set the
   *  secondHighest first, and if it's greater than the highest, swap.
   */
function twoHighest(nums) {
	// initialize both to the lowest possible values
	let highest = -Infinity;
	let secondHighest = -Infinity;

	for (let num of nums) {
		// set secondHighest first
		if (num > secondHighest) {
			secondHighest = num;
		}
		// see if we need to set highest
		if (secondHighest >= highest) {
			// if so, swap
			let tmp = highest;
			highest = secondHighest;
			secondHighest = tmp;
		}
	}

	return [ secondHighest, highest ];
}
//-------------------------------------------------------------

// 30  //Incomplete
//Mine: NOTE MINE IS INCORRECT AND NOT FINISHED
function minMaxKeyInObject() {
	var keys = Object.keys(obj);
	// sort keys array from low to high
	keys.sort((a, b) => a - b); // For ascending sort
	//return index[0], and last index
}

minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]

//Found this but cant seem to make it quite work - would have to add key portion first also
function minMaxKeyInObject(arr) {
	var keys = Object.keys(arr);
	let min = keys[0].y,
		max = keys[1].y;

	for (let i = 1, len = keys.length; i < len; i++) {
		let v = keys[i].y;
		min = v < min ? v : min;
		max = v > max ? v : max;
	}
	return [ min, max ];
}

console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));

//Teachers:
/**
   * Standard approach looping through object with two pointers
   */
function minMaxKeyInObject(obj) {
	let minKey = Infinity;
	let maxKey = -Infinity;

	for (let key in obj) {
		// convert key to number and compare
		let keyNum = +key; // this is shorthand for Number(key)
		if (keyNum < minKey) {
			minKey = keyNum;
		}
		if (keyNum > maxKey) {
			maxKey = keyNum;
		}
	}

	return [ minKey, maxKey ];
}

/**
   * Advanced approach. Declarative 1-liner using Object.keys 
   *  and Array spread operator (...)
   */
function minMaxKeyInObjectDeclarative(obj) {
	return [ Math.min(...Object.keys(obj)), Math.max(...Object.keys(obj)) ];
}
//-------------------------------------------------------------

// 31
//Mine:
function stringFromObject(obj) {
	let result = '';
	for (let i in obj) {
		result += i + ' = ' + obj[i] + ', ';
	}
	result = result.slice(0, result.length - 2);
	return result;
}

stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });

//Teacher:
/**
   * Loop thru keys building a string with ' = ' between
   *  key and value and ', ' between each entry,
   *  then slice off the comma and space at the end
   */
function stringFromObject(obj) {
	let finalStr = '';
	for (let key in obj) {
		finalStr += key + ' = ' + obj[key] + ', ';
	}
	return finalStr.slice(0, -2);
}
//-------------------------------------------------------------

// 32
//Mine:
function toQueryString(obj) {
	return Object.entries(obj).reduce((acc, [ key, val ]) => {
		if (Array.isArray(val)) {
			val.forEach((e) => (acc += (acc ? '&' : '') + key + '=' + e));
		} else {
			acc += (acc ? '&' : '') + key + '=' + val;
		}
		return acc;
	}, '');
}
toQueryString({});

//Teacher:
function toQueryString(obj) {
	var str = '';
	for (var key in obj) {
		if (Array.isArray(obj[key])) {
			for (var i = 0; i < obj[key].length; i++) {
				str += '&' + key + '=' + obj[key][i];
			}
		} else {
			str += '&' + key + '=' + obj[key];
		}
	}
	return str.slice(1);
}
//-------------------------------------------------------------

// 33
//Mine:
function countNumbers(arr) {
	return arr.filter(function(el) {
		return parseFloat(el) == el;
	}).length;
}

countNumbers([ '32', '55', 'awesome', 'test', '100' ]);

//Teacher:
function countNumbers(arr) {
	let count = 0;
	for (let val of arr) {
		let valToNumber = parseInt(val);
		let isValNaN = isNaN(valToNumber);
		if (isValNaN === false) {
			count++;
		}
	}
	return count;
}

// ANOTHER OPTION
// function countNumbers(arr){
//   // return an array of values that are not NaN when converted to a string
//   // and calculate the length
//   return arr.filter(val => !isNaN(parseInt(val))).length
// }
//-------------------------------------------------------------

// 34
//Mine:
function totalCaps(arr) {
	let capCount = 0;
	arr.forEach((word) => {
		word.split('').forEach((char) => {
			if (char === char.toUpperCase()) {
				capCount += 1;
			}
		});
	});
	return capCount;
}

totalCaps([ 'Elie', 'Matt', 'Tim' ]);

//Teachers:
function totalCaps(arr) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			if (arr[i].charCodeAt(j) >= 65 && arr[i].charCodeAt(j) <= 90) {
				count++;
			}
		}
	}
	return count;
}

function countCaps(str) {
	const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let count = 0;
	for (let char of str) {
		if (caps.includes(char)) {
			count++;
		}
	}
	return count;
}

function totalCaps(arr) {
	let finalCount = 0;
	for (let str of arr) {
		finalCount += countCaps(str);
	}
	return finalCount;
}
//-------------------------------------------------------------

// 35
//Mine:
function rankings(arry) {
	let sorted = arry.slice().sort(function(a, b) {
		return a - b;
	});

	let currentRank = sorted.length;
	let rankValue = null;
	let ranks = [];

	sorted.forEach((value) => {
		if (value !== rankValue && rankValue !== null) {
			currentRank--;
		}

		ranks.push({ value, currentRank });
		rankValue = value;
	});

	let mapRanksToArrayValues = arry.map(function(x) {
		let _rank = null;
		ranks.forEach((rank) => {
			if (rank.value === x) {
				_rank = rank.currentRank;
				return;
			}
		});
		return _rank;
	});

	return mapRanksToArrayValues;
}

rankings([ 4, 2, 3, 1 ]);
//Teacher:
function rankings(arr) {
	var rankingsArr = [];
	for (var i = 0; i < arr.length; i++) {
		var rank = 1;
		for (var j = 0; j < arr.length; j++) {
			if (arr[j] > arr[i]) rank++;
		}
		rankingsArr.push(rank);
	}
	return rankingsArr;
}
