import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TextRollEffect = ({ to, label }) => {
  const letters = label.split("");

  return (
    <Link to={to} className="block relative group overflow-hidden w-full text-5xl cursor-default text-center">

      <motion.span
        initial="rest"
        whileHover="hover"
        className="flex justify-center items-center">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            variants={{
              rest: { y: 0 },
              hover: { y: "-100%" }
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              delay: i * 0.03
            }}
            className="inline-block"
          >
            {/* Top */}
            <span className="block">{char}</span>

            {/* Bottom */}
            <span className="absolute top-full block font-extrabold text-[#ee0100]">
              {char}
            </span>
          </motion.span>
        ))}
      </motion.span>

    </Link>
  );
};

export default TextRollEffect;
