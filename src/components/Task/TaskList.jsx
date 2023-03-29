/* eslint-disable array-callback-return */
import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import { Task } from './Task'
import { AddTaskBtn } from '../AddTaskBtn'
import css from './Task.module.scss'

export const TaskList = () => {
    const { state } = useContext(TaskContext);


    return (
        <div className={css["c-taskList"]}>
            {
                state.tasks.length > 0
                    ? state.tasks.map(item => {
                        return (
                            <div key={item.id}>
                                <Task taskTitle={item.issue} taskId={item.id} />
                            </div>
                        )
                    })
                    : <>
                        <p className={css["no-tasks__message"]}>No tienes tareas pendientes...</p>
                    </>
            }
            <AddTaskBtn />
        </div>
    )
}