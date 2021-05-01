import React from "react";
import { withRouter } from "react-router-dom";
import Styles from "../styles/pages/Home.module.css";
import ApiTest from "../components/apiTest.js";

function Home() {
  return (
    <div>
      <header className={Styles.header}>
        <h1>OpenWeatherMap</h1>
      </header>
      <div className={Styles.barra}></div>
      <main className="container">
        <div className={Styles.main}>
          <div className="grid-6">
            <section className={Styles.section}>
              {" "}
              <ApiTest />
            </section>
          </div>

          <div className="grid-6">
            <section className={Styles.section}></section>
          </div>
        </div>
      </main>
    </div>
  );
}
export default withRouter(Home);
