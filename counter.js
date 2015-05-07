/*function outter(agr1) {
	var v1 = Math.random();
	function intter(arg2) {
		var v2 = Math.random();
		return [v1, v2, arg1, arg2];
	}
	return intter;
}

console.log(outter(13));
*/

function makeCounter(n)
{
	var increment = function () {
		n = n + 1;
		return n;
	};
	var decrement = function () {
		n = n - 1;
		return n;
	};

	return [increment, decrement];
}

var counter = makeCounter(5);
var counter1_inc = counter[0];
var counter1_dec = counter[1];

var counter2 = makeCounter(10);
var counter2_inc = counter2[0];
var counter2_dec = counter2[1];

console.log(counter1_inc());
console.log(counter2_inc());
console.log(counter1_inc());
console.log(counter2_dec());
console.log(counter1_dec());

/*counter1_inc(); // => 6
counter2_inc(); // => 11
counter1_inc(); // => 7
counter2_dec(); // => 10
counter1_dec(); // => 6*/