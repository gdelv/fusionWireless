import React from 'react'
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../shared/Button";

const logoPic = require('../images/logo-fusion-wireless.png')

class Nav extends React.Component {
    state = {
        modal: false,
        title: <GiHamburgerMenu />
    }

    handleModal() {
        this.setState({ modal: !this.state.modal })
    }

    renderNavModal = () => {
        if(this.state.modal) {
            return (
                <div className='modal'>
                   <NavLink exact to='/' onClick={() => this.handleModal()}>
                       Home
                   </NavLink>
                   <NavLink exact to='/#store-locator' onClick={() => this.handleModal()}>
                       Store Locator
                   </NavLink>
                   <NavLink exact to='/careers' onClick={() => this.handleModal()}>
                       Careers
                   </NavLink>
                   <NavLink exact to='/corporate-sales' onClick={() => this.handleModal()}>
                       Corporate Sales
                   </NavLink>
                   <NavLink exact to='/#contact-us' onClick={() => this.handleModal()}>
                       Contact Us
                   </NavLink>
                   <a href='https://www.fusionwireless.com/wordpress/wp-login.php' onClick={() => this.handleModal()} target='_blank'rel="noopener noreferrer">
                       Employees
                   </a>


                </div>
            )
        }
    }

    renderMainLinks() {
        return (
            <nav>
                <NavLink exact to='/'>
                    <img src={logoPic} className='logo' alt='logo'/>           
                </NavLink>
                <Button
                    title={this.state.title}
                    className='open-modal'
                    onClick={() => this.handleModal()}
                />
            </nav>
        )
    }

    render() {
        return (
            <>
                {this.renderMainLinks()}
                {this.renderNavModal()}
            </>
        )
    }
}

export default Nav