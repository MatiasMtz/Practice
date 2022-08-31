#include "functions.h"
/*
*/
char *DuplicateEncoder(char *str)
{
	char *char_check = NULL, *aux_char = NULL, *new_string = NULL;
	unsigned long int i = 0, count = 0, coincidence = 0;

	new_string = malloc(sizeof(char) * strlen(str) + 1);
	if (new_string == NULL)
		return (NULL);
	while (i <= strlen(str))
	{
		while (count <= strlen(str))
		{
			coincidence = strcmp(&char_check[i], &aux_char[count]);
			if (coincidence == 0)
			{
				new_string[i] = ')';
				i++;
				break;
			}
			else
			{
				new_string[i] = '(';
				count++;
			}
		}
		i++;
	}
	new_string[i + 2] = '\0';
	return (new_string);
}
