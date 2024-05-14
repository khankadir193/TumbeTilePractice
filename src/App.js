import Header from "./components/Header";
import MainGame from "./components/MainGame";
import Popups from "./components/Popups";
// import Marquee from "./components/Marquee";
// import PopUps from "./components/PopUps";

// import SideButtons from "./components/SideButtons";
import './css/Game.css'

function App() {
  return (
    <div className="container">
      {/* <Marquee /> */}
      {/* <SideButtons /> */}
      {/* <PopUps /> */}
      <MainGame />
      <Header />
      {/* <Popups /> */}
    </div>
  );
}

export default App;
