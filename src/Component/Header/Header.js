import MoreBtn from './button/MoreBtn';
import TicketBtn from './button/TicketBtn';
import ResidenceBtn from './button/ResidenceBtn';
import TourBtn from './button/TourBtn';



import styles from './Header.module.css';

import { ReactComponent as Alibaba } from '../../assets/icons/alibaba.svg'
import { ReactComponent as Person } from '../../assets/icons/person.svg';
import { ReactComponent as Receipt } from '../../assets/icons/receipt.svg';
import { ReactComponent as Help } from '../../assets/icons/help.svg';



const Header = () => {
  
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Alibaba className={styles.logoContainerAlibabaIcon} />
                <div className={styles.logoContainerContent}>
                    <h3>alibaba.ir</h3>
                    <h6>خرید بلیط, هتل,تور</h6>
                </div>

            </div>
            <div className={styles.buttonContainer}>
                <TicketBtn />
                <ResidenceBtn />
                <TourBtn/>
                <MoreBtn />
            </div>
            <div className={styles.linkContainer}>
                <div>
                    <p>ورود یا ثبت نام</p>
                    <Person />
                </div>
                <div>
                    <p>پیگیری خرید</p>
                    <Receipt />
                </div>
                <div>
                    <p>پشتیبانی آنلاین</p>
                    <Help />
                </div>
            </div>
        </div>
    )
}
export default Header;