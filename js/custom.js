const babelImport = (src) => {
  const script = document.createElement("script");

  script.type = "text/babel";
  script.src = src;
  script.dataset.type = "module";
  script.dataset.presets = "react";
  script.dataset.plugins = "transform-modules-umd";

  document.body.appendChild(script);
};

const globalImport = (src) => {
  const script = document.createElement("script");

  script.type = "text/javascript";
  script.src = src;

  document.body.appendChild(script);
}

globalImport("https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js");
globalImport("https://cdn.jsdelivr.net/npm/chart.js@4.3.0/dist/chart.umd.min.js");

babelImport("/js/custom.js");
babelImport("/js/src/components/Card.js");
babelImport("/js/src/components/Title.js");

babelImport("/js/src/app.js");
