const sumAll = function (intStart, intEnd) {
	if (
		intStart < 0 ||
		intEnd < 0 ||
		typeof intStart !== "number" ||
		typeof intEnd !== "number" ||
		intStart % 1 !== 0 ||
		intEnd % 1 !== 0
	) {
		return "ERROR";
	}
	if (intStart > intEnd) {
		let temp = intStart;
		intStart = intEnd;
		intEnd = temp;
	}
	let sum = 0;
	for (let i = intStart; i <= intEnd; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
