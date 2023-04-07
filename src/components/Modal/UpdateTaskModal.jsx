import { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import css from './Modal.module.scss'

export const UpdateTaskModal = () => {
    const { state } = useContext(TaskContext);
    const [form, setForm] = useState(state.filteredTask);

    const handleChange = e => {
        setForm(prevForm => ({ ...prevForm, [e.target.name]: e.target.value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
    };
    console.log(form)

    const handleReset = () => setForm({});


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
                        value={form.issue}
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
                        value={form.description}
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
                        value={form.start}
                        className={css.input}
                        onChange={handleChange}
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
                        value={form.end}
                        className={css.input}
                        onChange={handleChange}
                    />
                </div>

                {/* SUBMIT BTN */}
                <button type="submit" value="create issue">Create</button>
                <button type="reset" onClick={handleReset}>Clear</button>
            </form>
        </>
    )
}
