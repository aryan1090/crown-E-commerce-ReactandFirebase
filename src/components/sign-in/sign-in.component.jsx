import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import {auth,signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends Component {

    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = async  event =>{
        event.preventDefault();
        const {email,password} = this.state;
        try{
            auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }
        catch(error){
            console.error(error);
        }
    }

    handleChange = event =>{
        const {value,name} = event.target;
        this.setState({[name]:value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name="email" 
                    type="email" 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label={this.state.email?'':"Email"} 
                    required/>

                    <FormInput
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    label={this.state.password?'':"Password"}
                    required/>
                    <div className="buttons">
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In with Google
                    </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
