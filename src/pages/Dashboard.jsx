import { Cards } from "../components/Cards/Cards"
import Header from "../components/Header/Header"
import css from "./Dashboard.module.scss"
import { TaskList } from "../components/Task/TaskList"
import { AddTaskBtn } from "../components/AddTaskBtn/AddTaskBtn"

const Dashboard = () => {
    return (
        <div className={css["c-main"]}>
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