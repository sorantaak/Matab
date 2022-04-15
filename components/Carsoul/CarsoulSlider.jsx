import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";
import * as IoIcons from "react-icons/io";
let count = 0;
let slideInterval;
function CarsoulSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const featuredImages = [
    "/image/1.jpg",
    "/image/2.jpg",
    "/image/3.jpg",
    "/image/4.jpg",
    "/image/5.jpg",
    "/image/6.jpg",
    "/image/7.jpg",
  ];
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };
  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);
    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOneNext();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOndePreviose = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOneNext = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  // console.log(slideRef);
  return (
    <div ref={slideRef} className="w-full select-none relative">
      {/* <div className="aspect-w-16 aspect-h-9"> */}
      {/* <img src={featuredImages[currentIndex]} alt="" /> */}
      <Image
        src={featuredImages[currentIndex]}
        width={526}
        height={326}
        layout="responsive"
      />
      {/* </div> */}
      <div className="absolute w-full top-1/2 transform -translate-y-1/2  flex justify-between">
        <button
          className="bg-black/25 hover:bg-black/50 transition-all py-5 md:py-10 pl-2 md:pl-5 rounded-l-full"
          onClick={handleOndePreviose}
        >
          <IoIcons.IoIosArrowForward className="text-5xl text-brightGold pr-0" />
        </button>
        <button
          className="bg-black/25 hover:bg-black/50 transition-all py-5 md:py-10 pr-2 md:pr-5 rounded-r-full"
          onClick={handleOneNext}
        >
          <span>
            <IoIcons.IoIosArrowBack className="text-5xl text-brightGold pr-15" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default CarsoulSlider;
