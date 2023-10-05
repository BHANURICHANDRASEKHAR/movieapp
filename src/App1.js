import React from 'react'
import './home.css';
import Nav from './Navbar';
import Down from './Down';
import Movies from './Movies';

export default function App1() {
  return (
    <div>
    <Nav/>
    <App2/><hr/>
    <Down/>
    </div>
  )
}

const App2=()=>{
    return (
      <section className='home'>
      
           <Content/>
          </section>
    )
  }

  const Content=()=>{
      return(
          <div className='content'>
              <div className='actual'>
              <h3 >Welcome Back!.....</h3>
            <h1 style={{color:'white'}}>Unlimited movies, TV shows and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
              </div>
          </div>
      )
  }
