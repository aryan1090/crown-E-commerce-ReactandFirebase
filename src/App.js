import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
import './App.css';

import {connect} from 'react-redux';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';

import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth ,createUserProfileDocument} from './firebase/firebase.utils';

import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef  = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          });
        });
      }
      
        setCurrentUser(userAuth);
        // addCollectionAndDocuments('collections',collectionsArray.map(({title,items}) => ({title,items})));
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/signIn' render={()=>
          this.props.currentUser ? 
          <Redirect to='/'/>
          :
          <SignInAndSignUp/>
        }
        />
        <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
