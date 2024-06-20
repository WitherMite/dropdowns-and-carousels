import initDropdowns from "./dropdowns/dropdowns";
import initCarousel from "./carousel/carousel";
import carouselJSON from "./assets/carousel-2.json";
import "./style.css";

initDropdowns();
initCarousel({
  class: "img-group-1",
  images: [
    "https://picsum.photos/300/150",
    "https://picsum.photos/300/150",
    "https://picsum.photos/300/150",
  ],
});
initCarousel(carouselJSON);
