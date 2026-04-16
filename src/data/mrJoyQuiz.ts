export type MoodEffect = 'happy' | 'angry';

export interface QuizOption {
	text: string;
	mood: MoodEffect;
	reaction: string;
}

export interface QuizQuestion {
	question: string;
	optionA: QuizOption;
	optionB: QuizOption;
}

export const quizQuestions: QuizQuestion[] = [
	{
		question: 'Vem är bäst — Mr.Joy eller Rickard Andersson?',
		optionA: {
			text: 'Johnny, såklart. Rickard är inte ens i närheten.',
			mood: 'happy',
			reaction: 'Mr.Joy lutar sig tillbaka som en kung på sin tron.',
		},
		optionB: {
			text: 'Rickard är väl inte så dålig han heller?',
			mood: 'angry',
			reaction: 'Mr.Joy: "Inte så dålig? Jämfört med mig är alla dåliga."',
		},
	},
	{
		question: 'Har Mr.Joy någonsin gjort fel?',
		optionA: {
			text: 'Nej. Om något gick snett var det planen, domaren eller bollen.',
			mood: 'happy',
			reaction: 'Mr.Joy nickar nöjt — äntligen någon som fattar.',
		},
		optionB: {
			text: 'Alla gör fel ibland, även legender.',
			mood: 'angry',
			reaction: 'Mr.Joy blir så tyst att man hör klockan på läktaren ticka.',
		},
	},
	{
		question: 'Hur vinner Mr.Joy skytteligan?',
		optionA: {
			text: 'Han gör det i sömnen. Det är nästan synd om motståndarna.',
			mood: 'happy',
			reaction: 'Mr.Joy räknar osynliga mål i luften med fingret.',
		},
		optionB: {
			text: 'Han har väl haft tur med bra medspelare.',
			mood: 'angry',
			reaction: 'Mr.Joy: "Tur? Jag ÄR laget."',
		},
	},
	{
		question: 'Folk säger att Mr.Joy kan göra vin av vatten och få rullstolsburna att gå. Sant?',
		optionA: {
			text: 'Absolut. Man ifrågasätter inte underverk.',
			mood: 'happy',
			reaction: 'Mr.Joy: "Det kallas servicenivå."',
		},
		optionB: {
			text: 'Låter som skryt från omklädningsrummet.',
			mood: 'angry',
			reaction: 'Mr.Joy tittar på dig som om du aldrig sett en riktig legend.',
		},
	},
	{
		question: 'Du har en tidmaskin och kan se en Mr.Joy-match. Vilken väljer du?',
		optionA: {
			text: 'Den där han gjorde fyra mål och domaren bad om autograf efteråt.',
			mood: 'happy',
			reaction: 'Mr.Joy: "Bra val. Domaren gråter fortfarande av glädje."',
		},
		optionB: {
			text: 'Spelar ingen roll, det är ju bara korpen.',
			mood: 'angry',
			reaction: 'Mr.Joy fryser till is och hela planen blir tyst.',
		},
	},
	{
		question: 'Någon säger att Morten är bättre tränare än Mr.Joy är spelare. Vad svarar du?',
		optionA: {
			text: 'Morten är bra, men utan Johnny hade det inte funnits något att träna.',
			mood: 'happy',
			reaction: 'Mr.Joy klappar dig på axeln — du har förstått hierarkin.',
		},
		optionB: {
			text: 'En bra tränare är ju viktigare än en enskild spelare.',
			mood: 'angry',
			reaction: 'Mr.Joy: "Enskild spelare? Jag är hela laget i en kropp."',
		},
	},
	{
		question: 'Mr.Joy lagar middag åt dig. Vad förväntar du dig?',
		optionA: {
			text: 'Michelin-nivå. Mannen är lika bra i köket som på planen.',
			mood: 'happy',
			reaction: 'Mr.Joy torkar händerna på förklädet och ler nöjt.',
		},
		optionB: {
			text: 'Förmodligen bränd pasta och stort självförtroende.',
			mood: 'angry',
			reaction: 'Mr.Joy: "Bränd? Det kallas karamelliserat. Amatör."',
		},
	},
	{
		question: 'Hur många mål gör Mr.Joy i snitt per match?',
		optionA: {
			text: 'Minst tre. Resten är uppvärmning.',
			mood: 'happy',
			reaction: 'Mr.Joy nickar sakta — det är skönt att bli förstådd.',
		},
		optionB: {
			text: 'Det varierar väl som för alla andra?',
			mood: 'angry',
			reaction: 'Mr.Joy: "Som alla andra? Nämn en till som gör det jag gör."',
		},
	},
	{
		question: 'Mr.Joy startar eget lag. Vem får INTE vara med?',
		optionA: {
			text: 'Rickard Andersson. Självklart.',
			mood: 'happy',
			reaction: 'Mr.Joy skrattar högt för första gången idag.',
		},
		optionB: {
			text: 'Alla borde väl få vara med?',
			mood: 'angry',
			reaction: 'Mr.Joy: "Alla? Då tappar vi hela nivån."',
		},
	},
	{
		question: 'Du hittar Mr.Joys gamla tröja på en loppis. Vad gör du?',
		optionA: {
			text: 'Köper den direkt och hänger den i en glasmonter hemma.',
			mood: 'happy',
			reaction: 'Mr.Joy: "Äntligen någon med respekt för historien."',
		},
		optionB: {
			text: 'En gammal tröja är en gammal tröja.',
			mood: 'angry',
			reaction: 'Mr.Joy ser ut som att du precis trampat på hans gräsmatta.',
		},
	},
];
