import "./Features.scss";
import bigPulse from '../../assets/pulse-logo.svg'
import map from '../../assets/maps.svg'
import booking from '../../assets/booking.svg'
import cancel from '../../assets/cancel (2).svg'

function Features() {
  return (
    <section className="Features">
      <div className='Features__box'>
      <h2 className="Features__heading">FEATURES</h2>
      <img src={bigPulse} />
      </div>
      <div className="Features__container">
        <div className="feature">
          <img className='feature__img' src={booking} />
          <div className="feature__text">
          The ability to book a doctor's appointment without making a call
          </div>
        </div>
        <div className="feature">
          <img className='feature__img' src={cancel} />
          <div className="feature__text">
          Conveniently cancel an appointment allowing others in need of health care to access your appointment slot 
          </div>
        </div>
        <div className="feature">
          <img className='feature__img' src={map}/>
          <div className="feature__text">
          Make it easy for you to arrive to your appointments
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;