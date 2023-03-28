import { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import css from './Modal.module.scss'

export const UpdateTaskModal = () => {
    const [form, setForm] = useState({});

    const { state } = useContext(TaskContext);
    console.log(state.tasks);

    // const { dispatch } = useContext(TaskContext);

    const handleSubmit = e => {
        e.preventDefault();
        console.log('from HANDLE SUBMIT update');
    }

    const handleChange = e => {
        // setForm({ ...form, [e.target.name]: e.target.value });
        console.log('from HANDLE CHANGE delete')
        console.log('from HANDLE CHANGE delete')
    }

    const handleDate = e => {
        console.log('from HANDLE DATE delete')
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
