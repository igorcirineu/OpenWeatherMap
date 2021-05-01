import React, { useState } from "react";
import Styles from "../styles/components/apiTest.module.css";
import axios from "axios";

export default function ApiTest() {
  const [city, setCity] = useState("");
  const [city2, setCity2] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [climate, setClimate] = useState("");

  const api = (city) => {
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=4c135629986be819e6c6c7a07e53f5c9`,
    })
      .then((response) => {
        setDados(response);
      })
      .catch((error) => {
        alert("Essa cidade não existe, digite uma cidade válida!");
        setCity("");
        setCity2("");
        setCountry("");
        setTemperature("");
        setHumidity("");
        setClimate("");
      });
  };

  function setDados(res) {
    console.log(res);
    setCity2(city);
    setCountry(res.data.sys.country);
    setTemperature((res.data.main.temp - 273.15).toFixed(2));
    setHumidity(res.data.main.humidity);
    setClimate(res.data.weather[0].main);
  }

  return (
    <div>
      <main>
        <section className={Styles.pesquisa}>
          <h2>DADOS METEOROLÓGICOS</h2>
          <div>
            <input
              type="text"
              value={city}
              placeholder="Digite a cidade"
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              className={Styles.btn}
              type="submit"
              onClick={() => {
                api(city);
              }}
            >
              Enviar
            </button>
          </div>
          <div className={Styles.dados}>
            <p className={Styles.borda}> Cidade: {city2}</p>
            <p> País: {country}</p>
            <p> Temperatura: {temperature}ºC</p>
            <p> Umidade: {humidity}%</p>
            <p> Clima: {climate}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
