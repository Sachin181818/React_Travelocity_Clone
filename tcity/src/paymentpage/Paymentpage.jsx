import React from "react";
import styles from "./payment.module.css";

const Paymentpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Frstdiv}>
        <div style={{ display: "flex" }}>
          <img
            style={{ height: "20px", width: "20px" }}
            src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
            alt=""
          />
          <h5 style={{ marginTop: "1px", marginLeft: "8px" }}>
            Room 1: 2 Adults 1 Queen Bed
          </h5>
        </div>
        <div>
          <div>
            <label htmlFor="">First name*</label>
            <br />
            <input type="text" placeholder="(e.g John)" />
          </div>
          <div style={{ flexDirection: "column", marginLeft: "30px" }}>
            <label htmlFor="">Last name*</label>

            <input type="text" placeholder="(e.g Smith)" />
          </div>
        </div>
        <div className={styles.noDiv}>
          <div>
            <p>Mobile phone number</p>
            <select name="" id="">
              <option value="USA +1">USA +1</option>
              <option value="IND +91">IND +91</option>
            </select>
          </div>
          <div
            style={{
              //   flexDirection: "column",
              marginLeft: "5px",
              marginTop: "50px",
            }}
          >
            <label htmlFor=""></label>
            <input type="text" placeholder="So the proporty can reach you." />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <input type="checkbox" style={{ height: "20px", width: "20px" }} />
          <p style={{ marginTop: "1px" }}>
            Receive text alerts about this trip. Message and data rates may
            apply
          </p>
        </div>
      </div>
    </div>
  );
};

export default Paymentpage;
