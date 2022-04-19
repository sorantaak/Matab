import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { Shimmer } from "react-shimmer";
function NewsItem(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 rounded-md overflow-hidden shadow-lg border-0 sm:border-r-4 border-brightGold">
      <div className="col-span-1 h-full" fallback>
        <Image
          src={props.image}
          layout="responsive"
          width={8192}
          height={5462}
          loading="lazy"
        />
        {/* <Image
          src={props.image}
          fallback={<Shimmer width={800} height={300} />}
        /> */}
      </div>
      <div className="col-span-1 sm:col-span-2 px-2 flex flex-col justify-between space-y-2 sm:space-y-0">
        <h3 className="text-sm font-bold text-textParColor mt-3 sm:mt-0">
          {props.title}
        </h3>
        <p className="text-xs text-justify text-textParColor">
          {props.newSummary}
        </p>
        <div className="flex flex-row justify-end">
          <span className="text-darkGold hover:text-brightGold text-sm pb-2 md:pb-2 ">
            <Link href={`/news/${props.id}`}>بیشتر بخوانید</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
