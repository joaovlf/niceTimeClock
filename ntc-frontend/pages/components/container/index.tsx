import React, { ReactNode } from 'react'
import style from './container.module.css'
interface Icontainer {
    children:ReactNode;
}

const Container =  ({children}:Icontainer) => {
  return (
    <div className={style.container}>
        <div className={style.containerData}>
            {children}
        </div>
    </div>
  )
}

export default Container