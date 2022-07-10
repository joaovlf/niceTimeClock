import styles from '../../../styles/header.module.css'
type header = {
    title:string;
}
const Header = ({title}:header) =>{
    return (
        <div className={styles.header}>
            {title}
        </div>
    )
}

export default Header