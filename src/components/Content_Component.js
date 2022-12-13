import { normalizeStyle } from "@ant-design/cssinjs/lib/hooks/useStyleRegister";
import React, { Suspense } from "react";
import LazyLoad from "react-lazy-load";

const logo1 = require("../assets/pic/5.png");
const foto1 = require("../assets/pic/sutit.png");
const foto2 = require("../assets/pic/vokal.png");
const foto3 = require("../assets/pic/gitar.png");

const gallery = () => {
  // const images = [foto1, foto2, foto3];
  const anggota = [
    {
      foto: foto1,
      nama: "Sultan",
      posisi: "Bass",
      instagram: "https://instagram.com/ssvltaan?igshid=ZmRlMzRkMDU=",
    },
    {
      foto: foto2,
      nama: "Dhiya",
      posisi: "Vokal",
      instagram: "https://instagram.com/dhiyatzq?igshid=ZmRlMzRkMDU=",
    },
    {
      foto: foto3,
      nama: "Alfian",
      posisi: "Gitar",
      instagram: "https://instagram.com/alvianmbrck?igshid=ZmRlMzRkMDU=",
    },
  ];

  return anggota.map((ag) => {
    return (
      <div
        class="w-30 mr3 ml4"
        style={{
          background: `url(${ag.foto})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <a href={ag.instagram}>
            <div class="box center flex">
              <div class="card ma5 mt7">
                <div class="imgBx">
                  <img src={ag.foto} alt="images" />
                </div>
                <div class="details">
                  <h2>
                    {ag.nama}
                    <br />
                    <span>{ag.posisi}</span>
                  </h2>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  });
};

const players = () => {
  const videos = [
    {
      judul: "Coldsvmmer - Michaella",
      link: "https://www.youtube.com/embed/u8-6KuzWDWs",
    },
    {
      judul: "Coldsvmmer - Admirer",
      link: "https://www.youtube.com/embed/svJKoG-jZ9g",
    },
    {
      judul: "Coldsvmmer - By Your Side",
      link: "https://www.youtube.com/embed/VzcYvUnrJf8",
    },
    {
      judul: "Coldsvmmer - Save Me",
      link: "https://www.youtube.com/embed/Xea1Qaudbzg",
    },
    {
      judul: "Coldsvmmer - Letting Go",
      link: "https://www.youtube.com/embed/UyshsxzNh2s",
    },
  ];

  return videos.map((video) => {
    return (
      <div class="ml3 mr3 w-40 h-100 mb3 mt3">
        <iframe src={video.link} class="db w-100 video-card" loading="lazy" />
        <span class="b center f3 white-70 fw3">{video.judul}</span>
      </div>
    );
  });
};

const song = () => {
  const songs = [
    {
      judul: "Michaela",
      link: "https://open.spotify.com/embed/artist/138waJFOBaoYmIcpe8ckSI?utm_source=generator",
    },
  ];

  return songs.map((sg) => {
    return <img src={sg.link} class="br4 h3 w3 dib"></img>;
  });
};

const ContentComponent = () => {
  return (
    <body>
      <article class="helvetica pb5">
        <header class="vh-100 dt w-100">
          <div
            style={{
              background: `url(${logo1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            class="dtc v-mid cover ph3 ph4-m ph5-l"
          >
            <h1
              class="f1 f-headline-l fw3 b white-90 tc "
              style={{ fontFamily: "Brush Script MT" }}
            >
              COLDSVMMER
            </h1>
          </div>
        </header>
        <div class=" vh-100 w-100 flex flex-row mt3">{gallery()}</div>
        <div class="cf justify-center flex flex-wrap mt5">{players()}</div>
        <div class="pa4 tc">{song()}</div>
      </article>
    </body>
  );
};

export { ContentComponent };
