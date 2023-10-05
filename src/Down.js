import React from 'react';
import './home.css';
import virat from './virat.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Down() {
    AOS.init();
  return (
   <div className='down'>
    <Down1/><hr/>
    <Down2/><hr/>
    <Down3/>
   </div>
  )
}
const Down1=()=>{
    return(
        <div className='down1' data-aos='fade-down' data-aos-duration='2000'  data-easing='ease-in' data-aos-delay='100'>
           
          <div className='item1' >
            <div className='inneritem'>
            <h1 style={{color:'white',textAlign:'center'}}>Enjoy on your TV....</h1><br/>
             <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
            
            </div>
              </div>
          <div className='item2'  >
          <video className="vedio" autoplay="on" playsinline="" muted="" loop="off"><source src={virat} type="video/mp4"  /></video>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"  style={{float:'right'}}/>
                </div>

          </div>
    )
 
}
const Down2=()=>{
    return(
        <div className='down1'  data-aos='fade-up' data-aos-duration='2000'  data-easing='ease-in' data-aos-delay='100'>
            <div className='item1' style={{padding:'0px'}}>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" style={{float:'left'}}></img>
            </div>
            <div className='item1'>
                <div className='inneritem'>
                <h1 style={{color:'white'}}>Download your shows to watch offline</h1>
                <h3>Save your favourites easily and always have something to watch.</h3>
         
                </div>
                 </div>
        </div>
    )
}
const Down3=()=>{
    return(
        <div className='down1'  data-aos='fade-left' data-aos-duration='2000'  data-easing='ease-in' data-aos-delay='1000'>
           
          <div className='item1'>
            <div className='inneritem'>
            <h1 style={{color:'white',textAlign:'center'}}>Create profiles for kids....</h1><br/>
             <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
         
            </div>
              </div>
          <div className='item2'>
          <img src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"  style={{float:'right'}}/>

          </div>
          </div>
    )
 
}