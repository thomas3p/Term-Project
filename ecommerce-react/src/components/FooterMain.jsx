import React, { PureComponent } from 'react'

//import plugin
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

//import css
import '../css/global.scss'
import '../css/footer.scss'
export default class FooterMain extends PureComponent {
  render() {
    return (
      <footer className='footer-cover'>
        <div className="footer-wrapper">
          <Link className="logo-black" to='/'></Link>
          <ul className="footer-menu">
            <li><a href="/Signin">เข้าสู่ระบบ</a></li>
            <li><a href="/Signup">สร้างบัญชี</a></li>
            {/* <li><a href="">สมัครร้านค้า</a></li> */}
            <li><a href="/About">เกี่ยวกับเรา</a></li>
          </ul>
          <p className="copyright-credit">©2023 Ryuzu Inc.</p>
        </div>
      </footer>
    )
  }
}
