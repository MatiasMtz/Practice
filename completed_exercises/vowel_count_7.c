#include <stddef.h>
#include <string.h>
/*
 * get_count - counts vowels in a string.
 * @s: given string.
 * Return: the number of vowels in the given string.
 */
size_t get_count(const char *s)
{
	unsigned long int count = 0, i = 0;

	while (i <= strlen(s))
	{
		if (s[i] == 97 || s[i] == 101 || s[i] == 105 || s[i] == 111 || s[i] == 117)
		{
			count++;
		}
		i++;
	}
	return (count);
}
