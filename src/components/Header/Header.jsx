import { CURRENT_DAY, WEEK_DAY } from "../../constants/constants"
import profilePic from "../../../public/assets/images/profile.jpg"
import css from "./Header.module.scss"

const Header = () => {
    return (
        <section className={css["c-header"]}>
            <div>
                <h3 className={css["sub-titles"]}>Hi User!</h3>
                <h3 className={css["sub-titles"]}>{`${CURRENT_DAY().replaceAll("-", "/")} ${WEEK_DAY.substring(0, 3)}`}</h3>
            </div>
            <img className={css["profile-img"]} src={profilePic} alt="Profile image" />
        </section>

    )
}

export default Header