import type { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import Header from '../components/header'
import Container from '../components/container'
import Link from 'next/link'
import Router from 'next/router'
import Button from '../components/Button'
import styles from './users.module.css'

interface IData {
  data:[{
    name:string;
    lastName:string;
    age:Number
  }]
}
export const getStaticProps:GetStaticProps = async () => {
   const response = await fetch('http://localhost:8080/list/users')
   const data = await response.json()

   return {
     props:{data:data.data}
   }
}

const Users = ({data}:IData) => {
  // const [data, setData] = useState<Array<object>>([{name:"", lasName:""}])
  const idLogedUser = 1
  const handleRoute = (user:number) => {
    Router.push(
      {
        pathname: '/times',
        query: {user : user},
      },
      '/register', // "as" argument
    )
  }
  return (
    <div>
      <Header title='Usuarios'/>
          <Container>
            {data.map((item:any, index:number)=>(
              <p style={{borderBottom:'1px solid #ef42706c', paddingBottom:'0.5rem'}} key={index}>{item.name} {item.lastName}</p>
            ))}
            <div className={styles.buttonContainer}>
            <Button onClick={()=>handleRoute(idLogedUser)}>Registrar Ponto</Button>
            </div>
          </Container>
        
          <div>
         
          </div>
    </div>
  )
}

export default Users
