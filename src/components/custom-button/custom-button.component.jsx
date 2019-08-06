import React from 'react'
import './custom-button.styles.scss'

//className={`${(loginMethodName ==='google') && 'google'} button`}
const CustomButton=({ children, loginMethod})=>
{
    console.log(loginMethod.name)
     return <div>
        <button onClick={loginMethod} className={`${loginMethod.name ==='signInWithGoogle' ? 'google-sign-in': ''} custom-button`}>
            {children}
        </button>
    </div>
}

export default CustomButton