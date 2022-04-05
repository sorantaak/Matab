import Image from "next/image";
function ToDoLits() {
  const myJob = [
    {
      id: 1,
      iconSrc: "/image/hart.svg",
      moto: "سلامتی دندان",
      title:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد استفاده قرار می گیرد",
    },
    {
      id: 2,
      iconSrc: "/image/helthy.svg",
      moto: "زیبایی دندان",
      title:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد استفاده قرار می گیرد",
    },
    {
      id: 3,
      iconSrc: "/image/implants.svg",
      moto: "ایمپلنت دندان",
      title:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد استفاده قرار می گیرد",
    },
  ];
  return (
    <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-3 gap-3 relative">
      {myJob.map((jobItem) => (
        <div>
          <div className="flex flex-row w-full bg-black/50  place-items-center py-4 px-4">
            <div className="basis-1/4 text-center pl-2">
              <Image
                className=""
                src={jobItem.iconSrc}
                width={100}
                height={93}
              />
            </div>
            <div className="basis-11/12">
              <h2 className="text-darkGold text-2xl font-bold">
                {jobItem.moto}
              </h2>
              <p className="text-gray-200 text-xs text-justify">
                {jobItem.title}
              </p>
            </div>
          </div>
        </div>
      ))}
      {/* <div>
        <div className="flex flex-row w-full bg-black/50  place-items-center py-4 px-4">
          <div className="basis-1/4 text-center pl-2">
            <Image className="" src="/image/hart.svg" width={72} height={67} />
          </div>
          <div className="basis-11/12">
            <h2 className="text-darkGold text-2xl font-bold">سلامتی دندان</h2>
            <p className="text-gray-200 text-xs text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد
              استفاده قرار می گیرد
            </p>
          </div>
        </div>
      </div> */}

      {/* <div>
        <div className="flex flex-row w-full bg-black/50 place-items-center  py-4 px-4">
          <div className="basis-1/4 text-center pl-2">
            <Image
              className=""
              src="/image/helthy.svg"
              width={100}
              height={93}
            />
          </div>
          <div className="basis-11/12">
            <h2 className="text-darkGold text-2xl font-bold">زیبایی دندان</h2>
            <p className="text-gray-200 text-xs text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد
              استفاده قرار می گیرد
            </p>
          </div>
        </div>
      </div> */}

      {/* <div>
        <div className="flex flex-row w-full bg-black/50  place-items-center py-4 px-4">
          <div className="text-center row-span-3 pl-2">
            <Image
              className=""
              src="/image/implants.svg"
              width={100}
              height={93}
            />
          </div>
          <div className="">
            <h2 className="text-darkGold text-2xl font-bold">ایمپلنت دندان</h2>
            <p className="text-gray-200 text-xs text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد
              استفاده قرار می گیرد
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ToDoLits;
