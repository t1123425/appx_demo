import styles  from './header.module.scss'
import appxLogo from '../../assets/img/appxLogo.svg'
import avatar from '../../assets/img/avatar.png'
import  settingIcon from '../../assets/img/settingIcon.svg'
import weatherIcon from '../../assets/img/weatherIcon.svg'
import nofiIcon from '../../assets/img/nofiIcon.svg'
import { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import Selector from '../Selector'
import InputText from '../InputText'
const Header = () => {
  const {setToggle} = useContext(AppContext);
    return (
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <span className={styles.menuBtn} onClick={()=> {setToggle(toggle => !toggle)}}></span>
            <img src={appxLogo} className={styles.logo} alt="appx" />
            <div className={styles.searchBlock+' flexCenter'}>
                <InputText placeholder='Search here' />
                {/* 輸入框
右側為下拉式選單，選項包含：By All、By Station、By Country */}
                <Selector defaultValue="By All" dataList={['By All','By Station','By Country']}  />
            </div>
            <div className={styles.weatherBlock+' flexCenter'}>
              <span>
                <img src={weatherIcon} alt="weather"/>
                <b>09:54 am</b>
              </span>
              {/* 天氣icon為固定呈現
地區下拉選單選項包含：Antananarivo、Hongkong、Taipei、Tokyo */}
              <Selector defaultValue="Antananarivo" dataList={['Antananarivo','Hongkong','Taipei','Tokyo']} />
            </div>
            <div className={styles.userBlock+' flexCenter'}>
              <span>
                <img src={settingIcon} alt="setting" />
              </span>
              <span>
                <img src={nofiIcon} alt="nofi" />
              </span>
              <div className={styles.userAvatar}>
                <img src={avatar} alt="avatar" />
              </div>
            </div>
          </div>
        </header>
    )
}

export default Header;