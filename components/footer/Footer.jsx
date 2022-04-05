import Link from "next/link";

function Footer() {
  const footerMenu = [
    "خانه",
    "اخبار",
    "سرویس ها",
    "درباره ما",
    "تماس باما",
    "سیستم نوبت دهی",
  ];
  const address = {
    address:
      "آذربایجان غربی - شهرستان مهاباد- خیابان صلاح الدین ایوبی غربی- ساختمان وفایی- طبقه 3",
    wahtsapp: "0914 977 3115",
    mobile: "0444 224 8888",
  };
  return (
    <div className="bg-black/75">
      <div className="w-4/5 container mx-auto py-12">
        <div className="grid grid-cols-1 space-y-7 lg:space-y-0 lg:grid-cols-2">
          <div className="grid grid-cols-1">
            <div>
              <h2 className="text-white text-xl">نقشه سایت</h2>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 pr-10 text-textFooter">
              {footerMenu.map((item) => (
                <span className="mt-3 hover:text-white">
                  <Link href="">{item}</Link>
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1">
              <div>
                <h2 className="text-white text-xl">آدرس:</h2>
              </div>
              <div className="grid grid-cols-1 grid-rows-1 pr-10 text-textFooter space-y-3">
                <p>{address.address}</p>
                <p>
                  <span className="ml-3">شماره واتساپ:</span>
                  <span dir="ltr">{address.wahtsapp}</span>
                </p>
                <p>
                  <span className="ml-3">شماره مطب:</span>
                  <span dir="ltr">{address.mobile}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10 text-gray-400">
          کلیه حقوق مادی و معنوی برای دندانپزشکی دکتر سلام رحیمی محفوظ است
        </p>
      </div>
    </div>
  );
}

export default Footer;
