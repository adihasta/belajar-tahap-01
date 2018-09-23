import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    }
    static defaultProps = {
        title: 'Facebook',
    }
    render() {
        return (
            <div className="App-header">
                <div className="h-1">
                    <h1>Facebook</h1>
                    <form className="formh" action="index.js" method="post">
                        <label for="">Email atau Telepon</label>
                        <label for="">Kata sandi</label>
                        <input className="txtb" type="text" name=" uname " required />
                        <input className="txtb" type="password" name=" psw " required />
                        <button id='btn'><b>Masuk</b></button>
                        <a href="#">Lupa akun?</a>
                    </form>
                </div>
            </div>
        );
    }
}

export default Header;
