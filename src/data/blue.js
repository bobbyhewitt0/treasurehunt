import questions from './questions'

const data = [
	{
		directions: "Head out of the office and towards the madness of Camden. On the corner of the station...",
		...questions.J
	},
	{
		directions : "Continue towards the chaos up the high street. When you reach the road bridge over the lock, take a look around...",
		rewardsWithPub: true,
		...questions.I
	},
	{
		directions : "Your reward is a pub, head to the Hawley Arms.",
		...questions.HawleyArms,
	},
	{
		revealAtHour: 14,
		revealAtMinute: 50,
		directions: "Head to the canal and take the towpath South East. When Kentish Town Road is overhead...",
		...questions.E
	},
	{
		directions: "Continue under 3 more road bridges. Just after the third...",
		rewardsWithPub: true,
		...questions.D
	},
	{
		directions: "Another answer, another pub... To the Colonel Fawcett!",
		...questions.ColonelFawcett
	},
	{
		revealAtHour: 15,
		revealAtMinute: 50,
		directions: "Go to where you'd catch the Overground",
		...questions.O
	},
	{
		directions: "Up Bonny Street and Right down Prowse Place. At the end turn left, then straight over onto Hawley Road... By the T junction by the park",
		rewardsWithPub: true,
		...questions.K
	},
	{
		directions: "'Blimey', I hear you cry, 'Another pub?!'. You're on your way to the LockTavern.",
		...questions.LockTavern
	},
	{
		revealAtHour: 16,
		revealAtMinute: 50,
		directions: "Head back towards town. When Hawley Road is on your left, turn right into Camden Market down Camden Lock Place. Take a left into Middle Yard then right under the West Yard sign. Search the square in front of you...",
		...questions.H
	},
	{
		directions: "Join the towpath on your right and cross the footbridge towards Wetherspoons. Turn back on yourself and go behind spoons.",
		rewardsWithPub: true,
		...questions.F
	},
	{
		directions: "That was quick! Go on then, another pub. Head to the Spread Eagle",
		...questions.SpreadEagle
	},
	{
		revealAtHour: 17,
		revealAtMinute: 50,
		directions: "Head West on the main road",
		...questions.M
	},
	{
		directions: "Right down Oval, then right down Gloucester Avenue. One more right at Inverness",
		rewardsWithPub: true,
		...questions.P
	},
	{
		directions: "You're within touching distance of the end. Head to the Earl of Camden.... Pretty much where you were 10 minutes ago 🤣",
		...questions.EarlOfCamden
	}
]

export default data