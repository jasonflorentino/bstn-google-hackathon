import React from 'react'
import phone from '../../assets/phone.png'
import btn from '../../assets/GooglePlayBtn.png'
import './hero.scss'


function Hero() {
    return (
    <section className='hero'>
      <div className="hero__info">
        <h1 className='hero__info--title'>Scheduel & Manage your Appointments in a Heartbeat</h1>
        <h3 className='hero__info--para'>Google pulse allows for the convenience of booking and canceling appointments through the your calendar. The cancellation feature streamlines the process of freeing up available health care appointments to those who need them. Built-in quick directions to navigate you to the appointment on the quickest route.</h3>
        <img className='hero__info--btn' src={btn} />
      </div>
          <img className='hero__pic' src={phone}/> 
      </section>
  
    
    );
  }
  
  export default Hero;