import React, { CSSProperties, HtmlHTMLAttributes, ReactNode } from 'react'
import styles from './button.module.css'
interface Button extends HtmlHTMLAttributes<HTMLButtonElement> {
    children:ReactNode,
    style?:CSSProperties,
}

export default function Button({children,style, ...props}:Button) {
  return (
    <button {...props} className={styles.button} style={{...style}}>{children}</button>
  )
}
