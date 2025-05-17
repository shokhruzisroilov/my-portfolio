import { v4 as uuidv4 } from "uuid";
import dreamsShop from "./assets/images/dreams-shop.jpg";
import countryInfo from "./assets/images/country-info-image.jpg";
import todoApp from "./assets/images/todo-app-image.jpg";
import owaBooks from "./assets/images/owa-books-image.jpg";
import excellanceTeam from "./assets/images/exellance-team.jpg";
import zummaPharma from "./assets/images/zumma-pharma.jpg";
import invest from "./assets/images/invest.jpg";
import bahorMenu from "./assets/images/bahor-menu.jpg";
import kasbiMaktab from "./assets/images/kasbi-maktab.jpg";

const ProjectCardData = [
  {
    id: uuidv4(),
    imgsrc: dreamsShop,
    title: "Dreams Shop",
    text: "Dreams Shop online market",
    view: "https://dreams-shop.vercel.app/",
    source: "https://github.com/shokhruzisroilov/dream-shop-e-commerse.git",
    filter: "react",
  },
  {
    id: uuidv4(),
    imgsrc: invest,
    title: "InvestIQ",
    text: "InvestIQ –  Iqtisodiy bilimlaringizni oshirishga yordam beruvchi loyiha!",
    view: "https://investiq.uz",
    source:
      "https://github.com/shokhruzisroilov/farrukhbeks-article-website.git",
    filter: "fullstack",
  },
  {
    id: uuidv4(),
    imgsrc: kasbiMaktab,
    title: "Касби туман 2-сон касб ҳунар мактаби",
    text: " ",
    view: "https://www.kasbi2-sonkhm.uz/",
    source: "",
    filter: "react",
  },
  {
    id: uuidv4(),
    imgsrc: bahorMenu,
    title: "Bahor restarani uchun menyu websayti",
    text: " ",
    view: "https://bahor-foods-menu-site.vercel.app/",
    source: "https://github.com/shokhruzisroilov/bahor-foods-menu-site.git",
    filter: "fullstack",
  },
  {
    id: uuidv4(),
    imgsrc: excellanceTeam,
    title: "ExcelLance Website",
    text: "ExcelLance my team website",
    view: "https://excellance-team.vercel.app/",
    source: "https://github.com/shokhruzisroilov/excellance-team.git",
    filter: "landing",
  },
  {
    id: uuidv4(),
    imgsrc: owaBooks,
    title: "Owa Books Website",
    text: "Owa books crud website",
    view: "https://owa-books-eta.vercel.app/sign-in",
    source: "https://github.com/shokhruzisroilov/owa-books.git",
    filter: "react",
  },
  {
    id: uuidv4(),
    imgsrc: countryInfo,
    title: "Country Info",
    text: "Information about countries and a site that works with api.",
    view: "https://2-country-info.vercel.app/",
    source: "https://github.com/shokhruzisroilov/CountryInfo.git",
    filter: "react",
  },
  {
    id: uuidv4(),
    imgsrc: todoApp,
    title: "React Todo App",
    text: "Beautiful and functional todo app",
    view: "https://todo-app-project1.vercel.app/",
    source: "https://github.com/shokhruzisroilov/TodoApp.git",
    filter: "react",
  },

  {
    id: uuidv4(),
    imgsrc: zummaPharma,
    title: "Zumma Pharma website",
    text: " ",
    view: "https://zumma-pharma-site.netlify.app/",
    source: "https://github.com/shokhruzisroilov/OwaBooks-react",
    filter: "landing",
  },
];

export default ProjectCardData;
