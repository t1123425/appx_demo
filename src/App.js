import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import SiderBar from "./components/SideBar";
import { AppContext } from "./context/appContext";
import BreadCrumb from "./components/BreadCrumb";
import CategorySearch from "./components/CategorySearch";
import Collection from "./components/Collection";
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="gridContent">
      <AppContext.Provider value={{toggle,setToggle}}>
        <Header />
        <SiderBar />
        <Main>
            <BreadCrumb />
            <CategorySearch />
            <Collection />
        </Main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
