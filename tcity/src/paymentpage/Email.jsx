import React from "react";
import styles from "./payment.module.css";

const Email = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Frstdiv}>
        <div style={{ display: "flex", marginLeft: "15px" }}>
          <img
            style={{ height: "40px", width: "40px" }}
            src="https://cdn-icons.flaticon.com/png/512/542/premium/542689.png?token=exp=1651930854~hmac=49a1516f8ac4ce305b3cf93d17f36e57"
            alt=""
          />
          <p style={{ marginLeft: "10px", margin: "auto" }}>
            Please enter the email address where you would like to receive your
            confirmation.
          </p>
        </div>
        <div className={styles.cardDetails}>
          <label htmlFor="">Email address*</label>
          <input type="email" />
        </div>
      </div>
    </div>
  );
};

export default Email;
