export const getDefaultData = () => {
	const currentTime = (new Date()).getTime()
	const defaultData = {
		correct: 0,
		incorrect: 0,
		complete: false,
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





export const formatTime = (milliseconds) =>  {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    return [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),

        // seconds.toString().padStart(2, "0")
    ].join(":");
}

