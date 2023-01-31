import React, { useState } from "react";
import { useNavigate } from "react-router";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import classes from "./Domesticflight.module.css";
import moment from 'jalali-moment';
// import Karoon from "../../../../assets/images/Karoon.png";
// import Kaspian from "../../../../assets/images/Kaspian.png";
import sample from "./maindata";
import DtPicker from 'react-calendar-datetime-picker';
import 'react-calendar-datetime-picker/dist/index.css';
//---------- material ui import -----------------
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


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
        const filteredsamplegoticket2 = sample.filter(data => data.org === origin && data.dest === destination);
        const filteredsamplebackticket = sample.filter(data => data.org === destination && data.dest === origin && data.goDate === backtime);

        navigate(
            '/ticket',
            { state: { datagoticket: filteredsamplegoticket, datagoticket2: filteredsamplegoticket2, databackticket: filteredsamplebackticket } }
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
        <div className={classes.container}>
            <div className={classes.header}>
                <select >
                    <option>یک طرفه</option>
                    <option> رفت و برگشت</option>
                </select>
            </div>
            <div className={classes.footer}>
                <FormControl className={classes.formControl1} >
                    <InputLabel sx={{ fontFamily: 'iranyekan' }} id="demo-simple-select-autowidth-label">مبدا</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={origin}
                        onChange={orgHandler}
                        autoWidth
                        label="Age"
                    >
                        <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'تهران'} >تهران</MenuItem>
                        <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'مشهد'}>مشهد</MenuItem>
                        <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'تبریز'}>تبریز</MenuItem>
                        <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'شیراز'}>شیراز</MenuItem>

                    </Select>
                </FormControl>


                <FormControl className={classes.formControl2} >
                    <InputLabel sx={{ fontFamily: 'iranyekan' }} id="demo-simple-select-autowidth-label">مقصد</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={destination}
                        onChange={destHandler}
                        autoWidth
                        label="Age"
                    >

                        <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'تهران'}>تهران</MenuItem>
                        <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'مشهد'}>مشهد</MenuItem>
                        <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'تبریز'}>تبریز</MenuItem>
                        <MenuItem sx={{ fontFamily: 'iranyekan' }} value={'شیراز'}>شیراز</MenuItem>

                    </Select>
                </FormControl>
                <div className={classes.dateContainer}>
                    <DtPicker
                        value={selectedDaygo}
                        onChange={setSelectedDaygo}
                        type='single'
                        local='fa'
                        showWeekend
                        placeholder='تاریخ رفت'
                        inputClass={classes.dateInput}
                        autoClose={false}
                        minDate={minimumDate}
                        headerClass={classes.dateHeader}
                        daysClass={classes.daysDatePicker}


                    />
                </div>
                <div className={classes.dateContainer}>
                    <DtPicker
                        value={selectedDayback}
                        onChange={setSelectedDayback}
                        type='single'
                        local='fa'
                        showWeekend
                        placeholder='تاریخ برگشت'
                        inputClass={classes.dateInput}
                        autoClose={false}
                        minDate={minimumDate}
                        headerClass={classes.dateHeader}
                        daysClass={classes.daysDatePicker}

                    />
                </div>



                <input className={classes.numOfPas} type="number" placeholder='تعداد مسافران'  />

                <button onClick={search}
                    className={classes.searchBtn}>جستجوی بلیط</button>


            </div>



        </div>
    )
}

export default Domesticflight;