import { useState } from "react";
import imageGooglePixel from "../../assets/figma-pixel-phone.png" 
import widgetStart from "../../assets/widget-start.png" 
import widgetReschedule from "../../assets/widget-reschedule.png" 
import './Phone.scss';

function Phone() {
  const [widgetState, setWidgetState] = useState("start");

  return (
    <div className="Phone">
      <div 
        className={`Phone__start--rescheduleLink ${widgetState === "start" ? "visible" : "invisible"}`}
        onClick={() => setWidgetState("reschedule")}
      >
        Reschedule
      </div>
      <img
        className={`Phone__start ${widgetState === "start" ? "visible" : "invisible"}`}
        src={widgetStart} 
        alt="widgetStart" />

      <img
        className={`Phone__reschedule ${widgetState === "reschedule" ? "visible" : "invisible"}`}
        onClick={() => setWidgetState("start")}
        src={widgetReschedule} 
        alt="widgetReschedule" />
      <img className="Phone__googlePixel" src={imageGooglePixel} alt="phone"/>
    </div>
  );
}

export default Phone;
