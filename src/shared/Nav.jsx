import React from 'react'
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Button } from "../shared/Button";

const logoPic = require('../images/logo-fusion-wireless.png')

class Nav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            title: "hamburger",
            opacity: .8
        }
    }
    // componentDidMount() {
    //     this.renderIcon()
    // }
    changeTitle = () => {
        if (this.state.title === 'hamburger') {
            console.log('close')
            this.setState({ title: "close" })
        } else if (this.state.title === "close") {
            console.log('open')
            this.setState({ title: "hamburger" })
        }
    }

    renderIcon = () => {
        if(this.state.title === 'hamburger') {
        this.setState({ title: <GiHamburgerMenu/> })
        } else if (this.state.title === <GiHamburgerMenu/>) {
            this.setState({ title: <IoMdClose/> })
        }
    }

    changeOpacity = () => {
        if (this.state.opacity === .8) {
            this.setState({ opacity: 1 })
        } else if(this.state.opacity === 1) {
            this.setState({ opacity: .8 })
        } 
    }

    handleModal() {
        this.changeOpacity()
        this.changeTitle()
        // this.renderIcon()
        this.setState({
            modal: !this.state.modal,
        })
    }

    renderNavModal = () => {
        if (this.state.modal) {
            return (
                <div className='modal'>
                    <NavLink exact to='/' onClick={() => this.handleModal()}>
                        HOME
                    </NavLink>
                    <NavLink exact to='/#store-locator' onClick={() => this.handleModal()}>
                        STORE LOCATOR                   </NavLink>
                    <NavLink exact to='/careers' onClick={() => this.handleModal()}>
                        CAREERS
                    </NavLink>
                    <NavLink exact to='/corporate-sales' onClick={() => this.handleModal()}>
                        CORPORATE SALES
                    </NavLink>
                    <NavLink exact to='/#contact-us' onClick={() => this.handleModal()}>
                        CONTACT US
                    </NavLink>
                    <a id='employees-link' href='https://www.fusionwireless.com/wordpress/wp-login.php' onClick={() => this.handleModal()} target='_blank' rel="noopener noreferrer">
                        EMPLOYEES
                        </a>


                </div>
            )
        }
    }

    renderMainLinks() {
        return (
            <nav style={{ opacity: this.state.opacity }}>
                <NavLink exact to='/'>
                    <img src={logoPic} className='logo' alt='logo' />
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