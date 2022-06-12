import React from 'react';
import styled from 'styled-components'

const Headerstyle = styled.header`
background-image: url('/img/header-checkout.jpg');
background-size: 100%;
background-repeat: no-repeat;
background-position-y: 57%;    
padding: 1.5rem;
display: flex;
align-items:center;
    h1 {
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        font-size: 3.6rem;
        line-height: 0.8;
    }
    p {
        font-size: 0.8rem;
        color: black;
    }
    img {
    height: 6rem;
    width: 6rem;
  }

`


const Header =()=> {
  return(
    <> 
    <Headerstyle>
        <img src={require('../assets/logo.svg').default} alt="sinus logo"/>
        <div>
            <h1>SINUS</h1>
            <p>SKATEBOARDS スケートボード</p>
        </div>
    </Headerstyle>  
    </>   
  );
    }
  
    
  export default Header;






