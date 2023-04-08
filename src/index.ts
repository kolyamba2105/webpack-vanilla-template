import "./index.css";
import { createElement } from "./lib";

const root = document.getElementById("root");

if (root) {
  root.className = "flex items-center justify-center";

  const link = createElement("a", {
    // eslint-disable-next-line prettier/prettier
    className: "text-4xl text-sky-600 underline transition-all delay-100 duration-200 ease-in hover:text-sky-400",
    href: "https://github.com/kolyamba2105/webpack-vanilla-template",
    innerText: "Webpack Template",
    rel: "noreferrer",
    target: "_blank",
  });

  root.appendChild(link);
}
