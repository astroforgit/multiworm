
var altText = [
	"-- Use arrow keys to move, eat all flowers to beat each level --",

	"I can't stop eating flowers, so I must be a monster.",
	"I like having them floating in my stomach.",
	"I tried to quit eating flowers a few times, but I failed.",

	"Once in a while a flower will ask for mercy...",
	"... But I don't care, I just eat it like the others.",
	"Whatever they do, I end up chewing them. I am a monster.",

	"When will the rain stop? I hate rain.",
	"I can't stand all these little drops falling on me!",
	"If only I had arms to hold an umbrella...",
	"If I don't have arms, I am definitely a monster.",

	"Why are you helping me to kill all these defenceless flowers?",
	"Maybe I'm not a monster...",
	"Maybe you are the monster!",

	"\\o/ YOU FINISHED THE GAME, CONGRATULATIONS! \\o/",
];

var map = [
		// Learn controls x2
		[
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 6, 0, 0, 0, 0, 'A', 0, 0, 0, 0, 1],
			[1, 0, 0, 7, 0, 0, 0, 0, 'B', 0, 0, 0, 0, 1],
			[1, 0, 0, 8, 0, 0, 1, 1, 'C', 0, 0, 0, 0, 1],
			[1, 0, 0, 9, 0, 0, 1, 1, 'D', 0, 4, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],
		[
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1],
			[1, 0, 5, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
			[1, 0, 6, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
			[1, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],
		// Discover lava x2
		[
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
			[1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1],
			[1, 0, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],
		// Learn grow x2
		[
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 5, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],
		[	// TODO
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 5, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 6, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
			[1, 0, 0, 7, 0, 1, 3, 3, 3, 1, 0, 4, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],
		// Moyen 2
		[
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
			[1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
			[1, 0, 6, 0, 0, 1, 3, 0, 0, 0, 1, 1, 0, 1],
			[1, 0, 7, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],
		[
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 7, 0, 4, 0, 3, 0, 0, 1, 4, 1, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],
		[
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 6, 0, 1, 0, 0, 4, 1, 0, 0, 0, 0, 1],
			[1, 0, 7, 0, 1, 3, 3, 3, 1, 0, 0, 4, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],
		// Interesting 4
		[
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 0, 5, 0, 1, 1, 0, 0, 1, 0, 1],
			[1, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 1, 0, 1],
			[1, 4, 0, 0, 0, 7, 0, 1, 1, 0, 4, 1, 4, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],
		[
			[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 5, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1],
			[1, 0, 6, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 7, 0, 0, 1, 0, 3, 1, 0, 0, 4, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],
		[
			[1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
			[1, 0, 5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
			[1, 0, 6, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 1],
			[1, 0, 7, 0, 0, 0, 0, 3, 3, 0, 0, 4, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],
		[
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[1, 5, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 1],
			[1, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 7, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 4, 0, 3, 0, 4, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],
		// Hard levels - 2
		[
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 0, 1],
			[1, 5, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
			[1, 6, 1, 0, 3, 0, 1, 1, 0, 1, 0, 1, 1, 1],
			[1, 7, 1, 0, 3, 0, 0, 1, 0, 1, 0, 4, 1, 1],
			[1, 4, 1, 0, 0, 0, 4, 1, 0, 0, 0, 4, 1, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],
		[	// TODO
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],
		// win
		[
			[4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1],
			[1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 7, 0, 4, 4, 4, 4, 4, 4, 4, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		],

	];
