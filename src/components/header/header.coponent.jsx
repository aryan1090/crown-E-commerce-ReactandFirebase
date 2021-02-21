import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser,hidden}) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
            <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser?
                    <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to='/signIn'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
            hidden?
                null
                :
                <CartDropdown/>
            }          
        </div>
    )
}

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) =>({
    currentUser,
    hidden
})


export default connect(mapStateToProps)(Header);
