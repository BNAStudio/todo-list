import { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { TYPES } from '../../actions/taskActions';
import css from './Modal.module.scss'

export const UpdateTaskModal = () => {
    const { state, dispatch } = useContext(TaskContext);
    const [form, setForm] = useState(state.filteredTask);

    const handleChange = e => {
        setForm(prevForm => ({ ...prevForm, [e.target.name]: e.target.value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: TYPES.UPDATE_TASK,
            payload: {
                ...form
            }
        })
    };

    return (
        <>
            <form
                className={css["c-form"]}
                onSubmit={handleSubmit}
            >
                {/* ISSUE */}
                <input
                    id="create-issue-input"
                    type="text"
                    name="issue"
                    className={css.input}
                    onChange={handleChange}
                    value={form.issue}
                    required
                />

                {/* DESCRIPTION */}
                <input
                    id="create-description-input"
                    type="text"
                    name="description"
                    className={css.input}
                    onChange={handleChange}
                    value={form.description}
                    required
                />

                {/* START DATE */}
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
                <input
                    id="create-end-data"
                    type="date"
                    name="end"
                    value={form.end}
                    className={css.input}
                    onChange={handleChange}
                />


                {/* SUBMIT BTN */}
                <button type="submit" value="create issue">Update</button>
            </form>
        </>
    )
}
