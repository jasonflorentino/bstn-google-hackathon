import imagePixelScreen from "../../assets/figma-phone-screen.png"
import './PhoneScreen.scss';

function PhoneScreen() {
  return (
    <div className="PhoneScreen">
      <img className="PhoneScreen__pixelScreen" src={imagePixelScreen} alt="screen"/>
    </div>
  );
}

export default PhoneScreen;