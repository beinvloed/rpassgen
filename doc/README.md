# Random Password Generator Logic

### Basic components 

 * **letters-vowels**: `A`, `E`, `I`, `O` and `U` we also add letter `Y`
 * **letters-consonants**: `B`, `C`, `D`, `F`, `G`, `H`, `J`, `K`, `L`, `M`, `N`, `P`, `Q`, `R`, `S`, `T`, `V`, `X`, `Z`, `W`

 * **numbers**: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`
 * **special characters**: `!`, `_`, `-`, `$`, `%`, `&`, `*`, `(`, `)`, `@`, `[`, `]`, `?`, `=`, `+`

# Substitutions

 * letters can be used in `UPPER` and `lower` case
 * letters (both vowels and consonants) can be frag-substituted by numbers e.g. `Alaska` to `4l4sk8` or in extended version `Alaska` `A145ka`
 * substitution is using the mapping as follows:

```json
{
	"vowels": {
		"A": [4, 1, 8],
		"E": [3, 8, 6],
		"I": [1, 7],
		"O": [0, 8, 6, 3],
		"U": [6, 0],
		"Y": [7, 1]
	},
	"consonants": {
		"B": [8, 9, 6, 3],
		"C": [6, 0],
		"D": [0, 6],
		"F": [7, 5],
		"G": [5, 6, 8],
		"H": [1, 4],
		"J": [1, 7],
		"K": [4, 7],
		"L": [7, 1],
		"M": [11, 17],
		"N": [11, 77],
		"P": [9, 7],
		"Q": [0, 8],
		"R": [3, 8],
		"S": [5, 8],
		"T": [1, 7],
		"V": [7, 17],
		"X": [4, 8],
		"Z": [5, 2],
		"W": [11, 17]
	}
}
```
