import React from "react";
import "./stylesheels/Footer.css";

export function Footer() {
  return (
    <>
      <div className="svgFooter">
        <div className="svg"></div>
      </div>
      <footer>
        <div className="container90">
          <div className="Footer">
            <article>
              <img src="" alt="logo" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              facere!
            </article>
            <article className="">
              <h1>Contactanos</h1>
              <form action="" method="GET" className="formFooter">
                <div className="formRow">
                  <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" className="formText" />
                  </div>
                  <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" className="formText" />
                  </div>
                </div>
                <div className="">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="formText"
                  ></textarea>
                </div>
              </form>
            </article>
          </div>
        </div>
      </footer>
    </>
  );
}
