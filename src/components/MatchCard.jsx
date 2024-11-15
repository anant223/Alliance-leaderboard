import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
import {generateTopic} from "../utils/constant.js";
import { Image } from "primereact/image";


const MatchCard = ({ user, score, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-4">
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src={user.image}
            alt={user.name}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h3 className="text-xl font-semibold text-white">{user.name}</h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-[#f5c518] mr-1" />
              <span className="text-[#f5c518] font-bold">{user.rating}</span>
              <span className="text-gray-400 text-sm ml-2">
                Match Score: {score}
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-300">
          <strong className="text-white">Offers:</strong> {user.offers}
        </p>
        <p className="text-gray-300">
          <strong className="text-white">Needs:</strong> {user.needs}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-400 italic">
            {generateTopic(user.offers, user.needs)}
          </p>
          <button className="bg-[#f5c518] text-black px-3 py-1 rounded-full flex items-center text-sm font-bold hover:bg-[#ffd700] transition-colors duration-300">
            <MessageCircle className="w-4 h-4 mr-1" />
            Connect
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MatchCard

