import Features from "../../components/Features/Features";
import './LandingPage.scss';
import Hero from '../../components/hero/hero'
import Footer from '../../components/footer/footer'

function LandingPage() {
  return (
    <div className="LandingPage">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default LandingPage;
