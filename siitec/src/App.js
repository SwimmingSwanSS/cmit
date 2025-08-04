import React from "react";
import { Card, CardContent } from "../src/components/card";
import { Button } from "../src/components/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Future-Driven Curriculum",
    description:
      "Blending tech, creativity, and entrepreneurship for real-world impact."
  },
  {
    title: "Smart Labs & AI Studios",
    description:
      "Explore robotics, machine learning, IoT, and AR/VR with cutting-edge tools."
  },
  {
    title: "Global Innovation Network",
    description:
      "Partner with international institutions and industry leaders."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B87333] to-gray-800 text-white font-sans">
      <header className="p-8 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white drop-shadow-md"
        >
          Welcome to SiiTec
        </motion.h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl">
          School of Integrated Innovative Technology — where vision meets action.
        </p>
        <Button className="mt-6 bg-[#B87333] hover:bg-[#a35f2b] text-white px-6 py-2 rounded-full shadow-lg">
          Explore Programs
        </Button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="bg-gray-900/80 border border-copper rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-copper flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> {feature.title}
                </h3>
                <p className="mt-2 text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <footer className="p-6 text-center text-gray-300 text-sm">
        © 2025 SiiTec — School of Integrated Innovative Technology. All rights reserved.
      </footer>
    </div>
  );
}

// tailwind.config.js (add custom color)
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         copper: '#B87333',
//       },
//     },
//   },
// }
