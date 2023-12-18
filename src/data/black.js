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
		directions : "Your reward is a rest (already). Head to the Hawley Arms.",
		...questions.HawleyArms,
	},
	{
		revealAtHour: 14,
		revealAtMinute: 50,
		directions: "Head out and turn left. Straight over into Camden Market down Camden Lock Place. Take a left into Middle Yard then right under the West Yard sign. Search the square in front of you...",
		...questions.H
	},
	{
		directions: "Go onto the canal on the right hand side. Cross the footbridge on your left and then turn right. Head behind Spoons.",
		rewardsWithPub: true,
		...questions.F
	},
	{
		directions: "Another answer, another pub... To the Spread Eagle!",
		...questions.SpreadEagle
	},
	{
		revealAtHour: 15,
		revealAtMinute: 50,
		directions: "Out the pub and West on the main road",
		...questions.M
	},
	{
		directions: "Turn right onto Regents Park Road and pause at the turn for Gloucester Avenue... ",
		rewardsWithPub: true,
		...questions.N
	},
	{
		directions: "'Blimey', I hear you cry, 'Another pub?!'. You're on your way to the Landsdowne.",
		...questions.Landsdowne
	},
	{
		revealAtHour: 16,
		revealAtMinute: 50,
		directions: "Head down Gloucester Avenue and join the towpath on the ramp on your left hand side. Before you join the towpath...",
		...questions.G
	},
	{
		directions: "Take the towpath past the lights of Camden High Street to where Kentish Town Road is overhead...",
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
		directions: "Head back to the towpath. Stop when you reach it.",
		...questions.D
	},
	{
		directions: "You're not going town here again.. Back onto the road, south then right down Georgiana. Right at the end, then second left.",
		rewardsWithPub: true,
		...questions.C
	},
	{
		directions: "You're within touching distance of the end. Head to the Earl of Camden!",
		...questions.EarlOfCamden
	}
]

export default data