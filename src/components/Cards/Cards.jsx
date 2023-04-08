
import css from "./Cards.module.scss"

export const Cards = () => {
    return (
        <div className={css["c-cards"]}>
            <div className={`${css.card} ${css["progress-card"]}`}>
                <p>You complete</p>
                <p>30%</p>
                <p>of your issues</p>
            </div>
            <div className={`${css.card} ${css["goals-card"]}`}>
                <div className={css["c-btn"]}>
                    <button
                        className={css.btn}
                        id="add-goal-btn"
                    ></button>
                    <label
                        className={`${css["label-btn"]} ${css["add-label-btn"]}`}
                        htmlFor="add-goal-btn">Add goal</label>
                </div>

                <div className={css["c-btn"]}>
                    <button
                        className={css.btn}
                        id="your-goals"
                    ></button>
                    <label
                        className={css["label-btn"]}
                        htmlFor="your-goals">Your goals</label>
                </div>

                <div className={css["c-btn"]}>
                    <button
                        className={css.btn}
                        id="recicle"
                    ></button>
                    <label
                        className={css["label-btn"]}
                        htmlFor="recicle">Recicle</label>
                </div>
            </div>
        </div>
    )
}
