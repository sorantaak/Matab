import VideoCard from "./VideoCard";
import * as IoIcons from "react-icons/io";

function VideoSection() {
  return (
    <div className="bg-backSectionVideo mt-10 pb-12">
      <div className="w-4/5 container mx-auto">
        <h2 className="text-2xl py-10 text-center">ویدئوهای ما</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center align-middle gap-5">
          <div className="">
            <VideoCard />
          </div>
          <div className="">
            <VideoCard />
          </div>
          <div className="">
            <VideoCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
