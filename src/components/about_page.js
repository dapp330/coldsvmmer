import React from "react";

const SongAlbum = () => {
  const Album = [
    {
      poster:
        "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?b=1&s=170667a&w=0&k=20&c=1oQ2rt0FfJFhOcOgJ8hoaXA5gY4225BA4RdOP1RRBz4=",
      title: "A",
      link: "",
    },
    {
      poster:
        "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?b=1&s=170667a&w=0&k=20&c=1oQ2rt0FfJFhOcOgJ8hoaXA5gY4225BA4RdOP1RRBz4=",
      title: "B",
      link: "",
    },
    {
      poster:
        "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?b=1&s=170667a&w=0&k=20&c=1oQ2rt0FfJFhOcOgJ8hoaXA5gY4225BA4RdOP1RRBz4=",
      title: "C",
      link: "",
    },
    {
      poster:
        "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?b=1&s=170667a&w=0&k=20&c=1oQ2rt0FfJFhOcOgJ8hoaXA5gY4225BA4RdOP1RRBz4=",
      title: "C",
      link: "",
    },
    {
      poster:
        "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?b=1&s=170667a&w=0&k=20&c=1oQ2rt0FfJFhOcOgJ8hoaXA5gY4225BA4RdOP1RRBz4=",
      title: "C",
      link: "",
    },
    {
      poster:
        "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?b=1&s=170667a&w=0&k=20&c=1oQ2rt0FfJFhOcOgJ8hoaXA5gY4225BA4RdOP1RRBz4=",
      title: "C",
      link: "",
    },
  ];

  return Album.map((album, index) => {
    return (
      <div className="card_music">
        <div className="img">
          <img src={album.poster} />
        </div>
        <a href="#" key={index}></a>
      </div>
    );
  });
};

const AboutPage = () => {
  return (
    <div>
      <div className="music_album">
        <div className="row_music">{SongAlbum()}</div>
      </div>
    </div>
  );
};

export { AboutPage };
