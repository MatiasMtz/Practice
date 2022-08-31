#!/usr/bin/node

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
	return (ratePerHour * 8);
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
	var months = Math.floor(numDays / 22);
	var discDays = months * 22;
	var normalDays = numDays - (months * 22);
	var payPerDay = dayRate(ratePerHour);
	var payWithDisc = (payPerDay * discDays) * (1 - discount);
	var payNoDisc = normalDays * payPerDay;

	return (Math.ceil(payNoDisc + payWithDisc));
}
