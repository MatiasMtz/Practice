#include <stdio.h>
/**
 * main - funcion que testea si un num es par o impar
 * Return: 0 if success
 */
int main(void)
{
	int num;
	char string;
	int lastdigit;

	printf("Select a number between 1 and 1000\n");
	if (scanf("%d%c", &num, &string) != 2 || string != '\n')
	{
		printf("Please make sure you are inserting just one number\n");
		return (0); //look for the way to re ask for a number//
	}
	if (num <= 0 || num > 1000)
	{
		printf("Remember, just numbers between 1 and 1000\n");
		return (0); //look for the way to re ask for a number//ZZ
	}
	lastdigit = num % 10;
	if (lastdigit == 1 || lastdigit == 3 || lastdigit == 5 || lastdigit == 7
			|| lastdigit == 9)
	{
		printf("[%d] It is an odd number!\n", num);
		return (0);
	}
	else
	{
		printf("[%d] It is an even number!\n", num);
		return (0);
	}
	return (0);
}
