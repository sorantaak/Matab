import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { en, fa } from "../../translation";
function OurMotto({ title, subTitle }) {
  const router = useRouter();
  const t = router.locale === "fa" ? fa : en;
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.75,
          },
        },
      }}
    >
      <div className="text-brightGold rtl:lg:text-right ltr:lg:text-left sm:pt-0 text-center">
        <h1 className="text-2xl lg:text-xl">{t.ourmMoto.title}</h1>
        <h2 className="text-3xl font-bold leading-loose">
          {t.ourmMoto.subTitle}
        </h2>
      </div>
    </motion.div>
  );
}

export default OurMotto;
