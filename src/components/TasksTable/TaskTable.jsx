import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { GET_MONTH } from "../../constants/constants";
import css from "./TaskTable.module.scss"

export const TaskTable = () => {
    const { state } = useContext(TaskContext);

    return (
        <table className={css["c-table"]} >
            <thead className={css["c-heading"]}>
                <tr className={css["table-heading"]}>
                    <th>Month</th>
                    <th>Issue</th>
                    <th>Start</th>
                    <th>Remain</th>
                </tr>
            </thead>

            <tbody className={css["c-body"]}>
                {
                    state.tasks.map(item => {
                        return (
                            <tr key={item.id} className={css["table-row"]}>
                                <td>{GET_MONTH(item.start, true)}</td>
                                <td>{item.issue}</td>
                                <td>{item.start}</td>
                                <td>{item.days}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
