import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const logo1 = require("../assets/pic/5.png");
const foto1 = require("../assets/pic/sutit.png");
const foto2 = require("../assets/pic/vokal.png");
const foto3 = require("../assets/pic/gitar.png");

//home page picture
const cards = () => {
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
      <div class="flex center w-30">
        <Card cover={<img src={ag.foto} style={{ height: "25rem" }} />}>
          <Meta style={{}} title={ag.nama} description={ag.posisi} />
        </Card>
      </div>
    );
  });
};

//video player
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
        <iframe src={video.link} class="db w-100 video-card" />
        <span class="b center f3 white-70 fw3">{video.judul}</span>
      </div>
    );
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
        <div class=" vh-100 w-100 flex flex-row mt3">{cards()}</div>
        <div class="cf justify-center flex flex-wrap mt5">{players()}</div>
      </article>
    </body>
  );
};

export default ContentComponent;
