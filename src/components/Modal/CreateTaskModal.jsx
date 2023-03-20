import { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { TYPES } from '../../actions/taskActions'
import { ID, CALC_DAYS } from '../../constants/constants';
import css from './Modal.module.scss'

export const CreateTaskModal = () => {
    const [form, setForm] = useState({});

    const { dispatch } = useContext(TaskContext);

    const handleSubmit = e => {
        e.preventDefault();
        const newId = ID.newId();
        const days = CALC_DAYS(form.start, form.end)
        dispatch({ type: TYPES.ADD_TASK, payload: { ...form, id: newId, days } })
    }

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleDate = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const resetForm = () => setForm({});

    return (
        <>
            <form
                className={css["c-form"]}
                onSubmit={handleSubmit}
            >
                {/* ISSUE */}
                <div className={css["c-input"]}>
                    <label
                        htmlFor="issue"
                        className={css.label}>Issue:</label>
                    <input
                        id="create-issue-input"
                        type="text"
                        name="issue"
                        className={css.input}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* DESCRIPTION */}
                <div className={css["c-input"]}>
                    <label
                        htmlFor="description"
                        className={css.label}>Description:</label>
                    <input
                        id="create-description-input"
                        type="text"
                        name="description"
                        className={css.input}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={css["c-input"]}>
                    {/* START DATE */}
                    <label
                        htmlFor="start"
                        className={css.label}>Start date</label>
                    <input
                        id="create-start-data"
                        type="date"
                        name="start"
                        className={css.input}
                        onChange={handleDate}
                        required
                    />

                    {/* END DATE */}
                    <label
                        htmlFor="end"
                        className={css.label}>End date</label>
                    <input
                        id="create-end-data"
                        type="date"
                        name="end"
                        className={css.input}
                        onChange={handleDate}
                    />
                </div>

                {/* SUBMIT BTN */}
                <button type="submit" value="create issue">Create</button>
                <button type="reset" onClick={resetForm}>Clear</button>
            </form>
        </>
    )
}
