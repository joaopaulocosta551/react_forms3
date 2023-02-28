import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { FcGoogle } from 'react-icons/fc' ;
import { FaFacebook } from 'react-icons/fa';
import {MdOutlineMail} from 'react-icons/Md';
import {HiOutlineLockClosed} from 'react-icons/Hi';
import {FiEyeOff} from 'react-icons/Fi';
import {FiEye} from 'react-icons/Fi';
import woman from "./assets/woman.svg";
import './App.css'
import { Button } from './components/ButtonSocialAccount';
import { ButtonLogin } from './components/ButtonLogin';
import { DivInputsCustom } from './components/Inputs';




function App() {
 

  return (
    <main className="App">
      <section className="card-left">
        <div className="container-left">
        <header className="logo">
          <p>dotwork</p>
        </header>

        <div className="title-text">
          <h1>Log in to your Account</h1>
          <p>Welcome back! Selecet method to log in:</p>
        </div>

        <div className="loginWithSocialMedia">
          <Button Icon={FcGoogle} value='Google'/>
          <Button Icon={FaFacebook} value='Facebook'/>
        </div>

        <div className="login-normal">
          <div className="horizontal-line">
            <div className="row-left"></div>
            <p>or continue with email</p>
            <div className="row-right"></div>
          </div>

          <div className="inputs">
            <DivInputsCustom placeholder='Email' Label='Email' type='email' Icon={MdOutlineMail}/>
            <DivInputsCustom placeholder='password' Label='password' type='password' hasEye={true} Icon={HiOutlineLockClosed} />

            <div className="remember">
              <div className='rememberDiv'>
                <input type="checkbox" name="check" id="check" />
                <label htmlFor="check" className='rememberLabel'>Remember me</label>
              </div>
              <a href="#">Forgot Passsword?</a>
            </div>

          </div>
        </div>
        <ButtonLogin value='Log in'/>
        <div className="createAccount">
          <p>Don't have an account?</p>
          <a href="#">Creat an account</a>
        </div>
        </div>
      </section>
      <section className="card-right">
        <img src={woman} alt="Desenho de uma mulher" className='imgWoman' />
        <div className="text-bottom">
          <h2>Connect with every application.</h2>
          <p>Everything you need in an easily customizable dashboard</p>
        </div>
      </section>
    </main>
  )
}

export default App
