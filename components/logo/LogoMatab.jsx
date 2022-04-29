import { motion } from "framer-motion";
import Image from "next/image";
function LogoMatab() {
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
            delay: 0.5,
          },
        },
      }}
    >
      <div className="text-center lg:text-right mt-5 lg:mt-5">
        <Image src="/image/logo.png" width={200} height={151} alt="img" />
      </div>
    </motion.div>
  );
}

export default LogoMatab;
