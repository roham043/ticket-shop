
import IRair from "../../../../../assets/images/IRair.png";
import Aseman from "../../../../../assets/images/Aseman.png";



import Ata from "../../../../../assets/images/Ata.png";
import Karoon from "../../../../../assets/images/Karoon.png";
 import Kaspian from "../../../../../assets/images/Kaspian.png";



const sample = [
    { org: "تهران", dest: "مشهد", logo: IRair, logoName: 'ایران ایر', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '10:00', arriveTime: '12:00', capacity: 15, cost: 880000, name: 'boeing737' },
    { org: "تهران", dest: "مشهد", logo: IRair, logoName: 'ایران ایر', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '16:00', arriveTime: '18:00', capacity: 15, cost: 920000, name: 'Airbus A320' },
    { org: "تهران", dest: "مشهد", logo: IRair, logoName: 'ایران ایر', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '12:00', arriveTime: '14:00', capacity: 15, cost: 990000, name: 'boeing737' },

    { org: "تهران", dest: "مشهد", logo: Aseman, logoName: "آسمان", goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '4:00', arriveTime: '6:00', capacity: 20, cost: 850000, name: 'Fokker100' },
    { org: "تهران", dest: "مشهد", logo: Aseman, logoName: "آسمان", goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '9:00', arriveTime: '11:30', capacity: 20, cost: 1100000, name: 'Fokker100' },
    { org: "تهران", dest: "مشهد", logo: Aseman, logoName: 'آسمان', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '19:30', arriveTime: '21:10', capacity: 20, cost: 790000, name: 'Boeing MD' },
    
    { org: "تهران", dest: "مشهد", logo: Karoon, logoName: ' کارون', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '11:20', arriveTime: '13:50', capacity: 15, cost: 950000, name: 'Boeing MD' },
    { org: "تهران", dest: "مشهد", logo: Karoon, logoName: ' کارون', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '16:00', arriveTime: '18:00', capacity: 15, cost: 790000, name: 'boeing737' },
    { org: "تهران", dest: "مشهد", logo: Karoon, logoName: 'کارون ', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '12:00', arriveTime: '14:00', capacity: 15, cost: 800000, name: 'Airbus A320' },

    { org: "تهران", dest: "مشهد", logo: Kaspian, logoName: "کاسپین", goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '20:10', arriveTime: '22:15', capacity: 20, cost: 790000, name: 'Airbus A320' },
    { org: "تهران", dest: "مشهد", logo: Kaspian, logoName: "کاسپین", goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '16:00', arriveTime: '18:00', capacity: 20, cost: 850000, name: 'Boeing MD' },
    { org: "تهران", dest: "مشهد", logo: Kaspian, logoName: 'کاسپین', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '12:00', arriveTime: '14:00', capacity: 20, cost: 880000, name: 'Fokker100' },
   
    { org: "مشهد", dest: "تهران", logo: Ata, logoName: 'آتا', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '10:00', arriveTime: '12:00', capacity: 15, cost: 880000, name: 'boeing737' },
    { org: "مشهد", dest: "تهران", logo: Ata, logoName: ' آتا', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '16:00', arriveTime: '18:00', capacity: 15, cost: 920000, name: 'Airbus A320' },
    { org: "مشهد", dest: "تهران", logo: Ata, logoName: 'آتا ', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '12:00', arriveTime: '14:00', capacity: 15, cost: 990000, name: 'boeing737' },

    { org: "مشهد", dest: "تهران", logo: Karoon, logoName: "آسمان", goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '4:00', arriveTime: '6:00', capacity: 20, cost: 850000, name: 'Fokker100' },
    { org: "مشهد", dest: "تهران", logo: Karoon, logoName: "آسمان", goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '9:00', arriveTime: '11:30', capacity: 20, cost: 1100000, name: 'Fokker100' },
    { org: "مشهد", dest: "تهران", logo: Karoon, logoName: 'آسمان', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '19:30', arriveTime: '21:10', capacity: 20, cost: 790000, name: 'Boeing MD' },
    
    { org: "مشهد", dest: "تهران", logo: Aseman, logoName: ' کارون', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '11:20', arriveTime: '13:50', capacity: 15, cost: 950000, name: 'Boeing MD' },
    { org: "مشهد", dest: "تهران", logo: Aseman, logoName: ' کارون', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '16:00', arriveTime: '18:00', capacity: 15, cost: 790000, name: 'boeing737' },
    { org: "مشهد", dest: "تهران", logo: Aseman, logoName: 'کارون ', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '12:00', arriveTime: '14:00', capacity: 15, cost: 800000, name: 'Airbus A320' },

    { org: "مشهد", dest: "تهران", logo: Kaspian, logoName: "کاسپین", goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '20:10', arriveTime: '22:15', capacity: 20, cost: 790000, name: 'Airbus A320' },
    { org: "مشهد", dest: "تهران", logo: Kaspian, logoName: "کاسپین", goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '16:00', arriveTime: '18:00', capacity: 20, cost: 850000, name: 'Boeing MD' },
    { org: "مشهد", dest: "تهران", logo: Kaspian, logoName: 'کاسپین', goDate: '1402/01/01', returnDate: '1402/01/30', gotime: '12:00', arriveTime: '14:00', capacity: 20, cost: 880000, name: 'Fokker100' },


   
   
   
   
   
   
   
    //     { org: "مشهد", dest: "تهران", desc: "پرواز اکونومی هواپیمایی قشم ایر  9:18", logo: Kaspian },
    //     { org: "تهران", dest: "مشهد", desc: "پرواز اکونومی هواپیمایی قشم ایر 5:00", logo: Ata },
    //     { org: "تهران", dest: "مشهد", desc: "پرواز اکونومی هواپیمایی ایران ایر 11:30", logo: IRair },
    //     { org: "تهران", dest: "مشهد", desc: "پرواز اکونومی هواپیمایی آسمان 5:00", logo: Aseman },
    //     { org: "مشهد", dest: "تهران", desc: "پرواز اکونومی هواپیمایی آسمان  9:35", logo: Karoon },
    //     { org: "مشهد", dest: "تهران", desc: "پرواز اکونومی هواپیمایی قشم ایر  9:18", logo: Kaspian },
    //     { org: "تهران", dest: "مشهد", desc: "پرواز اکونومی هواپیمایی قشم ایر 5:00", logo: Ata },
    //     { org: "تهران", dest: "مشهد", desc: "پرواز اکونومی هواپیمایی ایران ایر 11:30", logo: IRair },
    //     { org: "تهران", dest: "مشهد", desc: "پرواز اکونومی هواپیمایی آسمان 5:00", logo: Aseman },
    //     { org: "مشهد", dest: "تهران", desc: "پرواز اکونومی هواپیمایی آسمان  9:35", logo: Karoon },
    //     { org: "مشهد", dest: "تهران", desc: "پرواز اکونومی هواپیمایی قشم ایر  9:18", logo: Kaspian },
    //     { org: "تهران", dest: "مشهد", desc: "پرواز اکونومی هواپیمایی قشم ایر 5:00", logo: Ata }
    //     , { org: "تهران", dest: "مشهد", desc: "پرواز اکونومی هواپیمایی ایران ایر 11:30", logo: IRair },
    //     { org: "تهران", dest: "مشهد", desc: "پرواز اکونومی هواپیمایی آسمان 5:00", logo: Aseman },
    //     { org: "مشهد", dest: "تهران", desc: "پرواز اکونومی هواپیمایی آسمان  9:35", logo: Karoon },
    //     { org: "مشهد", dest: "تهران", desc: "پرواز اکونومی هواپیمایی قشم ایر  9:18", logo: Kaspian },
    //     { org: "تهران", dest: "مشهد", desc: "پرواز اکونومی هواپیمایی قشم ایر 5:00", logo: Ata },
    //     { org: "تهران", dest: "مشهد", desc: "پرواز اکونومی هواپیمایی ایران ایر 11:30", logo: IRair },
    //     { org: "تهران", dest: "مشهد", desc: "پرواز اکونومی هواپیمایی آسمان 5:00", logo: Aseman },
    //     { org: "مشهد", dest: "تهران", desc: "پرواز اکونومی هواپیمایی آسمان  9:35", logo: Karoon },
    //     { org: "مشهد", dest: "تهران", desc: "پرواز اکونومی هواپیمایی قشم ایر  9:18", logo: Kaspian },
    //     { org: "تهران", dest: "مشهد", desc: "پرواز اکونومی هواپیمایی قشم ایر 5:00", logo: Ata }
]
export default sample;