import {Link} from "react-router-dom";
import './style.css';

const Footer = () => {
  return (
    <div className="bottom-section">
      <div className="links">
        <Link to={"/pvc"}>Privacy Policy</Link>
        <a href="https://www.superfam.app/tnc" target="_blank" rel="noreferrer">Terms and Conditions</a>
        {/*<a href="https://www.superfam.app/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>*/}
      </div>
    </div>
  );
}

export default Footer;