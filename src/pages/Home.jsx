import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


const HomeStyle =styled.section`
  background-image: url('/img/hero-index1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 42rem;
  margin: 5rem 5rem;
  display: flex;
  justify-content: flex-end;
    .text{ 
    width: min-content;
    }
    p{
      font-size: 3.6rem;
      margin-right: 3rem;
      margin-top: 3.3rem;
      font-weight: 700;
    }
    
  
` 

const Home =()=> {


  return(
    <>
    <Header/>
    <Nav/>
      <HomeStyle>
          <div class="text">
            <p>スケートボード</p>
          </div>
      </HomeStyle>
    <Footer/>
    </>
    
  );
    }
  
  export default Home;