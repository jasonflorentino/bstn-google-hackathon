import { useState } from "react";
import imageGooglePixel from "../../assets/figma-pixel-phone.png" 
import phoneReschedule from "../../assets/phone-reschedule.png" 
import phoneDecision from "../../assets/phone-decision.png" 
import widgetDecision from "../../assets/widget-start.png" 
import widgetReschedule from "../../assets/widget-reschedule.png" 
import check from "../../assets/check.png" 
import widgetReminder from "../../assets/widget-reminder.png" 
import widgetEducational from "../../assets/educational-info.png" 
import './Phone.scss';

function Phone() {
  const [widgetState, setWidgetState] = useState("reminder");

  const getPhoneImage = () => {
    switch (widgetState) {
      case "reminder":
        return imageGooglePixel;
      case "educate":
        return imageGooglePixel;
      case "reschedule":
        return phoneReschedule;
      case "decision":
        return phoneDecision;
      case "none":
        return imageGooglePixel;
      case "confirm":
        return imageGooglePixel;
    }
  }

  return (
    <div className="Phone">
      {/* REMINDER */}
      <img
        className={`Phone__reminder ${widgetState === "reminder" ? "visible" : "invisible"}`}
        src={widgetReminder} 
        alt="widgetReminder"
        onClick={() => setWidgetState("decision")}
      />

      {/* DECISION */}
      <div 
        className={`Phone__decision--confirm ${widgetState === "decision" ? "visible" : "invisible"}`}
        onClick={() => setWidgetState("confirm")}
      >
        Confirm
      </div>
      <div 
        className={`Phone__decision--reschedule ${widgetState === "decision" ? "visible" : "invisible"}`}
        onClick={() => setWidgetState("reschedule")}
      >
        Reschedule
      </div>
      <div 
        className={`Phone__decision--cancel ${widgetState === "decision" ? "visible" : "invisible"}`}
        onClick={() => setWidgetState("educate")}
      >
        Cancel
      </div>
      {/* <img
        className={`Phone__decision ${widgetState === "decision" ? "visible" : "invisible"}`}
        src={widgetDecision} 
        alt="widgetDecision" /> */}

      {/* EDUCATIONAL */}
      <img
        className={`Phone__educate ${widgetState === "educate" ? "visible" : "invisible"}`}
        src={widgetEducational} 
        alt="widgetEducational"
        onClick={() => setWidgetState("none")}
      />

      {/* CONFIRM */}
      <img
        className={`Phone__check ${widgetState === "confirm" ? "visible" : "invisible"}`}
        src={check} 
        alt="check"
        onClick={() => setWidgetState("reminder")}
      />

      {/* RESCHEDULE */}
      {/* <img
        className={`Phone__reschedule ${widgetState === "reschedule" ? "visible" : "invisible"}`}
        onClick={() => setWidgetState("none")}
        src={widgetReschedule} 
        alt="widgetReschedule" /> */}
      
      {/* CHECK */}
      <img
        className={`Phone__check ${widgetState === "none" ? "visible" : "invisible"}`}
        src={check} 
        alt="check"
        onClick={() => setWidgetState("reminder")}
      />

      <img 
        className="Phone__googlePixel"
        src={getPhoneImage()}
        alt="phone"
        onClick={() => {
          if (widgetState === "reschedule") {
            setWidgetState("none")
            return;
          }
          setWidgetState("reminder")
          return;
          }
        }
      />
    </div>
  );
}

export default Phone;
