import { GoHome } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
export const navlinks = [
  { link: "home", path: "/", icon: GoHome },
  { link: "market", path: "/market", icon: AiOutlineShopping },
];
export const productNavLinks = [
  { link: "Телефоны", path: "/market/phone", eng: "phone" },
  { link: "Телевизоры", path: "/market/tv", eng: "tv" },
  { link: "Ноутбуки", path: "/market/notebook", eng: "notebook" },
  { link: "Smart Часы", path: "/market/smartwatch", eng: "smartwatch" },
  { link: "Пылесосы", path: "/market/vacuumCleaner", eng: "vacuumCleaner" },
  {
    link: "Стиральные машины",
    path: "/market/washingMachine",
    eng: "washingMachine",
  },
];
export const news = {
  phone:
    "https://fora.kz/images/content/articles/obzor-samsung-galaxy-a54_6437d1554d0db.jpg",
  watch:
    "https://fora.kz/images/content/articles/obzor-apple-watch-ultra-est-dva-stula_641d39c81bc97.jpg",
  notebook:
    "https://fora.kz/images/content/articles/obzor-huawei-matebook-14-rabocij-noutbuk-s-otlicnym-displeem-umeusij-udivlat_6414580e96597.jpg",
  headphones:
    "https://fora.kz/images/content/articles/obzor-airpods-pro-2-novaa-nacinka-v-starom-dizajne_6389ee92549fb.jpg",
  videoWebm: "https://fora.kz/files/articles/Gotov_webm_64183e8f9435d.webm",
  videoMp4: "https://fora.kz/files/articles/Gotov_mp4_64183e8f93d08.mp4",
};
