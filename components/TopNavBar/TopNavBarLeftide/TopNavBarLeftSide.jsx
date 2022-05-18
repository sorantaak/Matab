import Link from "next/link";
import { SocialMedia } from "./../../../data/SocialMediaData";
function TopNavBarLeftSide() {
  // console.log(SocialMedia);
  return (
    <div>
      <ul className="flex">
        {SocialMedia.map((item, index) => (
          <li key={index} className="pr-2 text-lg" title={item.title}>
            <Link href={item.path}>
              <a>{item.icon}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopNavBarLeftSide;
