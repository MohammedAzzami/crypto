import { motion } from "framer-motion";
import { fadeIn } from "./Variants";

const Coin = ({ name, price, symbol, icon }) => {
    return (
        <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.05 }}
            viewport={{ once: false, amount: 0 }}
            className="flex flex-col justify-center text-white items-center bg-grey gap-2 relative max-w-[18rem] w-full mx-auto p-3 rounded-xl transition-all duration-500 mb-5">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <img src={icon} width={40} height={40} />
            <h3 className="text-xl font-sans">{price}</h3>
            <h3 className="text-2xl font-sansita">{symbol}</h3>
        </motion.div>
    )
}

export default Coin