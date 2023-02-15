import Image from "next/image";
import Slider from "react-slick";
import brandSlideDark from "../../data/brandSlideData";
import brandSlideLight from "../../data/brandSlideDataLight";
import { useTheme } from "next-themes";
brandSlideDark;
brandSlideLight;

const Brand = ({data}) => {
  const { theme, setTheme } = useTheme();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 3,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      {theme !== "dark" ? 
      
      <Slider {...settings} arrows={false}>
        {data.data[1].attributes.Brand_Image.data.map((item) => (
          <Image
            key={item.id}
            className=" overflow-hidden brand-img"
            src={item.attributes.url}
            width={150}
            height={50}
            alt="brand"
          />
        ))}
      </Slider>: 
      <Slider {...settings} arrows={false}>
      {data.data[0].attributes.Brand_Image.data.map((item) => (
        <Image
          key={item.id}
          className=" overflow-hidden brand-img"
          src={item.attributes.url}
          width={150}
          height={50}
          alt="brand"
        />
      ))}
    </Slider>}
    </div>
  );
};

export default Brand;
