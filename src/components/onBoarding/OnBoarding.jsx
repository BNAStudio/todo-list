/* eslint-disable react/prop-types */
import { useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types';
import { gsap } from "gsap";
import css from './OnBoarding.module.scss'

// TODO: Crear estado | boolean | true cuando finalice la animacion
// TODO: Crear hook para almacenamiento en sessionStorage
// TODO: Crear hook para almacenamiento en localStorage

export const OnBoarding = ({ text, url, delay }) => {
    const ref = useRef();

    useLayoutEffect(() => {
        const onBoardingAnimation = gsap.fromTo(ref.current, {
            opacity: 0,
        },
            {
                opacity: 1,
                scale: 1,
                duration: delay,
                ease: "power3.out",
                onComplete: () => console.log(`Redirigiendo a: ${url}...`)
            }
        )
        return () => {
            onBoardingAnimation.kill();
        }
    })

    return (
        <div className={css['c-main']}>
            <div ref={ref} className={css['c-welcome']}>
                <p className={css.welcome}>{text}</p>
            </div>
        </div>
    )
}

OnBoarding.defaultProps = {
    delay: 5,
    text: '...'
};

OnBoarding.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    delay: PropTypes.number
};
