#!/usr/bin/node

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
	var birdCount = 0;

	for (let index = 0; index != birdsPerDay.length; index++) {
		birdCount += birdsPerDay[index];
	}
	return birdCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
	var birdsCountInWeek = 0;
	if (week == 1) {
		var start = 0;
	} else if (week * 7 <= birdsPerDay.length) {
		var start = week * 7 - 7;
	} else {
		var start = (week * 7) - 8;
	}
	for (let end = start + 7; start < end; start++) {
		birdsCountInWeek += birdsPerDay[start];
	}
	return birdsCountInWeek;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
	for (let index = 0; index < birdsPerDay.length; index += 2) {
		birdsPerDay[index] += 1;
	}
	return birdsPerDay;
}
