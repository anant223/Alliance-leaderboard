import { initialUsers} from "../utils/constant.js";
import { motion } from "framer-motion";
import React, { useState } from "react";
import MatchCard from "../components/MatchCard.jsx";
        

export default function AlliancePage() {
  const [users, setUsers] = useState(initialUsers);
  const [name, setName] = useState("");
  const [offer, setOffer] = useState("");
  const [need, setNeed] = useState("");
  const [matches, setMatches] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name,
      offers: offer,
      needs: need,
      image: `/placeholder.svg?height=100&width=100&text=${name.charAt(0)}`,
      rating: (Math.random() * (5 - 3) + 3).toFixed(1),
    };
    setUsers([...users, newUser]);
    findMatches(newUser);
    setName("");
    setOffer("");
    setNeed("");
  };

  const findMatches = (currentUser) => {
    const newMatches = users
      .filter((user) => user.id !== currentUser.id)
      .map((user) => ({
        user,
        score:
          (user.offers.toLowerCase().includes(currentUser.needs.toLowerCase())
            ? 1
            : 0) +
          (user.needs.toLowerCase().includes(currentUser.offers.toLowerCase())
            ? 1
            : 0),
      }))
      .filter((match) => match.score > 0)
      .sort((a, b) => b.score - a.score);
    setMatches(newMatches);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <header className="bg-[#121212] border-b border-[#252525] py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#f5c518]">Your Alliance</h1>
        </div>
      </header>

      <main className="container mx-auto px-36 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1a1a] rounded-lg p-6 mb-8 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#f5c518]">
            Share Your Skills and Needs
          </h2>
          <form onSubmit={handleSubmit} className="space-x-4 flex items-center">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md bg-[#2c2c2c] border-[#3a3a3a] text-white shadow-sm focus:border-[#f5c518] focus:ring focus:ring-[#f5c518] focus:ring-opacity-50 py-2 px-4"
                required
              />
            </div>
            <div>
              <label
                htmlFor="offer"
                className="block text-sm font-medium text-gray-300"
              >
                What do you offer?
              </label>
              <input
                id="offer"
                value={offer}
                onChange={(e) => setOffer(e.target.value)}
                className="mt-1 block w-full rounded-md bg-[#2c2c2c] border-[#3a3a3a] text-white shadow-sm focus:border-[#f5c518] focus:ring focus:ring-[#f5c518] focus:ring-opacity-50 py-2 px-4"
                rows={3}
                required
              />
            </div>
            <div>
              <label
                htmlFor="need"
                className="block text-sm font-medium text-gray-300"
              >
                What do you need?
              </label>
              <input
                id="need"
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="mt-1 block w-full rounded-md bg-[#2c2c2c] border-[#3a3a3a] text-white shadow-sm focus:border-[#f5c518] focus:ring focus:ring-[#f5c518] focus:ring-opacity-50 py-2 px-4"
                rows={3}
                required
              />
            </div>
            <div>
              <label
                htmlFor="offer"
                className="block text-sm font-medium text-black"
              >x</label>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className=" bg-[#f5c518] text-black font-bold py-2 px-4 rounded hover:bg-[#ffd700] transition-colors duration-300"
              >
                Submit
              </motion.button>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#f5c518]">
            Your Matches
          </h2>
          {matches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matches.map(({ user, score }, index) => (
                <MatchCard
                  key={user.id}
                  user={user}
                  score={score}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-400">
              No matches found yet. Add your skills and needs to see potential
              connections!
            </p>
          )}
        </motion.div>
      </main>
    </div>
  );
}

