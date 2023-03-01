import React, { useState } from 'react';
import styles from './Header.module.css';
import TicketBtn from './button/TicketBtn';
import ResidenceBtn from './button/ResidenceBtn';
import MoreBtn from './button/MoreBtn';
import TourBtn from './button/TourBtn';
import { BsFileEarmarkPerson } from "react-icons/bs";
import { IoReceipt } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";
import { ReactComponent as Alibaba } from '../../assets/icons/alibaba.svg';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import { ReactComponent as Person } from '../../assets/icons/person.svg';
// import { ReactComponent as Receipt } from '../../assets/icons/receipt.svg';
// import { ReactComponent as Help } from '../../assets/icons/help.svg';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Alibaba className={styles.logoContainerAlibabaIcon} />
                <div className={styles.logoContainerContent}>
                    <span >FirstTicket.com</span>
                    <span>خرید بلیط, هتل,تور</span>
                </div>

            </div>
            <div className={styles.buttonContainer}>
                <TicketBtn />
                <ResidenceBtn />
                <TourBtn />
                <MoreBtn />
            </div>
            <div className={styles.linkContainer}>
                <button onClick={handleOpen}>
                    <BsFileEarmarkPerson className={styles.personIcon} />
                    <p>ورود یا ثبت نام</p>

                </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className={styles.modalDiv}>
                        <h1 style={{ fontFamily: 'iranyekan' ,marginBottom:'5px'}}>ورود یا ثبت‌ نام</h1>
                        <h3 style={{ fontFamily: 'iranyekan' }}>برای ادامه ایمیل و کلمه عبور خود را وارد کنید.</h3>
                        <form className='w-50'>
                            <div className="form-group w-100 mb-2">
                                <label className='mb-2'> ایمیل: </label>
                                <input style={{fontFamily:'iranyekan'}} type="email" className="form-control" id="exampleInputEmail1" placeholder='ایمیل خود را وارد کنید' />
                               
                            </div>
                            <div className="form-group mb-3">
                                <label className='mb-2'> کلمه عبور: </label>
                                <input style={{fontFamily:'iranyekan'}} type="password" className="form-control" id="exampleInputPassword1" placeholder="کلمه عبور را وارد کنید" />
                            </div>
                           
                            <button type="submit" className="btn btn-primary w-100">ورود</button>
                            
                        </form>
                    </div>
                </Modal>
                <div>
                    <IoReceipt className={styles.ReceiptIcon} />
                    <p>پیگیری خرید</p>

                </div>
                <div>
                    <MdOutlineLiveHelp className={styles.HelpIcon} />
                    <p>پشتیبانی آنلاین</p>

                </div>
            </div>
        </div>
    )
}
export default Header;