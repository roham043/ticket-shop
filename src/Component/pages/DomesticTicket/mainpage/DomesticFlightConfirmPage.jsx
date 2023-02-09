import styles from './confirmPageStyles.module.css';

const DomesticFlightConfirmPage = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.stepper}></div>
            <div className={styles.ticketInformation}></div>
            <div className={styles.specificationOfPassengers}></div>
            <div className={styles.travelMessage}></div>
            <div className={styles.discountCode}></div>
            <div className={styles.onlinePayment}></div>
        </div>
    )
}
export default DomesticFlightConfirmPage;