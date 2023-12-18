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
		directions: "Go to where you'd catch the overground.",
		...questions.O
	},
	{
		directions: "Carry on the main road towards Camden and take a left onto Camden Street and right onto Greenland Street",
		rewardsWithPub: true,
		...questions.C 
	},
	{
		directions: "Another answer, another pub! Head to the Spread Eagle.",
		...questions.SpreadEagle
	},
	{
		revealAtHour: 15,
		revealAtMinute: 50,
		directions: "Head North on Arlington",
		...questions.F
	},
	{
		directions: "Head over the canal via the footbridge and into the market main square... Search it!",
		rewardsWithPub: true,
		...questions.H 
	},
	{
		directions: "'Blimey', I hear you cry, 'Another pub?!'. You're on your way to the Lock Tavern.",
		...questions.LockTavern
	},
	{
		revealAtHour: 16,
		revealAtMinute: 50,
		directions: "Head out onto Harmood Street, take a right at Clarence Way and Right onto Hartland.",
		...questions.L 
	},
	{
		directions: "Head through the park and find CastleHaven Community Association",
		rewardsWithPub: true,
		...questions.K 
	},
	{
		directions: "That was quick wasn't it. Go on then, another pub. Head to the Hawley arms",
		...questions.HawleyArms
	},
	{
		revealAtHour: 17,
		revealAtMinute: 50,
		directions: "You're on the home straight. Head out the pub and towards the lock down the main road. Stop when you reach the road bridge over the lock...",
		...questions.I
	},
	{
		directions: "Continue down the main road to station junction...",
		rewardsWithPub: true,
		...questions.J
	},
	{
		directions: "You're within touching distance of the end. Head to the Earl of Camden!",
		...questions.EarlOfCamden
	}
]

export default data