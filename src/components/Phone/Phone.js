import imageGooglePixel from "../../assets/google-pixel-4.png" 
import './Phone.scss';

function Phone() {
  return (
    <div className="Phone">
      <img className="Phone__googlePixel" src={imageGooglePixel} alt="phone"/>
    </div>
  );
}

export default Phone;
