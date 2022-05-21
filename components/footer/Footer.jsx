import Link from "next/link";
import { en, fa } from "../../translation";
import { useRouter } from "next/router";
function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "fa" ? fa : en;

  const address = {
    address:
      "آذربایجان غربی - شهرستان مهاباد- خیابان صلاح الدین ایوبی غربی- ساختمان وفایی- طبقه 3",
    wahtsapp: "0914 977 3115",
    mobile: "0444 224 8888",
  };
  return (
    <div className=" bg-footer-img bg-center bg-cover bg-no-repeat bottom-0">
      <div className="w-4/5 container mx-auto py-12">
        <div className="grid grid-cols-1 space-y-7 lg:space-y-0 lg:grid-cols-2">
          <div className="grid grid-cols-1">
            <div>
              <h2 className="text-white text-xl">{t.footer.mapsite.title}</h2>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 rtl:pr-10 ltr:pl-10 text-textFooter">
              {t.mainnavbar.menu.map((item) => (
                <span key={item.id} className="mt-3 hover:text-white">
                  <Link href={item.path}>{item.title}</Link>
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1">
              <div>
                <h2 className="text-white text-xl">
                  {t.footer.address.title}:
                </h2>
              </div>
              <div className="grid grid-cols-1 grid-rows-1 rtl:pr-10 ltr:pl-10 text-textFooter space-y-3">
                <p>
                  {`${t.footer.address.state} - ${t.footer.address.city} - ${t.footer.address.street} - ${t.footer.address.apartment} - ${t.footer.address.floor}`}
                </p>
                <p>
                  <span className="rlt:ml-3 ltr:mr-3">
                    {t.footer.address.whatsapp_title}:
                  </span>
                  <span dir="ltr">{t.footer.address.whatssapp}</span>
                </p>
                <p>
                  <span className="rlt:ml-3 ltr:mr-3">
                    {t.footer.address.number_title}:
                  </span>
                  <span dir="ltr">{t.footer.address.whatssapp}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10 text-brightGold">
          {t.footer.mapsite.copyright}
        </p>
      </div>
    </div>
  );
}

export default Footer;
