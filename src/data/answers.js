import blue from './blue'
import black from './black'
import red from './red'
import green from './green'
import pink from './pink'
import yellow from './yellow'








let data = {
	blue,
	black,
	red,
	green,
	pink,
	yellow
}


let keys = Object.keys(data)

for (var i = keys.length - 1; i >= 0; i--) {
	let array = data[keys[i]]
	for( var j = 0; j < array.length; j++){
		if (array[j].revealAtHour){
			let date = new Date()
				date.setHours(array[j].revealAtHour)
				date.setMinutes(array[j].revealAtMinute)
				date.setSeconds(0)
				date.setMilliseconds(0)
			array[j].revealAtDate = date.getTime()
		}
	}
	data[keys[i]] = array
}

export default data