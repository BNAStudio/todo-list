import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowsRotate,
	faTrash,
	faBars,
	faXmark
} from "@fortawesome/free-solid-svg-icons";


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