import React from 'react'
import './Footer.css'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'



const Footer = () => {

    return (

    <div className='footer-wrapper'>
        <div className='background'>
            <div className='top-container'>
                <img className='logo' src='https://www.fusionwireless.com/wordpress/wp-content/themes/html5blank-stable/img/logo-att.png'></img>
                <h3>MOBILIZING YOUR WORLD</h3>
                <p>Fusion Wireless has been a leader in wireless communications since 1993 and is committed to offering our customers a wide range of products.</p>
                <br></br>
                <a className='link'>EMPLOYEE LINK</a>

            </div>
            <div className='logo-container'>
                <FaTwitter 
                color='white'
                size= '3em'
                />
                <FaFacebookF
                color='white'
                size= '3em'
                />
                <FaInstagram
                color='white'
                size= '3em'
                />


            </div>

        </div>
    </div>
    )
}


export default Footer 