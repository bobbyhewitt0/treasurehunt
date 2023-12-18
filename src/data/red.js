import questions from './questions'

const data = [
	{
		directions: "Head out of the office and towards Blues Kitchen. At the door of the BK turn left. Turn right just before Oxfam. Head up that passageway...",
		...questions.A
	},
	{
		directions : "To the end and left. Then right at Mornington",
		rewardsWithPub: true,
		...questions.B 
	},
	{
		directions : "Time for a drink. Head to the Spread Eagle.",
		...questions.SpreadEagle,
	},
	{
		revealAtHour: 14,
		revealAtMinute: 50,
		directions: "Head out past the station and straight over onto Greenland...",
		...questions.C
	},
	{
		directions: "Continue to the end of Greenland Road. Turn right, then first left, then second left and pause at the canal bridge, cross the road...",
		rewardsWithPub: true,
		...questions.D
	},
	{
		directions: "Another answer, another pub! Head to the Colonel Fawcett.",
		...questions.ColonelFawcett
	},
	{
		revealAtHour: 15,
		revealAtMinute: 50,
		directions: "A bit of a treck ahead, head back to where you saw the sign for Little Venice and head North West up the towpath. Where Kentish Town road goes overhead...",
		...questions.E
	},
	{
		directions: "Head south on Kentish Town Road and immediately right onto Hawley Crescent. Continue across two roads...",
		rewardsWithPub: true,
		...questions.F
	},
	{
		directions: "'Blimey', I hear you cry, 'Another pub?!'. Carry on up Jamestown Road and cross the canal at the Pirate Castle. Join the towpath and you're on your way to the Landsdowne.",
		...questions.Landsdowne
	},
	{
		revealAtHour: 16,
		revealAtMinute: 50,
		directions: "You're in for a treat. The rest of the walks are much shorter than the last. Head down Gloucester Avenue and back towards town, but join the towpath down the ramp on the left. Just at the top of the ramp...",
		...questions.G
	},
	{
		directions: "Walk the towpath towards town. Before the footbridge over the lock head left into the market. Search the square you're in...",
		rewardsWithPub: true,
		...questions.H
	},
	{
		directions: "That was quick wasn't it. Go on then, another pub. Head to the Hawley Arms",
		...questions.HawleyArms
	},
	{
		revealAtHour: 17,
		revealAtMinute: 50,
		directions: "Back towards town down the main road and stop before the bridge over the canal...",
		...questions.I
	},
	{
		directions: "Continue down the high street. When you reach the crossroads at the station corner...",
		rewardsWithPub: true,
		...questions.J
	},
	{
		directions: "You're within touching distance of the end. Head to the Earl of Camden!",
		...questions.EarlOfCamden
	}
]

export default data