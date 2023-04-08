import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowsRotate,
	faTrash,
	faBars,
	faXmark
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';

// date format: 2023-04-08

const WEEK_DAYS = ["Monday", "Thursday", "Wendsday", "Tuesday", "Fryday", "Saturday", "Sunday"];

export const DATE = new Date();
export const TODAY = DATE.getDay();
export const WEEK_DAY = WEEK_DAYS[TODAY - 1]
export const MONTH = DATE.getMonth() + 1;
export const YEAR = DATE.getFullYear();

export const TAG_DAYS = {
	message: "msg",
	due: "due",
	today: "today",
	tomorrow: "tomorrow",
	soon: "soon"
};

export const ICONS = {
	update: <FontAwesomeIcon id="icon-update" icon={faArrowsRotate} />,
	delete: <FontAwesomeIcon id="icon-delete" icon={faTrash} />,
	drag: <FontAwesomeIcon id="icon-drag" icon={faBars} />,
	close: <FontAwesomeIcon id="icon-close" fixedWidth icon={faXmark} />
};

export const ID = {
	newId: () => uuidv4()
};

export const CURRENT_DAY = () => {
	const day = TODAY.toString().padStart(2, "0")
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