//memoize 提供的功能是“lazy computation”, 有需求才会去计算结果

//看看第一个例子，如果不是lazy的话，没用到的东西也会花时间去计算：
//non-lazy
var a = expensiveComputationA();
var b = expensiveComputationB();

function myApp() {
	//The app uses a, but not b. we wasted time calculating b.
	console.log(a);
	console.log(a);
}

//第二个例子用了memoize来提供按需计算：
//lazy
var getA = memoize(expensiveComputationA);
var getB = memoize(expensiveComputationB);

function myApp() {
	//A is lazily computed when it's needed, and only calculated once.
	console.log(getA());
	console.log(getA());

	//Since getB is not used, we don't spend time calculating b.
}