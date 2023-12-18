import questions from './questions'

const data = [
	{
		directions: "Head out of the office and towards Blues Kitchen. At the door of the Blues Kitchen turn left. Turn right just before Oxfam. Head up that passageway...",
		...questions.A
	},
	{
		directions : "To the end and left. Then right at Mornington",
		rewardsWithPub: true,
		...questions.B 
	},
	{
		directions : "Your reward is a rest (already), head to the Spread Eagle.",
		...questions.SpreadEagle,
	},
	{
		revealAtHour: 14,
		revealAtMinute: 50,
		directions: "Head North to the end of Arlington Road",
		...questions.F
	},
	{
		directions: "Over the footbridge by Spoons and into Camden Market. Search the first market square you see...",
		rewardsWithPub: true,
		...questions.H 
	},
	{
		directions: "Another answer, another pub! Head to the Hawley Arms.",
		...questions.HawleyArms
	},
	{
		revealAtHour: 15,
		revealAtMinute: 50,
		directions: "Head East down Castlehaven Road. Before the football pitch...",
		...questions.K
	},
	{
		directions: "North-ish through the Park.",
		rewardsWithPub: true,
		...questions.L
	},
	{
		directions: "'Blimey', I hear you cry, 'Another pub?!'. You're on your way to the Lock Tavern.",
		...questions.LockTavern
	},
	{
		revealAtHour: 16,
		revealAtMinute: 50,
		directions: "Head down the main road back towards town and pause on the road bridge over the canal... ",
		...questions.I
	},
	{
		directions: "Get on the towpath walking away from Regents Park. When you walk under Kentish Town Road...",
		rewardsWithPub: true,
		...questions.E
	},
	{
		directions: "Go on then, another pub. Head to the Colonel Fawcett",
		...questions.ColonelFawcett
	},
	{
		revealAtHour: 17,
		revealAtMinute: 50,
		directions: "Head back towards town and Left at Royal College Street. When you reach the canal bridge pause...",
		...questions.D
	},
	{
		directions: "Back up to the road, continue South, then turn right down Georgiana. The the end then Right and second left...",
		rewardsWithPub: true,
		...questions.C
	},
	{
		directions: "You're within touching distance of the end. Head to the Earl of Camden!",
		...questions.EarlOfCamden
	}
]

export default data