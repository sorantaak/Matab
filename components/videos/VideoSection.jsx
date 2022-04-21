import VideoCard from "./VideoCard";
import * as IoIcons from "react-icons/io";

function VideoSection() {
  return (
    <div className="bg-backSectionVideo mt-10 pb-12">
      <div className="w-4/5 container mx-auto">
        <h2 className="text-2xl py-10 text-center">ویدئوهای ما</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center align-middle gap-5">
          <div className="">
            <VideoCard src="/video/1.mp4" />
          </div>
          <div className="">
            <VideoCard src="/video/2.MP4" />
          </div>
          <div className="">
            <VideoCard src="/video/3.MP4" />
          </div>
          <div className="">
            <VideoCard src="/video/4.MP4" />
          </div>
          <div className="">
            <VideoCard src="/video/5.MP4" />
          </div>
          <div className="">
            <VideoCard src="/video/6.MP4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
