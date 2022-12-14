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

  return Album.map((album) => {
    return (
      <div>
        <a href="#" class="no-underline white">
          <div class="flex flex-column">
            <img src={album.poster} class="br4 h3 w3 dib mr4"></img>
            <span class="b center">{album.title}</span>
          </div>
        </a>
      </div>
    );
  });
};

const AboutPage = () => {
  return (
    <div class="flex flex-column justify-center pa7">
      <div class="flex flex-column b--white bl bt br bb bw1 mw7 white mw6">
        <h1
          class="justify-center flex"
          style={{ fontFamily: "dancing script" }}
        >
          ColdSvmmer
        </h1>
        <div class="pa4 content-center">
          <h3>
            Coldsvmmer. is (3/3) Sultan, Alvian, and Dhiya, a jakarta based band
            that founded at 2001
          </h3>
        </div>
      </div>
      <div class="flex mt6 flex-column">
        <div class="justify-center flex">
          <h1 class="white">Album/Song</h1>
        </div>
        <div class="flex justify-center mt4 white">{SongAlbum()}</div>
      </div>
    </div>
  );
};

export { AboutPage };
