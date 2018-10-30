import React from 'react'
import styles from './Button.scss'
import className from 'classnames/bind'

const cx =  className.bind(styles)

const Button = ({children, ...rest }) => {
    return (
        <div className={cx('button')} {...rest}>
            {children}
        </div>
    )
}

export default Button