import React from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'

import './sign-up.styles.scss';

class Signup extends React.Component{

    constructor(props){
        super(props);

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange= event =>{
        const {name,value} = event.target;

        this.setState({[name]:value});
    }

    handleSubmit= async event=>{
        event.preventDefault();
        const {email,password,displayName,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('passwords don\'t match');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user,{displayName});

            this.setState({ 
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        } catch (error) {
            console.error(error);
        }

        
    }

    render(){
        const {email,password,displayName,confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email"
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label={this.state.email?'':'Email'}
                    required
                    />

                    <FormInput 
                    type="password"
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label={this.state.password?'':'Password'}
                    required
                    />

                    <FormInput 
                    type="password"
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label={this.state.confirmPassword?'':'Confirm Password'}
                    required
                    />

                    <FormInput 
                    type="text"
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label={this.state.displayName?'':'Display Name'}
                    required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default Signup
