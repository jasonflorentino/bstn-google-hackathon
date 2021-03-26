import './footer.scss';
import pulse from '../../assets/Group (1).svg'
import btn from '../../assets/GooglePlayBtn.png'
import insta from '../../assets/insta.svg'
import fb from '../../assets/fb.svg'
import twitter from '../../assets/twitter.svg'

function footer() {
  return (
    <section className="footer">
    <div className='footer__cta'>
      <img className='footer__cta--btn' src={btn} />
    </div>
    
    <div className='footer__socials' >
    <img className='footer__socials--icon' src={insta} />
    <img className='footer__socials--icon' src={fb} />
    <img className='footer__socials--icon' src={twitter}/>
    </div>
    </section>
  );
}

export default footer;