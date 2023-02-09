import styles from './confirmPageStyles.module.css';
import ConfirmpageStepper from '../child/Steppers/ConfirmpageStepper';
import { HiTicket } from "react-icons/hi2";


const DomesticFlightConfirmPage = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.stepper}>
                  <ConfirmpageStepper/>
            </div>
            <div className={styles.ticketInformation}>
                <div className={styles.ticketInformationHeader}>
                        <HiTicket className={styles.ticketInformationIcon}/>
                        <h3 style={{fontFamily:'iranyekan'}}>اطلاعات بلیط</h3>
                </div>
                <div className={styles.ticketInformationFooter}>
                       <div className={styles.ticketWent}></div>
                       <div className={styles.returnTicket}></div>
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