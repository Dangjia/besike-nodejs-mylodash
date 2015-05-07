var _ = {
	// do sth
};

_.once = function (func) {
	var invoked = false;
	var funcName = "";
	var result;
	return function () {
		if (invoked == false && funcName != func.name) {
			invoked = true;
			funcName = func.name;
			result = func();
			return result;
		} else if(invoked == true && funcName == func.name) {
			return result;
		}
	};
};

_.memoize = function (func, funcKey) {
	var cache = {};
	return function (param) {
		var key = typeof funcKey == "function" ? funcKey(param) : param.toString();
		if(cache.hasOwnProperty(key)) {
			return cache[key];
		}
		else {
			cache[key] = func(param);
			return cache[key];
		}
	};
};

_.bind = function (func, context) {
	return function () {
		if (typeof func == "function") {
			return func.apply(context);
		}
	};
};

module.exports = _;