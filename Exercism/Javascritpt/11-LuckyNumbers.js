#!/usr/bin/node

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
	const param1 = array1.join("");
	const param2 = array2.join("");

	return Number(param1) + Number(param2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
	const valueToString = String(value);
	let length = valueToString.length;

	for (let index = 0; index <= length / 2; index++) {
		if (valueToString[index] !== valueToString[length - 1 - index]) {
			return false;
		}
	}
	return true
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
	var toNum = Number(input);

	if (input === undefined || input === null || input === '') {
		return 'Required field';
	} else if (isNaN(toNum) || toNum == 0) {
		return 'Must be a number besides 0';
	} else {
		return '';
	}
}
