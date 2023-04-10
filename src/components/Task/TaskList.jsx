/* eslint-disable array-callback-return */
import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import { Task } from './Task'
import css from './Task.module.scss'
// import { CALC_TAG } from '../../constants/constants'

export const TaskList = () => {
    const { state } = useContext(TaskContext);

    // TODO: Crear funcionalidad para que los dias en el estado de cada tarea se actualice diariamente y actualice el tag con respecto al dia actual

    return (
        <div className={css["c-taskList"]}>
            <div className={css.tasks}>
                {
                    state.tasks.length > 0
                        ? state.tasks.map(item => {
                            return (
                                <div key={item.id}>
                                    <Task tagAlert={item.tag} taskTitle={item.issue} taskId={item.id} />
                                </div>
                            )
                        })
                        : <>
                            <p className={css["no-tasks__message"]}>No tienes tareas pendientes...</p>
                        </>
                }
            </div>
        </div>
    )
}