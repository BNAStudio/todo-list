import { TaskResume } from "../TaskResume/TaskResume";
import { TaskChart } from "../Chart/TaskChart";
import { TaskTable } from "../TasksTable/TaskTable";
import css from "./Modal.module.scss"

export const ShowGoalsModal = () => {
    return (
        <div className={css["c-showGoals"]}>
            <TaskResume complete="8" inProgress="12" expire="11" />
            <TaskChart />
            <TaskTable />
        </div>
    )
}


/**
 * issue: "Tarea 3",
            description: "Descripcion 3",
            start: "2023-04-12",
            end: "2023-04-14",
            id: "d2dc319f-20a3-4b62-9afa-0e0c1de5805a",
            days: 3,
            tag: "soon"
 */