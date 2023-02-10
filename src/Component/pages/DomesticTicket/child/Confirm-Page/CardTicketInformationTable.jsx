import styles from './TicketInformation.module.css';

const CardTicketInformation = () => {
    return (
        <table className={styles.table}>
            <tr>
                <td>مبدا</td>
                <td>تهران</td>
            </tr>
            <tr>
                <td>مقصد</td>
                <td>مشهد</td>
            </tr>
            <tr>
                <td>شرکت هواپیمایی</td>
                <td>وارش</td>
            </tr>
            <tr>
                <td>تاریخ و ساعت پرواز</td>
                <td>یک شنیه 30 بهمن - 09:55</td>
            </tr>
            <tr>
                <td>شماره پرواز</td>
                <td>VR 5840</td>
            </tr>
            <tr>
                <td>کلاس پروازی</td>
                <td>اکونومی</td>
            </tr>
            <tr>
                <td>مقدار بار مجاز</td>
                <td>20 کیلوگرم</td>
            </tr>
            <tr>
                <td>خدمات ویژه</td>
                <td>ندارد</td>
            </tr>
            <tr>
                <td>قابلیت استرداد</td>
                <td>-</td>
            </tr>
        </table>
    )
}
export default CardTicketInformation;