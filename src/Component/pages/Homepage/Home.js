

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Home.module.css';
import Domestic from "../Homepage/Menu/Domesticflight/Domesticflight";
import Domesticflight from '../../../assets/images/Domesticflight.png';
import internationalflight from '../../../assets/images/internationalflight.png';
import train from '../../../assets/images/train.png';
import bus from '../../../assets/images/bus.png';
import tour from '../../../assets/images/tourism.png';
import hotel from '../../../assets/images/hotel.png';
import villa from '../../../assets/images/villa.png';
// import DirectionsBus from '@mui/icons-material/DirectionsBus';
// import Train from '@mui/icons-material/Train';
// import FlightTakeoff from '@mui/icons-material/FlightTakeoff';
// import FlightLand from '@mui/icons-material/FlightLand';
// import Luggage from '@mui/icons-material/Luggage';
// import Apartment from '@mui/icons-material/Apartment';
// import Villa from '@mui/icons-material/Villa';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { GiCommercialAirplane } from "react-icons/gi";
import { ImAirplane } from "react-icons/im";
import { IoTrain } from "react-icons/io5";
import { FaBusAlt } from "react-icons/fa";
import { MdLuggage } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { GiVillage } from "react-icons/gi";


const images = [
    { id: 1, title: "Domesticflight", image: Domesticflight },
    { id: 2, title: "internationalflight", image: internationalflight },
    { id: 3, title: "train", image: train },
    { id: 4, title: "bus", image: bus },
    { id: 5, title: "tour", image: tour },
    { id: 6, title: "hotel", image: hotel },
    { id: 7, title: "villa", image: villa }
]

const Container = () => {
    const imgBackground = useSelector(state => state.imgBackground);
    const value = useSelector(state => state.value);
    /*const [value, setValue] = React.useState(0);*/
    const dispatch = useDispatch()
    //--------------------------------------------
  
    //----------------------------------------------
    const handleChange = (e, newValue) => {
        // setValue(newValue);
        const filterImage = images.filter(data => data.title === e.target.name)
        const filteraddress = filterImage.map(data => { return (data.image) });
        const filterTitle = filterImage.map(data => { return (data.title) })
        dispatch({ type: filterTitle[0], payload: filteraddress[0] });
        dispatch({ type: e.target.id, payload: newValue });
        console.log(`e.target.id:${e.target.id}`);
        console.log(`newValue:${newValue}`);
        console.log(`value:${value}`);
    };
    //----------------------------------------------
    return (
        <div className={styles.MainContainer}>

            <div className={styles.MainContainerHeader}>
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <img src={imgBackground} alt={1}></img>

                    </div>
                    <div className={styles.TabsContainer}>
                        <Tabs sx={{ color: 'red' }} value={value} onChange={handleChange} className={styles.Tabs} aria-label="icon label tabs example">
                            <Tab sx={{ fontSize: '18px', py: 0, px: 6, m: 1, fontFamily: 'iranyekan' }} id='0' icon={<GiCommercialAirplane />} label="پرواز داخلی"  name="Domesticflight" ></Tab>
                            <Tab sx={{ fontSize: '18px', py: 0, px: 6, m: 1, fontFamily: 'iranyekan' }} id='1' icon={<ImAirplane />} label="پرواز خارجی"  name="internationalflight" ></Tab>
                            <Tab sx={{ fontSize: '18px', py: 0, px: 6, m: 1, fontFamily: 'iranyekan' }} id='2' icon={<IoTrain />} label="قطار"  name="train" />
                            <Tab sx={{ fontSize: '18px', py: 0, px: 6, m: 1, fontFamily: 'iranyekan' }} id='3' icon={<FaBusAlt />} label="اتوبوس" name="bus" />
                            <Tab sx={{ fontSize: '18px', py: 0, px: 6, m: 1, fontFamily: 'iranyekan' }} id='4' icon={<MdLuggage />} label="تور"  name="tour" />
                            <Tab sx={{ fontSize: '18px', py: 0, px: 6, m: 1, fontFamily: 'iranyekan' }} id='5' icon={<FaHotel />} label="هتل"  name="hotel" />
                            <Tab sx={{ fontSize: '18px', py: 0, px: 6, m: 1, fontFamily: 'iranyekan' }} id='6' icon={<GiVillage />} label="ویلا و اقامتگاه"  name="villa" />
                        </Tabs>
                    </div>
                </div>
                
            </div>
            <div className={styles.MainContainerFooter}>
                <Domestic />
            </div>
        </div>
    )

}
export default Container;













