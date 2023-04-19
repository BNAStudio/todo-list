import { ProgressCard, GoalsCard } from "./index"
import css from "./Cards.module.scss"

export const Cards = () => {
    return (
        <div className={css["c-cards"]}>
            <ProgressCard />
            <GoalsCard />
        </div>
    )
}
