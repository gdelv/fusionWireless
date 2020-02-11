import React from 'react'
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../shared/Button";

class Nav extends React.Component {
    state = {
        modal: false
    }

    handleModal() {
        this.setState({ modal: !this.state.modal })
    }

    renderMainLinks () {
        return(
          <nav>
            <NavLink exact to='/'>
            LOGO HERE
            </NavLink>
            <Button
            title={<GiHamburgerMenu/>}
            className='open-modal'
            onClick={() => this.handleModal()}
            />
          </nav>  
        )
    }

    render () {
        return(
            <>
{this.renderMainLinks()}
</>
        )
    }
}

export default Nav