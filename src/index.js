import initDropdowns from "./dropdowns/dropdowns";
import initCarousel from "./carousel/carousel";
// import carouselJSON from "./assets/carousel-2.json";
import "./style.css";

initDropdowns();
initCarousel({
  class: "img-group-2",
  images: [
    "https://machinelearningmastery.com/wp-content/uploads/2017/01/A-Gentle-Introduction-to-the-Random-Walk-for-Times-Series-Forecasting-with-Python.jpg",
    "https://www.kdnuggets.com/wp-content/uploads/tree-todd-quackenbush-unsplash.jpg",
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/random_forest_algorithm.jpg",
    "https://behavioralscientist.org/wp-content/uploads/2023/11/2023-10_Yates_Randomness-editorial_v2-1024x568.jpg",
    "https://machinelearningmastery.com/wp-content/uploads/2018/07/thomas-lipke-oIuDXlOJSiE-unsplash-1024x636.jpg",
  ],
});
// initCarousel(carouselJSON);
