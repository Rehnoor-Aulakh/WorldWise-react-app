import React from 'react'
import PropTypes from 'prop-types';
import styles from './Button.module.css';
export default function Button({children, onClick, type}) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  )
}

Button.propTypes={
    children:PropTypes.array.isRequired,
    onClick: PropTypes.array.isRequired,
    type: PropTypes.array.isRequired,
}