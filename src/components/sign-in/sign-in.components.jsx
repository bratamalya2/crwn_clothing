import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            email: '',
            password: ''
        }
    }
    handleSubmit=e=>
    {
        e.preventDefault()
        this.setState({email:'',password:''})
    }
    handleChange=e=>
    {
        this.setState({[e.target.name]: e.target.value})
    }
    nun=()=>
    {
        console.log('None')
    }
    render()
    {
        return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and account.</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" name='email' value={this.state.email} 
                id='uname' handleChange={this.handleChange} label='Email' required/>
                <FormInput type="password" name='password' value={this.state.password} 
                id='pword' handleChange={this.handleChange} label='Password' required/>
                <div className='buttons'>
                    <CustomButton loginMethod={this.nun}>SIGN IN</CustomButton>
                    <CustomButton 
                    loginMethod={signInWithGoogle}>SIGN IN WITH Google</CustomButton>
                    {/*<CustomButton 
                    loginMethod={signInWithFB}>SIGN IN WITH Facebook</CustomButton>*/}
                </div>
            </form>
        </div>)
    }
}
export default SignIn