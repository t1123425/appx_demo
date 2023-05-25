import styles from './sidebar.module.scss'
import homeIcon from '../../assets/img/homeIcon.svg';
const SiderBar = () => {
    return (
        <nav className={styles.sidebar+' '+styles.active}>
            <ul className={styles.dropDownList}>
                <li>
                    <div className={styles.listInfo}>
                        <div className='infoBox'>
                            <img src={homeIcon} alt="icon" />
                            <span>Home General</span>
                        </div>
                    </div>
                </li>
                <li>
                    Marketing &  Sales
                </li>
                <li>
                    Customer Service & Operation
                </li>
                <li>
                    Carrier Management
                </li>
                <li>
                    Finance & Accounting
                </li>
                <li>
                    HR Development & Organization Setup
                </li>
            </ul>
        </nav>
    )
}

export default SiderBar