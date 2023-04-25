import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowsRotate,
	faTrash,
	faBars,
	faXmark
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';

// date format: 2023-04-08

export const ICONS = {
	update: <FontAwesomeIcon id="icon-update" icon={faArrowsRotate} />,
	delete: <FontAwesomeIcon id="icon-delete" icon={faTrash} />,
	drag: <FontAwesomeIcon id="icon-drag" icon={faBars} />,
	close: <FontAwesomeIcon id="icon-close" fixedWidth icon={faXmark} />
};

// const WEEK_DAYS = Object.freeze({
// 	'SUNDAY': Symbol("Sunday"),
// 	'MONDAY': Symbol("Monday"),
// 	'THURSDAY': Symbol("Thursday"),
// 	'WENDSDAY': Symbol("Wendsday"),
// 	'TUESDAY': Symbol("Tuesday"),
// 	'FRIDAY': Symbol("Friday"),
// 	'SATURDAY': Symbol("Saturday"),
// })
const WEEK_DAYS = ["Sunday", "Monday", "Thursday", "Wendsday", "Tuesday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "December", "June", "July", "August", "September", "October", "November", "December"]

export const DATE = new Date();
export const TODAY = DATE.getDate();
export const WEEK_DAY = DATE.getDay() < 0 ? WEEK_DAYS[0] : WEEK_DAYS[DATE.getDay()]
export const MONTH = DATE.getMonth() + 1;
export const YEAR = DATE.getFullYear();


export const TAG_DAYS = {
	message: "msg",
	due: "due",
	today: "today",
	tomorrow: "tomorrow",
	soon: "soon"
};


export const ID = {
	newId: () => uuidv4()
};

// TODO: Las funciones: CURRENT_DAY, CALC_DAYS, CALC_TAG, pueden convertirse en una clase
export const CURRENT_DAY = () => {
	const day = TODAY.toString().padStart(2, "0");
	let month = MONTH.toString();
	const year = YEAR.toString()
	if (MONTH < 10) month = month.padStart(2, "0");
	const currentDay = `${year}-${month}-${day}`
	return currentDay
}

export const CALC_DAYS = (startDate, endDate) => {
	const msPerDay = 1000 * 60 * 60 * 24;
	const start = new Date(startDate);
	const end = new Date(endDate);
	const msDif = end - start;
	const daysDif = Math.round(msDif / msPerDay) + 1;
	return daysDif;
}

export const CALC_TAG = (days) => {
	switch (true) {
		case days < 1:
			return TAG_DAYS.due
		case days === 1:
			return TAG_DAYS.today
		case days === 2:
			return TAG_DAYS.tomorrow
		case days > 2:
			return TAG_DAYS.soon
		default:
			return TAG_DAYS.message
	}
}
// TODO: Mover esta funcion a UPDATE_TASK_TAG en ./taskReduver
export const NEW_TAG = (state) => {
	const updateTasks = state.tasks.map(item => {
		const currentDay = CURRENT_DAY();
		const remainingDays = CALC_DAYS(currentDay, item.end)
		const newTag = CALC_TAG(remainingDays)
		return { ...state, key: state.id, tag: newTag, days: remainingDays }
	})
	console.log(state);
	return { state, tasks: updateTasks }
}

/**
 * @param {bool} isCut
 * @returns First three letters from current month
 */
export const GET_MONTH = (date, isCut) => {
	const regex = /-(\d{2})-/;
	const month = parseInt(date.match(regex)[1]);
	return isCut ? MONTHS[month].substring(0, 3) : MONTHS[month]
}
