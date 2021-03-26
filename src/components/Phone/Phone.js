import imageGooglePixel from "../../assets/google-pixel-4.png" 
import PhoneScreen from "../PhoneScreen/PhoneScreen";
import './Phone.scss';

function Phone() {
  return (
    <div className="Phone">
      <PhoneScreen />
      <img className="Phone__googlePixel" src={imageGooglePixel} alt="phone"/>
    </div>
  );
}

export default Phone;
