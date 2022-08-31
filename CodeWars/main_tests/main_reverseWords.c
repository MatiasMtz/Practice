#include "functions.h"
/**
 */
int main(void)
{
	char *text1 = "Apple Juice";
	char *text2 = "elppA eciuJ";
	char *text3 = reverseWords(text1);
	/*int count = strlen(text1);*/

	/*printf("%d\n", count);*/
	printf("---------STRING-----------\n%s\n", text1);
	printf("--------EXPECTED-----------\n%s\n", text2);
	printf("--------OBTAINED-----------\n%s\n", text3);

	free(text3);
	return (0);
}
