import React, { useEffect } from 'react';

//import Footer
import FooterMain from '/src/components/FooterMain'
//import NavbarHome
import NavbarMain from './components/NavbarMain'
import { Link } from 'react-router-dom';
//import account-card
import AccountCard from './components/AccountCard'

//import css
import './css/global.scss'
import './css/Home.scss'

export default function Home() {
  useEffect(()=> {
    fetch('http://localhost:8081/user')
    .then(res => res.json())
    .then(data => console.log(data))
    .then(err => console.log(err))
  }, [])

  return (
    <div className='cover-home'>
      {/* <AccountCard></AccountCard> */}
      <NavbarMain></NavbarMain>
      <p className="hero-header">Pre-Order Imported<br />Product, Easy to Buys</p>
      <p className="hero-subheader">🔍 Let’s explore your best items</p>
      <ul className='section-2' >
        <li >
          <Link to='/'>
            <div className='section-2-icon material-symbols-rounded'>sell</div>
            <p className='section-2-title'>Brochures</p>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <div className='section-2-icon material-symbols-rounded'>celebration</div>
            <p className='section-2-title'>Hot Sale</p>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <div className='section-2-icon material-symbols-rounded'>storefront</div>
            <p className='section-2-title'>Brands</p>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <div className='section-2-icon material-symbols-rounded'>alarm</div>
            <p className='section-2-title'>New</p>
          </Link>
        </li>
        <li>
          <Link to=''>
            <div className='section-2-icon material-symbols-rounded'>apps</div>
            <p className='section-2-title'>Catalog</p>
          </Link>
        </li>
      </ul>
      <p className="section-3-title">
        Explain
      </p>
      <ul className="section-3">
        <li className='section-3-1'>
          <p className="section-3-subheader">แนะนำ</p>
          <p className='section-3-header'>วิธีการสร้างบัญชี</p>
          <p className="section-3-explain">แนะนำวิธีการสร้างบัญชีเพื่อเริ่มต้นใช้งานครั้งแรกโดยง่าย</p>
          <hr />
          <p className="section-3-detial-title">ดูรายละเอียด</p>
          <Link to='/' className='material-symbols-rounded'>arrow_forward</Link>
      </li>
      <li className='section-3-2'>

      <p className="section-3-subheader">แนะนำ</p>
          <p className='section-3-header'>วิธีการสั่งซื้อสินค้า</p>
          <p className="section-3-explain">แนะนำวิธีการสั่งซื้อสินค้า การเลือกวิธีชำระเงิน การเลือกที่อยู่อยู่ในการจัดส่ง</p>
          <hr />
          <p className="section-3-detial-title">ดูรายละเอียด</p>
          <Link to='/' className='material-symbols-rounded'>arrow_forward</Link>
      </li>
      <li className='section-3-3'>

      <p className="section-3-subheader">แนะนำ</p>
          <p className='section-3-header'>วิธีการคืนสินค้า</p>
          <p className="section-3-explain">แนะนำวิธีการคืนสินค้า นโยบายในการคืนสินค้า รวมทั้งการยกเลิกการสั่งสินค้า</p>
          <hr />
          <p className="section-3-detial-title">ดูรายละเอียด</p>
          <Link to='/' className='material-symbols-rounded'>arrow_forward</Link>
      </li>
      <li className='section-3-4'>

      <p className="section-3-subheader">แนะนำ</p>
          <p className='section-3-header'>แนะนำทีมงาน</p>
          <p className="section-3-explain">แนะนำทีมงานที่สร้างโปรเจ็คนี้ขึ้นมา และที่มา จุดประสงค์ และประโยชน์</p>
          <hr />
          <p className="section-3-detial-title">ดูรายละเอียด</p>
          <Link to='/About' className='material-symbols-rounded'>arrow_forward</Link>
      </li>
    </ul>
    <div className="section-4-header-container">
      <p>Suggestion</p>
      <hr />
    </div>
    <div className="product-section"></div>
    <FooterMain></FooterMain>
    </div >
  )
}