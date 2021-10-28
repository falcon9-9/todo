import React, { Component } from 'react'
import Menu from './Menu'

class Login extends Component {

    render() {
        let path = this.props.match.path
        return (
            <div>
                <Menu path={path}/>
                <div id="container">
                    <h1>Log In</h1>
                    <form>
                        <input className='input-login' type="email" name="email" placeholder="E-mail"/>
                        <input className='input-login' type="password" name="pass" placeholder="Password"/>
                        <a href="#">Log in</a>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
