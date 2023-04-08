import { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { TYPES } from '../../actions/taskActions'
import { ID, CALC_DAYS, CALC_TAG } from '../../constants/constants';
import css from './Modal.module.scss'
import { Tag } from '../Tag/Tag';

export const CreateTaskModal = () => {
    const [form, setForm] = useState({});
    const [days, setDays] = useState(0)

    const { dispatch } = useContext(TaskContext);

    const handleTagTitle = () => {
        const days = CALC_DAYS(form.start, form.end)
        return CALC_TAG(days)
    }

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newId = ID.newId();
        dispatch({ type: TYPES.ADD_TASK, payload: { ...form, id: newId, days, tag: CALC_TAG(days) } })
    }

    const handleDate = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const resetForm = () => setForm({});

    useEffect(() => {
        setDays(CALC_DAYS(form.start, form.end))
    })

    return (
        <>
            <Tag tag={handleTagTitle()} isIcon />


            {form.start && form.end && <p>The issue have a duration of: {days} </p>}

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
                    required
                />

                {/* DESCRIPTION */}
                <input
                    id="create-description-input"
                    type="text"
                    name="description"
                    className={css.input}
                    onChange={handleChange}
                    required
                />

                {/* START DATE */}
                <input
                    id="create-start-data"
                    type="date"
                    name="start"
                    className={css.input}
                    onChange={handleDate}
                    required
                />

                {/* END DATE */}
                <input
                    id="create-end-data"
                    type="date"
                    name="end"
                    className={css.input}
                    onChange={handleDate}
                    required
                />

                {/* SUBMIT BTN */}
                <button type="submit" value="create issue">Create</button>
                <button type="reset" onClick={resetForm}>Clear</button>
            </form>
        </>
    )
}