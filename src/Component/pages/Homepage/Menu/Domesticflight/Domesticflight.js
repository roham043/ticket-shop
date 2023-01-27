import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../../Home.module.css";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import classes from "./Domesticflight.module.css";
import moment from 'jalali-moment';

// import Karoon from "../../../../assets/images/Karoon.png";
// import Kaspian from "../../../../assets/images/Kaspian.png";
import sample from "./maindata";


const Domesticflight = (props) => {
    const [selectedDayback, setSelectedDayback] = useState(null);
    const [selectedDaygo, setSelectedDaygo] = useState(null);
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");

    const navigate = useNavigate();
    const minimumDate = {
        year: Number(moment().locale('fa').format('YYYY')),
        month: Number(moment().locale('fa').format('MM')),
        day: Number(moment().locale('fa').format('DD'))
    };

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 14)
    // console.log(moment(maxDate).locale('fa').format('YYYY/MM/DD hh:mm:ss'));
    // const maximumDate = {
    //     year: Number(moment(maxDate).locale('fa').format('YYYY')),
    //     month: Number(moment(maxDate).locale('fa').format('MM')),
    //     day: Number(moment(maxDate).locale('fa').format('DD'))
    // };

    
    const search = () => {
        let gotime = `${selectedDaygo.year}/${selectedDaygo.month}/${selectedDaygo.day}`;
        let backtime = `${selectedDayback.year}/${selectedDayback.month}/${selectedDayback.day}`;
        const filteredsamplegoticket = sample.filter(data => data.org === origin && data.dest === destination && data.returnDate === backtime && data.goDate === gotime);
        const filteredsamplegoticket2 =sample.filter(data => data.org === origin && data.dest === destination );
        const filteredsamplebackticket = sample.filter(data => data.org === destination && data.dest === origin && data.goDate === backtime);

        navigate(
            '/ticket',
            { state: { datagoticket: filteredsamplegoticket,datagoticket2:filteredsamplegoticket2,databackticket:filteredsamplebackticket}}
        )
    }

    const orgHandler = (e) => {
        console.log(e.target.value);
        setOrigin(e.target.value);
    }

    const destHandler = (e) => {
        setDestination(e.target.value);
    }

    return (
        <div >
            <div className={styles.searchbox} >
                <div className="ui input" style={{ width: 200 }} >
                    <select className="form-select" type="text" id="org" placeholder='مبدا' onChange={orgHandler}>
                        <option defaultValue={"مبدا"}>مبدا</option>
                        <option value="تهران">تهران </option>
                        <option value="مشهد">مشهد</option>
                        <option value="تبریز">تبریز</option>
                        <option value="شیراز">شیراز</option>
                    </select>
                </div>


                {/* <div className="ui input">
                    <input type="text" id="dest" placeholder='مقصد' value={destination} onChange={destHandler} />
                </div> */}
                <div className="ui input" style={{ width: 200 }}>
                    <select className="form-select" aria-label="Default select example" type="text" id="dest" placeholder='مقصد' onChange={destHandler}>
                        <option defaultValue={"مقصد"}>مقصد</option>
                        <option value="تهران">تهران</option>
                        <option value="مشهد">مشهد</option>
                        <option value="تبریز">تبریز</option>
                        <option value="شیراز">شیراز</option>
                    </select>
                </div>
                <DatePicker
                    calendarPopperPosition="bottom"
                    inputClassName={classes.inputdate}
                    value={selectedDaygo}
                    onChange={setSelectedDaygo}
                    shouldHighlightWeekends
                    locale="fa"
                    inputPlaceholder='تاریخ رفت'
                    colorPrimary='orange'
                    minimumDate={minimumDate}
                // maximumDate={maximumDate}
                />
                <DatePicker
                    calendarPopperPosition="bottom"
                    inputClassName={classes.inputdate}
                    value={selectedDayback}
                    onChange={setSelectedDayback}
                    shouldHighlightWeekends
                    locale="fa"
                    inputPlaceholder='تاریخ برگشت'
                    colorPrimary='orange'
                    minimumDate={selectedDaygo}
                // maximumDate={maximumDate}
                />

                <div className="ui input">

                    <input type="number" placeholder='تعداد مسافران' style={{ textAlign: "right" }} />
                </div>
                <button onClick={search}
                    className="ui yellow button">جستجوی بلیط</button>
                <div className={styles.subInput}>


                </div>

            </div>



        </div>
    )
}

export default Domesticflight;