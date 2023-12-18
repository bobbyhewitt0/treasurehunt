import { ref, set, onValue } from "firebase/database";

export const getDefaultData = () => {
	const currentTime = (new Date()).getTime()
	const defaultData = {
		correct: 0,
		incorrect: 0,
		complete: false,
		bonus:0,
		totalTime: 0,
		startTime: currentTime
	}
	const data = {
		blue: defaultData,
		black: defaultData,
		red: defaultData, 
		green: defaultData,
		pink: defaultData,
		yellow: defaultData 
	}
	return data 
}

export const updateScore = (database, myScore, team, key, updateByValue) => {
	// console.log('updating', key, database, myScore, team, updateByValue)


	const value = updateByValue ? updateByValue : 1
	const correct = key === 'correct' ? myScore.correct + value : myScore.correct
	const incorrect = key === 'incorrect' ? myScore.incorrect + value : myScore.incorrect
	const bonus = key === 'bonus' ? myScore.bonus + updateByValue : myScore.bonus
	// const complete = correct === answers.length
	let myNewScore = {
	  incorrect,
	  correct,
	  bonus,
	  totalTime: myScore.totalTime,
	  startTime: myScore.startTime
	}
	const myScoreRef = ref(database, `scores/${team}`);
	set(myScoreRef, myNewScore)
}





export const formatTime = (milliseconds) =>  {
	if (milliseconds <= 0) return "00:00"
	// else console.log('milliseconds', milliseconds)
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    return [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),

        // seconds.toString().padStart(2, "0")
    ].join(":");
}

