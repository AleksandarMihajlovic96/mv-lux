import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import firstImage from "../../assets/1.jpg";
import secondImage from "../../assets/2.jpg";
import thirdImage from "../../assets/3.jpg";
import fourthImage from "../../assets/4.jpg";

const ImageSlider = () => {
  return (
    <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="d-block w-100" src={firstImage} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={secondImage} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={thirdImage} alt="slide 3" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={fourthImage} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  );
};

export default ImageSlider;
