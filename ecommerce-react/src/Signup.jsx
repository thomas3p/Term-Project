// เสร็จสมบูรณ์ 24-07-2023

import React, { useState } from 'react'


//import Footer
import FooterMain from './components/FooterMain'

//import others components
import SuccessSection from './components/SuccessSection';

import { Link } from 'react-router-dom';
//import css
import './css/global.scss'
import './css/signup.scss'


export default function Signup() {
    const [showElement, setShowElement] = useState(false);
    const [emailError, seteamilError] = useState(false); // New state to track login error

    const [focusedClass, setFocusedClass] = useState('');
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_password: '',
    });


    const [warningMessage, setWarningMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setWarningMessage(''); // Clear the warning message on any input change
        seteamilError(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8081/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setShowElement(true);
            } else {
                // Error in registration, e.g., duplicate email
                setWarningMessage(data.error);
                seteamilError(true);
            }
        } catch (error) {
            // console.error('Error:', error);
        }
    };

    return (
        <div className='cover-signup'>
            {showElement && <SuccessSection></SuccessSection>}
            <div className="back-btn-section">
                <Link className="material-symbols-rounded" id='backButton' to='/'>arrow_back</Link>
            </div>
            <div className='background'></div>
            <div className="form-section">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="logo-black"></div>
                    <p className="header">เริ่มต้นใช้งาน 🎉</p>
                    <p className="description">สร้างบัญชีของคุณเพื่อเริ่มใช้งาน</p>
                    <input type="text" placeholder='ชื่อผู้ใช้'
                        id="user_name"
                        name="user_name"
                        onChange={handleChange}
                        required
                    />
                    <input type="email" placeholder='อีเมล'
                        id="user_email"
                        name="user_email"
                        onChange={handleChange}
                        className={`${emailError ? 'input-error' : ''} ${focusedClass}`}
                        required
                    />
                    <input type="password" placeholder='รหัสผ่าน'
                        id="user_password"
                        name="user_password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title='โปรดใช้อักษรพิมพ์ใหญ่ อักษรพิมพ์เล็กและตัวเลข'
                        onChange={handleChange}
                        required
                    />
                    <p className="warning">{warningMessage}</p>
                    <button className='submit-button' type='submit'>สร้างบัญชี</button>
                    <p className="suggest">ถ้าคุณมีบัญชีแล้ว? <Link to="/signup"> เข้าสู่ระบบเลย</Link></p>
                </form>
            </div>
            <FooterMain></FooterMain>
        </div>
    )

}