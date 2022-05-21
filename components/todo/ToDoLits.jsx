import Image from "next/image";
import { motion } from "framer-motion";
function ToDoLits() {
  const myJob = [
    {
      id: 1,
      iconSrc: "/image/hart.svg",
      title: "سلامتی دندان",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد استفاده قرار می گیرد",
    },
    {
      id: 2,
      iconSrc: "/image/helthy.svg",
      title: "زیبایی دندان",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد استفاده قرار می گیرد",
    },
    {
      id: 3,
      iconSrc: "/image/implants.svg",
      title: "ایمپلنت دندان",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد استفاده قرار می گیرد",
    },
  ];
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 1,
          },
        },
      }}
    >
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-3 gap-3 mb-5">
        {myJob.map((jobItem) => (
          <div key={jobItem.id}>
            <div className="flex flex-row w-full lg:max-w-[400px] bg-black/50 place-items-center p-4">
              <div className="basis-1/4 text-center rtl:pl-2 ltr:pr-2">
                <Image
                  className=""
                  src={jobItem.iconSrc}
                  width={100}
                  height={93}
                  alt="img"
                />
              </div>
              <div className="basis-11/12">
                <h2 className="text-darkGold text-xl lg:text-2xl font-bold">
                  {jobItem.title}
                </h2>
                <p className="text-gray-200 text-sm md:text-[16px] lg:text-[14px] text-justify">
                  {jobItem.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default ToDoLits;
