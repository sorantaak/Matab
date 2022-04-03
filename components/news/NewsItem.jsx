import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
function NewsItem() {
  return (
    <div className="grid grid-cols-3 rounded-sm overflow-hidden shadow-md">
      <div className="col-span-1">
        <Image
          src="/image/dentist.jpg"
          layout="responsive"
          width={8192}
          height={5462}
        />
      </div>
      <div className="col-span-2 px-2">
        <h3 className="text-lg font-bold text-textParColor">عنوان خبر</h3>
        <p className="text-sm text-justify text-textParColor">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. .
        </p>
        <div className="flex flex-row justify-end">
          <span className="text-darkGold hover:text-brightGold">
            <Link href="#">بیشتر بخوانید</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
