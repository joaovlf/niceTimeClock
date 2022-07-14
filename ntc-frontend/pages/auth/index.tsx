import Router, { withRouter } from "next/router"
import Button from "../components/Button"
import Container from "../components/container"
import { InputText } from "../components/InputText"
import { LoginContainer } from "../components/LoginContainer"
import styles from  './login.module.css'


const Times = () => {
  
  return (
    <Container>
      <LoginContainer header="Login">
        <div className={styles.loginInputContainer}>
          <label className={styles.label} htmlFor="">Nome de usuario</label>
          <InputText />
        </div>
        <div  className={styles.loginInputContainer}>
          <label className={styles.label} htmlFor="">Senha</label>
          <InputText />
        </div>
      </LoginContainer>
    </Container>

  )
}
export default Times