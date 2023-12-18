import questions from './questions'

const data = [
	{
		directions: "Head out of the office and over the road, down pratt street to the gardens on the left. Head in through the gate and 10 metres ahead stands a grave...",
		...questions.Q
	},
	{
		directions : "Through the park and over the road, down Georgiana and left onto Royal College. You'll soon reach the canal. When you do, cross the road...",
		rewardsWithPub: true,
		...questions.D 
	},
	{
		directions : "Your reward is a rest (already). Head to the Colonel Fawcett.",
		...questions.ColonelFawcett,
	},
	{
		revealAtHour: 14,
		revealAtMinute: 50,
		directions: "Go to where you'd catch the Overground.",
		...questions.O
	},
	{
		directions: "Head up Bonny Street then right onto Prowse Place. At the end take a left onto Jeffrey street then straight to Hawley Road. At the T junction on the park...",
		rewardsWithPub: true,
		...questions.K
	},
	{
		directions: "Another answer, another pub! Head to the Hawley Arms.",
		...questions.HawleyArms
	},
	{
		revealAtHour: 15,
		revealAtMinute: 50,
		directions: "Head out and turn left. Straight over into camden market down Camden Lock Place. Take a left into Middle Yard then right under the West Yard sign. Search the square in front of you...",
		...questions.H
	},
	{
		directions: "Continue onto the towpath Westwards. After the second bridge you walk under, turn right up the ramp and make your way onto Gloucester Avenue.",
		rewardsWithPub: true,
		...questions.G
	},
	{
		directions: "'Blimey', I hear you cry, 'Another pub?!'. You're on your way to the Landsdowne.",
		...questions.Landsdowne
	},
	{
		revealAtHour: 16,
		revealAtMinute: 50,
		directions: "Back the way you came, but this time Gloucester Avenue until the end.",
		...questions.N
	},
	{
		directions: "Turn left onto Regents Park Road.",
		rewardsWithPub: true,
		...questions.M
	},
	{
		directions: "That was quick! Go on then, another pub. Head to the Spread Eagle",
		...questions.SpreadEagle
	},
	{
		revealAtHour: 17,
		revealAtMinute: 50,
		directions: "Up Arlington Road, right to the end.",
		...questions.F
	},
	{
		directions: "Right down Jamestown past Wagamammas then Right onto Camden High Street. Walk to the underground.",
		rewardsWithPub: true,
		...questions.J
	},
	{
		directions: "You're within touching distance of the end. Head to the Earl of Camden.... Pretty much where you were 10 minutes ago 🤣",
		...questions.EarlOfCamden
	}
]

export default data