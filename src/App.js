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
  const [toggle, setToggle] = useState(false);
  return (
    <div className="gridContent">
      <AppContext.Provider value={{toggle,setToggle}}>
        <Header />
        <SiderBar />
        <Main>
            <BreadCrumb />
            {/* 移動裝置才會出現的搜尋欄 */}
            <div className="mobileShow" style={{marginBottom: '16px'}}>
              <InputText 
                placeholder='Search here' 
              >
                <img src={searchIcon} alt="search" />
                </InputText>
            </div>
            <CategorySearch />
            <Collection />
        </Main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
