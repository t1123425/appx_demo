import styles from './main.module.scss'
const Main = ({children}) => {
    return (
        <main className={styles.Main}>
            {
                children
            }
        </main>
    )
}

export default Main;