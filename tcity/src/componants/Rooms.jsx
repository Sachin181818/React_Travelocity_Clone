import React from "react";
import styles from "./rooms.module.css";

const Rooms = (el) => {
  // console.log("el", el.el);
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.imgDiv}>
          <img
            src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/20dc6d28.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
            alt=""
          />
        </div>
        <h3>Room,Lagoon View</h3>
        <div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3916/3916996.png"
              alt=""
            />
            <p>{el.a}</p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3914/3914775.png"
              alt=""
            />
            <p> {el.b}</p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5074/5074654.png"
              alt=""
            />
            <p> {el.c} </p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3914/3914600.png"
              alt=""
            />
            <p> {el.d} </p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5074/5074014.png"
              alt=""
            />
            <p> {el.e} </p>
          </div>
          <div>
            <a href=".#">More details </a>
          </div>
          <hr />
        </div>
        <div className={styles.extras}>
          <h3>Extras</h3>

          <div>
            <div>
              <input type="radio" />
              <p> {el.f} </p>
            </div>
            <div>
              <p> {el.g}</p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p> {el.h} </p>
            </div>
            <div>
              <p> {el.i}</p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p>{el.j} </p>
            </div>
            <div>
              <p> {el.k}</p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p> {el.l} </p>
            </div>
            <div>
              <p> {el.m} </p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p> {el.n}</p>
            </div>
            <div>
              <p> {el.o}</p>
            </div>
          </div>
        </div>
        <div className={styles.btndiv}>
          <div>
            {" "}
            <h1>+ $30</h1>
            <button>Reserve</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
