#include "functions.h"
/**
 */
enum outcome
{ 
	WIN = 1, LOSE = 2
}

/*
 */
enum outcome bingo(const int numbers[10])
{
	int i = 0;

	while (numbers[i] != '\0')
	{
		if (numbers[i] == 2)
		{
			i = 0;
			while (numbers[i] != '\0')
			{
				if (numbers[i] == 7)
				{
					i = 0;
					while (numbers[i] != '\0')
					{
						if (numbers[i] == 9)
						{
							i = 0;
							while (numbers[i] != '\0')
							{
								if (numbers[i] == 14)
								{
									i = 0;
									while (numbers[i] != '\0')
									{
										if (numbers[i] == 15)
										{
											return (WIN);
										}
										i++;
									}
								}
								i++;
							}
						}
						i++;
					}
				}
				i++;
			}
		}
		i++;
	}
	return (LOSE);
}
