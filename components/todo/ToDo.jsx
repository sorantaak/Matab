import Image from "next/image";
import { useState, useEffect } from "react";

function ToDo() {
  const [svgWidth, setWidthSvg] = useState(220);
  const [svgHeight, setHeightSvg] = useState(205);
  const handleResizeWindow = () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 1024 && window.innerWidth >= 639) {
      // setShowMenu(false);
      setWidthSvg(100);
      setHeightSvg(93);
    } else {
      setWidthSvg(220);
      setHeightSvg(205);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
  });
  return (
    <div className="space-y-1 lg:flex lg:flex-row lg:space-y-0 mt-24 h-full inline-block align-middle">
      <div className="bg-black/50 px-2 flex lg:ml-1">
        <div className="pt-5 pl-2">
          <Image src="/image/hart.svg" width={svgWidth} height={svgHeight} />
        </div>
        <div className="py-2">
          <h2 className="text-brightGold text-2xl lg:text-xl">سلامتی دندان</h2>
          <p className="text-[#C5C5C5] text-justify text-sm lg:text-xs">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد استفاده
            قرار می گیرد
          </p>
        </div>
      </div>

      <div className="bg-black/50 px-2 flex lg:ml-1">
        <div className="pt-5 pl-2 lg:pl-0">
          <Image src="/image/helthy.svg" width={svgWidth} height={svgHeight} />
        </div>
        <div className="py-2">
          <h2 className="text-brightGold text-2xl lg:text-xl">سلامتی دندان</h2>
          <p className="text-[#C5C5C5] text-justify text-sm lg:text-xs">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد استفاده
            قرار می گیرد
          </p>
        </div>
      </div>

      <div className="bg-black/50 px-2 flex lg:ml-1">
        <div className="pt-5 pl-2 lg:pl-0">
          <Image
            src="/image/implants.svg"
            width={svgWidth}
            height={svgHeight}
          />
        </div>
        <div className="py-2">
          <h2 className="text-brightGold text-2xl lg:text-xl">سلامتی دندان</h2>
          <p className="text-[#C5C5C5] text-justify text-sm lg:text-xs">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد استفاده
            قرار می گیرد
          </p>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
