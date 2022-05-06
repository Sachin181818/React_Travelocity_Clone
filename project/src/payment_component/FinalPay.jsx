import React from 'react'
import styles from "./Payment.module.css"
import PaymentIcon from '@mui/icons-material/Payment';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import SideSelect2 from './SideSelect2';
import {nanoid} from"nanoid"
const FinalPay = () => {
    let arr=["January","february","March","april","May","June","July","August","September","October","November","December"]
  return (
    <div  className={styles.finalpay}>

        <div>
            <PaymentIcon/>
            <DoneOutlineIcon style={{fontSize:"18px",color:"green"}}/>
            <p>We use secure transmission</p>
            <DoneOutlineIcon style={{fontSize:"18px",color:"green"}}/>
            <p> We protect your personal information</p>
        </div>
        <div style={{borderBottom:"1px solid grey"}}>
            <SideSelect2/>
        </div>
        <div className={styles.logobox}>
            <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg" alt="" />
            <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg" alt="" />
            <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_china_union_pay.svg" alt="" />
            <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_diners_club.svg" alt="" />
            <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg" alt="" />
            <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_jcb.svg" alt="" />
            <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg" alt="" />
        </div>
        <div>
        <p>Name on Card<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
        <input type="text" />
        <p>Debit/Credit card number<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
        <input type="text" />
        <p>Expiry date<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
        <select>
            {arr.map((el)=>{
                return(<option key={nanoid()} >{el}</option>)
            })}
        </select>
        </div>


    </div>
  )
}

export default FinalPay