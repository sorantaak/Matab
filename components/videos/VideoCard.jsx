function VideoCard() {
  return (
    <div className="felx flex-col shadow-md  rounded-md lg:shadow-none  p-3 py-8 justify-center transition-all  hover:scale-110 hover:bg-gray-100 hover:z-30 hover:shadow-md hover:text-sm hover:rounded-md">
      <div className="w-full">
        <video controls>
          <source src="/video/1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="text-center">
        <h3 className="text-md py-3 font-bold text-textParColor">
          دکتر سلام رحیمی
        </h3>
        <p className="text-justify top-6 text-textParColor select-none text-sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهلی
          و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
          گیرد.
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
