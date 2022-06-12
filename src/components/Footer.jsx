import React from 'react';
import styled from 'styled-components'

const FooterStyle =styled.footer`
  background-color: black;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
    h4, p{
        color: white;
    }
    p{
        font-size: 0.8rem;
        padding: 0.3rem 0rem;
    }
    div{
  text-align: center;
}


`


const Footer =()=> {
    return(
      <> 
      <FooterStyle>
        <section>
            <h4>SINUS SKATEBOARDS</h4>
            <p>About</p>
            <p>News</p>
            <p>Contact</p>
        </section>
        <section>
            <h4>CUSTOMER SERVICE</h4>
            <p>Delivery & Returns</p>
            <p>FAQS</p>
            <p>Find Your Local Stockist</p>
            <p>COVID-19 Information</p>
        </section>
        <section>
            <h4>LEGAL</h4>
            <p>Acceptable Use Policy</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>EU Declaration of Conformity</p>
        </section>
        <section>
             <div> 
                <h4>FOLLOW US</h4>
                <img src={require('../assets/icons/instagram.svg').default} alt="sinus logo" width="45"/>
                <img src={require('../assets/icons/twitter.svg').default} alt="sinus logo" width="45"/>
                <img src={require('../assets/icons/facebook.svg').default} alt="sinus logo" width="45"/>
            </div>
        </section>

    
      </FooterStyle>  
      </>   
    );
      }
    
      
    export default Footer;
