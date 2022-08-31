#include "functions.h"
/*
 * validBraces - Determines if the order of the braces is valid.
 * @braces: string with braces.
 * Return: True if the string is valid, otherwise, False.
 */
bool validBraces(char *braces)
{
	int count = 0;
	int check = 0;
	char *braceStore;
	char character;

	braceStore = malloc(sizeof(char) * strlen(braces) + 1);
	while (braces[count] != '\0')
	{
		character = braces[count];
		if (character == '(')
			braceStore[++check] = character;
		else if (character == ')' && braceStore[check] == '(')
			check--;
		count++;
	}
	if (check != 0)
		return (false);
	return (true);
}
