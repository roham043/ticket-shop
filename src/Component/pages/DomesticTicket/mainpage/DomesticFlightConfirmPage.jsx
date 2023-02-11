import styles from './confirmPageStyles.module.css';
import ConfirmpageStepper from '../child/Steppers/ConfirmpageStepper';
import CardTicketInformation from '../child/Confirm-Page/CardTicketInformationTable';
import CardConfirmPageSpecificationPassengers from '../child/Confirm-Page/CardConfirmPageSpecificationPassengers';
import { HiTicket } from "react-icons/hi2";
import { BsFillPeopleFill } from "react-icons/bs";
import { TfiPencil } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { BsFillInfoSquareFill } from "react-icons/bs";

const DomesticFlightConfirmPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.stepper}>
                <ConfirmpageStepper />
            </div>
            <div className={styles.ticketInformation}>
                <div className={styles.ticketInformationHeader}>
                    <HiTicket className={styles.ticketInformationIcon} />
                    <h3 style={{ fontFamily: 'iranyekan' }}>اطلاعات بلیط</h3>
                </div>

                <div className={styles.ticketInformationFooter}>
                    <div className={styles.ticketWent}>
                        <div className={styles.ticketWentHeader}>
                            <h3 style={{ fontFamily: 'iranyekan', marginRight: '20px' }}>بلیط رفت</h3>
                        </div>
                        <CardTicketInformation />
                    </div>

                    <div className={styles.returnTicket}>
                        <div className={styles.returnTicketHeader}>
                            <h3 style={{ fontFamily: 'iranyekan', marginRight: '20px' }}>بلیط برگشت</h3>
                        </div>
                        <CardTicketInformation />
                    </div>
                </div>

            </div>
            <div className={styles.specificationOfPassengers}>
                <div className={styles.specificationHeader}>
                    <div style={{width:'85%',display:'flex',alignItems:'center'}}>
                        <BsFillPeopleFill className={styles.specificationHeaderIcon} />
                        <h3 style={{ fontFamily: 'iranyekan', marginRight: '20px',marginBottom:'15px' }}>مشخصات مسافران</h3>
                    </div>
                    <div className={styles.specificationHeaderButton}>
                        <TfiPencil />
                        <h6 style={{marginTop:'5px'}}>ویرایش مسافران</h6>
                    </div>
                </div>
                <CardConfirmPageSpecificationPassengers />
            </div>

            <div className={styles.travelMessage}>
                <div className={styles.travelMessageHeader}>
                    <MdEmail className={styles.travelMessageIcon} />
                    <h6>اطلاع رسانی سفر</h6>
                </div>
                <div className={styles.travelMessageInfo}>
                    <BsFillInfoSquareFill style={{ fontSize: '20px', marginRight: '25px', color: '#c78100' }} />
                    <h3 style={{ marginRight: '20px', color: '#c78100', fontFamily: 'iranyekan', marginBottom: '20px' }}>اطلاعات بلیط و اطلاع‌رسانی بعدی به این ادرس ارسال می‌شود.</h3>
                </div>
                <h3 style={{ marginRight: '20px', fontFamily: 'iranyekan' }}>ایمیل :</h3>
            </div>
            <div className={styles.discountCode}></div>
            <div className={styles.onlinePayment}></div>
        </div>
    )
}
export default DomesticFlightConfirmPage;