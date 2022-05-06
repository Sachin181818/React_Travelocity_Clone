import React from 'react'
import { useSelector } from 'react-redux'
import DropDownNav from './DropDownNav'
import styles from "./Navbar.module.css"


const Navbar = () => {
const login= useSelector((state)=>state.login);
const loginData= JSON.parse(localStorage.getItem("loginperson"))||"";
if(loginData!==""){
var loginperson=loginData.firstname;
}else{
  loginperson="";
}


  return (
    <div className={styles.navcontainer}>
       <div className={styles.iconbox}>
           <img src="https://www.travelocity.com/_dms/header/logo.svg?locale=en_US&siteid=80001&2" alt="" />
           <DropDownNav/>
       </div>
       <div className={styles.navlinks}>
       <h4>Espariol</h4>
       <h4>List your property</h4>
       <h4>Support</h4>
       <h4>Trips</h4>
       <h4>{login?loginperson:"Sign in"}</h4>
       </div>

    </div>
  )
}

export default Navbar