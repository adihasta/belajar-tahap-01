import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="h-1">
            <h1>facebook</h1>
            <form className="formh" action="index.js" method="post">
              <label for="">Email atau Telepon</label>
              <label for="">Kata sandi</label>
              <input id='txtb' type="text" name=" uname " required />
              <input id='txtb' type="password" name=" psw " required />
              <button id='btn'><b>Masuk</b></button>
              <a href="#">Lupa akun?</a>
            </form>
          </div>
        </div>
        <div className="cent">
          <div className="c1">
            <h2>Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.</h2>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/GwFs3_KxNjS.png"></img>
            <form className="daftar" action="index.js" method="post">
              <h1>Daftar</h1>
              <p>Gratis, sampai kapan pun.</p>
              <input id='txt1' type="text" placeholder="Nama depan" name=" uname " required />
              <input id='txt1' type="text" placeholder="Nama belakang" name=" uname " required/> 
              <input id='txt2' type="text" placeholder="Nomor seluler atau email" name=" uname " required />
              <input id='txt2' type="password" placeholder="Kata sandi baru" name=" uname " required/>
              <p>Tanggal Lahir</p>
              <span id="s1">
                <select className="" name="">
                  <option value="">Tanggal</option>
                  <option value="1">1</option>
                </select>
                <select className="" name="">
                  <option value="">Bulan</option>
                </select>
                <select className="" name="">
                  <option value="">Tahun</option>
                </select>
                <a href="#" id="q1">Mengapa saya harus memberikan tanggal lahir saya?</a>
              </span><br></br>
              <span id="r1">
                <input type="radio" name="gender" value=""></input>
                <label for="">Perempuan</label>
             
                <input type="radio" name="gender" value=""></input>
                <label for="">Laki-laki</label>
              </span>
              <div id="q2">
              Dengan mengklik Daftar, Anda menyetujui <a href="#">Ketentuan, Kebijakan Data </a>dan <a href="#">Kebijakan Cookie kami.</a> Anda akan menerima Notifikasi SMS dari Facebook dan dapat menolaknya kapan saja.
              </div>
              <br></br><input id='btn1' type="button" name="" value="Daftar"></input>
            </form>


          </div>
        </div>
      </div>
    );
  }
}

export default App;
