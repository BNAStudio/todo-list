/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import css from './Tag.module.scss'
import { DAYS } from '../../constants/constants'


export const Tag = ({ tag }) => {

    return (
        <div className={`${css["c-tag"]} ${css[`c-tag--${tag}`]}`} >
            <p>
                {DAYS[`${tag}`]}
            </p>
        </div>
    )
}

Tag.defaultProps = {
    tag: "..."
}

Tag.propTypes = {
    tag: PropTypes.string
}
