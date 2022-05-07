import React from "react";
import styles from "./payment.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Frstdiv}>
        <div style={{ display: "flex", marginLeft: "15px" }}>
          <img
            style={{ height: "40px", width: "40px" }}
            src="https://cdn-icons-png.flaticon.com/512/3037/3037247.png"
            alt=""
          />
          <p style={{ marginLeft: "10px", margin: "auto" }}>
            Payment information is only needed to hold your reservation.
            MasterCard Visa
          </p>
        </div>
        <div style={{ marginLeft: "30px", marginTop: "30px" }}>
          <img
            src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg"
            alt=""
          />
          <img
            src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg"
            alt=""
          />
        </div>
        <div className={styles.cardDetails}>
          <div>
            <label htmlFor="">Name on Card*</label>
            <input type="text" style={{ width: "500px" }} />
          </div>
          <div style={{ flexDirection: "column" }}>
            <label htmlFor="">Debit/Credit card number*</label>
            <input type="number" style={{ width: "350px" }} />
          </div>
          <div
            style={{
              width: "350px",
              background: "#D2E6C8",
              height: "40px",
              marginTop: "10px",
            }}
          >
            <p style={{ marginTop: "8px", marginLeft: "15px" }}>
              Only needed to guarantee your booking
            </p>
          </div>
          <div>
            <label htmlFor="">Expiration date*</label>

            <div className={styles.date}>
              <div>
                <select name="Month" id="">
                  <options>01 January</options>
                  <options>02 February</options>
                  <options>03 March</options>
                  <options>04 April</options>
                  <options>05 May</options>
                  <options>06 June</options>
                  <options>07 July</options>
                  <options>08 August</options>
                  <options>09 September</options>
                  <options>10 October</options>
                  <options>11 November</options>
                  <options>12 December</options>
                </select>
              </div>

              <div>
                <select name="Year" id="">
                  <options>2022</options>
                  <options>2023</options>
                  <options>2024</options>
                  <options>2025</options>
                  <options>2026</options>
                  <options>2027</options>
                  <options>2028</options>
                  <options>2029</options>
                  <options>2030</options>
                  <options>2031</options>
                  <options>2032</options>
                  <options>2033</options>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="">Security Code</label>
            <input type="number" style={{ width: "100px", height: "40px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
