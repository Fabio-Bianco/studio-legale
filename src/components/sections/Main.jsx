// src/components/sections/Main.jsx
import React from "react";
import "../../styles/Main.css";
import duoImage from "../../assets/hero_figures_final.png";

export default function Main() {
  return (
    <main className="main-section" aria-labelledby="chi-siamo-title">
      <div className="main-container">
        <h2 id="chi-siamo-title" className="main-title">Chi Siamo</h2>

        <div className="cards">
          {/* Card 1 */}
          <article className="card" aria-labelledby="avv-rossi">
            <figure className="card-media">
              <img
                src={duoImage}
                alt="Avvocatessa 1"
                className="avatar avatar--left"
              />
            </figure>
            <div className="card-body">
              <h3 id="avv-pat" className="card-name">Avv. Patrizia Livieri </h3>
              <p className="card-role">Diritto dell'immigrazione • Mediazione</p>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sapiente id nostrum enim quos? Nemo tempora possimus magnam totam. Qui id, consequatur voluptatem tempora eius ex doloremque vero dolore ab!
              </p>
              <a href="#profilo-patrizia" className="card-link">Profilo →</a>
            </div>
          </article>

          {/* Card 2 */}
          <article className="card" aria-labelledby="avv-bianchi">
            <figure className="card-media">
              <img
                src={duoImage}
                alt="Avvocatessa 2"
                className="avatar avatar--right"
              />
            </figure>
            <div className="card-body">
              <h3 id="avv-fed" className="card-name">Avv. Federica Bianchi</h3>
              <p className="card-role">Civile • Recupero Crediti</p>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus recusandae quaerat quidem vel vitae eligendi numquam odio mollitia amet velit dolorem, quasi voluptatem consequatur. Aspernatur id ut officiis! Commodi, ratione.
              </p>
              <a href="#profilo-federica" className="card-link">Profilo →</a>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
