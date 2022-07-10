import Header from './components/header'
import Container from './components/container'
import { NextPage } from 'next'
import Link from 'next/link'




const Home:NextPage = () => {
  return (
    <div>
      <Header title='Home'/>
 
          <Container>
              <Link href='/users'>
                <a>
                  listagem de usuarios
                </a>
              </Link>
          </Container>
    </div>
  )
}

export default Home
