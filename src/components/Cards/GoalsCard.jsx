
import { useContext } from "react";
import { ModalContext } from '../../context/ModalContext';
import css from "./Cards.module.scss"

const typeBtn = {
    all: "all-issues-btn",
    completed: "completed-issues-btn",
    deleted: "delete-issues-btn",
}

export const GoalsCard = () => {
    const { openModal, setShowGoals } = useContext(ModalContext);
    const onHandleShowIssues = (e) => {
        const dataSet = e.target.dataset.btn
        
        dataSet && openModal()

        if (dataSet === typeBtn.all) setShowGoals(true);
        if (dataSet === typeBtn.completed) console.log("mostrar elementos completados...");
        if (dataSet === typeBtn.deleted) console.log("mostrar elementos eliminados...");
    }

    return (
        <div onClick={onHandleShowIssues} className={`${css.card} ${css["goals-card"]}`}>
            <div className={css["c-btn"]}>
                <button
                    data-btn="all-issues-btn"
                    className={css.btn}
                    id="all-issues"
                ></button>
                <label
                    className={`${css["label-btn"]} ${css["add-label-btn"]}`}
                    htmlFor="all-issues">All your issues</label>
            </div>

            <div className={css["c-btn"]}>
                <button
                    data-btn="completed-issues-btn"
                    className={css.btn}
                    id="completed-issues-btn"
                ></button>
                <label
                    className={css["label-btn"]}
                    htmlFor="completed-issues-btn">Completed issues</label>
            </div>

            <div className={css["c-btn"]}>
                <button
                    data-btn="delete-issues-btn"
                    className={css.btn}
                    id="delete-issues-btn"
                ></button>
                <label
                    className={css["label-btn"]}
                    htmlFor="delete-issues-btn">Delete issues</label>
            </div>
        </div>
    )
}



