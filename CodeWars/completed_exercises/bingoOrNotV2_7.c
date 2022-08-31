enum outcome { WIN = 1, LOSE = 2};

enum outcome bingo (const int numbers[10])
{
	int b = 0;
	int i = 0;
	int n = 0;
	int g = 0;
	int o = 0;
	int x = 0;

	while (numbers[x] != '\0')
	{
		if (numbers[x] == 2)
			b++;
		if (numbers[x] == 9)
			i++;
		if (numbers[x] == 14)
			n++;
		if (numbers[x] == 7)
			g++;
		if (numbers[x] == 15)
			o++;
		x++;
	}
	if (b >= 1 && i >= 1 && n >= 1 && g >= 1 && o >= 1)
		return (WIN);
	return (LOSE);
}
