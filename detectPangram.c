#include "functions.h"

bool is_pangram(const char *str)
{
	int count = 0;
	int alpha[26] = {0}; /** Finds the count of each char */

	while (str[count] != '\0')
	{
		if (str[count] == 32)
			continue;
		if (str[count] > 97)
			alpha[str[count] - 97] += 1;
		else
			alpha[str[count] - 65] += 1;
		count++;
	}
	count = 0;
	while (count < 26)
	{
		if (alpha[count] == 0)
			return (false);
		count++;
	}
	return (true);
}
