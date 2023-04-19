import css from "./Cards.module.scss"

export const ProgressCard = () => {
    return (
        <div className={`${css.card} ${css["progress-card"]}`}>
            <p>You complete</p>
            <p>30%</p>
            <p>of your issues</p>
        </div>
    )
}
