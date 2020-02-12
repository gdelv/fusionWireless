import React from 'react'
import { NavLink } from "react-router-dom";


const logoPic = require('../images/logo-fusion-wireless.png')

class Nav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            opacity: .8,
            buttonClassName: 'circle icon'
        }
    }
    changeClassName = () => {
        if(this.state.buttonClassName === 'circle icon') {
            this.setState({ buttonClassName: 'circle icon close' })
        }else if(this.state.buttonClassName === 'circle icon close') {
            this.setState({ buttonClassName: 'circle icon' })
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
        this.changeClassName()
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
                <div id='wrapper' onClick={()=> this.handleModal()}>
                    <div className={this.state.buttonClassName}>
                        <span className='line top'></span>
                        <span className='line middle'></span>
                        <span className='line bottom'></span>
                    </div>
                </div>
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