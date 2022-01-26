import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <div className="flex container">
        <div className="logo flex">
          <img src="./favicon.svg" alt="logo" />
          <h4 className="weight-700 letter-10">MSTSKP</h4>
        </div>
        <nav className="flex">
          <a href="#Top">Top</a>
          <a href="#Features">Features</a>
          <a href="#Reasons">Reasons</a>
          <a href="#Alternatives">Alternatives</a>
        </nav>
        <div>
          <a href="#Mendaftar" className="color-white">Mendaftar</a>
          <a href="#Login" className="border-100">Login</a>
        </div>
      </div>
      <div>
        <p>MANA SAYA TAU SAYA KAN PENCURRY</p>
        <h1>
          Social Media Tool Yang Tidak Akan Memberikan Kamu Insight Apapun
        </h1>
        <p>
          Adalah benar apa yang kamu baca barusan. Tool yang mainstream akan
          memberikan kamu pelbagai insight, karena kami anti-mainstream maka
          kami akan melakukan sebaliknya.
        </p>
        <a href="#Memulai">Memulai Sekarang</a>
        <a href="#svg">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99999 18.8334C14.6024 18.8334 18.3333 15.1024 18.3333 10.5C18.3333 5.89765 14.6024 2.16669 9.99999 2.16669C5.39762 2.16669 1.66666 5.89765 1.66666 10.5C1.66666 15.1024 5.39762 18.8334 9.99999 18.8334Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.33331 7.16669L13.3333 10.5L8.33331 13.8334V7.16669Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Pelajarin Dulu
        </a>
      </div>
    </header>
  );
}
