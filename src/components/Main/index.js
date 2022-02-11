import React from "react";
import "./styles.css";

const Main = () => {
  const hoverBlack = (e) => {
    e.target
      .querySelector("rect")
      .setAttribute("fill", "rgba(255, 255, 255, 0.08)");
    e.target.querySelectorAll("path").forEach((path) => {
      path.setAttribute("stroke", "white");
    });
  };

  const hoverDefault = (e) => {
    e.target
      .querySelector("rect")
      .setAttribute("fill", "rgba(255, 233, 214, 1)");
    e.target.querySelectorAll("path").forEach((path) => {
      path.setAttribute("stroke", "rgba(252, 136, 29, 1)");
    });
  };

  return (
    <>
      <main className="container flex">
        <div>
          <p className="weight-600 first-color flex letter-10">
            <span
              className="line"
              style={{ "background-color": "var(--first-color)" }}
            ></span>
            KENAPA SIH?
          </p>
          <h2 className="weight-700 dark-color">
            Kenapa Kami Tidak Memberikan Insight Apapun?
          </h2>
          <p
            className="line-height-30"
            style={{ "margin-top": "20px", "margin-bottom": "50px" }}
          >
            Di sini kita akan klarifikasi mengapa kita tidak memberikan insight
            apapun di tool ini kepada kamu. Pada dasarnya hal ini kami lakukan
            semata-mata ingin menyelamatkan planet bumi.
          </p>
          <a
            className="color-white border-100 weight-700 flex"
            href="#Pelajari"
          >
            Pelajari Lebih Lanjut
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16.5L16 12.5L12 8.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 12.5H16"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="flex">
          <section
            onMouseEnter={(e) => hoverBlack(e)}
            onMouseLeave={(e) => hoverDefault(e)}
          >
            <h4 className="flex">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="5"
                  fill="rgba(255, 233, 214, 1)"
                />
                <path
                  d="M20 16.6666C24.1421 16.6666 27.5 15.5473 27.5 14.1666C27.5 12.7859 24.1421 11.6666 20 11.6666C15.8579 11.6666 12.5 12.7859 12.5 14.1666C12.5 15.5473 15.8579 16.6666 20 16.6666Z"
                  stroke="rgba(252, 136, 29, 1)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.5 20C27.5 21.3833 24.1667 22.5 20 22.5C15.8333 22.5 12.5 21.3833 12.5 20"
                  stroke="rgba(252, 136, 29, 1)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 14.1666V25.8333C12.5 27.2166 15.8333 28.3333 20 28.3333C24.1667 28.3333 27.5 27.2166 27.5 25.8333V14.1666"
                  stroke="rgba(252, 136, 29, 1)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Database
            </h4>
            <p>
              Data insight yang banyak kan bakal disimpen di database, ya kalo
              datanya banyak kan jadi gede juga size database-nya.
            </p>
          </section>
          <section
            onMouseEnter={(e) => hoverBlack(e)}
            onMouseLeave={(e) => hoverDefault(e)}
          >
            <h4 className="flex">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="5" fill="#FFE9D6" />
                <path
                  d="M26.6667 11.6666H13.3334C12.4129 11.6666 11.6667 12.4128 11.6667 13.3333V16.6666C11.6667 17.5871 12.4129 18.3333 13.3334 18.3333H26.6667C27.5872 18.3333 28.3334 17.5871 28.3334 16.6666V13.3333C28.3334 12.4128 27.5872 11.6666 26.6667 11.6666Z"
                  stroke="#FC881D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.6667 21.6666H13.3334C12.4129 21.6666 11.6667 22.4128 11.6667 23.3333V26.6666C11.6667 27.5871 12.4129 28.3333 13.3334 28.3333H26.6667C27.5872 28.3333 28.3334 27.5871 28.3334 26.6666V23.3333C28.3334 22.4128 27.5872 21.6666 26.6667 21.6666Z"
                  stroke="#FC881D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 15H15.0083"
                  stroke="#FC881D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 25H15.0083"
                  stroke="#FC881D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Server
            </h4>
            <p>
              Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis
              server harus idup terus, itu butuh listrik!
            </p>
          </section>
          <section
            onMouseEnter={(e) => hoverBlack(e)}
            onMouseLeave={(e) => hoverDefault(e)}
          >
            <h4 className="flex">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="5" fill="#FFE9D6" />
                <path
                  d="M20.8333 11.6666L12.5 21.6666H20L19.1667 28.3333L27.5 18.3333H20L20.8333 11.6666Z"
                  stroke="#FC881D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Listrik
            </h4>
            <p>
              Biaya listrik mahal, bos! Listrik kita ini masih batu bara, nggak
              bagus buat lingkungan. Kalo pake nuklir sih oke-oke aja.
            </p>
          </section>
          <section
            onMouseEnter={(e) => hoverBlack(e)}
            onMouseLeave={(e) => hoverDefault(e)}
          >
            <h4 className="flex">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="5" fill="#FFE9D6" />
                <path
                  d="M20 28.3333C24.6024 28.3333 28.3334 24.6023 28.3334 20C28.3334 15.3976 24.6024 11.6666 20 11.6666C15.3976 11.6666 11.6667 15.3976 11.6667 20C11.6667 24.6023 15.3976 28.3333 20 28.3333Z"
                  stroke="#FC881D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.6667 20H28.3334"
                  stroke="#FC881D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 11.6666C22.0844 13.9486 23.269 16.91 23.3334 20C23.269 23.0899 22.0844 26.0513 20 28.3333C17.9156 26.0513 16.7311 23.0899 16.6667 20C16.7311 16.91 17.9156 13.9486 20 11.6666V11.6666Z"
                  stroke="#FC881D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Lingkungan
            </h4>
            <p>
              Pokoknya nggak bagus lah buat lingkungan, ini alesan kita kenapa
              gak kasih insight. Demi menyelamatkan bumi!
            </p>
          </section>
        </div>
      </main>
      <div className="main-2 container">
        <div className="text-center">
          <p className="weight-600 letter-10">
            <span className="first-color">TERUS GIMANA?</span>
          </p>
          <h2 className="weight-700 dark-color">
            Terus Ngapain Dong Kalo Nggak Ada Insight Apapun?
          </h2>
          <p className="line-height-30">
            Ya nggak tau, salah sendiri lu ngapain ke website ini. Tapi ada tiga
            kemungkinan kenapa lo bisa ada di website ini. Ketiga kemungkinan
            itu akan gwej jabarkan di bawah ini dengan ilustrasinya hehehe.
          </p>
        </div>
        <div className="flex">
          <section>
            <div>
              <img src="./img/heart.png" alt="imagen de corazón"></img>
            </div>
            <h3 className="weight-600">Kamu Tidak Punya Kekasih</h3>
            <p>
              Sudah pasti orang yang tidak punya kekasih akan memiliki waktu
              luang yang banyak, jadi ya lo iseng aja gitu datang ke website
              ini.
            </p>
          </section>
          <section>
            <div>
              <img src="./img/emote.png" alt="imagen de emoticono"></img>
            </div>
            <h3 className="weight-600">Lo Wibu Autid</h3>
            <p>
              Iyh bener, biasanya wibu kalo nggak halu waifu suka iseng nggak
              jelas, termasuk mengunjungi website ini tanpa alasan yang jelas
              hehehe.
            </p>
          </section>
          <section>
            <div>
              <img src="./img/chicken.png" alt="imagen de pollo"></img>
            </div>
            <h3 className="weight-600">Kok Gambar Ayam?</h3>
            <p>
              Lah ngatur. Nggak tau lagi gwej alasan yang ketiga, biar bagus aja
              desainnya. Kalo cuman dua jadinya nggak bagus hehe.
            </p>
          </section>
        </div>
      </div>
      <div className="main-3">
        <div className="container color-white">
          <p className="weight-600 flex letter-10">
            <span
              className="line"
              style={{ "background-color": "rgb(255, 255, 255)" }}
            ></span>
            ALTERNATIVES
          </p>
          <h2 className="weight-700">
            Karena Tool Kita Ini Nggak Ada Apa-Apanya, Inilah Alternatifnya!
          </h2>
          <p className="line-height-30">
            Seperti yang lo tau sendiri ya, tool ini tuh nggak ada apa-apanya.
            Barangkali lo udah serius gitu butuh tool untuk sosial media, maka
            dari itu kita kasih 2 alternatif yang bisa lo pake untuk sosial
            media lo.
          </p>
        </div>
        <div className="container flex">
          <article className="flex">
            <img src="./img/web-1.png" alt="web"></img>
            <h3 className="weight-400">
              Buffer.com – Buffer is the most intuitive, affordable, and
              authentic way to reach more people on social media.
            </h3>
            <a className="flex weight-600" href="#learn1">
              Learn More
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 12H19.5"
                  stroke="#0D0E25"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 5L19.5 12L12.5 19"
                  stroke="#0D0E25"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </article>
          <article className="flex">
            <img src="./img/web-2.png" alt="web"></img>
            <h3 className="weight-400">
              Sendible.com – Grow your audience, attract new customers, and
              reach your social media goals with an all-in-one platform.
            </h3>
            <a className="flex weight-600" href="#learn1">
              Learn More
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 12H19.5"
                  stroke="#0D0E25"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 5L19.5 12L12.5 19"
                  stroke="#0D0E25"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </>
  );
};

export default Main;
