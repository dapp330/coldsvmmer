import React from "react";

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

const VideoComponent = () => {
  const isMobile = window.innerWidth <= 1200;
  return (
    <div className="mt6">
      {isMobile ? (
        <div className="row_anggota">{players()}</div>
      ) : (
        <div className="row_playlist">{players()}</div>
      )}
    </div>
  );
};

export { VideoComponent };
