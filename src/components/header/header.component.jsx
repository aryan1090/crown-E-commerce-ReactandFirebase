import React from 'react'
import {connect} from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import {auth} from '../../firebase/firebase.utils';

import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink,OptionDiv} from './header.styles';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({currentUser,hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/" >
            <Logo className="logo"></Logo>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser?
                    <OptionDiv onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink className="option" to='/signIn'>SIGN IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {
            hidden?
                null
                :
                <CartDropdown/>
            }          
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({ 
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})


export default connect(mapStateToProps)(Header);
