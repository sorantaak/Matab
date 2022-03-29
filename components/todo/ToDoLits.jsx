import Image from "next/image";
function ToDoLits() {
  return (
    <div className="hidden mt-22 lg:grid  lg:grid-cols-3 gap-4 relative">
      <div>
        <div className="w-full bg-black/50 grid grid-cols-3 place-items-center gri-row-3 py-4 px-4">
          <div className="text-center row-span-3 pl-2">
            <Image className="" src="/image/hart.svg" width={72} height={67} />
          </div>
          <div className="col-span-2">
            <h2 className="text-darkGold text-2xl font-bold">سلامتی دندان</h2>
            <p className="text-gray-200 text-xs text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد
              استفاده قرار می گیرد
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full bg-black/50 grid grid-cols-3 place-items-center gri-row-3 py-4 px-4">
          <div className="text-center row-span-3 pl-2">
            <Image
              className=""
              src="/image/helthy.svg"
              width={100}
              height={93}
            />
          </div>
          <div className="col-span-2">
            <h2 className="text-darkGold text-2xl font-bold">زیبایی دندان</h2>
            <p className="text-gray-200 text-xs text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد
              استفاده قرار می گیرد
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full bg-black/50 grid grid-cols-3 place-items-center gri-row-3 py-4 px-4">
          <div className="text-center row-span-3 pl-2">
            <Image
              className=""
              src="/image/implants.svg"
              width={100}
              height={93}
            />
          </div>
          <div className="col-span-2">
            <h2 className="text-darkGold text-2xl font-bold">ایمپلنت دندان</h2>
            <p className="text-gray-200 text-xs text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم در صنایع چاپی مورد
              استفاده قرار می گیرد
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoLits;
