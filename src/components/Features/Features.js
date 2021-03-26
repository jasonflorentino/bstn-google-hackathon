import "./Features.scss";

function Features() {
  return (
    <section className="Features">
      <h2 className="Features__heading">FEATURES</h2>
      <div className="Features__container">
        <div className="feature">
          <div className="feature__image" />
          <div className="feature__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="feature">
          <div className="feature__image" />
          <div className="feature__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="feature">
          <div className="feature__image" />
          <div className="feature__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;