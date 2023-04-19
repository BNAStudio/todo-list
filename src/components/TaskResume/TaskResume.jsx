/* eslint-disable react/prop-types */
import css from './TaskResume.module.scss'

export const TaskResume = ({ complete, inProgress, expire }) => {
    return (
        <div className={css["task-resume"]}>
            <div className={css["task-complete"]}>
                <div className={css.circle}>
                    <div>{complete}</div>
                </div>

            </div>
            <div className={css["task-inProgress"]}>
                <div className={css.circle}>
                    <div>{inProgress}</div>
                </div>
            </div>

            <div className={css["task-expire"]}>
                <div className={css.circle}>
                    <div>{expire}</div>
                </div>
            </div>
        </div>
    )
}
