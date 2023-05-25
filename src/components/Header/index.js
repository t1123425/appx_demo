import styles  from './header.module.scss'
import appxLogo from '../../assets/img/appxLogo.svg'
const Header = () => {
    return (
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <span className={styles.menuBtn}></span>
            <img src={appxLogo} className={styles.logo} alt="appx" />
            <div className='searchBlock'>

            </div>
            <div className='weatherBlock'>

            </div>
            <div className='userBlock'>

            </div>
          </div>
        </header>
    )
}

export default Header;