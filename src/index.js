module.exports = function toReadable(number) {
	let result = "";
	const dictionary = {
		0: "zero",
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen",
		20: "twenty",
		30: "thirty",
		40: "forty",
		50: "fifty",
		60: "sixty",
		70: "seventy",
		80: "eighty",
		90: "ninety"
	}
	// если ноль, сразу вернем ноль 
	if (!number) return dictionary[0];

	// получаем сотни
	let hundreds = (number % 1000 - number % 100) / 100;
	if (hundreds) {
		result += dictionary[hundreds] + " hundred"
	}
	// получаем десятки и единицы	
	let tensAndOnes = number % 100;
	// если есть и сотни и десятки добавляем пробел после сотен
	if (hundreds && tensAndOnes) result += " "
	//Если тут получили НЕ ноль
	if (tensAndOnes) {
		//Если меньше 20
		if (tensAndOnes < 20) {
			result += dictionary[tensAndOnes]
			//Иначе разбиваем число на единицы и десятки и обрабатываем отдельно
		} else {
			//Сначала выделяем десятки и записываем соответствие из словаря
			result += dictionary[(tensAndOnes % 100) - tensAndOnes % 10]
			//Выделяем единицы и если они не равны нулю записываем соответствие из словаря
			if (tensAndOnes % 10) {
				result += " " + dictionary[tensAndOnes % 10]
			}
		}
	}
	return result;
}
