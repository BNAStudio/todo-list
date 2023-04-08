/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import css from './Tag.module.scss'
import { TAG_DAYS } from '../../constants/constants'


export const Tag = ({ tag, isIcon }) => {
    return (
        <>
            {isIcon
                ?
                <div className={`${css["c-tag-icon"]}`} >
                    {
                        tag === "msg"
                            ? <p className={`${css["c-tag--message"]}`}>Add a new issue</p>
                            : <p className={`${css[`c-tag--${tag}`]}`}>{TAG_DAYS[`${tag}`]}</p>
                    }
                </div>
                :
                <div className={`${css["c-tag"]} ${css[`c-tag--${tag}`]}`} >
                    <p>
                        {TAG_DAYS[`${tag}`]}
                    </p>
                </div>
            }
        </>
    )
}

Tag.defaultProps = {
    tag: "..."
}

Tag.propTypes = {
    tag: PropTypes.string
}

// tag === DAYS.message ?? DAYS[`${tag}`]