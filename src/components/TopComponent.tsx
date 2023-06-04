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

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TopComponent = ({ isOpen, setIsOpen }: Props) => {
  const [index, setIndex] = useState(0);
  const mobileHeroImgs = [mobileHeroImg1, mobileHeroImg2, mobileHeroImg3];
  const desktHeroImgs = [desktHeroImg1, desktHeroImg2, desktHeroImg3];
  const [imgArr, setImgArr] = useState(mobileHeroImgs);

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
      <div className="lg:col-span-3 relative">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <button className="absolute flex bg-Black gap-9 p-4 items-center bottom-0  right-0 lg:-right-[91px]">
          <img
            src={arrowLeft}
            alt="arrow-left-icon"
            className="w-3 h-4 cursor-pointer"
            onClick={handlePrevImg}
          />
          <img
            src={arrowRight}
            alt="arrow-right-icon"
            className="w-3 h-4 cursor-pointer"
            onClick={handleNextImg}
          />
        </button>
        <img
          src={imgArr[index]}
          alt="hero-section-img"
          className="w-full lg:h-[600px]"
        />
      </div>
      <article className="flex flex-col justify-center gap-2 px-4 bg-White py-8 lg:col-span-2 lg:h-full lg:px-16">
        <h2 className="text-4xl font-bold mb-2">
          Discover innovative ways to decorate
        </h2>
        <p className="text-Darkgray">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
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
