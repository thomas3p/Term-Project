import React, { PureComponent } from 'react';

//import plugin
import { Link } from 'react-router-dom';

//import css
import '../css/global.scss'
import '../css/account-card-component.scss'

export default class AccountCard extends PureComponent {
    render() {
        return (
            <div className='account-card'>
                <button className='material-symbols-rounded account-card-close-button'>close</button>
                <div className='account-image'></div>
                <p className='account-name'>ไม่มีชื่อผู้ใช้</p>
                <Link to="#"><span className="material-symbols-rounded">bookmark</span>รายการที่ถูกใจ</Link>
                <Link to="#"><span className="material-symbols-rounded">local_mall</span>รายการในตระกร้า</Link>
                <Link to="#"><span className="material-symbols-rounded">grid_view</span>บัญชี</Link>
                <button><span className="material-symbols-rounded">logout</span>ออกจากระบบ</button>
            </div>
        )
    }
}
