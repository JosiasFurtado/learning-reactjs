import React, { Component } from 'react'
import logo from '../assets/logo.png'
import account from '../assets/account.png'

export default class Header extends Component {
    render() {
        return (
            <>
                <header className="App-header">
                    <img src={logo} className="logo" alt="logo" />
                    <p>Meu perfil<img src={account} className="account" alt="account" /></p>
                </header>
            </>
        )
    }
}