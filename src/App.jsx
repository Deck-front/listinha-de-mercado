import { Topbar } from "./components/topbar";
import { Footer } from "./components/topbar/footer";
import { Mainbody } from "./components/topbar/mainbody";
import { TopBanner } from "./components/topbar/topbanner";
import { Menu } from "./components/topbar/menu";
import "./global.css";

function App() {

  return (
    <>

      <Topbar/>
      <TopBanner/>
      <Mainbody> 
      <Menu/> 
      </Mainbody>
       <Footer />

    </>
  );
}

export default App;
