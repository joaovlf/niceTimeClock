import type { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import Header from './components/header'
import Container from './components/container'
import Link from 'next/link'

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

  return (
    <div>
      <Header title='Usuarios'/>
          <Container>
            {data.map((item:any, index:number)=>(
              <p style={{borderBottom:'1px solid #ef42706c', paddingBottom:'0.5rem'}} key={index}>{item.name} {item.lastName}</p>
            ))}
            <Link href='/times'>
                <a>
                  bater o ponto
                </a>
            </Link>
          </Container>
        
          <div>
         
          </div>
    </div>
  )
}

export default Users
