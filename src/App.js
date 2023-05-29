import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import SiderBar from "./components/SideBar";
import { AppContext } from "./context/appContext";
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="gridContent">
      <AppContext.Provider value={{toggle,setToggle}}>
        <Header />
        <SiderBar />
        <Main>
            <p>Home</p>
            <section className="whiteBg">
              <p>Category</p>
            </section>
            <section>
              <b>My Collection</b>
            </section>
        </Main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
