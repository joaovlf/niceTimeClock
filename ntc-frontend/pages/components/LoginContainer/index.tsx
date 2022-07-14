import React, { ReactNode } from 'react'
import styles from './LoginContainer.module.css'
interface LoginContainerProps {
    children:ReactNode;
    header:string;
}

export const LoginContainer = ({children, header}:LoginContainerProps) => {
  return (
    <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>{header}</div>
        {children}
    </div>
  )
}