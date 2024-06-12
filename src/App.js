import './App.css';
import appMockup from './assets/SuperLock_mockup.png';
import secureFileSvg from './assets/secured-file-3-svgrepo-com.svg';
import Footer from "./components/footer";

const TopSection = () => {
  return <div className="top-section">
    <div className="top-items">
      <div className="info">
        <div>
          <h1>SuperLock: Ultimate Password Manager</h1>
        </div>
        <div>
          <p>Store passwords offline, support encrypted backups, easy sharing, and available over LAN.</p>
        </div>
        <div className="store-links">
          {/*<a href="#appstore">App Store</a>*/}
          <a href="https://play.google.com/store/apps/details?id=com.superfam.superlock" target="_blank">Play Store</a>
        </div>
      </div>
      <div className="screenshot">
        <img src={appMockup} alt="App Mockup"/>
      </div>
    </div>
  </div>;
}

const Card = ({imgFile, heading, text}) => {
  return <div className="card">
    <div>
      <img src={imgFile}/>
    </div>
    <div className="card-heading">{heading}</div>
    <div className="card-text">{text}</div>
  </div>
}

const MidHighSection = () => {
  return (
    <div className="mid-high-section">
      <Card imgFile={secureFileSvg} heading={"Offline Storage"}
            text={"At no point the passwords leave your device."}/>
      <Card imgFile={secureFileSvg} heading={"Offline Storage"}
            text={"At no point the passwords leave your device."}/>
      <Card imgFile={secureFileSvg} heading={"Offline Storage"}
            text={"At no point the passwords leave your device."}/>
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <TopSection/>
      {/*<MidHighSection/>*/}
      <Footer/>

    </div>
  );
}

export default App;
