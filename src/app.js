/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let articles = ["the", "an", "some", "another", "any"];
  let adjectives = ["funny", "great", "stunning", "awesome", "thrilling"];
  let nouns = ["website", "blog", "webapp", "spot", "hub"];
  let tlds = [
    ".com",
    ".space",
    ".org",
    ".cln",
    ".rocks",
    ".cat",
    ".dog",
    ".blockbuster",
  ];

  let domainNames = [];

  for (let article of articles) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          domainNames.push(`${article}${adjective}${noun}${tld}`);
        }
      }
    }
  }

  document.body.innerHTML = `<ul>${domainNames.map(
    (domainName) => `<li>${domainName}</li>`
  )}</ul>`;
};
