import React from 'react'
import 'fontsource-roboto';
import './Header.css'

const Header = ({headingText}) => {
   
          
        
    
    return (
        <div className='Header-container'>
    
        <div className='heading-wrapper'>
        
        <h1 style={{fontFamily:'Roboto',color:'white',fontSize:'70px'}}>{headingText}</h1></div>
           
        </div>
    )
}

export default Header
