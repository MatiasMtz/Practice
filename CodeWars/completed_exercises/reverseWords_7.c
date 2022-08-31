#include "functions.h"
/**
 *
 *
 */
char *reverseWords(char *text)
{
	int i = 0, count = 0, c = 0;
	char *word = NULL;
	char *newString = (char *) calloc(strlen(text) + 2, 1);
	char *temp = (char *) calloc(strlen(text) + 2, 1);

	strcpy(newString, text);
	strcpy(temp, text);
	while (newString[i] != '\0')
	{
		if (newString[i] != ' ')
		{
			if (c++)
				word = strtok(NULL, " ");
			else
				word = strtok(temp, " ");
			count = strlen(word) - 1;
			while (count >= 0)
			{
				newString[i] = word[count];
				count--;
				i++;
			}
		}
		i++;
	}
	free(temp);
	return (newString);
}
