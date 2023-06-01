import styles  from './header.module.scss'
import appxLogo from '../../assets/img/appxLogo.svg'
import avatar from '../../assets/img/avatar.png'
import settingIcon from '../../assets/img/settingIcon.svg'
import weatherIcon from '../../assets/img/weatherIcon.svg'
import searchIcon from '../../assets/img/searchIcon.svg'
import nofiIcon from '../../assets/img/nofiIcon.svg'
import { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import Selector from '../Selector'
import InputText from '../InputText'
const Header = () => {
  // 設定主選單開合
  const {setToggle} = useContext(AppContext);
    return (
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.menuBlock+' b-30 flexCenter flex1'}>
              <span className={styles.menuBtn} onClick={()=> {setToggle(toggle => !toggle)}}></span>
              <img src={appxLogo} className={styles.logo} alt="appx" /> 
            </div>
            <div className={styles.infoBlock+' flexCenter'}>
              <div className={styles.searchBlock+' moblieHide flexCenter'}>
                  {/* 輸入框 */}
                  <InputText placeholder='Search here' 
                             styleType="grayBorder" 
                             className="flexCenter">
                              {/* 若要icon呈現header的樣式圖片外層要添加span */}
                              <span>
                                <img src={searchIcon} alt="search" />
                              </span>
                  </InputText>
                  {/* 
                    下拉式選單，選項包含：By All、By Station、By Country */}
                  <Selector defaultValue="By All" 
                            styleType={'grayBorder'}
                            className={styles.searchType} 
                            dataList={['By All','By Station','By Country']} />
              </div>
              <div className={styles.weatherBlock+' moblieHide flexCenter flex1'}>
                <span className='flexCenter'>
                  <img src={weatherIcon} alt="weather"/>
                  <b>09:54 am</b>
                </span>
                {/* 天氣icon為固定呈現
  地區下拉選單選項包含：Antananarivo、Hongkong、Taipei、Tokyo */}
                <Selector defaultValue="Antananarivo" dataList={['Antananarivo','Hongkong','Taipei','Tokyo']} />
              </div>
              <div className={styles.userBlock+' flexCenter'}>
                 {/* 根據設計稿移動裝置版面出現的icon */}
                 <span className="moblieShow">
                  <img src={searchIcon} alt="search" />
                </span>
                <span>
                  <img src={settingIcon} alt="setting" />
                </span>
                {/* 根據設計稿移動裝置版面隱藏的icon */}
                <span className="moblieHide">
                  <img src={nofiIcon} alt="nofi" />
                </span>
                <div className={styles.userAvatar+' flexCenter'}>
                  <img src={avatar} alt="avatar" />
                </div>
              </div>
            </div>
          </div>
        </header>
    )
}

export default Header;