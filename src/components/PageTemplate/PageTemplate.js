import React from 'react'
import styles from './PageTemplate.scss'
import className from 'classnames/bind'

const cx = className.bind(styles) 

const PageTemplate = ({children}) => {
  return (
    <div className={cx('page-template')}>
      <h1>일정관리</h1>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  )
}

export default PageTemplate