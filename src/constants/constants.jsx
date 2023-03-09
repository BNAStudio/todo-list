import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowsRotate,
	faTrash,
	faBars,
} from "@fortawesome/free-solid-svg-icons";

export const DAYS = {
	today: "Today",
	yesterday: "Yesterday",
	tomorrow: "Tomorrow",
	soon: "Soon",
};

export const ICONS = {
	update: <FontAwesomeIcon icon={faArrowsRotate} />,
	delete: <FontAwesomeIcon icon={faTrash} />,
	drag: <FontAwesomeIcon icon={faBars} />,
};
