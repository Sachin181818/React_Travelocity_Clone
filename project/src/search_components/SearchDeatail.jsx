import React from 'react'
import styles from './Search.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Event';
import ScheduleSendTwoToneIcon from '@mui/icons-material/ScheduleSendTwoTone';


const SearchDeatail = () => {
  let search=JSON.parse(localStorage.getItem("travel"))||{}
  return (
    <div>

            <div className={styles.upperform}>
             <div className={styles.inputbox1}>
               <LocationOnIcon/>
               <p>Going to</p>
               <input type="text" name="going" />
             </div>
             <div className={styles.datebox1}>
               <p style={{marginLeft:"5px"}}>Check-in&nbsp;&nbsp;</p>
               <ScheduleSendTwoToneIcon/> 
               <input type="date" name="checkin" />
             </div>
             <div className={styles.datebox1}>
               <p style={{marginLeft:"5px"}}>Check-out&nbsp;</p>
               <ScheduleSendTwoToneIcon/> 
               <input type="date" name="checkout"  />
             </div>
          </div>

    </div>
  )
}

export default SearchDeatail