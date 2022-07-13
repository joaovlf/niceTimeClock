import Router, { withRouter } from "next/router"
import Button from "../components/Button"
import Container from "../components/container"
import styles from  './times.module.css'


const Times = () => {
  const handleClick = () => {
    const {userId} = Router.query
    console.log(userId)
    try {
      fetch('http://localhost:8080/create/times',{
        method:'POST',
        body: JSON.stringify({userId:userId}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
    } catch (error) {
        console.log(error)
    }finally{
        Router.push('/usersList', 'users')
    }
  }
  return (
    <Container>
      aqui consterá a função de registrar o horario
      <div className={styles.buttonContainer}>
        <Button onClick={()=>{handleClick()}} >Registrar horario do ponto</Button>
      </div>
    </Container>

  )
}
export default Times