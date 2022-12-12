import React from "react";

const FooterComponent = () => {
  return (
    <div>
      <footer class="pv4 ph3 ph5-m ph6-l mid-gray white">
        <small class="f6 db tc">
          © 2022 <b class="ttu">DUO TAMPAN</b>., All Rights Reserved
        </small>
        <div class="tc mt3">
          <a
            href="/language/"
            title="Language"
            class="f6 dib white ph2 link mid-gray dim"
          >
            Language
          </a>
          <a
            href="/terms/"
            title="Terms"
            class="f6 white dib ph2 link mid-gray dim"
          >
            Terms of Use
          </a>
          <a
            href="/privacy/"
            title="Privacy"
            class="f6 dib ph2 link mid-gray white dim"
          >
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
};

export { FooterComponent };
