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
  ];

  return Album.map((album, index) => {
    return (
      <a href="#" className="card_album" key={index}>
        <img src={album.poster} />
        <p>{album.title}</p>
      </a>
    );
  });
};

const AboutPage = () => {
  return (
    <div className="about_row">
      <div className="about_card">
        <h1 style={{ fontFamily: "dancing script" }}>ColdSvmmer</h1>
        <h3>
          Coldsvmmer. is (3/3) Sultan, Alvian, and Dhiya, a jakarta based band
          that founded at 2001
        </h3>
      </div>
      <div className="about_album">
        <h1>Album/Song</h1>
        <div className="about_list_album">{SongAlbum()}</div>
      </div>
    </div>
  );
};

export { AboutPage };
