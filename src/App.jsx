import { Topbar } from "./components/topbar";
import { MainBody } from "./components/topbar/mainbody";
import { TopBanner } from "./components/topbar/topbanner";
import "./global.css";
function App() {
  return (
    <>
      <Topbar />
      <TopBanner/>
      <MainBody />  
      
    </>
  );
}

export default App;