// import React from 'react';
// import styles from "./Home.module.css";
// import images from '../../Header/image';
// import { ReactComponent as AirplaneIcone } from '../../../assets/icons/airplane.svg';
// import { ReactComponent as Train } from '../../../assets/icons/train.svg';
// import { ReactComponent as Bus } from '../../../assets/icons/bus.svg';
// import { ReactComponent as Suitcase } from '../../../assets/icons/suitcase.svg';
// import { ReactComponent as Hotel } from '../../../assets/icons/hotel.svg';
// import { ReactComponent as House } from '../../../assets/icons/house.svg';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import Domestic from "../Homepage/Menu/Domesticflight/Domesticflight"

// const Container = () => {
//   const imgbackground = useSelector(state => state.imgbackground);
//   const dispatch = useDispatch();
//   const btnChangeColorD = useSelector(state => state.btnChangeColorD);
//   const btnChangeColorI = useSelector(state => state.btnChangeColorI);
//   const btnChangeColorT = useSelector(state => state.btnChangeColorT);
//   const btnChangeColorA = useSelector(state => state.btnChangeColorA);
//   const btnChangeColorTo = useSelector(state => state.btnChangeColorTo);
//   const btnChangeColorH = useSelector(state => state.btnChangeColorH);
//   const btnChangeColorV = useSelector(state => state.btnChangeColorV);

//   const handleClick = (e) => {
//     const filterImage = images.filter(data => data.title === e.target.name)
//     const filteraddress = filterImage.map(data => { return (data.image) });
//     const filtertitle = filterImage.map(data => { return (data.title) })
//     dispatch({ type: filtertitle[0], payload: filteraddress[0] });
//   }

//   return (
//     <>
//       <div className={styles.MainContainer}>
//         <div className={styles.imageContainer}>
//           <img  src={imgbackground} alt={1} ></img>
//         </div>
//         <div className={styles.AppContainer}>

//           <div className={styles.HeaderAppContainer}>
//             <div>
//               <AirplaneIcone />
//               <button style={btnChangeColorD ? { color: "blue", borderBottom: "5px solid blue" } : { color: "black" }} onClick={handleClick} name="Domesticflight">پرواز داخلی</button>
//             </div>
//             <div>
//               <AirplaneIcone />
//               <button style={btnChangeColorI ? { color: "blue", borderBottom: "5px solid blue" } : { color: "black" }} onClick={handleClick} name="internationalflight">پرواز خارجی</button>
//             </div>
//             <div >
//               <Train />
//               <button style={btnChangeColorT ? { color: "blue", borderBottom: "5px solid blue" } : { color: "black" }} onClick={handleClick} name="train">قطار</button>
//             </div>
//             <div >
//               <Bus />
//               <button style={btnChangeColorA ? { color: "blue", borderBottom: "5px solid blue" } : { color: "black" }} onClick={handleClick} name="bus">اتوبوس</button>
//             </div>
//             <div >
//               <Suitcase />
//               <button style={btnChangeColorTo ? { color: "blue", borderBottom: "5px solid blue" } : { color: "black" }} onClick={handleClick} name="tour">تور</button>
//             </div>
//             <div >
//               <Hotel />
//               <button style={btnChangeColorH ? { color: "blue", borderBottom: "5px solid blue" } : { color: "black" }} onClick={handleClick} name="hotel">هتل</button>
//             </div>
//             <div >
//               <House />
//               <button style={btnChangeColorV ? { color: "blue", borderBottom: "5px solid blue" } : { color: "black" }} onClick={handleClick} name="villa">ویلا و اقامتگاه</button>
//             </div>
//           </div>


//         </div>
//         <Domestic />


//       </div>

//     </>

//   );
// }
// export default Container;
