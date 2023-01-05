import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";

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

  return anggota.map((ag, index) => {
    return (
      // <div className="flex center w-30">
      //   <Card cover={<img src={ag.foto} />}>
      //     <Meta style={{}} title={ag.nama} description={ag.posisi} />
      //   </Card>
      // </div>
      <div className="card_anggota" key={index}>
        <figcaption>
          <div>
            <img src={ag.foto} alt={ag.foto} />
          </div>
          <h2>{ag.nama}</h2>
          <p>{ag.posisi}</p>
        </figcaption>
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

  return videos.map((video, index) => {
    return (
      <div key={index}>
        <iframe src={video.link} className="db w-100 video-card" />
        <span className="b center f3 white-70 fw3">{video.judul}</span>
      </div>
    );
  });
};

const ContentComponent = () => {
  const isMobile = window.innerWidth <= 1200;

  return (
    <article className="helvetica pb5">
      <header className="vh-100 dt w-100">
        <div
          style={{
            background: `url(${logo1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="dtc v-mid cover ph3 ph4-m ph5-l"
        >
          <h1
            className="f1 f-headline-l fw3 b white-90 tc "
            style={{ fontFamily: "Brush Script MT" }}
          >
            COLDSVMMER
          </h1>
        </div>
      </header>
      <div className=" row_anggota">{cards()}</div>
      {isMobile ? (
        <div className="row_anggota">{players()}</div>
      ) : (
        <div className="row_playlist">{players()}</div>
      )}
    </article>
  );
};

export default ContentComponent;
