
import React, { useState } from 'react'
//import Footer
import FooterMain from './components/FooterMain'

import { Link } from 'react-router-dom';

//import css
import './css/global.scss'
import './css/signin.scss'
export default function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        const response = await fetch('http://localhost:8081/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_email: email, user_password: password }),
        });

        if (response.ok) {
            alert('Sign-in successful');
        } else {
            const error = await response.json();
            alert(error.error || 'Sign-in failed');
        }
    };
    return (
        <div className='cover-signin'>
            <div className='background'>
                <div className="back-btn-section">
                    <Link className="material-symbols-rounded" id='backButton' to='/'>arrow_back</Link>
                </div>
                <form className="signin-form" onSubmit={handleSignIn} >
                    <p className="header">เข้าสู่ระบบ 👋</p>
                    <p className="description">ป้อนอีเมลและรหัสผ่านของคุณ</p>
                    <input type="email" id="email" placeholder='อีเมล' name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password" id="password" placeholder='รหัสผ่าน' name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="warning"></p>
                    <button type='submit' className='submit-button'>เข้าสู่ระบบ</button>
                    <p className="suggest">ถ้าคุณยังไม่มีมีบัญชี? <Link to="/Signup"> สร้างบัญชีเลย</Link></p>
                </form>
            </div>
            <FooterMain></FooterMain>
        </div>
    )
}
