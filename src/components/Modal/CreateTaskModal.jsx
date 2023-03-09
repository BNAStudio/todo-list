import css from './Modal.module.scss'

export const CreateTaskModal = () => {
    console.log('from CREATE task modal');
    return (
        <div className={css["modal-create"]}>Create Task Modal</div>
    )
}
