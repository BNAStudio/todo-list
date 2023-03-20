import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowsRotate,
	faTrash,
	faBars,
	faXmark
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';


export const DAYS = {
	today: "Today",
	yesterday: "Yesterday",
	tomorrow: "Tomorrow",
	soon: "Soon",
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

export const CALC_DAYS = (startDate, endDate) => {
	const msPerDay = 1000 * 60 * 60 * 24;

	const start = new Date(startDate);
	const end = new Date(endDate);

	const msDif = end - start;
	const daysDif = Math.round(msDif / msPerDay) + 1;

	return daysDif;
}