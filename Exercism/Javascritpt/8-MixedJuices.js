#!/usr/bin/node

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
	switch (name) {
		case 'Pure Strawberry Joy':
			return 0.5;
			break;
		case 'Energizer':
			return 1.5;
			break;
		case 'Green Garden':
			return 1.5;
			break;
		case 'Tropical Island':
			return 3;
			break;
		case 'All or Nothing':
			return 5;
			break;
		default:
			return 2.5;
	}
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
	var wedgesTotal = 0;
	var totalLimes = 0;
	let count = 0;

	while (count < limes.length) {
		if (wedgesTotal >= wedgesNeeded) {
			break;
		}
		switch (limes[count]) {
			case 'small':
				wedgesTotal += 6;
				totalLimes += 1;
				break;
			case 'medium':
				wedgesTotal += 8;
				totalLimes += 1;
				break;
			case 'large':
				wedgesTotal += 10;
				totalLimes += 1;
				break;
		}
		count++;
	}
	return totalLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
	var count = 0;
	var meiPreparation = 0;
	var dimitriMenu = [];
	var index = 0;

	while (count < orders.length) {
		if (meiPreparation >= timeLeft) {
			break;
		}
		meiPreparation += timeToMixJuice(orders[count]);
		count++;
	}
	while (count < orders.length) {
		dimitriMenu[index] = orders[count]
		index++;
		count++;
	}
	return dimitriMenu;
}
