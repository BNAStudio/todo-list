import { Cards } from "../components/Cards/Cards"
import Header from "../components/Header/Header"
import css from "./Dashboard.module.scss"
import { TaskList } from "../components/Task/TaskList"
import { AddTaskBtn } from "../components/AddTaskBtn/AddTaskBtn"

const Dashboard = () => {
    // TODO: Crear funcion para que se posicionen de manera aleatoria los circulos, usar GSAP animacion y JS posicionamiento
    return (
        <div className={css["c-main"]}>
            {/* <div className={`${css.circle} ${css["circle-L"]}`}></div>
            <div className={`${css.circle} ${css["circle-M"]}`}></div>
            <div className={`${css.circle} ${css["circle-S"]}`}></div> */}
            <div className={css["c-dashboard"]}>
                <Header />
                <div className={css["c-content"]}>
                    <h1 className={css["main-title"]}>Dashboard</h1>
                    <p className={css["sub-titles"]}>This is your report</p>
                </div>
                <Cards />
                <TaskList />
                <AddTaskBtn />
            </div>
        </div >
    )
}

export default Dashboard