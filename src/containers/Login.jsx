import React from 'react'
import '../styles/Login.scss'

const Login = () => {
  return (
    <div classnamename="login">
        <div classname="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" classname="logo" />
            <h1 classname="title">Create a new password</h1>
            <p classname="subtitle">Enter a new passwrd for yue account</p>
            <form action="/" classname="form">
              <label htmlFor="password" classname="label">Password</label>
              <input type="password" id="password" placeholder="*********" classnamename="input input-password" />
              <label htmlFor="new-password" classnamename="label">Password</label>
              <input type="password" id="new-password" placeholder="*********" classnamename="input input-password" />
              <input type="submit" defaultValue="Confirm" classnamename="primary-button login-button" />
            </form>
        </div>
    </div>

  )
}

export default Login