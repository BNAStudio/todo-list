import { useState } from 'react';
import css from './Modal.module.scss'

export const CreateTaskModal = () => {
    const [form, setForm] = useState({});

    const onHandleSubmit = e => {
        e.preventDefault();
        console.log(form);
    }

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleDate = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <>
            <form
                className={css["c-form"]}
                onSubmit={onHandleSubmit}
            >
                {/* ISSUE */}
                <label
                    htmlFor="issue"
                    className={css.label}>Issue:</label>
                <input
                    id="create-issue-input"
                    type="text"
                    name="issue"
                    className={css.input}
                    onChange={handleChange}
                />

                {/* DESCRIPTION */}
                <label
                    htmlFor="description"
                    className={css.label}>Description:</label>
                <input
                    id="create-description-input"
                    type="text"
                    name="description"
                    className={css.input}
                    onChange={handleChange}
                />

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

                {/* SUBMIT BTN */}
                <button type="submit">Create</button>
            </form>
        </>
    )
}
