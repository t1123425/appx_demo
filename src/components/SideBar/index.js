import { useState,useContext} from 'react';
import { AppContext } from '../../context/appContext';
import styles from './sidebar.module.scss';
import ToggleList from '../ToggleList';
import homeIcon from '../../assets/img/homeIcon.svg';
import marketIcon from '../../assets/img/marketIcon.svg';
import customIcon from '../../assets/img/customerIcon.svg';
import carrierIcon from '../../assets/img/carrierIcon.svg';
import financeIcon from '../../assets/img/calcularIcon.svg';
import userIcon from '../../assets/img/userIcon.svg';
const SiderBar = () => {
    const {toggle,setToggle} = useContext(AppContext);
    const listData = [
        {
            text:'Home General',
            img:homeIcon,
            active:false
        },
        {
            text:'Marketing &  Sales',
            img:marketIcon,
            active:false
        },
        {
            text:'Customer Service & Operation',
            img:customIcon,
            active:false
        },
        {
            text:'Carrier Management',
            img:carrierIcon,
            active:false
        },
        {
            text:'Finance & Accounting',
            img:financeIcon,
            active:false
        },
        {
            text:'HR Development & Organization Setup',
            img:userIcon,
            active:false
        }
    ]
    const [ListsData,setListData] = useState(listData);
    const toggleSideMenu = (index) => {
        setToggle(true);
        setListData(lists => {
            return  lists.map((e,i)=>{
                return {
                    ...e,
                    active:i === index?!e.active:false
                }
           })
        })
    }
    return (
        <nav className={styles.sidebar+' '+(toggle?styles.active:'')}>
            <ul className={styles.dropDownList}>
                {
                    ListsData.map((e,i)=>{
                        return (
                            <li key={i} className={e.active?styles.active:''} onClick={()=>{toggleSideMenu(i)}}>
                                <div className={styles.listInfo}>
                                    <div className={styles.infoBox}>
                                        <img src={e.img} alt="icon" />
                                        <span>{e.text}</span>
                                    </div>
                                </div>
                                <ToggleList />
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default SiderBar