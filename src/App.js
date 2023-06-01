import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import SiderBar from "./components/SideBar";
import { AppContext } from "./context/appContext";
import BreadCrumb from "./components/BreadCrumb";
import CategorySearch from "./components/CategorySearch";
import Collection from "./components/Collection";
import InputText from "./components/InputText";
import searchIcon from './assets/img/searchIcon.svg' 
function App() {
  // 開關toggle，這裡用來透過context傳入狀態給header按鈕選單與siderBar側邊選單
  const [toggle, setToggle] = useState(false);
  return (
    <div className="gridContent">
      <AppContext.Provider value={{toggle,setToggle}}>
        {/* 頁面標頭 */}
        <Header />
        {/* 頁面側邊選單 */}
        <SiderBar />
        <Main>
           {/* 頁面麵包屑 */}
            <BreadCrumb />
            {/* 移動裝置才會出現的搜尋欄 */}
            <div className="mobileShow" style={{marginBottom: '16px'}}>
              <InputText 
                placeholder='Search here' 
              >
                <img src={searchIcon} alt="search" />
                </InputText>
            </div>
            {/* 種類搜尋欄 */}
            <CategorySearch />
            {/* 收藏區塊 */}
            <Collection />
        </Main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
