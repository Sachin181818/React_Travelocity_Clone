import React from "react";
import styles from "./payment.module.css";
const SecondDiv = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Frstdiv}>
        <div style={{ display: "flex" }}>
          <img
            style={{ height: "20px", width: "20px" }}
            src="https://t4.ftcdn.net/jpg/01/85/20/91/240_F_185209122_hkk9A7lkHYDTSRJJpzP4Ve6BAeKQXQc4.jpg"
            alt=""
          />
          <h3 style={{ marginTop: "-5px", marginLeft: "9px" }}>
            Protect your hotel
          </h3>
          <div className={styles.head}>Recommonded</div>
        </div>
        <div className={styles.note}>
          <img
            style={{
              height: "25px",
              width: "25px",
              marginTop: "12px",
              marginRight: "10px",
            }}
            src="https://cdn-icons.flaticon.com/png/512/4203/premium/4203590.png?token=exp=1651922158~hmac=90c0110341c138fa3439632e53a13769"
            alt=""
          />
          <h4>Important:</h4>
          <p>
            Trip cancellation due to government travel advisories, fear of
            travel, or change of mind is not covered. Travel insurance may
            provide coverage for COVID-19 diagnosed illness. COVID-19 is a
            foreseen event and certain other coverages will not apply{" "}
          </p>
        </div>
        {/* 2 */}
        <div style={{ display: "flex", FlexDirection: "column" }}>
          <div>
            <ol>
              <h3>4 reasons you might need travel protection</h3>
              <li></li>
              <li>
                You get delayed for covered reasons and miss a night of your
                hotel stay
              </li>
              <li>You're sick and don't use all your hotel nights</li>
              <li>
                You need to extend your trip due to the illness of a travel
                companion
              </li>
              <li>
                You need up to $10,000 for covered medical expenses while on
                your trip
              </li>
            </ol>
          </div>
        </div>
        {/* 3rd  */}
        <div className={styles.radiodiv}>
          <h2>Select Yes or No to continue booking </h2>
          <div>
            <input type="radio" />
            <p>Yes, I want Hotel Booking Protection Plus for my trip.</p>
            <h1>$8.00</h1>
          </div>
          <div style={{ flexDirection: "row" }}>
            <input type="radio" />
            <p>No, I'm willing to risk my $94.64 trip.</p>
          </div>

          <p style={{ fontStyle: " italic" }}>
            “ Things happened outside of my control which caused the trip to be
            canceled. The Travel Protection was valuable in reducing the losses
            to me when we had to cancel the trip. ” - Mr. Rodman
          </p>
        </div>
      </div>
      {/* 4rth div */}
    </div>
  );
};

export default SecondDiv;
