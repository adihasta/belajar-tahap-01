import React from 'react';
import moment, { months } from 'moment';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: 'male',
            date: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
            ],
            months: [
                "Januari",
                "Februari",
                "Maret",
                "April",
                "Mei",
                "Juni",
                "Juli",
                "Agustus",
                "September",
                "Oktober",
                "November",
                "Desember"
            ],
            years: [
                2018,
                2017,
                2016,
                2015
            ],

        }
    }
    handleGender = (event) => {
        this.setState({
            gender: 'female'
        });
    }
    render() {
        return (
            <form className="daftar" action="index.js" method="post">
                <h1>Daftar</h1>
                <p>Gratis, sampai kapan pun.</p>
                <input className="txt1" type="text" placeholder="Nama depan" name=" uname " required />
                <input className="txt1" type="text" placeholder="Nama belakang" name=" uname " required />
                <input className="txt2" type="text" placeholder="Nomor seluler atau email" name=" uname " required />
                <input className="txt2" type="password" placeholder="Kata sandi baru" name=" uname " required />
                <p>Tanggal Lahir</p>
                <span id="s1">
                    <select className="" name="">
                        <option value="">Tanggal</option>
                        {this.state.date.map((date) => {
                            return <option key={date} value={date}>{date}</option>
                        })}
                    </select>
                    <select className="" name="">
                        <option value="">Bulan</option>
                        {this.state.months.map((month) => {
                            return <option key={month} value={month}>{month}</option>

                        })}
                    </select>
                    <select className="" name="">
                        <option value="">Tahun</option>
                        {this.state.years.map((year) => {
                            return <option key={year} value={year}>{year}</option>

                        })}
                    </select>
                    <a href="#" id="q1">Mengapa saya harus memberikan tanggal lahir saya?</a>
                </span><br></br>
                <span id="r1">
                    <input
                        type="radio"
                        name="gender"
                        required checked={this.state.gender === 'female'}
                        value="female"
                        onChange={this.handleGender}
                    />
                    <label htmlfor="">Perempuan</label>

                    <input
                        type="radio"
                        name="gender"
                        required checked={this.state.gender === 'male'}
                        value="male"
                        onChange={(event) => {
                            this.setState({
                                gender: 'male'
                            });
                        }}
                    />
                    <label htmlfor="">Laki-laki</label>
                </span>
                <div id="q2">
                    Dengan mengklik Daftar, Anda menyetujui <a href="#">Ketentuan, Kebijakan Data </a>dan <a href="#">Kebijakan Cookie kami.</a> Anda akan menerima Notifikasi SMS dari Facebook dan dapat menolaknya kapan saja.
              </div>
                <br></br><input id='btn1' type="button" name="" value="Daftar"></input>
            </form>
        )
    }
}

export default Form;