/* eslint-disable react-hooks/exhaustive-deps */
import mobileHeroImg1 from "../assets/images/mobile-image-hero-1.jpg";
import mobileHeroImg2 from "../assets/images/mobile-image-hero-2.jpg";
import mobileHeroImg3 from "../assets/images/mobile-image-hero-3.jpg";
import desktHeroImg1 from "../assets/images/desktop-image-hero-1.jpg";
import desktHeroImg2 from "../assets/images/desktop-image-hero-2.jpg";
import desktHeroImg3 from "../assets/images/desktop-image-hero-3.jpg";

import arrowIcon from "../assets/images/icon-arrow.svg";
import arrowLeft from "../assets/images/icon-angle-left.svg";
import arrowRight from "../assets/images/icon-angle-right.svg";

import Navbar from "./Navbar";

import { useEffect, useState } from "react";
import Article from "./Article";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type contentProps = {
  title: string;
  body: string;
};

type contentsProps = contentProps[];

const TopComponent = ({ isOpen, setIsOpen }: Props) => {
  const [index, setIndex] = useState(0);
  const mobileHeroImgs = [mobileHeroImg1, mobileHeroImg2, mobileHeroImg3];
  const desktHeroImgs = [desktHeroImg1, desktHeroImg2, desktHeroImg3];
  const [imgArr, setImgArr] = useState(mobileHeroImgs);

  const contents: contentsProps = [
    {
      title: "Discover innovative ways to decorate",
      body: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      title: "We are available all across the globe",
      body: "With stores all over the world.It's easy for you to find furniture for you home or place of business.Locally, we're in most major cities throughout the country.Find the brach nearest you using our stores locator.Any questions? Don't hesitate to contact us today. ",
    },
    {
      title: "Manufactured with the best materials",
      body: "Our modern furniture store provide a high level of quality.Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand what customers want for their home and office",
    },
  ];

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevImg();
      } else if (e.key === "ArrowRight") {
        handleNextImg();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [imgArr, index]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1024) {
        setImgArr(mobileHeroImgs);
      } else {
        setImgArr(desktHeroImgs);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNextImg = () => {
    if (index < imgArr.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePrevImg = () => {
    if (index === 0) {
      setIndex(imgArr.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <div className="lg:col-span-8 relative">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="bg-Black flex absolute bottom-0 right-0 items-center lg:-right-[120px] gap-3">
          <button className="px-5 py-2">
            <img
              src={arrowLeft}
              alt="arrow-left-icon"
              onClick={handlePrevImg}
            />
          </button>
          <button className="px-5 py-2">
            <img
              src={arrowRight}
              alt="arrow-right-icon"
              onClick={handleNextImg}
            />
          </button>
        </div>

        <img
          src={imgArr[index]}
          alt="hero-section-img"
          className="w-full lg:h-[600px]"
        />
      </div>
      <article className="flex flex-col justify-center gap-2 px-4 bg-White py-8 lg:col-span-4 lg:h-full lg:px-16">
        <Article title={contents[index].title} body={contents[index].body} />
        <a href="#" className="w-[70%] flex items-center mt-5 gap-8">
          <div className="space-x-3">
            <span>S</span>
            <span>H</span>
            <span>O</span>
            <span>P</span>
          </div>
          <div className="space-x-3">
            <span>N</span>
            <span>O</span>
            <span>W</span>
          </div>
          <img src={arrowIcon} alt="arrow-icon" className="h-3" />
        </a>
      </article>
    </>
  );
};

export default TopComponent;
