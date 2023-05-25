import Header from "./components/Header";
import Main from "./components/Main";
import SiderBar from "./components/SideBar";
function App() {
  return (
    <div className="gridContent">
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
    </div>
  );
}

export default App;
