import CarsoulSlider from "./CarsoulSlider";

function CarsoulAndAboutOffice() {
  return (
    <div className="container w-4/5 mx-auto">
      <div className="flex md:flex-row flex-col pt-10 md:items-center">
        <div className="flex-1">
          <h2 className="text-4xl">درباره مطب</h2>
          <p className="text-justify pt-1 rtl:pl-4 ltr:pr-4 text-sm lg:text-md mb-2 md:mb-0">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
        </div>
        <div className="flex-1">
          <CarsoulSlider />
        </div>
      </div>
    </div>
  );
}

export default CarsoulAndAboutOffice;
