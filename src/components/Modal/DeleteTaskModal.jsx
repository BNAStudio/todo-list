import css from './Modal.module.scss'


export const DeleteTaskModal = () => {
    console.log('from DELETE task modal');
    return (
        <div className={css["modal-delete"]}>Delete Task Modal</div>
    )
}
