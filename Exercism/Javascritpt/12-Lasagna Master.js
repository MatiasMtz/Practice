#!/usr/bin/node

/**
 * Checks if Lasagna is done.
 *
 * @remainingTime {int} remaining time on the timer in minutes
 * @returns {string} Lasagna is done or not
 */
export function cookingStatus(remainingTime) {
	if (remainingTime == 0) {
		return 'Lasagna is done.';
	} else if (remainingTime == null && remainingTime == undefined) {
		return 'You forgot to set the timer.';
	} else {
		return 'Not done, please wait.';
	}
}

/**
 * Calculates Lasagna preparation time.
 *
 * @layers {int[]} array of layers
 * @averagePreparation {int} average preparation time
 * @returns {int} Lasagna preparation time
 */
export function preparationTime(layers, averagePreparation = 2) {
	let length = layers.length;

	return length * averagePreparation;
}

/**
 * Determines the quantity of noodles and sauce needed
 *
 * @layers {int[]} array of layers
 * @returns {obj{}} keys noodles and sauce
 */
export function quantities(layers) {
	const quant = {
		noodles: 0,
		sauce: 0
	}

	for (let count = 0; count < layers.length; count++) {
		switch (layers[count]) {
			case 'sauce':
				quant['sauce'] += 0.2;
				break;
			case 'noodles':
				quant['noodles'] += 50;
				break;
			default:
				break;
		}
	}
	return quant;
}

/**
 * Adds the last item from friendsList to the end of myList
 *
 * @ friendsList {string[]} friend array of ingredients
 * @ myList {string[]} my array of ingredients
 */
export function addSecretIngredient(friendsList, myList) {
	var newIngredient = friendsList.slice(-1);
	myList.push(newIngredient[0]);
}

/**
 * Calculates the amounts needed for the desired number of portions.
 *
 * @ recipe {obj{}} holds the amounts needed for 2 portions
 * @ numberOfPortions {int} number of portions you want to cook
 * @ returns {obj{}} amounts needed for the desired number of portions.
 */
export function scaleRecipe(recipe, numberOfPortions) {
	var newRecipe = {};
	for (let ingredients in recipe) {
		newRecipe[ingredients] = recipe[ingredients] * numberOfPortions / 2;
	}
	return newRecipe;
}
