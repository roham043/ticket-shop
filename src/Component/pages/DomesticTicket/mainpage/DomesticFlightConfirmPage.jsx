import styles from './confirmPageStyles.module.css';
import ConfirmpageStepper from '../child/Steppers/ConfirmpageStepper';
import CardTicketInformation from '../child/CardTicketInformationTable';
import { HiTicket } from "react-icons/hi2";


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
            <div className={styles.specificationOfPassengers}></div>
            <div className={styles.travelMessage}></div>
            <div className={styles.discountCode}></div>
            <div className={styles.onlinePayment}></div>
        </div>
    )
}
export default DomesticFlightConfirmPage;