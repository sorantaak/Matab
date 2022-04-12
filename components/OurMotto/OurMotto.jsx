import { motion } from "framer-motion";
function OurMotto({ title, subTitle }) {
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
      <div className="text-brightGold lg:text-right sm:pt-0 text-center">
        <h1 className="text-2xl lg:text-xl">{title}</h1>
        <h2 className="text-3xl font-bold leading-loose">{subTitle}</h2>
      </div>
    </motion.div>
  );
}

export default OurMotto;
