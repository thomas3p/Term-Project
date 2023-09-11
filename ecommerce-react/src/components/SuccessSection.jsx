import React, { PureComponent } from 'react'

//import plugin
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

//import .gif
import CorrectImage from '../assets/correct.gif'

//import css
import '../css/global.scss'
import '../css/success-component.scss'

export default class SuccessSection extends PureComponent {
  render() {
    return (
      <div className="cover-success">
        <div className="success-container">
            <img src={CorrectImage} alt="Correct Animation" />
            <p>ยินดีด้วยคุณสร้างบัญชีสำเร็จ 🎉</p>
            <Link to='/'>กลับสู่หน้าแรก</Link>
            <Link to='/Signin'>เข้าสู่ระบบ</Link>
        </div>
      </div>
    )
  }
}
