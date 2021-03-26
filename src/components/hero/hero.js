import React from 'react'
import phone from '../../assets/google-pixel-4.png'
import btn from '../../assets/GooglePlayBtn.png'
import './hero.scss'

function Hero() {
    return (
    <section className='hero'>
      <div className="hero__info">
        <h1 className='hero__info--title'>This Is a Title</h1>
        <h3 className='hero__info--para'>this is a filler untill we have real info to be placed here. this is a filler untill we have real info to be placed here.</h3>
        <img className='hero__info--btn' src={btn} />
      </div>
          <img className='hero__pic' src={phone}/>

      </section>
    );
  }
  
  export default Hero;