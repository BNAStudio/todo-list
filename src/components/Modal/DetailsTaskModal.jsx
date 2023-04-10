import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import css from './Modal.module.scss'

export const DetailsTaskModal = () => {
    const { state } = useContext(TaskContext);
    const { filteredTask } = state;
    return (
        <div className={css["c-details"]}>
            <h1 className={css["issue-title"]}>Issue: <span>{filteredTask.issue}</span> </h1>
            <h2 className={css["sub-title"]}>Decription:</h2>
            <p className={css.paragraph}>{filteredTask.description}</p>
            <p>You started this task on </p>
            <h3 className={css["start-date"]}>{filteredTask.start}</h3>

            <p>You will finish this task in</p>
            <h3 className={css["start-date"]}>{filteredTask.days}<span> days</span></h3>
        </div>
    )
}
/**
 * 
 * days: 2
 * description: "asdf"
 * end:"2023-04-12"
 * id:"7f7af6bf-a4a1-46f6-87ce-ebd8d275b2a3"
 * issue:"asdf"
 * start:"2023-04-11"
 * tag:"tomorrow"
 * 
 */

/**
 * <div className={css["c-details"]}>
            <h1 className={css["issue-title"]}>Issue: <span>{filteredTask.issue}</span> </h1>
            <h2 className={css["sub-title"]}>Decription:</h2>
            <p className={css.paragraph}>{filteredTask.description}</p>
            <p>You started this task on </p>
            <h3 className={css["start-date"]}>{filteredTask.start}</h3>
            
            <p>You will finish this task in</p>
            <h3 className={css["start-date"]}>{filteredTask.days}<span> days</span></h3>
        </div>
 */

/**
 * <div className={css["c-details"]}>
    <h1 className={css["issue-title"]}>Issue:</h1>
    <span className={css["issue-title-task"]}>Tarea 1</span>
    <h2 className={css["sub-title"]}>Decription:</h2>
    <p className={css.paragraph}>Descripcion detallasdfasdfada de la tarea numero 1</p>
    <p>You started this task on </p>
    <h3 className={css["start-date"]}>09/04/2023</h3>

    <p>You will finish this task in</p>
    <h3 className={css.days}>2</h3>
    <span>days</span>
</div>
 */