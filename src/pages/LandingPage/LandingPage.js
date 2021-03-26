import Features from "../../components/Features/Features";
import './LandingPage.scss';
import Hero from '../../components/hero/hero'

function LandingPage() {
  return (
    <div className="LandingPage">
      <Hero />
      <Features />
    </div>
  );
}

export default LandingPage;
