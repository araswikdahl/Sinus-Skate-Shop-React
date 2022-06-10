import React from 'react';
import styled from 'styled-components'
import { BsFillPersonFill, BsCartFill } from 'react-icons/bs';


const Navstyle = styled.nav`
  padding: 0.6rem 2rem 0.6rem 1rem;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 3rem;
  color:white;
    button {
        align-self: center;
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin-left: 1rem;
        color: white;
    }
`
const ProductsNav = styled.div`
    display: flex;
    flex-wrap: nowrap;
`
const InputStyle = styled.input`
    height: 1.2rem;
    align-self: center;
`

const IconsWrapper =styled.div`
    display: flex;
    justify-content: space-around;
` 
   
  


const Nav =()=> {
    return(
      <>
      <Navstyle>
          <ProductsNav>
            <button>SKATE<span>&#x25BC;</span></button>
            <button>APPAREL <span>&#x25BC;</span></button>
            <p>NEWS</p>
          </ProductsNav>
          <IconsWrapper>
            <input type="text"></input>
            <button><BsFillPersonFill size= "1.5rem"/></button>
            <button><BsCartFill size= "1.5rem"/></button>
          </IconsWrapper>
      </Navstyle>  
      </>   
    );
      }
    
    export default Nav;