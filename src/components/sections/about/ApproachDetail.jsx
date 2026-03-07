import Image from "next/image";
import { motion } from "framer-motion";

export default function ApproachDetail({ item, index }) {
  const isEven = Number(index) % 2 === 0;
  const fadeDown = {
    hidden: { opacity: 0, y: -40 },
    show: { opacity: 1, y: 0 }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div
      key={index}
      className="relative lg:min-h-180 p-10  lg:border-r last:border-r-0 flex flex-row lg:flex-col justify-between"
    >      
      {/* BUFFER TO MAKE UI MORE CLEAN */}
      {!isEven && <div className="hidden lg:block"></div>}

      {/* TEXT ATAS */}
      {isEven && (
        <motion.div 
          className="w-full"
          variants={fadeDown}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="text-foreground/40 mb-6">{item.number}</h4>
          <h3 className="lg:max-w-52">
            {item.title}
          </h3>
          <p className="text-[16px] lg:max-w-80 mt-15">
            {item.description}
          </p>
        </motion.div>
      )}

      {/* IMAGE CENTER */}
      <motion.div 
        className="hidden lg:block relative w-60 h-60 mx-auto shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/approach/Approach.png"
          alt={item.title}
          fill
          className="object-cover object-center"
        />
      </motion.div>

      {/* TEXT BAWAH */}
      {!isEven && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="text-foreground/40 mb-6">{item.number}</h4>
          <h3 className="mb-6">
            {item.title}
          </h3>
          <p className="text-[16px] max-w-80 mt-15">
            {item.description}
          </p>
        </motion.div>
      )}

      {/* BUFFER TO MAKE UI MORE CLEAN */}
      {isEven && <div className="hidden lg:block"></div>}
    </div>
  );
}
